const divId = document.getElementById("divId");
const textGirl = document.querySelector(".textGirl");
const btnMolestar = document.getElementById("btnMolestar");
const pepino = document.querySelector(".pepino");
const calculo1 = document.getElementById("calculo1");
const calculo2 = document.getElementById("calculo2");
const formulario = document.getElementById("formulario");
const result = document.querySelector(".result");

btnMolestar.addEventListener("click", molestar);
formulario.addEventListener("click", calcularSuma);

let contador = 0;
let img = document.createElement("img");
img.setAttribute(
  "src",
  "https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-anime-girl-smile-expression-png-image_6351807.png"
);
img.style.width = "300px";

divId.appendChild(img);

function molestar() {
  contador++;

  switch (contador) {
    case 1:
      img.src =
        "https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-anime-girl-happy-expression-png-image_6351806.png";
      textGirl.textContent = "Hey, NO! presione ese boton 😟";
      break;
    case 2:
      img.src =
        "https://www.pngplay.com/wp-content/uploads/12/Anime-Face-Transparent-File.png";
      textGirl.textContent = "Ah! 😳";
      break;
    case 3:
      img.src =
        "https://i.pinimg.com/originals/40/0c/49/400c49d0be13b9e334866b410a3b1f7e.png";
      textGirl.textContent = "N-Nooooooooooo!!";
      break;
    case 5:
      img.src =
        "https://images.fineartamerica.com/images/artworkimages/medium/3/8-ahegao-danilov-ilya-transparent.png";
      textGirl.textContent = "Ah!,ah!,ah! 😖";
      break;
    case 7:
      img.src =
        "https://chpic.su/_data/stickers/a/Animefaces_Pack/Animefaces_Pack_002.webp";
      textGirl.textContent = "ih!,ih!,ih! 😖";
      break;
    case 9:
      img.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlILmG_k3SVA20XzmZpb51VYOWR9mJYhKNYw&usqp=CAU";
      textGirl.textContent = "Ah!,ah!, yamete kudasai!!";
      break;
    case 11:
      img.src =
        "https://mir-s3-cdn-cf.behance.net/projects/404/437645118034465.Y3JvcCw1MjczLDQxMjQsMCw5Mzk.png";
      textGirl.textContent = "Itteruuuu !!!";
      break;
    case 12:
      img.src =
        "https://www.pngplay.com/wp-content/uploads/12/Anime-Face-PNG-Photos.png";
      textGirl.textContent = "Te dije que no presionaras el boton, bakka!!";
      break;
  }

  if (contador <= 11) {
    btnMolestar.style.width = 40 + contador * 4 + "px";
    btnMolestar.style.height = 40 + contador * 4 + "px";
    btnMolestar.style.borderRadius = "50px";
    pepino.style.fontSize = 10 + contador * 3.5 + "px";
    if (contador == 11) {
      pepino.textContent = "💥";
    }
  } else {
    btnMolestar.style.width = "40px";
    btnMolestar.style.height = "25px";
    pepino.style.fontSize = "14px";
    pepino.textContent = "💀";
  }
}

function calcularSuma() {
  // obtener los valores de los elementos de entrada y convertirlos a numeros.
  const num1 = parseInt(calculo1.value);
  const num2 = parseInt(calculo2.value);

  //verificar que los calores ingresados son numericos.
  if (isNaN(num1) || isNaN(num2)) {
    console.warn("los valores ingresados no son mumericos");
  } else {
    //sumar los nuemros.
    let resultado = num1 + num2;

    //mostrar resultado.
    console.log(resultado);
    result.textContent = `El resultado es: ${resultado}`;
  }
}
