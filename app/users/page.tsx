import { prisma } from "@/lib/prisma"
import styles from "./page.module.css"
import UserCard from "@/components/UserCard/UserCard"

export default async function Users() {
  // throw new Error("This is an error")

  const users = await prisma.user.findMany()

  return (
    <main className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </main>
  )
}
