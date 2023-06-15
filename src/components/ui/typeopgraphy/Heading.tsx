"use client"

import { FC } from "react"

import { cn } from "@/lib/utils"

interface HeadingProps {
  children: React.ReactNode
  classNames?: string
}

const Heading: FC<HeadingProps> = ({ children, classNames }) => {
  return (
    <h2
      className={cn("text-primaryBlack font-bold font-integral ", classNames)}
    >
      {children}
    </h2>
  )
}

export default Heading
