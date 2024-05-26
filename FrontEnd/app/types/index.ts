import { LucideIcon } from "lucide-react";

export type CustomLinkProps={
    href:string;
    children:React.ReactNode;
    name:string;
}

export type CardProps ={
    label:string;
    icon: LucideIcon,
    amount:string;
    description:string;
}

export type SpendingCardProps ={
    numberClient:string;
    name:string;
    numberInstalation:string;
    spendingAmount:string;
}


export type Payment = {
    props:{
    name:string;
    email:string;
    lasOrder:string;
    method:string;
}
}
