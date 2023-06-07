import PodcastIcon from '../../../public/assets/images/podcasticon.svg';
import VideoBlockIcon from '../../../public/assets/images/video-blog.svg';
import CoworkingIcon from '../../../public/assets/images/coworking.svg';
import Image from "next/image";
import Link from "next/link";

export default function Features() {

    return (

        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex py-12">
            <a href={'/#podcast'}
                className="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
                <div className="flex-shrink-0">
                    <div
                        className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-surface rounded-md">
                        <Image src={PodcastIcon} alt={'Podcast'} width={20} height={20}/>
                    </div>
                </div>
                <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
                    Podcast
                </h3>
                <p className="py-4 text-gray-600 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem hic, nam reiciendis sunt tenetur vitae?
                </p>
            </a>
            <a href={'/#video-blog'}
                className="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24">
                <div className="flex-shrink-0">
                    <div
                        className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-surface rounded-md">
                        <Image src={VideoBlockIcon} alt={'Video blog'} height={20}/>
                    </div>
                </div>
                <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
                    Video blog
                </h3>
                <p className="py-4 text-gray-600 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis error excepturi incidunt quis repellendus repudiandae.
                </p>
            </a>
            <a href={'/salon-multiusos'}
                className="w-full px-4 py-4 mt-6 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4">
                <div className="flex-shrink-0">
                    <div
                        className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-surface rounded-md">
                        <Image src={CoworkingIcon} alt={'Sala multiusos'} width={20} height={20}/>
                    </div>
                </div>
                <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
                    Salon Multiusos
                </h3>
                <p className="py-4 text-gray-600 text-md ">
                    Let us help you level up your search engine game, explore our solutions for digital marketing for
                    your business.
                </p>
            </a>
        </div>

    )

}
