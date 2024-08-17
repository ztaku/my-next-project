import type { Category } from '@/app/_libs/microcms';
import styles from './index.module.css';

type Props = {
  category: Category;
};
export default function Category({ category }: Props) {
//  console.log({category});
  let name = "no category";
  if (category !== null) {
    name = category.name;
  }
  return <span className={styles.tag}>{name}</span>;
}