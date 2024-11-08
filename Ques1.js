function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function(xp) {
    if (xp < 1 || xp > 10) {
        console.log("Please enter a number between 1 and 10.");
        return;
    }

    this.points += xp;

    while (this.points >= 10) {
        this.points -= 10;
        this.lvl += 1;
    }
};

Player.prototype.describe = function() {
    // Correct syntax for template literals
    return `${this.name} is level ${this.lvl} with ${this.points} experience points.`;
};

let player1 = new Player('Prabh');
let player2 = new Player('Reet');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe());
console.log(player2.describe());