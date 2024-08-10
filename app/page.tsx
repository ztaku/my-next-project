import styles from "./page.module.css";
import Image from "next/image";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink";
import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[] } = {
    contents: [
      {
        id: "1",
        title: "渋谷に移転",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023/05/19",
        createdAt: "2023/05/19",
      },
      {
        id: "2",
        title: "当社CEO",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023/05/19",
        createdAt: "2023/05/19",
      },
      {
        id: "3",
        title: "TEST",
        category: {
          name: "更新情報",
        },
        publishedAt: "2023/04/19",
        createdAt: "2023/04/19",
      },
    ],
  }


export default function Home() {
  const sliceData = data.contents.slice(0,2);
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
      <NewsList news={sliceData} />
      <div className={styles.newsLink}>
        <ButtonLink href="/news">もっと見る</ButtonLink>
      </div>
    </section>
    </>
  );
}
