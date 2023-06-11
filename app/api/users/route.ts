import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const revalidate = 0

export async function GET(request: Request) {
  const users = await prisma.user.findMany()

  return NextResponse.json(users)
}
