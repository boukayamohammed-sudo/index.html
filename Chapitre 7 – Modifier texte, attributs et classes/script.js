let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", function() {
  titre.innerText = "Titre modifié !";
  titre.classList.toggle("highlight");
  image.setAttribute("src", "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyeDBrdXJqZ3Nha3V3M3V2Nzc3OTVwNDVnNmRwMmIxbm1vaGkwM3QwMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/jDWQL2uPrBNn2/200.gif");
  image.setAttribute("alt", "Nouvelle image");
});

