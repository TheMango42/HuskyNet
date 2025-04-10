import Person from "./Person.js";
import Profile from "./Profile.js";
import {addEdge, removeEdge} from "../Functions/graphFunctions.js";
import Event from "./Event.js";
import {List} from 'linked-list';
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
  - addFollower(vertex) :  returns Boolean for if it fails
  - addFollowing(vertex) :  returns Boolean for if it fails
  - removeFollower(vertex) : returns Boolean for if it fails
  - removeFollowing(vertex) : returns Boolean for if it fails

  notes 3/26
  - there might be more things that need to be stored in this class but I'm not sure
*/
export default class Vertex{
    #Hash = null;
    #person = null;
    #following = null;
    #followers = null;
    #profile = null;
    #events = null;
    constructor(person, image, discord) {
        
        if (!(person instanceof Person)) {
            throw new Error("Vertex requires a Person instance.");
        }
        this.#profile = new Profile(image, discord);
        this.#person = person;
        this.#Hash = person.getId();
        this.#following = new Map();
        this.#followers = new Map();
        this.#events = new List();
        
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
    makeEvent(name, date, time, location, description){
            const e = new Event(name, date, time, location, description);
            this.#events.append(e);
            return e;
    }
    addFollower(vertex) {
        
        if(vertex instanceof Vertex && vertex.getHash() != this.#Hash) {
            addEdge(this, vertex, false);
            this.#followers.set(vertex.getId(), vertex);
            vertex.addFollowing(this);
            return true;
        }
        return false;
    }
    addFollowing(vertex) {
        if(vertex instanceof Vertex && vertex.getHash() != this.#Hash) {
            this.#following.set(vertex.getId(), vertex);
            return true;
        }
        return false;
    }
    removeFollower(vertex) {
        if (vertex instanceof Vertex && vertex.getHash() !== this.#Hash) {
            this.#followers.delete(vertex.getId());
            vertex.removeFollowing(this); 
            removeEdge(this, vertex);
            return true;
        }
        return false;
    }
    
    removeFollowing(vertex) {
        if (vertex instanceof Vertex && vertex.getHash() !== this.#Hash) {
            this.#following.delete(vertex.getId());
            
            return true;
        }
        return false;
    }
    
}






