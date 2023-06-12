import { prisma } from "@/lib/prisma"
import styles from "./page.module.css"
import UserCard from "@/components/UserCard/UserCard"

async function getUsers(): Promise<User[]> {
  const res = await fetch("/api/users", { next: { revalidate: 0 } })
  return await res.json()
}

interface User {
  id: string
  name: string
  age: number
  image: string
}

export default async function Users() {
  const users: User[] = await getUsers()

  return (
    <main className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </main>
  )
}
