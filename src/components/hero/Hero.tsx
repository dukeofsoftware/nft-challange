import LeftSection from "./LeftSection"
import RightSection from "./RightSection"

const Hero = () => {
   
    return (
        <div className="max-w-[1440px] mx-auto px-[120px]">
            <div className=' pt-[57px] flex pb-[122px] pr-7 '>
                <LeftSection/>
                <RightSection/>
            </div>
        </div>
    )
}

export default Hero