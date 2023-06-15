import localFont from 'next/font/local'
import { DM_Sans,Poppins } from 'next/font/google'
export const integralCF = localFont({
    src: './integral/Fontspring-DEMO-integralcf-regular.otf',
    display: 'swap',
    
    variable:"--font-integralcf",
  })
   
export const dm_sans = DM_Sans({
    subsets: ['latin'],

    variable: '--font-dm-sans',
    weight: '500',
    display: 'swap',
})
export const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: '500',
    display: 'swap',
})
export const averta = localFont({
    src:"./averta.ttf",
    variable:"--font-averta",
    display:"swap"
})

