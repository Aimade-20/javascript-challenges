 
 const p=require("prompt-sync")()
 const arry =[];
 let voyelles = ['e', 'a', 'u','o','i','y'];
 let counts = {};

function  voyel()
{

    let chain =p("Entrer une chaîne :");
    chain = chain.toLowerCase(); 
    arry.push(chain)

for (let i of voyelles)
{
    counts[i] = 0;
}

for (let letter of chain) 
{
    if (counts.hasOwnProperty(letter)) {
        counts[letter]++;
    }
}
console.log("Nombre de voyelles : ", counts)
}
 voyel()

 

 

 