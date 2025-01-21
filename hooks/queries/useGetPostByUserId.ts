import { useQuery } from "@tanstack/react-query"
import { Post } from "../../types"
import getPostByUserId from "../../services/getPostByUserId"


const useGetPostByUserId = (id: number) => {
  return useQuery<Post[], Error>({
    queryKey: ["useGetPostByUserId", id],
    queryFn: () => getPostByUserId(id)
  })
}

export default useGetPostByUserId
