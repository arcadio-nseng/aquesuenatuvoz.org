import Image from "next/image";
import {BsFacebook} from "react-icons/bs";
import SocialIcon from "@/components/SocialIcon";

export type TeamMemberProps = {
    photo: any;
    name: string;
    occupation: string;
    description: string;
    socialMedia?: {
        link: string;
        icon: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
    }[];
}

export default function TeamMember(props: TeamMemberProps) {

    const socialMedia = props.socialMedia || [];

    return (
        <div className="relative p-4 mx-auto max-w-md mb-12">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
                <a href="#" className="relative block h-40 w-40">
                    <Image alt={props.name} src={props.photo} fill
                         className="mx-auto object-cover rounded-lg border-2 border-white dark:border-gray-800"/>
                </a>
            </div>
            <div className="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="text-center">
                    <p className="text-2xl text-gray-800 dark:text-white">
                        {props.name}
                    </p>
                    <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                        {props.occupation}
                    </p>
                    <p className="py-4 mx-auto font-light text-gray-500 text-md dark:text-gray-400">
                        {props.description}
                    </p>
                </div>
                <div
                    className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
                    {
                        socialMedia.map((media, index) => (
                            <a href={media.link} key={index}>
                                <SocialIcon name={media.icon}/>
                                {/*<Image src={media.icon} alt={''} width={30} height={30} className="transition-all duration-300 hover:opacity-50"/>*/}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}
