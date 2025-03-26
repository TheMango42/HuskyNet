import Person from "./Person.js";
import Profile from "./Profile.js";
/*
* The vertex that the graph will use to connect people in the main graph 
*/
export default class Vertex{
    #Hash = null;
    #person = null;
    #following = null;
    #followers = null;
    #profile = null;

    constructor(person, image, discord) {
        
        if (!(person instanceof Person)) {
            throw new Error("Vertex requires a Person instance.");
        }
        this.#profile = new Profile(image, discord);
        this.#person = person;
        this.#Hash = this.hash(person);
        this.#following = new Map();
        this.#followers = new Map();
        
    }
    
    getPerson() {
        return this.#person;
    }
    getProfile(){
        return this.#profile;
    }
    getFollowers() {
        return Array.from(this.#followers.values());
    }
    getFollowing() {
        return Array.from(this.#following.values());
    }
    getHash() {
        return this.#Hash;
    }
    addFollower(person) {
        if(person instanceof Person && person != this.#person) {
            this.#followers.set(this.hash(person),person);
        }
    }
    addFollowing(person) {
        if(person instanceof Person && person != this.#person) {
            this.#following.set(this.hash(person),person);
        }
    }
    hash(person) {
        return ((parseInt(person.getId())*13) % 3148245) + 3;
    }
    
}






