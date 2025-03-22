class Post{
    #postid = null;
    #image = null;
    #description = null;  
    constructor(id, image, description){
        this.#postid = id;
        this.#image = image;
        this.#description = description;
    }
    constructor(id, description){
        this.#postid = id;
        this.#description = description;
    }
    getPostId(){
        return this.#postid;
    }
    getImage(){
        return this.#image;
    }
    getDescription(){
        return this.#description;
    }
    setImage(){
        
    }
}