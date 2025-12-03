const p =require("prompt-sync")()

let number = p("Demande votre age :");

if(number > 0)
{
    console.log("Positif")
}
else if(number < 0)
{
    console.log("Negatif")
}
else
{
    console.log("Zero")
}