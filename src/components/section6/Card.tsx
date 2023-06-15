import Image from "next/image"
import { FaEthereum } from "react-icons/fa"

import Heading from "../ui/typeopgraphy/Heading"
import Paragraph from "../ui/typeopgraphy/Paragraph"

interface CardProps {
  src: string
  name: string
}
const Card: React.FC<CardProps> = ({ src, name }) => {
  return (
    <div className="w-[270px]  border border-opacity-50 border-[#F2F2F280] bg-[#FFFFFF] rounded-[13px] shadow-sm relative h-fit-content  height-[375px]">
      <div className="relative w-full h-[222px] rounded-[20px]">
        <Image
          src={src}
          fill
          alt={name}
          className=" p-[10.97px] object-cover  rounded-[20px]"
        />
        <Image
          src={"/profile.png"}
          alt="profile"
          width={30}
          height={30}
          className=" absolute  left-6 bottom-0  border-2 rounded-full border-[#FFFFFF] "
        />
        <Image
          src={"/profile.png"}
          alt="profile"
          width={30}
          height={30}
          className=" absolute  left-[43px] bottom-0  border-2 rounded-full border-[#FFFFFF] "
        />
        <Image
          src={"/profile.png"}
          alt="profile"
          width={30}
          height={30}
          className=" absolute  left-[62px] bottom-0  border-2 rounded-full border-[#FFFFFF] "
        />
        <Image
          src={"/profile.png"}
          alt="profile"
          width={30}
          height={30}
          className=" absolute  left-[81px] bottom-0  border-2 rounded-full border-[#FFFFFF] "
        />
      </div>
      <div className="px-[23px] pb-[10px] pt-[16px] ">
        <Heading classNames="text-[19.75px] font-bold font-dm_sans pb-[11px]">
          {name}
        </Heading>
        <div className="flex flex-col justify-between pb-[11px]">
          <div>
            <div className="flex items-center justify-between pb-[16px]">
              <div className="flex text-[#00AC4F] font-dm_sans items-center">
                <FaEthereum className="text-inherit mr-[5.5px]" />
                0.25 ETH
              </div>
              <Paragraph classNames="font-medium  text-[13px] font-dm_sans">
                1 of 321
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col justify-end h-full">
            <div className="h-[1px] w-full bg-[#F4F4F4] mb-[10px]" />
            <div className="flex items-center justify-between text-[#5539A8]">
              <p className="text-inherit px-[10px] bg-[#F5F5F5] rounded-full h-full  py-[5px] text-[10px]   font-dm_sans">
                3h 50m 2s left
              </p>
              <p className="font-medium font-dm_sans text-[15.3px]">
                Place a bid
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
