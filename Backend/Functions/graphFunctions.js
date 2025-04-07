import Graph from "graphology"
import Vertex from "../Classes/Vertex.js"
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
 - getOutgoingEdges(vertex) : returns iterable of outgoing edges
 - removeEdge(from, to) : returns true if it was successful
 - removeVertex(vertex) : returns true if successful

  notes 3/31
  - not sure if we need the hash and not sure if the hash will result in conflicts?
*/
const g = new Graph();
export function addToGraph(vertex){
    if (!(vertex instanceof Vertex)) return false;

    const id = vertex.getHash();
    if (g.hasNode(id)) return false;

    g.addNode(id, { vertex });
    return true;

}

export function addEdgeBetween(fromVertex, toVertex, isClubManager){

   if(!(fromVertex instanceof Vertex) || !(toVertex instanceof Vertex)){
    return false;
   }
    const e = g.addEdge(fromVertex, toVertex);
    g.setEdgeAttribute(e, 'isClubManager', isClubManager);
    return true;
}

export function getVertex(email){
    const a = emailSplit(email);
    const e = emailToAscii(a[1]);
    return g.getNodeAttribute(e, 'vertex');
}

export function getOutgoingEdges(vertex){
    let i = vertex.getHash();
    let n = g.getNodeAttribute(i, 'vertex');
    return g.outEdges(n); 
}

export function removeEdge(from, to){
    if(g.hasEdge(from.getHash(), to.getHash())){
        g.dropEdge(from.getHash(), to.getHash());
        return true;
    }
    return false;
}
export function removeVertex(vertex){
    if(!(vertex instanceof Vertex) || vertex == null || !(g.hasNode(vertex.getHash()))){
        return false;
    }
    const i = vertex.getHash();
    g.dropNode(i);
    return true;
}
