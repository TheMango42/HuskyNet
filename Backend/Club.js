class Club {
    #name = null;
    #members = 0;
    #president = null;
    Club(name, president) {
        this.#name = name;
        this.#members = new Map();
        this.#president = president;
    }

    getName() {
        return this.#name;
    }
    getMembers() {
        return this.#members;
    }
    getPresident() {
        return this.#president;
    }
    setName(name) {
        this.#name = name;
    }
    addMember(member) {
        if(member instanceof Person) {
            this.#members.set(member.getId(), member);
        }
    }
    setPresident(newPres) {
        this.#president = newPres;
    }
}