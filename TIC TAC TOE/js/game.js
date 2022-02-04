let casilla;
let btn;
let turno = "x";
let c, f;
let dt = [
  ["c00", "c01", "c02"],
  ["c10", "c11", "c12"],
  ["c20", "c21", "c22"],
];

function cambiarTurno(casillaIn, btnIn, cIn, fIn) {
  //variables del html
  this.casilla = casillaIn;
  this.btn = btnIn;
  this.c = cIn;
  this.f = fIn;

  //cambio de fondo del boton y deshabilitar el boton
  this.btn.style.backgroundImage = "url('images/" + turno + ".png')";
  this.btn.disabled = true;

  //Almacenamiento de valores
  dt[this.c][this.f] = turno;

  //re asigna la variable para cambiar la imagen
  if (turno == "x") {
    turno = "o";
  } else {
    turno = "x";
  }
  validarGanador();
}

function validarGanador() {
  //Validaciones horizontales
  //val 1
  if (dt[0][0] == "x" && dt[0][1] == "x" && dt[0][2] == "x") {
    document.getElementById("winner").innerText = "El ganador es << X >>";
    disabledControls(true);
      
    //cambio de color de borde de la celda
    document.getElementById("1").style.borderColor = "red";
    document.getElementById("2").style.borderColor = "red";
    document.getElementById("3").style.borderColor = "red";
  
} else if (dt[0][0] == "o" && dt[0][1] == "o" && dt[0][2] == "o") {
    document.getElementById("winner").innerText = "El ganador es << O >>";
    disabledControls(true);

    //cambio de color de borde de la celda
    document.getElementById("1").style.borderColor = "red";
    document.getElementById("2").style.borderColor = "red";
    document.getElementById("3").style.borderColor = "red";
  }

  //val 2
  if (dt[1][0] == "x" && dt[1][1] == "x" && dt[1][2] == "x") {
    document.getElementById("winner").innerText = "El ganador es << X >>";
    disabledControls(true);
  
    //cambio de color de borde de la celda
    document.getElementById("4").style.borderColor = "red";
    document.getElementById("5").style.borderColor = "red";
    document.getElementById("6").style.borderColor = "red";


} else if (dt[1][0] == "o" && dt[1][1] == "o" && dt[1][2] == "o") {
    document.getElementById("winner").innerText = "El ganador es << O >>";
    disabledControls(true);
    //cambio de color de borde de la celda
    document.getElementById("4").style.borderColor = "red";
    document.getElementById("5").style.borderColor = "red";
    document.getElementById("6").style.borderColor = "red";
  }

  //val 3
  if (dt[2][0] == "x" && dt[2][1] == "x" && dt[2][2] == "x") {
    document.getElementById("winner").innerText = "El ganador es << X >>";
    disabledControls(true);
    //cambio de color de borde de la celda
    document.getElementById("7").style.borderColor = "red";
    document.getElementById("8").style.borderColor = "red";
    document.getElementById("9").style.borderColor = "red";
  } else if (dt[2][0] == "o" && dt[2][1] == "o" && dt[2][2] == "o") {
    document.getElementById("winner").innerText = "El ganador es << O >>";
    disabledControls(true);
    //cambio de color de borde de la celda
    document.getElementById("7").style.borderColor = "red";
    document.getElementById("8").style.borderColor = "red";
    document.getElementById("9").style.borderColor = "red";
  }

  //Validaciones verticales
  //val 1
  if (dt[0][0] == "x" && dt[1][0] == "x" && dt[2][0] == "x") {
    document.getElementById("winner").innerText = "El ganador es << X >>";
    disabledControls(true);
    
    //cambio de color de borde de la celda
    document.getElementById("1").style.borderColor = "red";
    document.getElementById("4").style.borderColor = "red";
    document.getElementById("7").style.borderColor = "red";
  } else if (dt[0][0] == "o" && dt[1][0] == "o" && dt[2][0] == "o") {
    document.getElementById("winner").innerText = "El ganador es << O >>";
    disabledControls(true);
     //cambio de color de borde de la celda
     document.getElementById("1").style.borderColor = "red";
     document.getElementById("4").style.borderColor = "red";
     document.getElementById("7").style.borderColor = "red";
  }

  //val 2
  if (dt[0][1] == "x" && dt[1][1] == "x" && dt[2][1] == "x") {
    document.getElementById("winner").innerText = "El ganador es << X >>";
    disabledControls(true);
     //cambio de color de borde de la celda
     document.getElementById("2").style.borderColor = "red";
     document.getElementById("5").style.borderColor = "red";
     document.getElementById("8").style.borderColor = "red";
  } else if (dt[0][1] == "o" && dt[1][1] == "o" && dt[2][1] == "o") {
    document.getElementById("winner").innerText = "El ganador es << O >>";
    disabledControls(true);
     //cambio de color de borde de la celda
     document.getElementById("2").style.borderColor = "red";
     document.getElementById("5").style.borderColor = "red";
     document.getElementById("8").style.borderColor = "red";
  }

  //val 3
  if (dt[0][2] == "x" && dt[1][2] == "x" && dt[2][2] == "x") {
    document.getElementById("winner").innerText = "El ganador es << X >>";
    disabledControls(true);
     //cambio de color de borde de la celda
     document.getElementById("3").style.borderColor = "red";
     document.getElementById("6").style.borderColor = "red";
     document.getElementById("9").style.borderColor = "red";
  } else if (dt[0][2] == "o" && dt[1][2] == "o" && dt[2][2] == "o") {
    document.getElementById("winner").innerText = "El ganador es << O >>";
    disabledControls(true);
      //cambio de color de borde de la celda
     document.getElementById("3").style.borderColor = "red";
     document.getElementById("6").style.borderColor = "red";
     document.getElementById("9").style.borderColor = "red";
  }

  //Validaciones diagonales
  //val 1
  if (dt[0][0] == "x" && dt[1][1] == "x" && dt[2][2] == "x") {
    document.getElementById("winner").innerText = "El ganador es << X >>";
    disabledControls(true);
      //cambio de color de borde de la celda
     document.getElementById("1").style.borderColor = "red";
     document.getElementById("5").style.borderColor = "red";
     document.getElementById("9").style.borderColor = "red";
  } else if (dt[0][0] == "o" && dt[1][1] == "o" && dt[2][2] == "o") {
    document.getElementById("winner").innerText = "El ganador es << O >>";
    disabledControls(true);
      //cambio de color de borde de la celda
    document.getElementById("1").style.borderColor = "red";
    document.getElementById("5").style.borderColor = "red";
    document.getElementById("9").style.borderColor = "red";
  }

  //val 2
  if (dt[2][0] == "x" && dt[1][1] == "x" && dt[0][2] == "x") {
    document.getElementById("winner").innerText = "El ganador es << X >>";
    disabledControls(true);
      //cambio de color de borde de la celda
      document.getElementById("3").style.borderColor = "red";
      document.getElementById("5").style.borderColor = "red";
      document.getElementById("4").style.borderColor = "red";
  } else if (dt[2][0] == "o" && dt[1][1] == "o" && dt[0][2] == "o") {
    document.getElementById("winner").innerText = "El ganador es << O >>";
    disabledControls(true);
    //cambio de color de borde de la celda
    document.getElementById("3").style.borderColor = "red";
    document.getElementById("5").style.borderColor = "red";
    document.getElementById("4").style.borderColor = "red";
  }
}

function disabledControls(cond) {
  //deshabilitar botones
  let buttons = document.getElementsByClassName("btn");

  for (x = 0; x < buttons.length; x++) {
    buttons[x].disabled = cond;

    //limpiar fondo de los botones
    if (cond == false) {
      buttons[x].style.backgroundImage = "";
      buttons[x].style.borderColor = "";
    }
  }
}

function reset() {
  //Reinicia las variables del juego
  let buttons = document.getElementsByClassName("btn");
  document.getElementById("winner").innerText = "";
  turno = "x";
  disabledControls(false);
  dt = [
    ["c00", "c01", "c02"], 
    ["c10", "c11", "c12"],
    ["c20", "c21", "c22"],
  ];
}
