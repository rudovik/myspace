import { NextResponse, NextRequest } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"
import { authOptions } from "../auth/[...nextauth]/route"
import { revalidatePath } from "next/cache"

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions)
  const currentUserEmail = session?.user?.email!

  const data = await req.json()

  data.age = Number(data.age)

  const user = await prisma.user.update({
    where: {
      email: currentUserEmail,
    },
    data,
  })

  // revalidatePath("/users")
  // revalidatePath(`/users/${user.id}`)

  return NextResponse.json(user)
}
