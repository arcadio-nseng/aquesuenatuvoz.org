import TeamMember from "@/components/TeamMember";
import TeamPhoto from '../../../public/assets/images/person-2.jpeg';

export default function Team() {

    return (
        <section className="my-24">

            <div className="container px-6 md:px-12 mx-auto">
                <p className="text-3xl font-bold text-center text-gray-800">
                    Equipo
                </p>
                <p className="mb-32 text-xl font-normal text-center text-gray-500">
                    Conoce a las personas detrás de A qué Suena tu Voz
                </p>
                <div className="flex flex-wrap flex-col items-center justify-center space-y-24 md:flex-row">
                    <TeamMember name="Teodora"
                                occupation="Fundadora"
                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, officiis.'}
                                photo={TeamPhoto}/>
                    <TeamMember name="Teodora"
                                occupation="Fundadora"
                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, officiis.'}
                                photo={TeamPhoto}/>
                    <TeamMember name="Teodora"
                                occupation="Fundadora"
                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, officiis.'}
                                photo={TeamPhoto}/>
                    <TeamMember name="Teodora"
                                occupation="Fundadora"
                                description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, officiis.'}
                                photo={TeamPhoto}/>

                </div>
            </div>

        </section>
    )

}
