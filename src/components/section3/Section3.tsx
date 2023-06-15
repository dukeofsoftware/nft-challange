import Col1 from "./Col1"
import Col2 from "./Col2"
import Col3 from "./Col3"

const Section3 = () => {
  return (
    <div className="grid grid-cols-3 gap-[53px] py-[140px] max-w-[1440px] mx-auto px-[120px]">
      <Col1 />
      <Col2 />
      <Col3 />
    </div>
  )
}

export default Section3
