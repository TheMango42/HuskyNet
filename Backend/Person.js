import {
    Graph,
    serializeGraph,
    deserializeGraph,
    topologicalSort,
    shortestPath,
  } from 'graph-data-structure';
class Person {
    #id = null;
    #name = null;
    #email = null;
    #password = null;
    #following = null;

    constructor(id,name,email,password) {
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#following = new Set();
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getEmail() {
        return this.#email;
    }

    getFollowers() {
        return this.#following;
    }

    #getPassword() {
        return this.#password;
    }

    #setId(id) {
        this.#id = id;
    }

    #setName(name) {
        this.#name = name;
    }

    #setEmail(email) {
        this.#email = email;
    }

    #setPassword(password) {
        this.#password = password;
    }

    follow(person) {
        if (person != this) {
            this.#following.add(person);
        }
    }
}
