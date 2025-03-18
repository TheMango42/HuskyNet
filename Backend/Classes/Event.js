import Club from "./Club.js"
class Event extends Club{
    
    #name = null;
    #date = null;
    #time = null;
    #location = null;
    #description = null;
    constructor(club, name, date, time, location, description) {
        if (!(club instanceof Club)) {
            throw new Error("Club must be an instance of Club.");
        }
        super(club.getName(), club.getPresident());
        this.#name = name;
        this.#date = date;
        this.#time = time;
        this.#location = location;
        this.#description = description;
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

