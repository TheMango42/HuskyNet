import Vertex from "./Vertex.js"

export default class Club {
    #name = null;
    #members = null;
    #president = null;
    constructor(name, president) {
        if (!(president instanceof Vertex)) {
            throw new Error("President requires a Vertex instance.");
        }

        this.#name = name;
        this.#members = new Map();
        this.#president = president;
    }

    getName() {
        return this.#name;
    }
    getMembers() {
        return this.#members;
    }
    getPresident() {
        return this.#president;
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
            throw new Error("President must be an instance of Vertex.");
        }
        this.#president = newPres;
    }
}