import {FaEnvelope, FaMapSigns, FaPhone} from "react-icons/fa";

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
                                <FaPhone/>
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
                                <FaEnvelope/>
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
                                <FaMapSigns/>
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
