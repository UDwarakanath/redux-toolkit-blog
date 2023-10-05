import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const PostUser = ({ userId }) => {
  const users = useSelector(selectAllUsers)
  const user = users.find(user =>user.id === userId)
  return (
    <span>--{user ? user.user : "UnKnown Auther"}</span>
  )
}

export default PostUser