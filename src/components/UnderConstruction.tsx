import BuildingImage from '../../public/assets/images/building.svg';
import MainImage from '../../public/assets/images/main-2.png';
import Image from "next/image";
import SubscriptionForm from "@/components/SubscriptionForm";
import {getApiCredentials} from "@/lib/sendPulse";

export default async function UnderConstruction() {

    const apiCredentials = await getApiCredentials();

    return (

        <div className="relative h-screen overflow-hidden bg-indigo-900">
            <Image src={MainImage} alt={''} className="absolute object-cover w-full h-full"/>
            <div className="absolute inset-0 bg-black opacity-25">
            </div>
            <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div className="relative z-10 flex flex-col items-center w-full font-mono">
                    <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
                        A Qué Suena tu Voz
                    </h1>
                    <Image src={BuildingImage} alt={''} height={200}/>
                    <p className="font-extrabold text-center text-white text-6xl mt-8 animate-bounce">
                        En Desarrollo
                    </p>
                    <div className="max-w-lg">
                        <p className={'text-white my-4'}>Sé el primero en recibir nuestras actualizaciones</p>
                        <SubscriptionForm apiCredentials={apiCredentials}/>
                    </div>
                </div>
            </div>
        </div>

    )

}
