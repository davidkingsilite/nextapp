"use client"

import { CustomButtonProps } from "@/type"
import Image from "next/image"

const CustomButton = ({title,btnType, containerStyles, handleClick, rightIcon,textStyles,url,isDisabled}: CustomButtonProps) => {
  return (
    <div> 
    <button
    disabled={false}
    type={ 'button' || btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
     <span className={`flex-1 ${textStyles}`}>
        {title}
     </span>
     {rightIcon && (
         <div className="relative w-4 h-4 ">
           <Image 
               src={rightIcon}
               alt="right icon"
               fill
               className="object-contain ml-3"
               />
        </div>
     )}
    </button>
    
     </div>
  )
}

export default CustomButton
