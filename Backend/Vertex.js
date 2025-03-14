import{ Person } from Person.js
/*
* The vertex that the graph will use to connect people in the main graph 
*/
class Vertex{
    #Hash = null;
    #person = null;
    #following = null;
    #followers = null;
    constructor( person ){
        this.#Hash = this.#hash(person);
        if(person instanceof Person){
            this.person = person;
            this.#Hash = this.#hash(person);
        }
        this.#following = new Map();
        this.#followers = new Map();
    }
    getPerson(){
        return this.#person;
    }
    getFollowers(){
        return this.#followers;
    }
    getFollowing(){
        return this.#following;
    }
    getHash(){
        return this.#Hash;
    }
    #hash( person ){
        return person.getId() % 7 + 3;
    }
}




