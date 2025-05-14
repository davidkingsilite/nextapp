"use client"

import { CustomButtonProps } from "@/type"
import Image from "next/image"
import Link from "next/link"

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
         <div className=" relative w-6 h-6">
           <Image 
               src={rightIcon}
               alt="right icon"
               fill
               className="object-contain"
               />
        </div>
     )}
    </button>
    
     </div>
  )
}

export default CustomButton