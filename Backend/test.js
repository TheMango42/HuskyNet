import hashData from "./Functions/encryption.js"
/*
  Test Functions
  - holds the functions for testing purposes only
  - run using npm test in the terminal
  

  notes 3/26
  - how do we record what userID likes the post? is that a frontend thing or a backend thing?
*/

async function main() {
    var data = "1019029";
    var d = await hashData(data);
    return d;
}
const m = async() =>{
    const d = await main();
    console.log(d);
}
m();





