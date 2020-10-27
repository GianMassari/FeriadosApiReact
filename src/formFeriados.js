import React from 'react';

class formFeriados extends React.Component{
constructor(props){
super(props)
this.state={

 }

}

render(){
  function VerFixed(props){
    let fixed=props.fixed
    if(fixed===true){
 return <td >Es Fijo</td>
    }else{
     return <td >No es Fijo</td>
    }
   }
   function VerGlobal(props){
    let global=props.global
    if(global===true){
 return <td >Es global</td>
    }else{
     return <td >No es global</td>
    }
   }
   function VerFecha(props){
    let fecha=props.fecha
    if(fecha!=null){
      return <td>{fecha}</td>
    }else{
      return <td>No hay fecha Registrada</td>
    }
  }

  const feriados= this.props.feriado;
  const contenido= feriados.map((element) =>
  <tr>
  <th scope="row">{element.countryCode}</th>
  <td >{element.date}</td>
  <td >{element.localName}</td>
  <td >{element.name}</td>
  <VerFixed fixed={element.fixed}/>
  <VerGlobal global={element.global}/>
  <VerFecha fecha={element.launchYear}/>
 </tr>
  )
  
  

return(
     <div>
       <h2 className="d-flex justify-content-center">Feriados del año</h2>
<h3 className="d-flex justify-content-center">Cantidad de Feriados: {this.props.cantidad}</h3>
<table className="table table-bordered">
<thead className="thead-dark">
 <tr>
   <th className="justify-content-center" scope="col">Codigo de Pais</th>
   <th className="justify-content-center" scope="col">Fecha</th>
   <th className="justify-content-center" scope="col">Nombre local</th>
   <th className="justify-content-center" scope="col">Nombre en ingles</th>
   <th className="justify-content-center" scope="col">Fijo</th>
   <th className="justify-content-center" scope="col">Global</th>
   <th className="justify-content-center" scope="col">Fecha de creacion</th>
 </tr>
</thead>
<tbody>
{contenido}
</tbody>
</table>
     </div>
  )
}
}
export default formFeriados;


 