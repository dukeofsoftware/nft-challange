import "@/styles/globals.css"
import {poppins,averta,dm_sans,integralCF}  from "@/fonts"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Footer/Footer"


export const metadata = {
  title: "  Next start template",
  description: "Next.js 13 start template",
}

export default async function Root({
  children}: {
  children: React.ReactNode
}) {

  
  return (
    <html
    lang="tr"
    className="bg-"
    >
      <body
        className={
          `${
            process.env.DEVELOPMENT === "true" && "debug-screens"
          } min-h-screen h-full w-full  mx-auto
          ${poppins.variable} ${averta.variable} ${dm_sans.variable} ${integralCF.variable}
          ` 
        }
      >
          <Navbar/>
         {children}
          <Footer/>
      </body>
    </html>
  )
}
