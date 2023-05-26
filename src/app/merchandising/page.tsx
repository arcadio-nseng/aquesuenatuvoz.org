import Image from "next/image";
import IconLarge from '../../../public/assets/images/logox2000.png';
import Merchant1 from '../../../public/assets/images/merchand-1.jpg';
import Merchant2 from '../../../public/assets/images/merchand-2.jpg';
import Merchant3 from '../../../public/assets/images/merchand-3.jpg';
import BannerImage from "../../../public/assets/images/merchandising.jpg";
import ProductCard from "@/components/ProductCard";

export const metadata = {
    title: 'Merchandising | A Qué Suena tu Voz',
    description: 'Sitio web oficial de A Qué Suena tu Voz', /*todo: set description*/
}

export default function AboutPage() {

    return (
        <>
            {/*<NavBar/>*/}
            <div className=" flex items-center overflow-hidden bg-white dark:bg-gray-800 mt-24">
                <div className="container relative flex px-6 md:px-12 py-16 mx-auto">
                    <div className="relative flex flex-col sm:w-2/3 lg:w-3/5">
                        <span className="w-20 h-2 mb-12 bg-surface dark:bg-white"></span>
                        <h1 className="flex flex-col text-6xl font-black leading-none text-surface uppercase font-bebas-neue sm:text-6xl dark:text-white">
                            <span className="text-5xl sm:text-7xl">Merchandising</span>
                        </h1>
                        <p className="text-sm text-gray-700 sm:text-base dark:text-white m-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus deserunt,
                            dignissimos dolorem eius harum incidunt, minima nemo praesentium provident, sunt temporibus?
                        </p>

                    </div>
                    <div className="relative hidden sm:block sm:w-1/3 lg:w-2/5">
                        <Image src={BannerImage} alt={'A qué suena tu voz'} className="h-full max-h-80 object-cover object-top"/>
                    </div>
                </div>
            </div>


            <section className="container mx-auto px-6 md:px-12 mb-24">
                <div className="title mb-4">
                    <p className="mb-4 text-4xl font-bold text-gray-800">
                        Colabora comprando un artículo
                    </p>
                    <p className="text-2xl font-light text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, minus, vel. Aperiam quis repellendus velit.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>

                </div>
            </section>

        </>
    )

}
