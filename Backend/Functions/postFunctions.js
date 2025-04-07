import Vertex from "../Classes/Vertex.js"
import Post from "../Classes/Post.js"
import Club from "../Casses/Club.js"
import Event from "../Classes/Event.js"
import Graph from "graphology"

/*
  Post Functions
  - holds the functions for posts

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

export function likeCounter(postId){

  if (post instanceof Post){
    post.setLikes(post.getLikes() + 1)
  }
}

