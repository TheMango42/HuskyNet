export default class SignUp{

    static emailSplit(email){
        const emailArray = email.split('@'); //splits email at the @ and returns array of the first half (ajsaylor) in [0] and second half (mtu.edu) in [1] 
        return emailArray;
    }

    // split array and put the first half of the array into this function
    static emailToAscii(name){
        const charArray = name.split(''); //splits name into an array of characters to be ascii'd
        var id = '';
        for(let e in charArray){

            let n = charArray[e].charCodeAt(0); // turns each character in the array to ascii value 
            id = id + n.toString(); // adds to an ongoing string

        }
        return id;
    }
    // takes in split email array and returns 1 if good and returns 0 if bad
    static verify(email){
        if (email[1] === 'mtu.edu'){
            return true;
        }
        else{
            return false;
        }
    }
}

