import { SpendingCardProps } from "../types";

const SpendingCard = (props:SpendingCardProps) => {
    return ( 
        <section className="flex flex-wrap justify-between gap-3">
            <div className="flex justify-between gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
                <img
                  width={200}
                  height={200}
                  src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`}
                  alt="avatar"
                />
                </div>
                <div className="text-sm">
                    <p>Nº Client: {props.numberClient}</p>
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
                        Nº Instalation{props.numberInstalation}
                    </div>
                </div>
            </div>
            <p>{props.spendingAmount}</p>
        </section>
     );
}
 
export default SpendingCard;