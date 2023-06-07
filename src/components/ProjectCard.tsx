import Image from "next/image";

type ProjectCardProps = {
    title: string;
    category: string;
    description: string;
    email: string;
    url?: string;
    image: string;
}

export default function ProjectCard({title, category, description, email, image, url}: ProjectCardProps) {

    return (
        <div className="overflow-hidden mx-auto rounded-lg shadow-lg cursor-pointer h-90 w-full max-w-[320px]">
            <a href={url} className="block w-full h-full">
                <div className="h-40 relative">
                    <Image alt="blog photo" src={image} fill className="object-cover" />
                </div>
                <div className="w-full p-4 bg-white">
                    <p className="font-medium text-surface text-md">
                        {category}
                    </p>
                    <p className="mb-2 text-xl font-medium text-gray-800">
                        {title}
                    </p>
                    <p className="font-light text-gray-400 text-md">
                        {description}
                    </p>
                    <div className="flex items-center mt-4">

                        <a href={`mailto:${email}`}
                                className="py-2 px-4  bg-primary hover:bg-surface focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Colaborar
                        </a>

                    </div>
                </div>
            </a>
        </div>
    )

}
