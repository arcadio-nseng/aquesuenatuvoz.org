export default function Story() {

    return (

        <section className="container p-6 mx-auto bg-white md:p-12 dark:bg-gray-800">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                        <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
                            Colabora en nuestros proyectos
                        </h2>
                        <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec
                            venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent
                            placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                        </p>
                        <div className="w-full md:w-1/3">
                            <button type="button"
                                    className="py-2 px-4  bg-primary hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Explorar proyectos
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <ul className="space-y-12">
                        <li className="flex -mx-4">
                            <div className="px-4">
                                <span
                                    className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-surface rounded-full font-heading bg-surface/50">1</span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-4 text-xl font-semibold dark:text-white">
                                    Responsive Elements
                                </h3>
                                <p className="leading-loose text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iste libero
                                    veritatis.
                                </p>
                            </div>
                        </li>
                        <li className="flex -mx-4">
                            <div className="px-4">
                            <span
                                className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-surface rounded-full font-heading bg-surface/50">
                                2
                            </span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-4 text-xl font-semibold dark:text-white">
                                    Flexible Team
                                </h3>
                                <p className="leading-loose text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis et
                                    veniam.
                                </p>
                            </div>
                        </li>
                        <li className="flex -mx-4">
                            <div className="px-4">
                            <span
                                className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-surface rounded-full font-heading bg-surface/50">
                                3
                            </span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-4 text-xl font-semibold dark:text-white">
                                    Ecologic Software
                                </h3>
                                <p className="leading-loose text-gray-500 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugit laboriosam
                                    nam!
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )

}
