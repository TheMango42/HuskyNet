/*
  Person Class
  - Holds the data for each user
  
  Variables:
  - id : String
  - name : String
  - username : String
  - email : String
  - password : String
  - loggedIn : Boolean

  Methods:
  - getters and setters for all variables

  notes 3/26
  - 
*/
export default class Person {
    
    #name = null;
    #username = null;
    #email = null;
    #password = null;
    #loggedIn = false;

    constructor(name, username,email,password) {
        this.#name = name;
        this.#username = username;
        this.#email = email;
        this.password = password;
    }

    getLoggedIn(){
        return this.#loggedIn;
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
    setLoggedIn(value){
        this.#loggedIn = value;
    }

    
}
