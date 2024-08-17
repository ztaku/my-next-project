import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";

export default async function Page() {
    const { contents:news} = await getNewsList();

    return <NewsList news={news} />;
//    return <div>{JSON.stringify(news[0].category.name)}</div>;
//    return <div>{(news[0].category.name)}</div>;
    
}