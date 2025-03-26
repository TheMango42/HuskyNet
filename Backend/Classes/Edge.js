// this will be the edges for the graph
export default class Edge {
    #isClubManager; // boolean to check if the vertex is considered a manager of the club
    #vertices; // holds the Vertices on either end of the edge
    constructor(from, to, isClubManager){
        this.#isClubManager = isClubManager;
        this.#vertices = new Array(from, to);
    }
    constructor(from, to){
        this.#isClubManager = false;
        this.#vertices = new Array(from, to);
    }
    getVertices(){
        return this.#vertices;
    }
    getStatus(){
        return this.#isClubManager;
    }
    setStatus(newstatus){
        this.#isClubManager = newstatus;
    }
}