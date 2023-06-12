"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Refresher() {
  const router = useRouter()

  useEffect(() => {
    router.refresh()
  }, [])
  return <></>
}
