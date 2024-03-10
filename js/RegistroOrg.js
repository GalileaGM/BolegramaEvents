function mostrarFormulario() {
    var tipoUsuario = document.getElementById("TipoUsuario").value;
    var formularioCliente = document.getElementById("formularioCliente");
    var formularioOrganizador = document.getElementById("formularioOrganizador");

    if (tipoUsuario === "C") {
      formularioCliente.style.display = "block";
      formularioOrganizador.style.display = "none";
    } else if (tipoUsuario === "O") {
      formularioCliente.style.display = "none";
      formularioOrganizador.style.display = "block";
    } else {
      formularioCliente.style.display = "none";
      formularioOrganizador.style.display = "none";
    }
  }