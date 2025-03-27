import Person from "./Person.js";
import Profile from "./Profile.js";
/*
  Vertex Class
  - Holds the data for each created Person
  
  Variables:
  - Hash : Integer
  - person : Person
  - following : Map<Vertex.getHash(), Vertex>()
  - followers : Map<Vertex.getHash(), Vertex>()
  - profile : Profile
  
  Methods: 
  - getters and setters for all vaiables 
  - addFollower(person) :  returns Boolean for if it fails
  - addFollowing(person) :  returns Boolean for if it fails
  - hash(person) : returns Integer used for Hash variable

  notes 3/26
  - there might be more things that need to be stored in this class but I'm not sure
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
            return true;
        }
        return false;
    }
    addFollowing(person) {
        if(person instanceof Person && person != this.#person) {
            this.#following.set(this.hash(person),person);
            return true;
        }
        return false;
    }
    hash(person) {
        return ((parseInt(person.getId())*13) % 3148245) + 3;
    }
    
}






