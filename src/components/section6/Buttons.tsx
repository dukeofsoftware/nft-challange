"use client"

import React, { useState } from "react"

import { Button } from "../ui/button/Button"
import Paragraph from "../ui/typeopgraphy/Paragraph"

const Buttons = () => {
  const [categories, setCategories] = useState([
    {
      title: "All Categories",
      active: false,
    },
    {
      title: "Art",
      active: false,
    },
    {
      title: "Celebrities",
      active: false,
    },
    {
      title: "Gaming",
      active: false,
    },
    {
      title: "Sport",
      active: false,
    },
    {
      title: "Music",
      active: false,
    },
    {
      title: "Crypto",
      active: false,
    },
  ])
  const handleClick = (index: number) => {
    const newCategories = [...categories]
    newCategories.forEach((item, i) => {
      if (i === index) {
        item.active = true
      } else {
        item.active = false
      }
    })
    setCategories(newCategories)
  }
  return (
    <div className="flex items-center justify-between pb-[40px]">
      <div className="flex flex-wrap gap-3 items-center">
        {categories.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "gray"}
            className="px-[20px] py-[10px] duration-200 text-[14px] font-medium font-dm_sans"
            onClick={() => handleClick(index)}
          >
            {item.title}
          </Button>
        ))}
      </div>
      <Button className="px-[20px] py-[10px]" variant={"gray"} svg={true}>
        <svg
          width="24"
          height="16"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[10px]"
        >
          <path
            d="M9.33333 16H14.6667V13.3333H9.33333V16ZM0 0V2.66667H24V0H0ZM4 9.33333H20V6.66667H4V9.33333Z"
            fill="#371C87"
          />
        </svg>

        <Paragraph classNames="text-[#371C87] font-medium font-dm_sans text-[14px]">
          All Filters
        </Paragraph>
      </Button>
    </div>
  )
}

export default Buttons
