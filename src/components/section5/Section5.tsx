import React from "react"
import Image from "next/image"

import { Button } from "../ui/button/Button"
import Heading from "../ui/typeopgraphy/Heading"
import Paragraph from "../ui/typeopgraphy/Paragraph"

const Section5 = () => {
  return (
    <div className="grid grid-cols-2 py-[110px] max-w-[1440px] mx-auto px-[120px]">
      <div className="grid grid-cols-2 gap-[64px]">
        <div className="flex flex-col items-end gap-[50px]">
          <div className="relative w-[300px] h-[300px]">
            <Image
              src={"/section3-image2.png"}
              alt="placeholder image"
              fill
              className="object-cover"
            />
            <Image
              src={"/profile1.png"}
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[70px] w-[70px] rounded-full border-2 border-white  z-40 object-cover"
              alt="profile photo"
              width={70}
              height={70}
            />
          </div>
          <div className="w-[194px] h-[254px] relative">
            <Image src={"/section3-image3.png"} alt="placeholder image" fill />

            <Image
              src={"/profile22.png"}
              className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2  rounded-full border-2 border-white z-40 object-cover"
              alt="profile photo"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="relative w-[240px] h-[265px]">
            <div className="w-[194px] h-[254px] relative">
              <Image src={"/unsplash3.png"} alt="placeholder image" fill />

              <Image
                src={"/profile22.png"}
                className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-[70px] w-[70px] rounded-full border-2 border-white z-40 object-cover"
                alt="profile photo"
                width={70}
                height={70}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <Heading classNames="text-[2rem] font-bold font-integral pb-[40px]">
            Create and <br />
            sell your NFTs
          </Heading>
          <Paragraph classNames="font-dm_sans text-lg text-[#636363] pb-[52px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </Paragraph>
          <Button>Sign Up Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Section5
