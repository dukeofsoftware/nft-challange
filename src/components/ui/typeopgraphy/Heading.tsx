
"use client"
import { cn } from '@/lib/utils'
import { FC } from 'react'

interface HeadingProps {
    children: React.ReactNode
    classNames?: string
}

const Heading:FC<HeadingProps> = ({children,classNames}) => {
  return (
     <h2 className={cn("text-primaryBlack font-bold font-integral ",classNames)}>
        {children}
      </h2>)

}

export default Heading