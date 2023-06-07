import {FaCheck} from "react-icons/fa";

export default function Introduction() {

    return (

        <div
            className="relative container px-6 mx-auto md:px-12 py-26 mb-24">
            <div className="relative">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                        <p className="text-base font-semibold leading-6 text-surface uppercase">
                            Salón Multiusos
                        </p>
                        <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
                            Aprovecha nuestro espacio para desarrollar tu negocio
                        </h4>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti id iusto omnis
                            perspiciatis provident quas! Aut consequatur, facere in molestiae nihil, nobis,
                            perspiciatis provident quo recusandae suscipit ullam ut vero.
                        </p>
                        <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                            <span
                                className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 text-xs bg-green-100 rounded-full">
                                <FaCheck/>
                            </span>
                                    <span className="ml-4 text-base font-medium leading-6 text-gray-500">
                                Espacio de co-working
                            </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                            <span
                                className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 text-xs bg-green-100 rounded-full ">
                                <FaCheck/>
                            </span>
                                    <span
                                        className="ml-4 text-base font-medium leading-6 text-gray-500">
                                Internet disponible
                            </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                            <span
                                className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 text-xs bg-green-100 rounded-full">
                                <FaCheck/>
                            </span>
                                    <span
                                        className="ml-4 text-base font-medium leading-6 text-gray-500">
                                Colabora con otros emprendedores
                            </span>
                                </div>
                            </li>
                            <li className="mt-6 lg:mt-0">
                                <div className="flex">
                            <span
                                className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 text-xs bg-green-100 rounded-full">
                                <FaCheck/>
                            </span>
                                    <span className="ml-4 text-base font-medium leading-6 text-gray-500">Recibe asesoramiento</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                        <div className="relative space-y-4">
                            <div className="flex items-end justify-center space-x-4 lg:justify-start">
                                <img className="w-32 rounded-lg shadow-lg md:w-56" width="200"
                                     src="/assets/images/object-8.jpg" alt="1"/>
                                <img className="w-40 rounded-lg shadow-lg md:w-64" width="260"
                                     src="/assets/images/landscape-4.jpg" alt="2"/>
                            </div>
                            <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                                <img className="w-24 rounded-lg shadow-lg md:w-40" width="170"
                                     src="/assets/images/landscape-3.jpg" alt="3"/>
                                <img className="w-32 rounded-lg shadow-lg md:w-56" width="200"
                                     src="/assets/images/object-9.jpg" alt="4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
