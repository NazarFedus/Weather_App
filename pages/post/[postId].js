import { useRouter } from "next/router"

const Post = () => {
     const router = useRouter();
     console.log(router.query.postId);
  return (
    <div>
          <h1>Post №{router.query.postId}</h1>
    </div>
  )
}

export default Post