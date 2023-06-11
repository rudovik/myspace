import { prisma } from "@/lib/prisma"
import styles from "./page.module.css"
import UserCard from "@/components/UserCard/UserCard"

export const revalidate = 0

async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}

export default async function Users() {
  const users = await getUsers()

  return (
    <main className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </main>
  )
}
