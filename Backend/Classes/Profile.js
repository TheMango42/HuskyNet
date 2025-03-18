import Vertex from "./Vertex.js"

export default class Profile extends Vertex{
    p = this.getPerson();
    #image = null;
    #discord = null;
    #posts = null;
    constructor(image, discord){
        this.#image = image;
        this.#discord = discord;
        const following = this.getFollowing();
        const followers = this.getFollowers();
        this.#posts = new Map(); //map of posts made by the user but might need to be a different data structure
    }
    getFollowers(){
        return this.followers;
    }
    getFollowing(){
        return this.following;
    }
    setImage(image){
        this.#image = image;
    }
    setDiscord(discord){
        this.#discord = discord;
    }
    addPost(post){
        this.#posts.set(post);
    }
    






}