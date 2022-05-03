//타입 변수 선언
const variable:number = 123;
//물론 값에 대해서 추론도 가능하다.
const whatisit = 123; //whatisit:number;
//타입의 종류
/*
string
number
boolean
null
undefined
object
any
unknown 
등등...
*/

// Array
const member:{name:string,age:number}[] = [];
//or
const members:Array<{name:string,age:number}> = [];
member.push({name:'dino',age:27});

// object - 원시자료형을 제외한 모든 것이 가능하다.
// 단, object는 확실한 타입을 보장하기에 모르는 프로퍼티에 대해 사용할 수는 없다.
function getUser(user:object){
    console.log(user);
}
getUser([1,2,3]);
//any - 말그대로 모든 타입이 가능하다는 것이지. 이는 없는 프로퍼티에 대해서도 접근을 허용.

// any vs object
function anyTest(obj:any){
    console.log(obj.a);
}
function objectTest(obj:object){
    // console.log(obj.a);   error
}
objectTest({c:1});
objectTest({a:1});
anyTest({c:1});
anyTest({a:1});

// tuple
let t:[string,boolean,number];
t = ['1',true,1];

// enum
enum check{unchecked,checked,unknown}
const Status = check.checked;
console.log(Status);

// void, never
function error(msg:string):never{
    throw new Error(msg);
}
function test(unk:string|number){
    switch(typeof unk){
        case 'string':
            unk += 'a';
            console.log('mouse over -> unk is string')
            break;
        case 'number':
            unk += 1;
            console.log('mouse over -> unk is number')
            break;
        default:
            console.log('mouse over -> unk is never')
            break;
    }
}
function declareFunc(){   //declareFunc:void
	while(true){}
}
const expressionFunc = ()=>{while(true){}}; //expressionFunc:never



const dino : {
	name:string;
	age?:number;
} = {name:'dino'};
console.log(dino.name);

type Man = {
    readonly name:string;
    age?:number;
}
const dave:Man = {name:'dave',age:12};
dave.age  = 1000;
//dave.name = 'a';  error
//readonly -> 수정할 수 없어!
const readonlyList:readonly number[] = [1,2,3];
//readonlyList.push(1); error
