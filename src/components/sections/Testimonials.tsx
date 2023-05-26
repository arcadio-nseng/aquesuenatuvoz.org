import FancyBackground from "@/components/FancyBackground";

export default function Testimonials() {

    return (

        <FancyBackground>

            <h2 className="text-4xl text-center text-white font-bold">Testimonios</h2>

            <div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
                <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                    <p className="text-gray-600 dark:text-white">
            <span className="text-lg font-bold text-indigo-500">
                “
            </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolores hic odit porro quasi ratione.
                        <span className="text-lg font-bold text-indigo-500">
                ”
            </span>
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="#" className="relative block">
                            <img alt="profil" src="/assets/images/person-2.jpeg"
                                 className="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </a>
                        <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                    Jean Miguel
                </span>
                            <span className="flex items-center text-xs dark:text-gray-400">
                    User of Tail-Kit🎤
                </span>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                    <p className="text-gray-600 dark:text-white">
            <span className="text-lg font-bold text-indigo-500">
                “
            </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias molestias natus nesciunt nisi rem vero.
                        <span className="text-lg font-bold text-indigo-500">
                ”
            </span>
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="#" className="relative block">
                            <img alt="profil" src="/assets/images/person-2.jpeg"
                                 className="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </a>
                        <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                    Jean Miguel
                </span>
                            <span className="flex items-center text-xs dark:text-gray-400">
                    User of Tail-Kit🎤
                </span>
                        </div>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
                    <p className="text-gray-600 dark:text-white">
            <span className="text-lg font-bold text-indigo-500">
                “
            </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis commodi culpa magnam, nisi optio.
                        <span className="text-lg font-bold text-indigo-500">
                ”
            </span>
                    </p>
                    <div className="flex items-center mt-4">
                        <a href="#" className="relative block">
                            <img alt="profil" src="/assets/images/person-2.jpeg"
                                 className="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </a>
                        <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                    Jean Miguel
                </span>
                            <span className="flex items-center text-xs dark:text-gray-400">
                    User of Tail-Kit🎤
                </span>
                        </div>
                    </div>
                </div>
            </div>
        </FancyBackground>
    )

}
