import Image from "next/image";

export default function ProjectCard() {

    return (
        <div className="overflow-hidden mx-auto rounded-lg shadow-lg cursor-pointer h-90 w-full max-w-[320px]">
            <a href="#" className="block w-full h-full">
                <div className="h-40 relative">
                    <Image alt="blog photo" src="/assets/images/blog/1.jpg" fill className="object-cover" />
                </div>
                <div className="w-full p-4 bg-white dark:bg-gray-800">
                    <p className="font-medium text-surface text-md">
                        Emprendimiento
                    </p>
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        Lorem ipsum dolor sit amet.
                    </p>
                    <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolores fuga minus perferendis, perspiciatis placeat?
                    </p>
                    <div className="flex items-center mt-4">

                        <button type="button"
                                className="py-2 px-4  bg-primary hover:bg-surface focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Colaborar
                        </button>

                    </div>
                </div>
            </a>
        </div>
    )

}
