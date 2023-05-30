// @ts-ignore
// @ts-ignore
// @ts-ignore

import TeamMember from "@/components/TeamMember";
import TeamPhoto from '../../../public/assets/images/person-2.jpeg';
import {INotionTeamMember, Notion} from "@/lib/notion";

export default async function Team() {

    const databaseId = process.env.NOTION_TEAM_DATABASE_ID as string;

    const query: any = await Notion.databases.query({
        database_id: databaseId,
        filter: {property: "Estado", status: {equals: 'Publicado'}},
        sorts: [{property: 'Orden', direction: 'ascending'}]
    }).catch(() => {});

    if (!query) {
        return <></>
    }

    const people: INotionTeamMember[] = query.results.map((q: any) => q.properties);

    return (
        <section className="my-24">

            <div className="container px-6 md:px-12 mx-auto">
                <p className="text-3xl font-bold text-center text-gray-800">
                    Equipo
                </p>
                <p className="mb-32 text-xl font-normal text-center text-gray-500">
                    Conoce a las personas detrás de A qué Suena tu Voz
                </p>
                <div className={`grid grid-cols-1 gap-12 sm:grid-cols-${people.length > 2 ? 2 : people.length} lg:grid-cols-${people.length > 3 ? 3 : people.length} xl:grid-cols-${people.length > 4 ? 4 : people.length}`}>
                    {
                        people.map((p, index) => {
                            const socialMedia: {link: string, icon: any}[] = [];
                            if (p.Facebook.url) socialMedia.push({link: p.Facebook.url, icon: 'facebook'});
                            if (p.Twitter.url) socialMedia.push({link: p.Twitter.url, icon: 'twitter'});
                            if (p.Instagram.url) socialMedia.push({link: p.Instagram.url, icon: 'instagram'});
                            if (p.Linkedin.url) socialMedia.push({link: p.Linkedin.url, icon: 'linkedin'});
                            return (
                                <TeamMember key={`team-${index}`} name={p.Nombre.title[0].plain_text}
                                            occupation={p.Ocupacion.rich_text[0].plain_text}
                                            description={p.Biografia.rich_text[0].plain_text}
                                            photo={p.Foto.files[0].file.url} socialMedia={socialMedia}/>
                            )
                        })
                    }

                </div>
            </div>

        </section>
    )

}
