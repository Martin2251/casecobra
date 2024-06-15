import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string
    dark?: boolean
}

const Phone  =({className}:PhoneProps) => {
return(
    <div className={cn("relative pointer-events-none z-50 overflow-hidden", className)}></div>
)

}

export default Phone