const p = require("prompt-sync")()
let arr =[]
let cont = 1

console.log("===To-Do List====")
while(true){
    console.log("-----------------------------------------");
    console.log("1 : Afficher les tâches")
    console.log("2 : Ajouter une tâche")
    console.log("3 : Rechercher une tâche ")
    console.log("4 :  Modifier une tâche")
    console.log("5 : Supprimer une tâche")
    console.log("6 : Changer le statut d’une tâche")
    console.log("7 :Afficher uniquement les tâches terminées / en attente")
    console.log("0 : Quitter ")
    console.log("-----------------------------------------");

    let operation = Number(p("Choisissez une option : "))
   
    if(operation===0){
        break;
    }

    switch(true){
        case operation===1 : Affichertâches(); break
        case operation===2 : Ajoutertâche(); break
        case operation===3 : Recherchertâche(); break
        case operation===4 : Modifiertâche(); break
        case operation===5 : Supprimertâche(); break
        case operation===6 : Marquertacheterminée(); break
        case operation===7 : Affichertâchesterminéesattente();break
    }
}
function Affichertâches(){
    
    const tastru = arr.filter(emp => emp.Doneornot === true)
    console.log(tastru)

    const tasfuls = arr.filter(emp => emp.Doneornot === false)
    console.log(tasfuls)
}

function Ajoutertâche(){
    let id = cont++
    let description = p("Entrez la description de la tâche :")
    let statu = false
    let task = {
        id: id,
        description:description ,
        Doneornot: statu
    }
    arr.push(task)
    console.table(arr);
}
function Recherchertâche(){
  let reche = p("Le nom important que vous recherchez :")
  let result=arr.find(task => task.description === reche);
  console.table(result)

}
function Modifiertâche(){
    let reche = p("la description important que vous changez :")
    let modification =p("Écrivez ce que vous voulez changer :")
    let result = arr.find(task => task.description === reche);
    result.description= modification
}
function Supprimertâche(){
    let reche =Number (p("la description important que vous Supprime :"))
    let indi = arr.findIndex((task) => task.id === reche);
    if (indi === -1 )
    {
        console.log("La tâche n'existe pas ");
    }else{
        arr.splice(indi, 1);
        console.log("Tâche supprimée avec succès ");
    }
}
function Marquertacheterminée(){
    let reche =Number (p("la description important que vous Changer :"))
    let result = arr.find((task) => task.id === reche);
    console.log(result);
    result.Doneornot = true
}
function Affichertâchesterminéesattente(){
    let reche = p("Tâches terminées ou en attente :")

    let result
        if (reche === "terminee")
    {
        result = arr.filter((task) => task.Doneornot === true);
        console.log(result);
    }else if(reche === "attente"){
        result = arr.filter((task) => task.Doneornot === false);
        console.log(result);
    }else {
        console.log("Choix invalide !");
        return;
    }
}
