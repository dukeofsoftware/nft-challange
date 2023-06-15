import Section4 from "@/components/Section4/Section4";
import Hero from "@/components/hero/Hero";
import Section2 from "@/components/section-2/Section2";
import Section3 from "@/components/section3/Section3";
import Section5 from "@/components/section5/Section5";
import Section6 from "@/components/section6/Section6";

export default async function Page() {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
      <Section6/>
    </>
  )
}
