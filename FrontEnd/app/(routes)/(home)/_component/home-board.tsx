"use client"
import { LucideAArrowUp, LucideAirplay, LucideCuboid, LucideNetwork } from "lucide-react";
import CardBoard from "../../../_components/card-board";

import BarChart from "@/app/_components/bar-chart";
import SpendingCard from "@/app/_components/spending-card";
import CardContentStyle from "@/app/_components/cad-content";
import { GET } from "@/app/api/dashboard/routes";
import { useQuery } from "@tanstack/react-query";
import StackedAreaChart from "@/app/_components/stacked-area-chart";


import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select"
import { useEffect, useState } from "react";

import { useUser } from '../../../contexts/user-context';
const HomeBoard = () => {
  const {isLoading,user} = useUser()
  const [filterUser,setFilterUser] = useState('')

  const hanldeFilter=(value: string)=>{
    setFilterUser(value)
  }

  const {data,isPending,isError,error} = useQuery({
    queryKey:['invoicesboard',filterUser],
    queryFn:() => GET(filterUser),
  })



  if (isPending || isLoading) {
    return <div className="flex items-center justify-center mt-5">Loading...</div>
  }

  if (isError) {
    return <div className="flex items-center justify-center">Error: {error.message}</div>
  }


    return (  
      <>
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        <Select  onValueChange={hanldeFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a user" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Users</SelectLabel>
             <SelectItem  value=" ">Todos</SelectItem>
             {user.map(user =>(
               <SelectItem key={user.props.id} value={user.props.id}>{user.props.id}</SelectItem>
             ))}
      
          </SelectGroup>
        </SelectContent>
        </Select>
        </section>
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          <CardBoard 
          amount={`${data.electricPowerConsumption.toFixed(2)} kwh`}
          icon={LucideAirplay}
          description="Consumo de Energia Elétrica"
          label="Consumo de energia eletrica"
          />

         <CardBoard 
          amount={`${data.compensatedEnergy.toFixed(2)} kwh`}
          icon={LucideAirplay}
          description="Energia Compensada"
          label="Energia Compensada"
          />

         <CardBoard 
          amount={`R$ ${data.totalValueWithoutGD.toFixed(2)} `}
          icon={LucideAirplay}
          description="Valor Total sem GD"
          label="Valor Total sem GD"
          />
         <CardBoard 
          amount={`R$ ${data.economiaGD.toFixed(2)} `}
          icon={LucideAirplay}
          description="Economia GD"
          label="Economia GD"
          />
      
        
      </section>
      
      
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContentStyle className="justfy-between">
          <p className="p-4 font-semibold">Overview KWH</p>
          <BarChart energias={data.invoicesEnergia}/>
        </CardContentStyle>

        <CardContentStyle className="flex justfy-between gap-4">
          <p className="p-4 font-semibold">Spending  Recents KWH</p>
          {data.invoiceUsers.map(user =>(
             <SpendingCard 
                key={user.clientNumber}
                name={user.clientNumber}
                numberClient={user.clientNumber}
                numberInstalation={user.instaltionNumber}
                spendingAmount={`${user.totalEnergy.toFixed(2)} kwh`} 
             />
          ))}
         

        </CardContentStyle>


      </section>


      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContentStyle className="justfy-between">
          <p className="p-4 font-semibold">Overview Price </p>
          <StackedAreaChart monetaryValues={data.monetaryValues}/>
        </CardContentStyle>

        <CardContentStyle className="flex justfy-between gap-4">
          <p className="p-4 font-semibold">Recent Expenses</p>
          {data.invoiceUsers.map(user =>(
             <SpendingCard 
                key={user.clientNumber}
                name={user.clientNumber}
                numberClient={user.clientNumber}
                numberInstalation={user.instaltionNumber}
                spendingAmount={`R$ ${user.totalPrice.toFixed(2)}`} 
             />
          ))}
         

        </CardContentStyle>


      </section>
      </>
      
    );
}
 
export default HomeBoard;