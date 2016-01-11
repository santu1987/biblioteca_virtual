$(".btnLogin").click(function(){ 
	var correo = $("#id_usuario").val(); 
	var clave = $("#id_clave").val();
	if((correo.length != 0) && (clave.length >= 8)){			
		$.ajax({
			url: "validar_usuario",
			type: 'GET',
			data: {"correo":correo,"clave":clave},
			success: function(resp){  		
				if(resp.respuesta == true){	
					if(resp.pregunta == true){
						location.href = "inicio";
					} else {
						var separar = resp.datos.split("$"); 
						$("#id_apellidos").val(separar[0]);
						$("#id_apellidos").attr("readonly","true");
						$("#id_nombres").val(separar[1]);
						$("#id_nombres").attr("readonly","true");
						$("#id_correo").val(separar[2]);
						$("#id_correo").attr("readonly","true");
						$("#pregunta").modal('show');
					}																					
				} else{
					respuesta_modal("respuesta_modal","bg-danger",resp.respuesta);			
				}
			},error: function() {
				respuesta_modal("respuesta_modal","bg-danger","Ocurrio un error al iniciar sesión...");			
			}
		});
	} else {			
		respuesta_modal("respuesta_modal","bg-danger","El correo electrónico y/o contraseña no son validos....");
	}
});

$(".cancelar").click(function(){
	var modal = $(this).attr("id");
	$("#"+modal).modal('hide');
	if(modal == pregunta){
		$("#id_pregunta").val('');
		$("#id_respuesta").val('');
	}
});

$(".guardar").click(function(){
	var accion = $(this).attr("id");
	if(accion == "pregunta"){
		var pregunta = $("#id_pregunta").val();
		var respuesta = $("#id_respuesta").val();
		var correo = $("#id_correo").val();
		if(pregunta.length > 0 && respuesta.length > 0){
			$.ajax({
				url: "guardar_pregunta",
				type: 'GET',
				data: {"correo":correo,"pregunta":pregunta,"respuesta":respuesta},
				success: function(resp){  		
					if(resp.respuesta == true){
						respuesta_modal("respuesta_modal_pregunta","bg-success","La pregunta y respuesta secreta han sido guardadas....");							
						setTimeout(function(){													
							location.href = "inicio";
							$("#id_pregunta").val('');
							$("#id_respuesta").val('');
						},2000);
					}
				},error: function(){
					respuesta_modal("respuesta_modal_pregunta","bg-danger","Ocurrio un error al guardar la pregunta y respuesta secreta....");
				}
			});
		} else {
			respuesta_modal("respuesta_modal_pregunta","bg-danger","Debe indicar una pregunta y su respuesta para poder guardar....");
		}
	}
});