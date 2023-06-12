import Link from "next/link"
import styles from "./UserCard.module.css"
import DynamicLink from "../DynamicLink"

interface Props {
  id: string
  name: string | null
  age: number | null
  image: string | null
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className={styles.card}>
      <img
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <h3>
          <DynamicLink href={`/users/${id}`}>{name}</DynamicLink>
        </h3>
        <h4>age: {age}</h4>
      </div>
    </div>
  )
}
