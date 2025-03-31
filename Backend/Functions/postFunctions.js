import Vertex from "Backend\\Classes\\Vertex.js"
import Post from "Backend\\Classes\\Post.js"
import Club from "Backend\\Casses\\Club.js"
import Event from "Backend\\Classes\\Event.js"
/*
  Post Functions
  - holds the functions for posts
  
  Variables:
  - Hash : Integer
  - person : Person
  - following : Map<Vertex.getHash(), Vertex>()
  - followers : Map<Vertex.getHash(), Vertex>()
  - profile : Profile
  
 Functions: 
 - likeCounter(postId) : returns Boolean for if it succeeded
 - isLiked(postId, UserId) : returns Boolean for if User Has liked that post

  notes 3/26
  - how do we record what userID likes the post? is that a frontend thing or a backend thing?
*/

export function isLiked(postId, userId) {
    if (userId.equals(postId)) {
        return true;
    } else {
        return false;
    }
  }

export default function likeCounter(postId){

  if (post instanceof Post){
    post.setLikes(post.getLikes() + 1)
  }
}

