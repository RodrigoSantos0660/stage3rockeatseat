  let marcado=document.getElementById("check")
  marcado.onchange = function marcacheck(){
    let corfundo=document.getElementById("checktrabalhado")
      if(marcado.checked){
          corfundo.style.backgroundColor="red"
      }else{
        corfundo.style.backgroundColor="white"
      }
  }
  function foco(){
    let corfundo = document.getElementById("checktrabalhado")
  corfundo.style.outline = "2px solid black"
  }
  function fora(){
    let corfundo = document.getElementById("checktrabalhado")
  corfundo.style.outline = "none"
  }