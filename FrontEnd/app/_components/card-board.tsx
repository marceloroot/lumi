
import { cn } from "../_lib/utils";
import { CardProps } from "../types";
import CardContentStyle from "./cad-content";

const CardBoard = (props:CardProps) => {
    return ( 
        <CardContentStyle>
          <section className="flex justify-between gap-2">
            <p>{props.label}</p>
            <props.icon className="h-4 w-4 text-gray-400" />
          </section>
          <section className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">{props.amount}</h2>
            <p className="text-xs text-gray-50">{props.description}</p>
          </section>
        </CardContentStyle>
     );
}
 
export default CardBoard;

