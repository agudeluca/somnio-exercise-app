import { Post } from "@/types"

const getPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await response.json()
  return posts
}
export default getPosts
