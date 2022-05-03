type Calculate = (a:number,b:number)=>number;
const add:Calculate = (x,y)=>x+y;

type Exception = {kind:string,trace:string};
type Log = {
		(level:string,message:string):void
		(level:string,exception:Exception):void
};
const LOG:Log = (level,message)=>{
		if(typeof message === "string") console.log(`[${level}] ${message}`);
		else
			console.log(`[${level}] ${message.kind} : ${message.trace}`);
};

type Encode = {
    (message:string):void
    (message:string,encode:string):void
};
const encode:Encode = (message,encode:string = 'utf-8')=>{
    console.log(message, encode);
};