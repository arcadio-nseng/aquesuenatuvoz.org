import PodcastIllustration from '../../../public/assets/images/podcast-illustration.svg';
import Image from "next/image";

export default function Info() {

    return (

        <div className="container mx-auto relative my-16 p-6 md:p-12 dark:bg-gray-800 text-white" id='podcast'>
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
                <div className="lg:col-start-2 md:pl-20">
                    <h4 className="text-2xl font-extrabold leading-8 tracking-tight dark:text-white sm:leading-9">
                        Acerca del Podcast
                    </h4>
                    <ul className="mt-10">
                        <li>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 text-white bg-surface rounded-md">
                                        <svg width="20" height="20" fill="currentColor" className="w-6 h-6"
                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-bold leading-6 dark:text-white">
                                        Lorem ipsum dolor.
                                    </h5>
                                    <p className="mt-2 text-base leading-6 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolor eum, hic labore molestiae placeat sed?
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 text-white bg-surface rounded-md">
                                        <svg width="20" height="20" fill="currentColor" className="w-6 h-6"
                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-bold leading-6 dark:text-white">
                                        Lorem ipsum dolor.
                                    </h5>
                                    <p className="mt-2 text-base leading-6 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque dolorum quod!
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="mt-10">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 text-white bg-surface rounded-md">
                                        <svg width="20" height="20" fill="currentColor" className="w-6 h-6"
                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h5 className="text-lg font-bold leading-6 dark:text-white">
                                        Lorem ipsum dolor sit amet.
                                    </h5>
                                    <p className="mt-2 text-base leading-6 dark:text-gray-300">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quae vel voluptatum!
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="relative p-12 md:p-32 bg-white mt-10 -mx-4 md:-mx-12 lg:mt-0 lg:col-start-1 fancy-border-radius">
                    <Image src={PodcastIllustration} alt="illustration"
                         className="relative w-full mx-auto"/>
                </div>
            </div>
        </div>

    )

}
