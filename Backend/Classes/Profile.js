import Post from "./Post.js"
/*
  Profile Class
  - Holds the data for each person's profile
  
  Variables:
  - image : String
  - discord : String
  - posts : Map<postId, Post>()

  Methods:
  - getters and setters for all variables
  - addPost(post) : returns Boolean for if it succeded or not


  notes 3/26
  - there might be more things that need to be stored in this class but I'm not sure
*/
export default class Profile  {
    #image = null;
    #discord = null;
    #posts = null;

    constructor(image, discord) { 
        this.#image = image;
        this.#discord = discord;
        this.#posts = new Map(); 
    }
    getImage(){
        return this.#image;
    }
    getDiscord(){
        return this.#discord;
    }
    setImage(image) {
        this.#image = image;
    }

    setDiscord(discord) {
        this.#discord = discord;
    }

    addPost(post) {
        if(post instanceof Post){
            this.#posts.set(post.getPostId, post); 
            return true;
        }
        return false;
    }

    getPosts() {
        return Array.from(this.#posts.values()); 
    }
}

