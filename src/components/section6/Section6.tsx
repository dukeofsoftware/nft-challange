import React from "react"

import Heading from "../ui/typeopgraphy/Heading"
import Buttons from "./Buttons"
import Card from "./Card"
import { Button } from "../ui/button/Button"

const Section6 = () => {
  const cards = [
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "THİS NFT",
    },
    {
      src: "/section3-image3.png",
      name: "NameCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section-3-image.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image2.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
    {
      src: "/section3-image3.png",
      name: "ArtCrpyto",
    },
  ]
  return (
    <div className="bg-[#FFE0D9] bg-opacity-20 backdrop-filter-[25px] py-[64px]">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <Heading classNames="font-bold font-integral text-[2.1rem] uppercase pb-[36px]">
          Dıscover MORE NFTS
        </Heading>
        <Buttons />
        <div className="justify-between flex flex-wrap gap-y-[40px]">
          {cards.map((card) => (
            <Card name={card.name} src={card.src} />
          ))}
        </div>
        <div className="w-full justify-center">
            <Button variant={"outline"}>More NFTs</Button>
        </div>
      </div>
    </div>
  )
}

export default Section6
