import Person from "../Classes/Person.js"

/*
  Login Functions
  - holds the functions for logging in and logging out of your account
  
 Functions: 
 - logIn(p) : sets the loggedIn boolean to true when the person is logged in
 - logOut(p) : sets the loggedIn boolean to false when they log out

  notes 4/2
  - 
*/

export default function logIn(p){
    if(p instanceof Person){
        p.setLoggedIn(true);
    }
}
export default function LogOut(p){
    if(p instanceof Person){
        p.setLoggedIn(true);
    }
}