import React from 'react'
import Heading from '../ui/typeopgraphy/Heading'
import Paragraph from '../ui/typeopgraphy/Paragraph'
import Image from 'next/image'
import { FaEthereum } from 'react-icons/fa'

const Col3 = () => {
    const data = [
        {
            ticked: true,
            src: "/profile5.png",
            name: "CryptoFunks",
            price: "19,769.39",
            percentage: "+26.52%"

        },
        {
            ticked: false,
            src: "/profile4.png",
            name: "Cryptix",
            price: "2,769.39",
            percentage: "+10.52%"

        },

        {
            ticked: false,
            src: "/profile3.png",
            name: "Frensware",
            price: "9,232.39",
            percentage: "+2.52%"

        },

        {
            ticked: true,
            src: "/profile2.png",
            name: "PunkArt",
            price: "3,769.39",
            percentage: "+1.52%"

        },

        {
            ticked: false,
            src: "/profile1.png",
            name: "Art Crypto",
            price: "10,769.39",
            percentage: "+2.52%"

        },


    ]
    return (
        <div className="pl-[38px] border-l border-[#ECECEC]">
            <Heading classNames='font-integral font-bold leading-6 text-xl'>Top Collections over</Heading>
            <Paragraph classNames='text-lg font-bold text-[#3D00B7] font-dm_sans pb-[23px]'>Last 7 days</Paragraph>
            <div className='flex flex-col divide-y'>
                {data.map((item, index) => (
                    <div key={index} className=' flex items-center justify-between py-[14px] w-full'>
                        <div className='flex  gap-[19px] items-center'>
                            <div className='font-bold font-dm_sans text-2xl'>{index + 1}</div>
                            <div className='w-[60px] h-[60px] rounded-full relative'>
                                <Image src={item.src} alt={item.name} fill className='object-cover' />
                                {item.ticked && <div className='absolute right-0 top-0 translate-x-[4px] -translate-y-[8px]'>
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className='text-white' xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.7479 12.3182L24.9345 10.2115C24.5879 9.8115 24.3079 9.06483 24.3079 8.5315V6.26483C24.3079 4.8515 23.1479 3.6915 21.7345 3.6915H19.4679C18.9479 3.6915 18.1879 3.4115 17.7879 3.06483L15.6812 1.2515C14.7612 0.464832 13.2545 0.464832 12.3212 1.2515L10.2278 3.07817C9.8278 3.4115 9.0678 3.6915 8.5478 3.6915H6.24114C4.8278 3.6915 3.6678 4.8515 3.6678 6.26483V8.54483C3.6678 9.06483 3.3878 9.8115 3.05447 10.2115L1.25447 12.3315C0.481136 13.2515 0.481136 14.7448 1.25447 15.6648L3.05447 17.7848C3.3878 18.1848 3.6678 18.9315 3.6678 19.4515V21.7315C3.6678 23.1448 4.8278 24.3048 6.24114 24.3048H8.5478C9.0678 24.3048 9.8278 24.5848 10.2278 24.9315L12.3345 26.7448C13.2545 27.5315 14.7612 27.5315 15.6945 26.7448L17.8012 24.9315C18.2012 24.5848 18.9479 24.3048 19.4812 24.3048H21.7479C23.1612 24.3048 24.3212 23.1448 24.3212 21.7315V19.4648C24.3212 18.9448 24.6012 18.1848 24.9479 17.7848L26.7612 15.6782C27.5345 14.7582 27.5345 13.2382 26.7479 12.3182ZM19.5479 11.4782L13.1079 17.9182C12.9212 18.1048 12.6679 18.2115 12.4012 18.2115C12.1345 18.2115 11.8812 18.1048 11.6945 17.9182L8.4678 14.6915C8.08114 14.3048 8.08114 13.6648 8.4678 13.2782C8.85447 12.8915 9.49447 12.8915 9.88113 13.2782L12.4012 15.7982L18.1345 10.0648C18.5212 9.67817 19.1612 9.67817 19.5479 10.0648C19.9345 10.4515 19.9345 11.0915 19.5479 11.4782Z" fill="#1E93FF" />
                                    </svg>
                                </div>}
                            </div>
                            <div className='flex flex-col gap-[10px]'> <Paragraph classNames='text-primaryBlack font-medium font-dm_sans'>{item.name}</Paragraph>
                                <div className='flex items-center gap-[6px]'>
                                    <FaEthereum className='text-[#000000] w-3 h-6' />
                                    <Paragraph classNames='text-sm text-[#636363] font-poppins font-semibold'>
                                        {item.price}
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                        <Paragraph classNames='font-poppins text-[#14C8B0] font-semibold tracking-tight	  text-right text-xl'>
                            {item.percentage}
                        </Paragraph>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Col3