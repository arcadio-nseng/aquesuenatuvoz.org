import FancyBackground from "@/components/FancyBackground";
import {INotionTestimonial, Notion} from "@/lib/notion";
import TestimonialSlider from "@/components/TestimonialSlider";

export default async function Testimonials() {

    const databaseId = process.env.NOTION_TESTIMONIALS_DATABASE_ID as string;

    const query: any = await Notion.databases.query({
        database_id: databaseId,
        filter: {property: "Estado", status: {equals: 'Publicado'}},
        sorts: [{property: 'Created time', direction: 'descending'}]
    }).catch(() => {});

    if (!query || query.results.length === 0) {
        return <></>
    }

    const testimonials: INotionTestimonial[] = query.results.map((q: any) => q.properties);


    return (

        <FancyBackground>

            <h2 className="text-4xl text-center text-white font-bold mb-12">Testimonios</h2>

            {/*<TestimonialSlider testimonials={testimonials}/>*/}


        </FancyBackground>
    )

}
