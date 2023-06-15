import Link from "next/link"
import { CiSearch } from "react-icons/ci"

import { Button } from "@/components/ui/button/Button"

const Navbar = () => {
  const navbarItems = ["Marketplace", "Resource", "About"]

  return (
    <div className="py-[1.75rem]  border-b border-[#EFEFEF] max-w-[1440px] mx-auto px-[120px]">
      <div className="h-[50px] flex items-center justify-between w-full ">
        <div className="flex items-center h-full gap-x-[20px]">
          <div className="text-brand text-[1.5rem] font-bold leading-[28.8px] border-r border-[#F4F4F4]	pr-[31px] mr-[15px] ">
            NFTERS
          </div>
          {navbarItems.map((item, index) => (
            <Link
              href="/"
              key={index}
              className="text-primaryBlack font-medium leading-[20.83px] font-dm_sans text-base	"
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="ml-auto gap-x-[16px] flex items-center h-full  justify-end">
          <div className=" relative  text-[#C0C0C0] flex h-[55px] ">
            <input
              className="border-2 border-[#EFEFEF] bg-white  h-full px-7  rounded-full text-sm focus:outline-none "
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 -translate-x-1/2		"
            >
              <CiSearch className="h-[20px] w-[20px] text-[#C0C0C0]" />
            </button>
          </div>
          <Button size={"sm"} className="px-[40px] py-[16px]">
            Upload
          </Button>
          <Button
            size={"sm"}
            className="px-[40px] py-[16px]"
            variant={"outline"}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
