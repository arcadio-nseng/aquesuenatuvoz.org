import ProjectCard from "@/components/ProjectCard";
import {INotionProject, INotionTeamMember, Notion} from "@/lib/notion";
import NoData from "@/components/NoData";

export default async function Projects() {

    const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID as string;

    const query: any = await Notion.databases.query({
        database_id: databaseId,
        filter: {property: "Estado", status: {equals: 'Publicado'}},
        sorts: [{property: 'Última edición', direction: 'descending'}]
    }).catch(() => {});

    if (!query) {
        return <NoData message="No hay proyectos en este momento"/>
    }

    const projects: INotionProject[] = query.results.map((q: any) => q.properties);

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

                    </div>
                </div>
                <div className={`grid grid-cols-1 gap-12 sm:grid-cols-${projects.length > 2 ? 2 : projects.length} lg:grid-cols-${projects.length > 3 ? 3 : projects.length} xl:grid-cols-${projects.length > 4 ? 4 : projects.length}`}>
                    {
                        projects.map((project, index) => (
                            <ProjectCard key={`project-${index}`}
                                         title={project.Titulo.title[0].plain_text}
                                         description={project.Descripcion.rich_text[0].plain_text}
                                         category={project.Categoria.select.name}
                                         image={project.Imagen.files[0].file.url}
                                         email={project.Email.email}
                                         url={project.URL.url}/>
                        ))
                    }
                </div>
            </div>

        </section>

    )

}
