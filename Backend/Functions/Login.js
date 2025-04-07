import Person from "../Classes/Person.js"
import Vertex from "../Classes/Vertex.js"
import {Compare} from "./encryption.js"

/*
  Login Functions
  - holds the functions for logging in and logging out of your account
  
 Functions: 
 - async logIn(v, password) : compares the passwords and sets the loggedIn boolean to true when the person is logged in 
 - logOut(v) : sets the loggedIn boolean to false when they log out

  notes 4/2
  - 
*/

export async function logIn(v, password){
    const match = await Compare(v.getHash(), password);
    if(v instanceof Vertex && match){
        const p = v.getPerson();
        p.setLoggedIn(true);
    }
    return match;
}
export function LogOut(v){
    if(v instanceof Vertex){
        v.getPerson().setLoggedIn(false);
    }
}