const p =require("prompt-sync")()

let anne=p("Saisissez l'année que vous recherchez :")
if(anne %400 == 0)
{
    console.log("bissextile");
}
else if(anne % 100 != 0 && anne % 4 == 0)
{
    console.log("bissextile");
}
else{
    console.log("année non bissextile");
}