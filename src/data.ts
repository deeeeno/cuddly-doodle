interface Human{
    name:string;
    age:number;
}
// array
const member:{name:string,age:number}[] = [];
member.push({name:'dino',age:27});

// object
function getUser(user:object){
    console.log(user);
}
getUser([1,2,3]);

// tuple
let t:[string,boolean,number];
t = ['1',true,1];

// enum
enum check{unchecked,checked,unknown}
const Status = check.checked;
console.log(Status);


// any vs object
function anyTest(obj:any){
    console.log(obj.a);
}
anyTest({c:1});
anyTest({a:1});

function objectTest(obj:object){
    // console.log(obj.a);
}
objectTest({c:1});
objectTest({a:1});


// void, never
function print(msg:string):void{
    console.log(msg);
}

let a = "string";
console.log(typeof a);
let b:string = "string";
console.log(typeof b);

const dino : {
	name:string;
	age?:number;
} = {name:'dino'};
console.log(dino.name);