import React from 'react';

class formFeriados extends React.Component{
constructor(props){
super(props)
this.state={

 }

}

render(){
  const feriados= this.props.feriado;
  const contenido= feriados.map((element) =>
  <tr>
  <th scope="row">{element.countryCode}</th>
  <td >{element.date}</td>
  <td >{element.localName}</td>
  <td >{element.name}</td>
  <td >{element.fixed}</td>
  <td >{element.global}</td>
  <td >{element.launchYear}</td>
 </tr>
  )

  

return(
     <div>
       <h2 className="d-flex justify-content-center">Feriados del año</h2>
<h3 className="d-flex justify-content-center">Cantidad de Feriados: {this.props.cantidad}</h3>
<table className="table">
<thead className="thead-dark">
 <tr>
   <th scope="col">Codigo de Pais</th>
   <th scope="col">Fecha</th>
   <th scope="col">Nombre local</th>
   <th scope="col">Nombre en ingles</th>
   <th scope="col">Fijo</th>
   <th scope="col">Global</th>
   <th scope="col">Fecha de creacion</th>
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


 