import Link from "next/link"

export default async function Blog() {
  // const posts = await fetch("http://localhost:3000/api/content").then((res) =>
  //   res.json()
  // )
  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {/* {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))} */}
      </ul>
    </main>
  )
}
