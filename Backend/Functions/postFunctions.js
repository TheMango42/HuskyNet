export function isLiked(postId, userId) {
    if (userId.equals(postId)) {
        return true;
    } else {
        return false;
    }
import Vertex from "Backend\\Classes\\Vertex.js"
import Post from "Backend\\Classes\\Post.js"
import Club from "Backend\\Casses\\Club.js"
import Event from "Backend\\Classes\\Event.js"
/*
  Vertex Class
  - Holds the data for each created Person
  
  Variables:
  - Hash : Integer
  - person : Person
  - following : Map<Vertex.getHash(), Vertex>()
  - followers : Map<Vertex.getHash(), Vertex>()
  - profile : Profile
  
 Functions: 
 - likeCounter(postId) : returns Boolean for if it succeeded
 - isLiked()

  notes 3/26
  - how do we record what userID likes the post? is that a frontend thing or a backend thing?
*/
export default function likeCounter(postId){

  if (post instanceof Post){
    post.setLikes(post.getLikes() + 1)
  }
}
export default function isLiked(postId, userId) {
  //how do we record what userID likes the post? is that a frontend thing or a backend thing?
  return false;
}