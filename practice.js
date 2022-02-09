const proposeDay = (a,b,c) =>{
    return a+b+c
}

console.log(proposeDay("Tanvir" ," + ", "Tanvirer bou"));

let numberArray = [2,5,7,10]
let serialize = numberArray.map(num=>   num.toString())

console.log(serialize);


let name =["Tanvir" , "Adib", "Sazid", "Nawsad" , "Fahim"]

let filtering = name.filter((name)=>{
    if (name.length>4) {
        return name
    } 
    
})

console.log(filtering);