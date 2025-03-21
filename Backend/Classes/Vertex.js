import Person from "./Person.js";
/*
* The vertex that the graph will use to connect people in the main graph 
*/
export default class Vertex{
    #Hash = null;
    #person = null;
    #following = null;
    #followers = null;
    

    constructor(person) {
        
        if (!(person instanceof Person)) {
            throw new Error("Vertex requires a Person instance.");
        }
        this.#person = person;
        this.#Hash = this.hash(person);
        this.#following = new Map();
        this.#followers = new Map();
        
    }
    
    getPerson() {
        return this.#person;
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
        if(person instanceof Person) {
            this.#followers.set(hash(person.getId()),person);
        }
    }
    addFollowing(person) {
        if(person instanceof Person) {
            this.#following.set(hash(person.getId()),person);
        }
    }
    hash(person) {
        return (person.getId()*13) % 31 + 3;
    }
    
}






