import { useQuery } from "@tanstack/react-query"
import { Post } from "../../types"
import getPosts from "../../services/getPosts"


const useGetPost = () => {
  return useQuery<Post[], Error>({
    queryKey: ["getPosts"],
    queryFn: () => getPosts()
  })
}

export default useGetPost
