export default function Footer() {

    const startYear = 2023;
    const currentYear = new Date().getFullYear();
    const copyrightYear = startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

    return (

        <footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8 dark:text-gray-300">
            <div className="container px-6 mx-auto text-gray-400  sm:px-6 md:px-12">
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
                    <li className="w-1/2 md:w-1/3 lg:w-1/3">
                        <div>
                            <h2 className="text-gray-500 dark:text-gray-200 text-md font-bold uppercase mb-4">
                                Newsletter
                            </h2>
                            <p className="pt-4 border-t border-gray-200 font-light">
                                Suscríbete para recibir actualizaciones sobre nuestras publicaciones y proyectos
                            </p>
                            <div className="text-center pt-4 sm:pt-12 font-light flex items-center justify-center">
                                <form
                                    className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                                    <div className=" relative ">
                                        <input type="text" id="&quot;form-subscribe-Subscribe"
                                               className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                               placeholder="Email"/>
                                    </div>
                                    <button
                                        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                        type="submit">
                                        Suscribirse
                                    </button>
                                </form>
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
