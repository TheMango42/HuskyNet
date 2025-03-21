import Vertex from "./Vertex.js"

export default class Profile extends Vertex {
    p = super.getPerson();
    #image = null;
    #discord = null;
    #posts = new Map();

    constructor(image, discord) {
        super(p); 

        this.#image = image;
        this.#discord = discord;
        this.#posts = new Map(); 
    }
    getImage(){
        return this.#image;
    }
    getFollowers() {
        return super.getFollowers(); 
    }

    getFollowing() {
        return super.getFollowing();
    }

    setImage(image) {
        this.#image = image;
    }

    setDiscord(discord) {
        this.#discord = discord;
    }

    addPost(postId, postContent) {
        this.#posts.set(postId, postContent); 
    }

    getPosts() {
        return Array.from(this.#posts.values()); 
    }
}

