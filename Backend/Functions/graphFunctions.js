import Graph from "graphology"
import Vertex from "../Classes/Vertex.js"
import Edge from "../Classes/Edge.js"
import Post from "../Classes/Post.js"
import Club from "../Casses/Club.js"
import Event from "../Classes/Event.js"
import {emailToAscii, emailSplit} from "./SignUp.js"
/*
  Graph Functions
  - holds the functions for the graph 
  
 Functions: 
 - addToGraph(vertex) : adds vertex to the graph and sets the hash for that vertex's Id as an attribute returns Boolean
 - addEdgeBetween(fromVertex, toVertex, isClubManager) : adds directed edge between the two vertex's and sets the attribute as true or false depending on the value of isClubManager  
 - getVertex(email) : parses email and turns it into an Id then gets the Vertex associated with that ID in the graph

  notes 3/31
  - not sure if we need the hash and not sure if the hash will result in conflicts?
*/
const g = new Graph();
export default function addToGraph(vertex){
    if (!(vertex instanceof Vertex) || g.hasNode(vertex)){
        return false;//returns false if vertex is already in the graph or if the vertex given isn't a vertex
    }
    g.addNode(vertex);
    g.setNodeAttribute(vertex, 'Id', vertex.getHash(),);
    return true;

}

export default function addEdgeBetween(fromVertex, toVertex, isClubManager){

   if(!(fromVertex instanceof Vertex) || !(toVertex instanceof Vertex)){
    return false;
   }
    const e = g.addEdge(fromVertex, toVertex);
    g.setEdgeAttribute(e, 'isClubManager', isClubManager);
    return true;
}

export default function getVertex(email){
    const a = emailSplit(email);
    const e = emailToAscii(a[1]);
    return g.getAttribute(e);
}
