// This is refresh component that helps to
// refresh the browser next.js cache

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
