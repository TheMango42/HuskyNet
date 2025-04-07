import bcrypt from "bcrypt"
/*
  encryption Functions
  - will be used to encrypt both the password to be stored and the persons ID 
  
 Functions: 
 - haashData(data) : returns encrypted version of your data
 - 

  notes 3/31
  - 
*/

export async function hashData(data){
    const salt = 12;
    return bcrypt.hash(data, salt);
}

export async function Compare(unhashedData, hashedData){
  return bcrypt.compare(unhashedData, hashedData);
}