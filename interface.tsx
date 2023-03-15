type Nickname = string;
type HealthBar = number;
type Firends = Array<string>;

//--------Yype alias
type Player = {
  nickname: Nickname;
  healthBar: HealthBar;
};
/* or you can write like this 

type Player = {
    nickname: string,
    healthBar: number
}

*/
const nico: Player = {
  nickname: "Amy",
  healthBar: 10,
};

type Food = string;
const pizza: Food = "taste good";

//team will be one of these ("red" | "blue" | "yellow")
//this is makeing type to have specific values
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

type Player2 = {
  nickname: string;
  team: Team;
  health: Health;
};

const amy: Player2 = {
  nickname: "amy",
  team: "blue",
  health: 5,
};

//--------Interface
//Interface is only used to explain objects's type to typescript, whereas, type is used for so many purposes
//type can specify the types, can have type alias, and can regulate to have specific values like options
//Interface is oftehn used with React.js
// good to put "I" to the interaces name to differentiate
interface IPlayer {
  nickname: string;
  team: Team;
  health: Health;
}

//example
interface Friend {
  name: string;
}
interface Roomate extends Friend {}

const yumi: Roomate = {
  name: "yumi",
};

/* this work the same, but used type

type User ={
    name: string
}
type Roomate = User & {
}

const yumi : Roomate = {
    name:"yumi"
}

*/

interface Users {
  name: string;
}
interface Users {
  lastname: string;
}
//--> two same interface having different obejects, it will combine to one (type cannot do this)
// so better composability with interface
const kate: Users = {
  name: "kate",
  lastname: "kim",
};

//--------Using Type with Interface

//cannot use "new" instance with abstract
//abstract class will be just become normal class in JS

/*

abstract class User {
    constructor(
        protected firstName: string,
        protected lastName: string
    ){}
    abstract sayHi(name:string):string
    abstract fullName():string
}

class Player3 extends User{
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

*/

// so instead of using abstract class, it may be better code with interface (interface is lightweight)
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}
interface Human {
  health: number;
}
class Player3 implements User, Human {
  constructor(
    //when you implement, it should be public
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

//interface can be used for the arguments of function like this
function makeUser(user: User) {
  return "hi";
}
makeUser({
  firstName: "amy",
  lastName: "seo",
  fullName: () => "xx",
  sayHi: (name) => "hihi",
});
