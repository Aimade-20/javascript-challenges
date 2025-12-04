const p = require("prompt-sync")()
let nbr = p("entrer pro nombre :");
let nbr1 = p("entrer deu nombre :");

if(nbr > nbr1)
{
    console.log(nbr ,"le plus grand");
}
else
{
    console.log(nbr1 ,"le plus grand");
}