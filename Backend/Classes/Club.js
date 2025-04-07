import Vertex from "./Vertex.js"
import Profile from "./Profile.js"
import Event from "./Event.js"
import {List} from 'linked-list'
import Person from "./Person.js";
/*
  Club Class
  - Holds the data for each created club
  
  Variables:
  - name : String
  - members : Map<Vertex.getHash(), Vertex>
  - president : Vertex
  - profile : Profile

  Methods:
  - getters and setters for all variables
  - addMembers(member)
  - setPresident(newpres) : returns true if successful
  - makeEvent(name, date, time, location, description) : returns created event

  notes 3/26
  - there might be more things that need to be stored in this class but I'm not sure
*/
export default class Club {
    #name = null;
    #members = null;
    #president = null;
    #profile = null;
    #events = null
    constructor(name, president, image, discord) {
        if (!(president instanceof Vertex)) {
            throw new Error("President requires a Vertex instance.");
        }
        this.#profile = new Profile(image, discord);
        this.#name = name;
        this.#members = new Map();
        this.#president = president;
        this.#events = new List();
    }

    getName() {
        return this.#name;
    }
    getMembers() {
        return Array.from(this.#members.values());
    }
    getPresident() {
        return this.#president;
    }
    getProfile(){
        return this.#profile;
    }
    getEvents(){
        return Array.from(this.#events);
    }
    setName(name) {
        this.#name = name;
    }
    addMember(member) {
        if (member instanceof Vertex) {
            if (!this.#members.has(member.getHash())) {
                this.#members.set(member.getHash(), member);
            } else {
                console.log("Member already exists in the club.");
            }
        } else {
            throw new Error("Member must be an instance of Vertex.");
        }
    }
    setPresident(newPres) {
        if (!(newPres instanceof Vertex)) {
            return false;
        }
        this.#president = newPres;
        return true;
    }
    makeEvent(name, date, time, location, description){
        const e = new Event(name, date, time, location, description);
        this.#events.append(e);
        return e;
    }
}