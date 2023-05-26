import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

    return (

        <section className="my-24">

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-end justify-between mb-12 header">
                    <div className="title">
                        <p className="mb-4 text-4xl font-bold text-gray-800">
                            Últimos proyectos
                        </p>
                        <p className="text-2xl font-light text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, minus, vel. Aperiam quis repellendus velit.
                        </p>
                    </div>
                    <div className="text-end">
                        {/*<form
                            className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Search"
                                       className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                       placeholder="Enter a title"/>
                            </div>
                            <button
                                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                                type="submit">
                                Search
                            </button>
                        </form>*/}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>

        </section>

    )

}
