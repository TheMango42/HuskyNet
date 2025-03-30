import {List, Item} from 'linked-list'
/*
  Event Class
  - Holds the data for each event that is made by each club or person
  
  Variables:
  - name : String
  - date : String
  - time : String
  - location : String
  - Description : String


  notes 3/26
  - May have to change this a bit in the future
*/
export default class Event extends Item{
    #name = null;
    #date = null;
    #time = null;
    #location = null;
    #description = null;
    constructor(name, date, time, location, description) {
        super();
        this.#name = name;
        this.#date = date;
        this.#time = time;
        this.#location = location;
        this.#description = description;
    }
    append(item){
        super.append(item)
    }
    prepend(item){
        super.prepend(item);
    }
    detach(){
        super.detach();
    }
    getName() {
        return this.#name;
    }
    getDate() {
        return this.#date;
    }
    getTime() {
        return this.#time;
    }
    getLocation() {
        return this.#location;
    }
    getDescription() {
        return this.#description;
    }
    setName(name) {
        this.#name = name;
    }
    setDate(date) {
        this.#date = date;
    }
    setTime(time) {
        this.#time = time;
    }
    setLocation(location) {
        this.#location = location
    }
    setDescription(description) {
        this.#description = description;
    }
}

