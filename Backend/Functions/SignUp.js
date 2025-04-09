import Graph from "graphology"
import Vertex from "../Classes/Vertex.js"
/*
  SignUp 
  - has a few functions to parse the email, verify the email, and turn the email into an ID and 
  
  Functions:
  - emailSplit(email) returns : Array[emailBefore@, emailAfter@]
  - emailToAscii(emailBefore@) returns : ID String
  - verify(emailAfter@) returns : boolean

  notes 3/26
  - 
*/
export function sendToBackend(email, password, username, name){
    const a = emailSplit(email);
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

