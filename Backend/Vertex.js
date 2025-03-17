import Person from "./Person.js";
/*
* The vertex that the graph will use to connect people in the main graph 
*/
export default class Vertex {
    #Hash = null;
    #person = null;
    #following = null;
    #followers = null;
    

    Vertex(person) {
        if(person instanceof Person) {
            this.#person = person;
            this.#Hash = this.#hash(person.getId());
            this.#following = new Map();
            this.#followers = new Map();
        }
    }
    
    getPerson() {
        return this.#person;
    }
    getFollowers() {
        return this.#followers;
    }
    getFollowing() {
        return this.#following;
    }
    getHash() {
        return this.#Hash;
    }
    addFollower(person) {
        if(person instanceof Person) {
            this.#followers.set(person.getId(),person);
        }
    }
    addFollowing(person) {
        if(person instanceof Person) {
            this.#following.set(person.getId(),person);
        }
    }
    #hash(person) {
        return (person.getId()*13) % 31 + 3;
    }
    
}



