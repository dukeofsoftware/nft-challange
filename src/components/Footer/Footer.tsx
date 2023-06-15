import React from "react"
import Link from "next/link"

import { Button } from "../ui/button/Button"
import Heading from "../ui/typeopgraphy/Heading"
import Paragraph from "../ui/typeopgraphy/Paragraph"

const Footer = () => {
  const footerMarketPlace = [
    "All NFTs",
    "New",
    "Art",
    "Sports",
    "Utility",
    "Music",
    "Domain Name",
  ]
  const myAccount = ["Profile", "Favorite", "My Collections", "Settings"]
  return (
    <footer className=" pt-[79px] flex  gap-[92px] font-dm_sans pb-[70px] max-w-[1440px] mx-auto px-[120px]">
      <div className="flex flex-col gap-8 basis-5/12">
        <Heading classNames="font-bold text-[1.5rem] font-integral">
          NFTERS
        </Heading>
        <Paragraph classNames="text-[14px] leading-[24px] font-normal	font-averta">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </Paragraph>
      </div>
      <div className="basis-2/12">
        <h3 className="text-primaryBlack font-dm_sans font-bold pb-[24px]">
          Market Place
        </h3>
        <ul className="flex flex-col gap-4">
          {footerMarketPlace.map((item, index) => (
            <li key={index} className="text-[14px] leading-[16px] font-normal	">
              <Link href="/" className="text-[#3D3D3D] hover:text-primaryBlack">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-2/12">
        <h3 className="text-primaryBlack font-dm_sans font-bold pb-[24px] ">
          My Account
        </h3>
        <ul className="flex flex-col gap-4">
          {myAccount.map((item, index) => (
            <li key={index} className="text-[14px] leading-[16px] font-normal	">
              <Link href="/" className="text-[#3D3D3D] hover:text-primaryBlack">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-5/12 flex flex-col gap-6 w-[380px]">
        <h3 className="text-primaryBlack font-dm_sans font-bold ">
          Stay In The Loop
        </h3>
        <Paragraph classNames="text-[14px] leading-[24px] font-normal	">
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks for navigating NFTs.
        </Paragraph>
        <div className="border-2 rounded-full w-full pl-4 pr-1 py-1  text-sm flex  font-dm_sans ">
          <input
            type="email"
            className="text-sm border-none w-auto  p-0  focus:outline-none focus:ring-0 placeholder-[#959595]"
            placeholder="Enter your email adress... "
            name="enter mail"
          />
          <Button
            size={"sm"}
            variant="secondary"
            className="text-sm h-full w-32 px-2 "
          >
            Subscribe Now
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
