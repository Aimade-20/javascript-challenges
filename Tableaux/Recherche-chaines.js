const p = require("prompt-sync")()

const arry = [];
for (let i = 0 ; i <3 ;i++)
{
    let chain = p("entrer 3 chaînes de caractères :");
    arry.push(chain)
}
let chainrecher =(p("Entrez la chaîne à rechercher :"));
const index = (elemt) => elemt === chainrecher;
console.log(arry)
if(arry.includes(chainrecher))
{
    console.log(`La chaîne ${chainrecher} a été trouvée à la position `,arry .findIndex(index));
}
else{
    console.log("Cette chaîne n'est pas disponible .")
}
