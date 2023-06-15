import { FC } from "react"

import { cn } from "@/lib/utils"

interface ParagraphProps {
  children: React.ReactNode
  classNames?: string
}

const Paragraph: FC<ParagraphProps> = ({ children, classNames }) => {
  return (
    <p className={cn("  font-averta  text-[#565656] ", classNames)}>
      {children}
    </p>
  )
}

export default Paragraph
