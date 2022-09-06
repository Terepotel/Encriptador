function cipher() {
    var text = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = text.replace(/e/igm,"enter")
    var txtCifrado = txtCifrado.replace(/o/igm,"over")
    var txtCifrado = txtCifrado.replace(/i/igm,"imes")
    var txtCifrado = txtCifrado.replace(/a/igm,"ai")
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat")

    document.getElementById("rightImg").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text2").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
    }

    function decipher() {
        var text = document.getElementById("inputText").value.toLowerCase();
        var txtCifrado = text.replace(/enter/igm,"e")
        var txtCifrado = txtCifrado.replace(/over/igm,"o")
        var txtCifrado = txtCifrado.replace(/imes/igm,"i")
        var txtCifrado = txtCifrado.replace(/ai/igm,"a")
        var txtCifrado = txtCifrado.replace(/ufat/igm,"u")
    
        document.getElementById("rightImg").style.display = "none";
        document.getElementById("text").style.display = "none";
        document.getElementById("text2").innerHTML = txtCifrado;
        document.getElementById("copy").style.display = "show";
        document.getElementById("copy").style.display = "inherit";
        }

    function copy(){
        var contenido = document.querySelector("texto2");
           contenido.select();
           document.execCommand("copy")
        }


