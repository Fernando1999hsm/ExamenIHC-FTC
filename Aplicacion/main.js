function previewImage(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
          const imagen=document.getElementById("img"); 
        }
    }
}

const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input");
const searchFormLabel = searchForm.querySelector("label");


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){
    console.log("Your Browser supports speech Recognition");
    searchForm.insertAdjacentHTML("beforeend", '<button class=" btn-outline-dark" type="button" fill #fff><i class="fas fa-microphone"></i></button><br><br>');
    searchForm.insertAdjacentHTML("beforeend",'<h5>Comandos: <b>*activar con voz*</b><br>Al dar click en el boton se debe decir al microfono "INICIO" esperar unos segundos y podra ejecutar cualquier comando que guste, si tiene duda con los comandos, diga "ayuda del sitio" y se le direccionara a una pagina donde encontrara mas informacion sobre los Comandos</h5>');
    searchForm.insertAdjacentHTML("beforeend",'<h1>Historial de Animaciones:</h1>');
    const micBtn = searchForm.querySelector("button");
    const micIcon = micBtn.querySelector("i");

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    //recognition.lang="el-GR";

    micBtn.addEventListener("click", micBtnClick);
    function micBtnClick(){
        if(micIcon.classList.contains("fa-microphone")){//inicia
            recognition.start();
        }else{//detiene
            //recognition.stop();
        }
    }

    recognition.addEventListener("start", startSpeechRecognition);
    function startSpeechRecognition(){
        micIcon.classList.remove("fa-microphone");
        micIcon.classList.add("fa-microphone-slash");
        searchFormInput.focus();
        console.log("Speech Recognition Active");
    }

    recognition.addEventListener("end", endSpeechRecognition);
    function endSpeechRecognition(){
        micIcon.classList.remove("fa-microphone-slash");
        micIcon.classList.add("fa-microphone");
        searchFormInput.focus();
        console.log("Speech Recognition Disconected");
    }

    recognition.addEventListener("result", resultOfSpeechRecognition);
    function resultOfSpeechRecognition(event){
        //console.log(event)
        const currentResultIndex = event.resultIndex;
        const transcript = event.results[currentResultIndex][0].transcript;

        if(transcript.toLowerCase().trim()==="detener micrófono"){//detener por voz
            recognition.stop();
        }else if(!searchFormInput.value){
            searchFormInput.value = transcript;
        }else{
            if(transcript.toLowerCase().trim()==="salir del sitio"){//busca
                var opcion = confirm("Se a iniciado el comando 'Salir del sitio', desea continuar?");
     
                 if (opcion == true) { 
                    window.close();     
                } else {
                    mensaje = "No";
                }
            }else if(transcript.toLowerCase().trim()==="ayuda del sitio"){
                window.open('ayuda.html');
            }else if(transcript.toLowerCase().trim()==="desvanece"){
                searchForm.insertAdjacentHTML("beforeend", '<h3>Ejecutaste la animacion desvanece</h3>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 5000,
                    web: {
                      opacity:[1,0]}
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="reaparece"){
                searchForm.insertAdjacentHTML("beforeend", '<h3>Ejecutaste la animacion reaparece</h3>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 5000,
                    web: {
                        transform:[
                            {offset: 0, value: "scale(1,1)"}
                        ],
                        opacity:[0,1]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="agranda"){
                searchForm.insertAdjacentHTML("beforeend", '<h3>Ejecutaste la animacion agranda</h3>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 8500,
                    web: {
                        transform: [
                            { offset: 0, value: "scale(1, 1)" },
                            { offset: 0.1, value: "scale(2, 2)" },
                            { offset: 0.2, value: "scale(3, 3)" },
                            { offset: 0.3, value: "scale(4, 4)" },
                            { offset: 0.4, value: "scale(5, 5)" },
                            { offset: 0.5, value: "scale(4, 4)" },
                            { offset: 0.5, value: "scale(3, 3)" },
                            { offset: 0.5, value: "scale(2, 2)" },
                            { offset: 0.5, value: "scale(1, 1)" }
                         ]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="reducir"){
                searchForm.insertAdjacentHTML("beforeend", '<h3>Ejecutaste la animacion reducir</h3>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 8500,
                    web: {
                        transform: [
                            { offset: 0, value: "scale(.8, .8)" },
                            { offset: 0.1, value: "scale(.5, .5)" },
                            { offset: 0.2, value: "scale(.3, .3)" },
                            { offset: 0.3, value: "scale(.1, .1)" },
                            { offset: 0.4, value: "scale(.0, .0)" },
                            { offset: 0.5, value: "scale(.1, .1)" },
                            { offset: 0.5, value: "scale(.3, .3)" },
                            { offset: 0.5, value: "scale(.4, .4)" },
                            { offset: 0.5, value: "scale(1, 1)" }
                         ]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="explota"){
                searchForm.insertAdjacentHTML("beforeend", '<h1>Ejecutaste la animacion explota</h1>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 4500,
                    web: {
                        transform: [
                            { offset: 0, value: "scale(1, 1)" },
                            { offset: 0.1, value: "scale(2, 2)" },
                            { offset: 0.2, value: "scale(3, 3)" },
                            { offset: 0.3, value: "scale(4, 4)" },
                            { offset: 0.4, value: "scale(5, 5)" },
                            { offset: 0.5, value: "scale(6, 6)" },
                            { offset: 0.5, value: "scale(7, 7)" },
                            { offset: 0.5, value: "scale(8, 8)" },
                            { offset: 0.5, value: "scale(9, 9)" },
                            { offset: 0.5, value: "scale(20, 20)" }
                         ],
                        opacity: [1,0]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="arriba"){
                searchForm.insertAdjacentHTML("beforeend", '<h3>Ejecutaste la animacion arriba</h3>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 9000,
                    web: {
                        transform: [
                            "translateY(0px)","translateY(-150px)",
                            "translateY(-150px)","translateY(0px)"
                        ]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="abajo"){
                searchForm.insertAdjacentHTML("beforeend", '<h3>Ejecutaste la animacion abajo</h3>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 9000,
                    web: {
                        transform: [
                            "translateY(0px)","translateY(150px)",
                            "translateY(150px)","translateY(0px)"
                        ]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="derecha"){
                searchForm.insertAdjacentHTML("beforeend", '<h3>Ejecutaste la animacion derecha</h3>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 9000,
                    web: {
                        transform: [
                            "translateX(0px)","translateX(150px)",
                            "translateX(150px)","translateX(0px)"
                        ]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="izquierda"){
                searchForm.insertAdjacentHTML("beforeend", '<h3>Ejecutaste la animacion izquierda</h3>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 9000,
                    web: {
                        transform: [
                            "translateX(150px)","translateX(0px)",
                            "translateX(0px)","translateX(150px)"
                        ]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else if(transcript.toLowerCase().trim()==="despegar"){
                searchForm.insertAdjacentHTML("beforeend", '<h1>Ejecutaste la animacion despegar</h1>');
                var anim= just.animate({
                    targets: ".imagen",
                    duration: 1000,
                    web: {
                        transform: [
                            "translateY(0px)","translateY(40px)",
                            "translateY(40px)","translateY(-800px)"
                        ]
                    }
                });
                anim.play();
                just.tools.player(anim);
            }else{
                searchFormInput.value = transcript;
                searchFormLabel.value = transcript;
            }
        }
    }
    }

    
var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);