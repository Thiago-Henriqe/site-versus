// Script para o manu lateral para celular

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Script para os slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


let slideIndexx = 0;
showSlidess();

function showSlidess() {
  let s;
  let slidess = document.getElementsByClassName("mySlides2");
  let dotss = document.getElementsByClassName("dot2");
  for (s = 0; s < slidess.length; s++) {
    slidess[s].style.display = "none";  
  }
  slideIndexx++;
  if (slideIndexx > slidess.length) {slideIndexx = 1}    
  for (s = 0; s < dotss.length; s++) {
    dotss[s].className = dotss[s].className.replace(" active2", "");
  }
  slidess[slideIndexx-1].style.display = "block";  
  dotss[slideIndexx-1].className += " active2";
  setTimeout(showSlidess, 3000); // Change image every 3 seconds
}





// script para o form

function validarForm() {
  if (document.formbarbaro.nome.value === "") {
      alert("Preencha o nome por favor!");
      document.formbarbaro.nome.focus();
      document.getElementById("nome").style.backgroundColor = "red";
      document.getElementsByTagName("label")[0].style.color = "blue";
      document.getElementById("msgErroNome").style.color = "red";
      document.getElementById("msgErroNome").innerHTML = "Erro!";
      console.log("Erro no nome");
      return false;
  }
  else if (document.formbarbaro.termos.checked === false) {
      alert("É preciso concordar com os termos");
      return false;
  }
  else if (document.formbarbaro.arma.value === "") {
      alert("Escolha seu time do coração!");
      return false;
  }
}