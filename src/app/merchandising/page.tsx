import Image from "next/image";
import IconLarge from '../../../public/assets/images/logox2000.png';
import Merchant1 from '../../../public/assets/images/merchand-1.jpg';
import Merchant2 from '../../../public/assets/images/merchand-2.jpg';
import Merchant3 from '../../../public/assets/images/merchand-3.jpg';

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
                    <div className="relative flex flex-col sm:w-2/3 lg:w-2/5">
                        <span className="w-20 h-2 mb-12 bg-surface dark:bg-white"></span>
                        <h1 className="flex flex-col text-6xl font-black leading-none text-surface uppercase font-bebas-neue sm:text-8xl dark:text-white">
                            <span className="text-5xl sm:text-7xl">Merchandising</span>
                        </h1>
                        <p className="text-sm text-gray-700 sm:text-base dark:text-white m-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus deserunt,
                            dignissimos dolorem eius harum incidunt, minima nemo praesentium provident, sunt temporibus?
                        </p>

                    </div>
                    <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
                        <Image src={IconLarge} className="max-w-xs m-auto md:max-w-sm" alt={'A qué suena tu voz'}/>
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap items-center justify-center">
                <div
                    className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-yellow-500 rounded-lg shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                              fill="#f3c06b">
                        </rect>
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)"
                              fill="#f3c06b">
                        </rect>
                    </svg>
                    <div className="relative flex items-center justify-center px-10 pt-10">
                        <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24">
                        </div>
                        <Image className="relative w-40" src={Merchant1} alt="shopping item" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}/>
                    </div>
                    <div className="relative px-6 pb-6 mt-6 text-white">
                    <span className="block -mb-1 opacity-75">
                        Indoor
                    </span>
                        <div className="flex justify-between">
                        <span className="block text-xl font-semibold">
                            Peace Lily
                        </span>
                            <span
                                className="flex items-center px-3 py-2 text-xs font-bold leading-none text-yellow-500 bg-white rounded-full">
                            $36.00
                        </span>
                        </div>
                    </div>
                </div>
                <div
                    className="relative flex-shrink-0 max-w-xs mx-2 mb-6 overflow-hidden bg-blue-500 rounded-lg shadow-lg sm:mb-0">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                              fill="#6da3fb">
                        </rect>
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)"
                              fill="#6da3fb">
                        </rect>
                    </svg>
                    <div className="relative flex items-center justify-center px-10 pt-10">
                        <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24">
                        </div>
                        <Image className="relative w-40" src={Merchant2} alt="shopping" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}/>
                    </div>
                    <div className="relative px-6 pb-6 mt-6 text-white">
                    <span className="block -mb-1 opacity-75">
                        Outdoor
                    </span>
                        <div className="flex justify-between">
                        <span className="block text-xl font-semibold">
                            Monstera
                        </span>
                            <span
                                className="flex items-center px-3 py-2 text-xs font-bold leading-none text-blue-500 bg-white rounded-full">
                            $45.00
                        </span>
                        </div>
                    </div>
                </div>
                <div
                    className="relative flex-shrink-0 max-w-xs mx-2 -mb-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none">
                        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)"
                              fill="#a17cf3">
                        </rect>
                        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)"
                              fill="#a17cf3">
                        </rect>
                    </svg>
                    <div className="relative flex items-center justify-center px-10 pt-10">
                        <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24">
                        </div>
                        <Image className="relative w-40" src={Merchant3} alt="shopping" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}/>
                    </div>
                    <div className="relative px-6 pb-6 mt-6 text-white">
                    <span className="block -mb-1 opacity-75">
                        Outdoor
                    </span>
                        <div className="flex justify-between">
                        <span className="block text-xl font-semibold">
                            Oak Tree
                        </span>
                            <span
                                className="flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
                            $68.50
                        </span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
