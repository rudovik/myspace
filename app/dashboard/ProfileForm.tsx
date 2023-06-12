"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"

export function ProfileForm({ user }: any) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    }

    setLoading(true)
    const res = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
    router.refresh()
    setLoading(false)
  }

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={user?.name ?? ""}
        />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          id="bio"
          cols={30}
          rows={10}
          defaultValue={user?.bio ?? ""}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" defaultValue={user?.age ?? 0} />
        <label htmlFor="image">Profile Image URL</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={user?.image ?? ""}
        />

        <button type="submit" disabled={loading}>
          {loading ? "..." : "Save"}
        </button>
      </form>
    </div>
  )
}
