import Image from "next/image";
import BannerImage from "../../../public/assets/images/merchandising.jpg";
import Products from "@/components/sections/Products";

export const metadata = {
    title: 'Merchandising | A Qué Suena tu Voz',
    description: 'Sitio web oficial de A Qué Suena tu Voz', /*todo: set description*/
    openGraph: {
        title: 'Merchandising | A Qué Suena tu Voz',
        description: 'Sitio web oficial de A Qué Suena tu Voz',
        url: `${process.env.PUBLIC_URL || process.env.VERCEL_URL}/merchandising`,
    }
}

export default function MerchandisingPage() {

    return (
        <>
            {/*<NavBar/>*/}
            <div className=" flex items-center overflow-hidden bg-white mt-24">
                <div className="container relative flex px-6 md:px-12 py-16 mx-auto">
                    <div className="relative flex flex-col sm:w-2/3 lg:w-3/5">
                        <span className="w-20 h-2 mb-12 bg-surface"></span>
                        <h1 className="flex flex-col text-6xl font-black leading-none text-surface uppercase font-bebas-neue sm:text-6xl">
                            <span className="text-5xl sm:text-7xl">Merchandising</span>
                        </h1>
                        <p className="text-sm text-gray-700 sm:text-base m-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus deserunt,
                            dignissimos dolorem eius harum incidunt, minima nemo praesentium provident, sunt temporibus?
                        </p>

                    </div>
                    <div className="relative hidden sm:block sm:w-1/3 lg:w-2/5">
                        <Image src={BannerImage} alt={'A qué suena tu voz'} className="h-full max-h-80 object-cover object-top"/>
                    </div>
                </div>
            </div>

            {/* @ts-expect-error Async Server Component */}
            <Products/>

        </>
    )

}
