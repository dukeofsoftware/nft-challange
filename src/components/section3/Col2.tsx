import Image from "next/image"
import { FaEthereum } from "react-icons/fa"

import { Button } from "../ui/button/Button"
import Heading from "../ui/typeopgraphy/Heading"
import Paragraph from "../ui/typeopgraphy/Paragraph"

const Col2 = () => {
  return (
    <div className="flex flex-col gap-[35px]">
      <div className="flex items-center gap-5">
        <div className="basis-1/2 relative">
          <Image
            src="/section-3image.png "
            width={147}
            height={147}
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="basis-1/2">
          <Heading classNames="pb-2">The Futr Abstr</Heading>
          <div className="flex gap-2 items-center pb-[15px]">
            <Image
              width={34}
              height={34}
              src="/profile.png"
              alt="profile photo"
            />
            <div className="p-2 rounded-[6px] flex gap-[5px] items-center justify-center text-[#00AC4F] border border-[#00AC4F]">
              <FaEthereum className="w-2 h-3 text-inherit" />
              <Paragraph classNames="text-inherit text-xs font-bold">
                0.25 ETH
              </Paragraph>
            </div>
            <Paragraph>1 of 8</Paragraph>
          </div>
          <Button size={"sm"}>Place a bid</Button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="basis-1/2 relative">
          <Image
            src="/section3-image2.png "
            width={147}
            height={147}
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="basis-1/2">
          <Heading classNames="pb-2">The Futr Abstr</Heading>
          <div className="flex gap-2 items-center pb-[15px]">
            <Image
              width={34}
              height={34}
              src="/profile.png"
              alt="profile photo"
            />
            <div className="p-2 rounded-[6px] flex gap-[5px] items-center justify-center text-[#00AC4F] border border-[#00AC4F]">
              <FaEthereum className="w-2 h-3 text-inherit" />
              <Paragraph classNames="text-inherit text-xs font-bold">
                0.25 ETH
              </Paragraph>
            </div>
            <Paragraph>1 of 8</Paragraph>
          </div>
          <Button variant={"outline"} size={"sm"}>
            Place a bid
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="basis-1/2 relative">
          <Image
            src="/section3-image3.png "
            width={147}
            height={147}
            alt="image"
            className="object-cover"
          />
        </div>
        <div className="basis-1/2">
          <Heading classNames="pb-2">The Futr Abstr</Heading>
          <div className="flex gap-2 items-center pb-[15px]">
            <Image
              width={34}
              height={34}
              src="/profile.png"
              alt="profile photo"
            />
            <div className="p-2 rounded-[6px] flex gap-[5px] items-center justify-center text-[#00AC4F] border border-[#00AC4F]">
              <FaEthereum className="w-2 h-3 text-inherit" />
              <Paragraph classNames="text-inherit text-xs font-bold">
                0.25 ETH
              </Paragraph>
            </div>
            <Paragraph>1 of 8</Paragraph>
          </div>
          <Button variant={"outline"} size={"sm"}>
            Place a bid
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Col2
