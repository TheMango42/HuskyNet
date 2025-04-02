import Graph from "graphology"
import Vertex from "../Classes/Vertex.js"
import Edge from "../Classes/Edge.js"
import Post from "../Classes/Post.js"
import Club from "../Casses/Club.js"
import Event from "../Classes/Event.js"
/*
  Graph Functions
  - holds the functions for the graph 
  
 Functions: 
 - addToGraph(graph, vertex) : adds vertex to the graph and sets the hash for that vertex's Id as an attribute returns Boolean
 - 

  notes 3/31
  - not sure if we need the hash and not sure if the hash will result in conflicts?
*/
const g = new Graph();
export default function addToGraph(vertex){
    if (!(vertex instanceof Vertex) || g.hasNode(vertex)){
        return false;//returns false if vertex is already in the graph or if the vertex given isn't a vertex
    }
    g.addNode(vertex);
    g.setAttribute(vertex.getHash(), vertex);
    return true;

}

export default function addEdgeBetween(fromVertex, toVertex, isClubManager){
    const e = new Edge(fromVertex, toVertex, isClubManager);
    g.addDirectedEdge()
}

