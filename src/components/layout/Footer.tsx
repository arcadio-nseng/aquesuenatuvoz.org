import SubscriptionForm from "@/components/SubscriptionForm";
import {getApiCredentials} from "@/lib/sendPulse";

export default async function Footer() {

    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const copyrightYear = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

    const apiCredentials = await getApiCredentials();

    return (

        <footer className="bg-white px-6 md:px-12 dark:bg-gray-800 pt-4 pb-8 xl:pt-8 dark:text-gray-300">
            <div className="container mx-auto text-gray-400">
                <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
                    <li className="w-1/2 md:w-1/3 lg:w-1/3">
                        <div>
                            <h2 className="text-gray-500 dark:text-gray-200 text-md font-bold uppercase mb-4">
                                Enlaces
                            </h2>
                            <ul>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="/quienes-somos">Acerca de</a> {/*TODO: create page /quienes-somos*/}
                                </li>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="/proyectos">Proyectos</a> {/*TODO: create page /proyectos*/}
                                </li>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="/#">Podcast</a> {/*TODO: Link to podcast service*/}
                                </li>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="#">Youtube</a> {/*TODO: Link to YouTube channel*/}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="w-1/2 md:w-1/3 lg:w-1/3">
                        <div>
                            <h2 className="text-gray-500 dark:text-gray-200 text-md font-bold uppercase mb-4">
                                Redes Sociales
                            </h2>
                            <ul>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="#">Instagram</a> {/*TODO: Link to Instagram*/}
                                </li>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="#">Facebook</a> {/*TODO: Link to Facebook*/}
                                </li>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="#">Twitter</a> {/*TODO: Link to Twitter*/}
                                </li>
                                <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                                    <a href="#">LinkedIn</a> {/*TODO: Link to LinkedIn*/}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="w-full md:w-1/3 lg:w-1/3">
                        <div>
                            <h2 className="text-gray-500 dark:text-gray-200 text-md font-bold uppercase mb-4">
                                Newsletter
                            </h2>
                            <p className="pt-4 border-t border-gray-200 font-light">
                                Suscríbete para recibir actualizaciones sobre nuestras publicaciones y proyectos
                            </p>
                            <div className="text-center pt-4 sm:pt-12 font-light flex items-center justify-center">
                                <SubscriptionForm apiCredentials={apiCredentials}/>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            <address className="text-center pt-10 sm:pt-12 font-light text-sm">
                &copy; {copyrightYear} A qué Suena tu Voz · Todos los derechos reservados · developed by <a href="https://tecnobots.gq">TECNOBOTS<sup>&#174;</sup></a>
            </address>
        </footer>

    )

}
