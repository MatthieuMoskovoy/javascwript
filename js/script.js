alert("Salut !, j'espère pouvoir t'apprendre avec mon site internet les bruits de certains mobs dans minecraft !, si ce n'est pas le cas pas grave, passe une bonne journée :)")

const bruitage = event =>  {  // fonctions pour choisir et joué le bon son
    
    let animal = event.target.title;  // choisi le nom de l'animal en fonction du click fait dans le paramètres element
    document.querySelectorAll('Audio').forEach(element => {
        element.pause() // met en pause tout les sons ou l'utilisateur n'a pas cliqué
    });
   //enlever tout les autres sons 
    document.getElementById(animal).play(); // joué le son
    alert(animal) // le nom de l'animal
    
}

const listItems = document.querySelectorAll("#js090_test1 div img") // fonctions pour les images



listItems.forEach(element => {   // pour le click de chaque images
    element.addEventListener('click',bruitage)
})


window.addEventListener("load",listItems)

const button = document.getElementById('clickme') // fonction du boutons en bas 

const disableButton =() => { // fonctions pour désactiver le boutons et changer quelques petites choses
    button.disabled = true
    document.getElementById('clickme').innerHTML="MINECRAFTTTTTTT"
    document.getElementById('clickme').style.backgroundColor='green'
    document.body.style.backgroundImage="url(./images.jpg)"
    document.getElementById('clickme1').play();

};

button.addEventListener('click', disableButton); //  click du boutons en bas 



