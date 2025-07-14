class newespaconave{
    constructor(name, year, country, destination, missions) {
        this.name = name;
        this.year = year;
        this.country = country;
        this.destination = destination;
        this.missions = missions;

    }
    getDetails() {
        return `Name: ${this.name}, Year: ${this.year}, Country: ${this.country}, Destination: ${this.destination}`;
    }
    addMission(mission) {
        this.missions.push(mission);
    }

}
let observatory = new newespaconave("observatory", "2023", "USA", "Mars");
console.log(observatory.getDetails());