import {INotionProduct, INotionProject, Notion} from "@/lib/notion";
import ProductCard from "@/components/ProductCard";

export default async function Products() {

    const databaseId = process.env.NOTION_MERCHANDISING_DATABASE_ID as string;

    const query: any = await Notion.databases.query({
        database_id: databaseId,
        filter: {property: "Estado", status: {equals: 'Publicado'}},
        sorts: [{property: 'Nombre', direction: 'ascending'}]
    }).catch(() => {});

    if (!query || query.results.length === 0) {
        return <></> /* TODO: create empty component for products */
    }

    const products: INotionProduct[] = query.results.map((q: any) => q.properties);

    return (
        <section className="container mx-auto px-6 md:px-12 mb-24">
            <div className="title mb-4">
                <p className="mb-4 text-4xl font-bold text-gray-800">
                    Colabora comprando un artículo
                </p>
                <p className="text-2xl font-light text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, minus, vel. Aperiam quis repellendus velit.
                </p>
            </div>
            <div className={`grid grid-cols-1 gap-12 sm:grid-cols-${products.length > 2 ? 2 : products.length} lg:grid-cols-${products.length > 3 ? 3 : products.length} xl:grid-cols-${products.length > 4 ? 4 : products.length}`}>

                {
                    products.map((product, index) => (
                        <ProductCard key={`product-${index}`}
                                     name={product.Nombre.title[0].plain_text}
                                     tag={product.Etiqueta.rich_text[0].plain_text}
                                     image={product.Image.files[0].file.url}
                                     price={product.Precio.number} email={product.Email?.email}/>
                    ))
                }

            </div>
        </section>
    )

}
