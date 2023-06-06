import IconLarge from '../../../public/assets/images/logox2000.png';
import Image from "next/image";
import BannerImage from "../../../public/assets/images/contact.jpg";
import ContactForm from "@/components/ContactForm";
import AddressInfo from "@/components/AddressInfo";
import Contact from "@/components/sections/Contact";

export const metadata = {
    title: 'Contáctanos | A Qué Suena tu Voz',
    description: 'Sitio web oficial de A Qué Suena tu Voz', /*todo: set description*/
    openGraph: {
        title: 'Contáctanos | A Qué Suena tu Voz',
        description: 'C/ del triunfo, Malabo, Bioko Norte, Guinea Ecuatorial. Tel: +240', /* todo: add tell and email*/
        url: `${process.env.PUBLIC_URL || process.env.VERCEL_URL}/contacto`,
    }
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
                            <span className="text-5xl sm:text-7xl">Contáctanos</span>
                        </h1>
                        <p className="text-sm text-gray-700 sm:text-base dark:text-white m-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus deserunt,
                            dignissimos dolorem eius harum incidunt, minima nemo praesentium provident, sunt temporibus?
                        </p>

                    </div>
                    <div className="relative hidden sm:block sm:w-1/3 lg:w-2/5">
                        <Image src={BannerImage} alt={'Contactanos'}
                               className="h-full object-cover object-center fancy-border-radius"/>
                    </div>
                </div>
            </div>

            <section className="container mx-auto mb-24 px-6 md:px-12">

                <div className="grid md:grid-cols-2 gap-8">
                    {/* @ts-expect-error Async Server Component */}
                    <Contact/>
                    <div className="shadow rounded-lg">
                        <AddressInfo/>
                    </div>
                </div>

                <div className="shadow rounded-lg mt-8 p-2">
                    <iframe className="border-0 w-full"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3981.251964317616!2d8.782515514759089!3d3.7552327972679818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNDUnMTguOCJOIDjCsDQ3JzA0LjkiRQ!5e0!3m2!1sen!2s!4v1685132268701!5m2!1sen!2s"
                         height="450" allowFullScreen loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"/>
                </div>


            </section>

        </>
    )

}
