let asignarFunciones = () => {
  let btnComo = document.getElementById('btnComo');
  btnComo.addEventListener('click', getDataForm);
}

let getDataForm = () => {
  let monto = document.getElementById('monto').value;
  let interes = document.getElementById('interes').value;
  let cuotas = document.getElementById('cuotas').value;
  calcularCuota(monto, interes, cuotas);
}

let calcularCuota = (monto, interes, cuotas) => {
  let porcentajeInteres = interes / 100;
  let interesFinal = parseInt(monto) * porcentajeInteres;
  let montoFinal = parseInt(monto) + parseInt(interesFinal);
  let cuotaFinal = montoFinal / cuotas;
  let mensaje = document.getElementById('mensaje');
  mensaje.innerHTML = `¡NO TE PREOCUPES! PUEDES PAGARLO EN ${cuotas} DE $${cuotaFinal}`;
}