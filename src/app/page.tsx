import Image from 'next/image'
import Banner from '../../public/assets/images/main-2.png'
import Logo70 from '../../public/assets/icons/ms-icon-70x70.png'
import NavBar from "@/components/layout/NavBar";
import Testimonials from "@/components/sections/Testimonials";
import Features from "@/components/sections/Features";
import Story from "@/components/sections/Story";
import Introduction from "@/components/sections/Introduction";
import Info from "@/components/sections/Info";
import FancyBackground from "@/components/FancyBackground";
import UnderConstruction from "@/components/UnderConstruction";

export const metadata = {
    title: 'A Qué Suena tu Voz',
    description: 'Sitio web oficial de A Qué Suena tu Voz', /*todo: set description*/
    openGraph: {
        title: 'A Qué Suena tu Voz',
        description: 'Sitio web oficial de A Qué Suena tu Voz',
        url: `${process.env.PUBLIC_URL || process.env.VERCEL_URL}/`,
    }
}

export default function Home() {
    return (

        <>
            {/*<div className="relative h-screen overflow-hidden bg-indigo-900">*/}
            {/*    <Image src={Banner} className="absolute object-cover w-full h-full" alt={''}/>*/}
            {/*    <div className="absolute inset-0 bg-black opacity-25">*/}
            {/*    </div>*/}
            {/*    /!*<NavBar/>*!/*/}

            {/*    <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">*/}
            {/*        <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">*/}
            {/*            <span className="font-bold text-yellow-400 uppercase">A qué suena tu voz</span>*/}
            {/*            <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">*/}
            {/*                Lorem ipsum dolor sit amet, consectetur.*/}
            {/*            </h1>*/}
            {/*            <a href="#"*/}
            {/*               className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">*/}
            {/*                Descubre cómo*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<Features/>*/}

            {/*<FancyBackground>*/}
            {/*    <Info/>*/}
            {/*</FancyBackground>*/}

            {/*<Story/>*/}

            {/*<Introduction/>*/}


            {/*<Testimonials/>*/}

            {/* @ts-expect-error Async Server Component */}
            <UnderConstruction/>
        </>


    )
}
