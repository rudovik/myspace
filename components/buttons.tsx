"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import DynamicLink from "./DynamicLink"

export function SignInButton() {
  const { data: session, status } = useSession()
  // console.log(session, status)

  if (status === "loading") {
    return <>...</>
  }

  if (status === "authenticated") {
    return (
      <DynamicLink href={`/dashboard`}>
        <Image
          src={session.user?.image ?? "/mememan.webp"}
          width={32}
          height={32}
          alt="Your Name"
        />
      </DynamicLink>
    )
  }

  return <button onClick={() => signIn()}>Sign in</button>
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign out</button>
}
