import FollowButton from "@/components/FollowButton/FollowButton"
import { prisma } from "@/lib/prisma"
import { Metadata } from "next"

interface Props {
  params: {
    id: string
  }
}

export const revalidate = 0

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  return { title: `User profile of ${user?.name}` }
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } })
  const { name, bio, image } = user ?? {}

  return (
    <main>
      <h1>{name}</h1>
      <img
        width={300}
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
      />
      <h3>Bio</h3>
      <p>{bio}</p>

      <FollowButton targetUserId={params.id} />
    </main>
  )
}
