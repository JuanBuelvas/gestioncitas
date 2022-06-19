console.log("Hola Mundo");

let GridTable = () => {
    fetch('http://localhost:3000/sistemaSalud/citas',{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((response) =>{
        return response.json()
    })
    .then((data)=>{
        renderTable(data)
    })
}

GridTable();

let renderTable= (data) => {
    const table = document.querySelector('.table');

    var bodytable = document.createElement('tbody');
    bodytable.className = "tbody";
    table.appendChild(bodytable);

    for (let i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
      
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
      
        var text1 = document.createTextNode(data[i].fecha);
        var text2 = document.createTextNode(data[i].paciente);
        var text3 = document.createTextNode(data[i].medico);
        var text4 = document.createTextNode(data[i].descripcion);
      
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
      
        bodytable.appendChild(tr);
    }
}

//Metodo CREATE(POST)
let createItem = () => {
    const fecha = document.querySelector('#txtfecha').value
    const paciente = document.querySelector('#txtpaciente').value
    const medico = document.querySelector('#txtmedico').value
    const descripcion = document.querySelector('#txtdescripcion').value

    let newCita = {
        "fecha": fecha,
        "paciente": paciente,
        "medico": medico,
        "descripcion": descripcion

    }

    fetch('http://localhost:3000/sistemaSalud/citas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCita)
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            renderResult(true)
        })
        .catch((err) => {
            renderResult(false)
        })

        
}

let renderResult = (result) => {
    const form = document.getElementById('form');
    const textResult = document.querySelector('#resultado');
    if (result) {
        textResult.textContent = 'Guardado exitosamente'
    } else {
        textResult.textContent = 'No se pudo Guardar'
    }
    //se oculta el modal
    var myModalEl = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
    //se limpia la tabla
    const tableBody = document.querySelector('.tbody')
    tableBody.remove();
    //se llama al metodo de la tabla para cargar los datos actualizados
    GridTable();

    //textResult.reset();
    form.reset();
    textResult.textContent = ''
}