import { Post } from "@/types"

const getPostByUserId = async (id: number): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()
  return posts.filter((post: Post) => post.userId === id)
}
export default getPostByUserId
