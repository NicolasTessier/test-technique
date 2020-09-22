function afficher(perso){
  let liste = document.getElementById("liste")
  document.querySelectorAll("li").forEach(n => {
    liste.removeChild(n)
  });
  let nom = document.createElement("li")
  nom.textContent = "Name : " + perso.name
  liste.appendChild(nom)

  let surnom = document.createElement("li")
  surnom.textContent = "Nickname : " + perso.nickname
  liste.appendChild(surnom)

  let metier = document.createElement("li")
  metier.textContent = "Occupation : " + perso.occupation
  liste.appendChild(metier)

  let saison = document.createElement("li")
  saison.textContent = "Appearance : " + perso.appearance
  liste.appendChild(saison)

  document.getElementById("img").src = perso.img



}

function requete(){
  let xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(JSON.parse(xhr.responseText)[0])
      afficher(JSON.parse(xhr.responseText)[0])
    }
    else if(xhr.readyState == 4 && xhr.status == 500){
      requete()
    }
  }
  xhr.open('GET', "https://www.breakingbadapi.com/api/character/random",true);
  xhr.send()
}

let bouton = document.getElementById("bouton")
bouton.addEventListener("click",requete)

requete()
