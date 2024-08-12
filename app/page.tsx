import styles from "./page.module.css";
import Image from "next/image";
import { getNewsList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";

export default async function Home() {
  const data = await getNewsList({
    limit:TOP_NEWS_LIMIT,
  })
  return (
    <>
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>世界を変える</h1>
        <p className={styles.description}>テックカンパニー</p>
      </div>
      <img className={styles.bgimg} src="/img-mv.jpg" alt="" />
    </section>
    <section className={styles.news}>
      <h2 className={styles.newsTitle}>News</h2>
      <NewsList news={data.contents} />
      <div className={styles.newsLink}>
        <ButtonLink href="/news">もっと見る</ButtonLink>
      </div>
    </section>
    </>
  );
}
