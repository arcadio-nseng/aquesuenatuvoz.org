export default function AddressInfo() {

    return (

        <div className="p-6">
            <h4 className="mb-6 text-3xl font-light text-gray-800 dark:text-white">
                O contáctanos
            </h4>
            <ul className="mt-10">
                <li>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <a href="tel:+240333222111" className="block ml-4"> {/*TODO: set valid phone*/}
                            <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Teléfono
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                +240 333 222 111
                            </p>
                        </a>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <a href="mailto:info@aquesuenatuvoz.org" className="ml-4"> {/*TODO: verify email*/}
                            <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Correo electrónico
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                info@aquesuenatuvoz.org
                            </p>
                        </a>
                    </div>
                </li>
                <li className="mt-10">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <div
                                className="flex items-center justify-center w-12 h-12 text-white bg-primary rounded-md">
                                <svg width="20" height="20" fill="currentColor" className="w-6 h-6"
                                     viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="ml-4">
                            <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                                Dirección
                            </h5>
                            <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                                C. del Triunfo, Malabo, Bioko Norte, Guinea Ecuatorial
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    )

}
