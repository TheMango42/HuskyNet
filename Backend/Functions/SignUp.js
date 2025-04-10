import Graph from "graphology"
import Vertex from "../Classes/Vertex.js"
import Person from '../Classes/Person.js'
import {addUser} from "../../functions/Users.ts"
import { addToGraph } from "./graphFunctions.js";
/*
  SignUp 
  - has a few functions to parse the email, verify the email, and turn the email into an ID and 
  
  Functions:
  - sendToBackend(email, password, username, name) : returns a boolean if it succeeded
  - emailSplit(email) returns : Array[emailBefore@, emailAfter@]
  - emailToAscii(emailBefore@) returns : ID String
  - verify(emailAfter@) returns : boolean

  notes 3/26
  - 
*/
export async function sendToBackend(email, password, username, name) {
    if(email == null || password == null || username == null || name == null){
        throw new Error('Must Fill All Spaces')
    }
    const a = emailSplit(email);
    if (!verify(a[2])) {
        throw new Error("Must Be an MTU Email");
    }
    const id = emailToAscii(a[1]);
    const p = new Person(name, username, email, password);
    await addUser(name, username, email, password); //doesn't hash password yet
    const v = new Vertex(p, null, null);
    addToGraph(v);
    return true;
}


export function emailSplit(email){
    const emailArray = email.split('@'); //splits email at the @ and returns array of the first half (ajsaylor) in [0] and second half (mtu.edu) in [1] 
    return emailArray;
}

// split array and put the first half of the array into this function
export function emailToAscii(name){
    const charArray = name.split(''); //splits name into an array of characters to be ascii'd
    var id = '';
    for(let e in charArray){

        let n = charArray[e].charCodeAt(0); // turns each character in the array to ascii value 
        id = id + n.toString(); // adds to an ongoing string

    }
    return id;
}
    // takes in split email array and returns 1 if good and returns 0 if bad
export function verify(email){
    if (email[1] === 'mtu.edu'){
        return true;
    }
    else{
        return false;
    }
}

