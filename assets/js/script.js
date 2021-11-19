// Three Arrays with Objects
const radiologia = [ // this is an array
    {                   // this is an object
        hora:'11:00',
        especialista:'IGNACIO SCHULZ',
        paciente:'FRANCISCA ROJAS',
        rut:'9878782-1',
        prevision:'FONASA'
    }
    ,
    {
        hora:'11:30',
        especialista:'FEDERICO SUBERCASEAUX',
        paciente:'PAMELA ESTRADA',
        rut:'15345241-3',
        prevision:'ISAPRE'
    }
    ,
    {
        hora:'15:00',
        especialista:'FERNANDO WURTHZ',
        paciente:'ARMANDO LUNA',
        rut:'16445345-9',
        prevision:'ISAPRE'
    }
    ,
    {
        hora:'15:30',
        especialista:'ANA MARIA GODOY',
        paciente:'MANUEL GODOY',
        rut:'17666419-0',
        prevision:'FONASA'
    }
    ,
    {
        hora:'16:00',
        especialista:'PATRICIA SUAZO',
        paciente:'RAMON ULLOA',
        rut:'14989389-K',
        prevision:'FONASA'
    }
    ]
    
    const traumatologia = [   // this is an array
    {                       // this is an object
        hora:'8:00',
        especialista:'MARIA PAZ ALTUZARRA',
        paciente:'PAULA SANCHEZ',
        rut:'15554774-5',
        prevision:'FONASA'
    }
    ,
    {
        hora:'10:00',
        especialista:'RAUL ARAYA',
        paciente:'ANGÉLICA NAVAS',
        rut:'15444147-9',
        prevision:'ISAPRE'
    }
    ,
    {
        hora:'10:30',
        especialista:'MARIA ARRIAGADA',
        paciente:'ANA KLAPP',
        rut:'17879423-9',
        prevision:'ISAPRE'
    }
    ,
    {
        hora:'11:00',
        especialista:'ALEJANDRO BADILLA',
        paciente:'FELIPE MARDONES',
        rut:'1547423-6',
        prevision:'ISAPRE'
    }
    ,
    {
        hora:'11:30',
        especialista:'CECILIA BUDNIK',
        paciente:'DIEGO MARRE',
        rut:'16554741-K',
        prevision:'FONASA'
    }
    ,
    {
        hora:'12:00',
        especialista:'ARTURO CAVAGNARO',
        paciente:'CECILIA MENDEZ',
        rut:'9747535-8',
        prevision:'ISAPRE'
    }
    ,
    {
        hora:'12:30',
        especialista:'ANDRES KANACRI',
        paciente:'MARCIAL SUAZO',
        rut:'11254785-5',
        prevision:'ISAPRE'
    }
    ]
    
    
    const dental = [  // this is an array
    {                 // this is an object
        hora:'8:30',
        especialista:'ANDREA ZUÑIGA',
        paciente:'MARCELA RETAMAL',
        rut:'11123425-6',
        prevision:'ISAPRE'
    }
    ,
    {
        hora:'11:00',
        especialista:'MARIA PIA ZAÑARTU',
        paciente:'ANGEL MUÑOZ',
        rut:'9878789-2',
        prevision:'ISAPRE'
    }
    ,
    {
        hora:'11:30',
        especialista:'SCARLETT WITTING',
        paciente:'MARIO KAST',
        rut:'7998789-5',
        prevision:'FONASA'
    }
    ,
    {
        hora:'13:00',
        especialista:'FRANCISCO VON TEUBER',
        paciente:'KARIN FERNANDEZ',
        rut:'18887662-K',
        prevision:'FONASA'
    }
    ,
    {
        hora:'13:30',
        especialista:'EDUARDO VIÑUELA	',
        paciente:'HUGO SANCHEZ',
        rut:'17665461-4',
        prevision:'FONASA'
    }
    ,
    {
        hora:'14:00',
        especialista:'RAQUEL VILLASECA',
        paciente:'ANA SEPULVEDA',
        rut:'14441281-0',
        prevision:'ISAPRE'
    }
    ]
     
    
    // Function to print first and last Object of an Array
    
    let printPacientes = (n1,n2) => {
    let arrayName = n1;
    let ultimoIndex = arrayName.length-1;
    let nombrePrimerPaciente = arrayName[0].paciente;
    let nombreUltimoPaciente = arrayName[ultimoIndex].paciente;
    let previsionPrimerPaciente = arrayName[0].prevision;
    let previsionUltimoPaciente = arrayName[ultimoIndex].prevision;
    
    let textoHTMLa = (`<h2>${n2}</h2>Primera atención: ${nombrePrimerPaciente} - ${previsionPrimerPaciente} | Última atención: ${nombreUltimoPaciente} - ${previsionUltimoPaciente}`);
    
    document.write(`<p>${textoHTMLa}</p>`);
    }
    
    printPacientes(radiologia,'Radiología');
    printPacientes(traumatologia,'Traumatología');
    printPacientes(dental,'Dental');
    
    // Printing a table of the Object Array
    var textoHTMLb =
    "<tr><th>Especialidad</th><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
    
        for (var i = 0; i < radiologia.length; i++) {
            textoHTMLb += `<tr>
            <td>Radiología</td>
            <td>${radiologia[i].hora}</td>
            <td>${radiologia[i].especialista}</td>
            <td>${radiologia[i].paciente}</td>
            <td>${radiologia[i].rut}</td>
            <td>${radiologia[i].prevision}</td>
            </tr>`;
            }
        for (var i = 0; i < traumatologia.length; i++) {
            textoHTMLb += `<tr>
            <td>Traumatología</td>
            <td>${traumatologia[i].hora}</td>
            <td>${traumatologia[i].especialista}</td>
            <td>${traumatologia[i].paciente}</td>
            <td>${traumatologia[i].rut}</td>
            <td>${traumatologia[i].prevision}</td>
            </tr>`;
            }
        for (var i = 0; i < dental.length; i++) {
            textoHTMLb += `<tr>
            <td>Dental</td>
            <td>${dental[i].hora}</td>
            <td>${dental[i].especialista}</td>
            <td>${dental[i].paciente}</td>
            <td>${dental[i].rut}</td>
            <td>${dental[i].prevision}</td>
            </tr>`;
            }
    
    document.write('<h1>Listado</h1><table id="cuerpo-tabla"></table></table>');
    document.getElementById("cuerpo-tabla").innerHTML = textoHTMLb;
    