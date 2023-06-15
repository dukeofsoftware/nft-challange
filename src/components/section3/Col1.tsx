import Image from "next/image"
import { FaEthereum } from "react-icons/fa"

import Heading from "../ui/typeopgraphy/Heading"
import Paragraph from "../ui/typeopgraphy/Paragraph"

const Col1 = () => {
  return (
    <div className="flex flex-col ">
      <div className=" pb-8 relative">
        <Image
          src="/section-3-image.png"
          alt="image"
          width={400}
          height={424}
          className="object-cover"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex ">
          <Image
            width={48}
            height={48}
            src="/profile.png"
            alt="profile photo"
            className="mr-[10px]"
          />
          <div>
            <Heading classNames="font-dm_sans font-bold text-xl">
              The Futr Abstr
            </Heading>
            <Paragraph classNames="text-sm">10 in the stock</Paragraph>
          </div>
        </div>
        <div className="pb-[15px]">
          <Paragraph classNames="pb-[7px] text-xs text-[#3A3A3A] font-dm_sans">
            Highest Bid
          </Paragraph>
          <div className="flex">
            <FaEthereum className="w-3 h-6 text-[#3A3A3A] mr-[10px] " />
            <Paragraph classNames="text-[#3A3A3A] font-bold font-dm-sans">
              0.25 ETH
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Col1
