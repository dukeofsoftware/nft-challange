import Image from "next/image"

import { Button } from "../ui/button/Button"
import Heading from "../ui/typeopgraphy/Heading"
import Paragraph from "../ui/typeopgraphy/Paragraph"

const Section4 = () => {
  const itemArray = [1, 2, 3]
  return (
    <div className="py-[60px] bg-[#FFE0D9] bg-opacity-20 backdrop-filter-[25px] ">
      <div className="max-w-[1440px] mx-auto px-[120px]">
        <Heading classNames="text-2xl font-bold font-integral pb-[55px]">
          Collection Featured NFTs
        </Heading>
        <div className="grid grid-cols-3 gap-[30px]">
          {itemArray.map(() => (
            <div className="flex flex-col w-full h-full">
              <div className="grid grid-cols-4  w-full gap-[9px] pb-[30px]">
                <div className="col-span-3 relative w-full h-[270px]">
                  <Image src="/unsplash.png" alt="placeholder image" fill />
                </div>
                <div className="col-span-1 relative  grid grid-rows-3 gap-[8.25px]">
                  <div className="relative w-full row-span-1">
                    <Image src="/section-3-image.png" alt="placeholder " fill />
                  </div>
                  <div className="relative w-full row-span-1">
                    <Image
                      src="/section3-image2.png"
                      alt="placeholder image"
                      fill
                    />
                  </div>
                  <div className="relative w-full row-span-1">
                    <Image
                      src="/section3-image3.png"
                      alt="placeholder image"
                      fill
                    />
                  </div>
                </div>
              </div>
              <Heading classNames="text-xl font-bold font-dm_sans pb-[8px]">
                Amazing Collection
              </Heading>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={"/profile.png"}
                    alt="profile"
                    width={28}
                    height={28}
                    className="object-cover rounded-full pr-[10px]"
                  />
                  <Paragraph classNames="text-sm font-medium font-dm_sans text-[#000000]">
                    by Arkhan
                  </Paragraph>
                </div>
                <Button
                  variant={"outline"}
                  size={"xs"}
                  className="text-[#2639ED] border-[#2639ED]"
                >
                  Total 54 Items
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section4
