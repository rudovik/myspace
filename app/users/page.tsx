import { prisma } from "@/lib/prisma"
import styles from "./page.module.css"
import UserCard from "@/components/UserCard/UserCard"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}

export const revalidate = 0

export default async function Users() {
  const router = useRouter()
  const users = await getUsers()
  useEffect(() => {
    router.refresh()
  }, [])

  return (
    <main className={styles.grid}>
      {users.map((user) => {
        return <UserCard key={user.id} {...user} />
      })}
    </main>
  )
}
