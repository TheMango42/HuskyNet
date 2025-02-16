function Verify(email){
    const a = email.split("@");
    if(a[1].equals("mtu.edu")){
            return 1;
    }
    return 0;
}