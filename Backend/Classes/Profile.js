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

    addPost(postId, postContent) {
        this.#posts.set(postId, postContent); 
    }

    getPosts() {
        return Array.from(this.#posts.values()); 
    }
}

