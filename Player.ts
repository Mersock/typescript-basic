interface Player {
    id: number;
    name: string;
    hp: number;
    weapon: string;

    attack: () => string
}

let p1:Player = {
    id:1,
    name:"hello player",
    hp:100,
    weapon:"gun",
    attack:():any => {
        return "attack"
    }
};

console.log(p1.attack());
