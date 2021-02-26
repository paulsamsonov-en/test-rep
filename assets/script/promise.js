'use strict'

console.log('search');

const requst = new Promise((resolve,reject)=>{
	setTimeout(()=>{
console.log('load data');
const soldier ={
	weapon: "AK",
	armor: 1000,
	health: 100
};
resolve (soldier);

	}, 2000)

})
requst.then((data)=>{
data.bazooka = true;	
console.log(data);	
}).then ((data)=>{
	console.log("finish");
})