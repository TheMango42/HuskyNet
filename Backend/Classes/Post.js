/*
  Post Class
  - Holds the data for each created post
  
  Variables:
  - postId : String
  - image : String
  - description : String

  Methods:
  - addLike() : adds 1 to like counter

  notes 3/26
  - idk if images are stored as strings I'm just guessing
*/
export default class Post{
    #Likes = 0;
    #postid = null;
    #image = null;
    #description = null;  
    constructor(id, image, description){
        this.#postid = id;
        this.#image = image;
        this.#description = description;
    }
    getLikes(){
        return this.#Likes;
    }
    addLike(){
        this.#Likes++;
    }
    getPostId(){
        return this.#postid;
    }
    getImage(){
        return this.#image;
    }
    getDescription(){
        return this.#description;
    }
    setImage(image){
        this.#image = image
    }
}