const p =require("prompt-sync")()

let age = p("Demande votre age :");

if(age >= 18)
{
    console.log("Elgibl deux au vote");
}
else
{
    console.log("Non eligible");
}