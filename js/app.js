window.addEventListener("load",enviar);
function enviar(){
	var boton=document.getElementById("boton");
	boton.addEventListener("click",enviarMensaje);
	mensaje.addEventListener("keyup", deshabilitarBoton);
}

	function enviarMensaje(e){
		e.preventDefault();
		var mensaje=document.getElementById("mensaje");
		var contenedor=document.getElementById("contenedor");
		var panel=document.createElement("div");
		var panelBody=document.createElement("div");
		var check=document.createElement("input");
		var texto=document.createElement("label");
		var tacho=document.createElement("span");
		var contador=1;

		check.setAttribute("type","checkbox");
		panelBody.classList.add("panel-body");
		panel.classList.add("panel","panel-default");
		tacho.classList.add("glyphicon-remove-sign","glyphicon","pull-right");
		texto.innerHTML=mensaje.value;
		mensaje.value= "";
		boton.disabled=true;

		contenedor.appendChild(panel);
		panel.appendChild(panelBody);
		panelBody.appendChild(check);
		panelBody.appendChild(texto);
		panelBody.appendChild(tacho);

		texto.setAttribute("for","id"+contador);
		check.setAttribute("id","id"+contador);
		check.addEventListener("click",tachado);
		tacho.addEventListener("click",eliminar);
	}

	function deshabilitarBoton(){
		if (mensaje.value.trim().length == 0) {
			boton.disabled = true;
		}else{
			boton.disabled = false; 
		}
	}

	function tachado(){
		this.nextSibling.classList.toggle("tachado");
	}

	function eliminar(){
		this.parentElement.parentElement.remove();
	}
