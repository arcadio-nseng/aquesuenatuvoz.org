import Image from "next/image";

type TestimonialProps = {
    image: string;
    message: string;
    occupation: string;
    email?: string;
    name: string;
}
export default function Testimonial({name, message, occupation, image, email}: TestimonialProps) {

    return (
        <div className="flex items-center justify-center px-5 py-5">
            <div
                className="w-full max-w-xl px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50">
                <div className="w-full pt-1 pb-5 mx-auto -mt-16 text-center">
                    <div className="relative block h-20 w-20 rounded-full mx-auto">
                        <Image alt={name} src={image} fill className="object-cover rounded-full"/>
                    </div>
                </div>
                <div className="w-full mb-10">
                    <div className="h-3 text-3xl leading-tight text-left text-indigo-500">
                        “
                    </div>
                    <p className="px-5 text-sm text-center text-gray-600 dark:text-gray-100">
                        {message}
                    </p>
                    <div className="h-3 -mt-3 text-3xl leading-tight text-right text-indigo-500">
                        ”
                    </div>
                </div>
                <div className="w-full">
                    <p className="font-bold text-center text-primary text-md">
                        <a href={`mailto:${email}`}>{name}</a>
                    </p>
                    <p className="text-xs text-center text-gray-500 dark:text-gray-300">
                        {occupation}
                    </p>
                </div>
            </div>
        </div>
    )

}
