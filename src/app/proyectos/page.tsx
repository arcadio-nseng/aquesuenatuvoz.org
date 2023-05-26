import IconLarge from '../../../public/assets/images/logox2000.png';
import Image from "next/image";
import Projects from "@/components/sections/Projects";
import ProjectsIllustration from "../../../public/assets/images/projects.svg";

export const metadata = {
    title: 'Proyectos | A Qué Suena tu Voz',
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
                            <span className="text-5xl sm:text-7xl">Proyectos</span>
                        </h1>
                        <p className="text-sm text-gray-700 sm:text-base dark:text-white m-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus deserunt,
                            dignissimos dolorem eius harum incidunt, minima nemo praesentium provident, sunt temporibus?
                        </p>

                    </div>
                    <div className="relative hidden sm:block sm:w-1/3 lg:w-2/5">
                        <Image src={ProjectsIllustration} alt={'A qué suena tu voz'} className="h-full object-contain object-center"/>
                    </div>
                </div>
            </div>

            <Projects/>

        </>
    )

}
