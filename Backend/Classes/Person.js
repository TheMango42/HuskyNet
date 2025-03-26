/*
  Person Class
  - Holds the data for each user
  
  Variables:
  - id : String
  - name : String
  - username : String
  - email : String
  - password : String

  notes 3/26
  - 
*/
export default class Person {
    #id = null;
    #name = null;
    #username = null;
    #email = null;
    #password = null;

    constructor(id,name, username,email,password) {
        this.#id = id;
        this.#name = name;
        this.#username = username;
        this.#email = email;
        this.#password = password;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getUsername(){
        return this.#username;
    }

    getEmail() {
        return this.#email;
    }

    getPassword() {
        return this.#password;
    }

    setId(id) {
        this.#id = id;
    }

    setName(name) {
        this.#name = name;
    }

    setEmail(email) {
        this.#email = email;
    }

    setPassword(password) {
        this.#password = password;
    }
    setUsername(username){
        this.#username = username;
    }

    
}
