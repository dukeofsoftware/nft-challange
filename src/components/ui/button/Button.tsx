"use client"

import * as React from "react"
//@ts-ignore
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { IconType } from "react-icons"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background font-dm_sans",
  {
    variants: {
      variant: {
        default: "bg-brand text-white hover:bg-brand/90",
        secondary: "bg-[#2639ED] text-white hover:bg-[#2639ED/90]",
        outline:
          "border-2 border-brand text-brand bg-white hover:bg-brand/90 hover:text-white",
        gray: "bg-[#DCDCDC33] bg-opacity-20 text-primaryBlack ",
      },
      size: {
        default: " py-[18px] px-[40px] text-[20px]",
        sm: " py-[12px] px-[20px] text-sm   ",
        xs: "py-[10px] px-[19px] text-[11px]",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: IconType
  svg?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, icon: Icon, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    if (Icon)
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          <Icon className="mr-[10px] text-inherit" width={24} height={16} />
          {props.children}
        </Comp>
      )
    if (props.svg)
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {props.children}
        </Comp>
      )

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
