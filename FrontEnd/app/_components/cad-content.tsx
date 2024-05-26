
import { cn } from "../_lib/utils";
 const CardContentStyle =(props: React.HTMLAttributes<HTMLDivElement>)=>{
    return (
    <div
    {...props}
    className={cn(
       "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
       props.className,
    )}
    ></div>
     )
   
}
export default CardContentStyle;