import React from 'react';




class formProximoFeriado extends React.Component{
constructor(props){
super(props)
this.state={
    anio:"",
    pais:"",
    fechaInicio:this.props.anio,
    fechaFin:this.props.pais,
dias:this.props.date,
feriadoPuente:this.props.localName,
 }
}
    render(){
     return(
        <div>
           <h2 className="d-flex justify-content-center">Proximos Feriados</h2>
<table class="table">
  <thead class="thead-dark">
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
    <tr>
     <th scope="row">{this.state.countryCode}</th>
     <td>{this.state.date}</td>
     <td>{this.state.localName}</td>
     <td>{this.state.name}</td>
     <td>{this.state.fixed}</td>
     <td>{this.state.global}</td>
     <td>{this.state.launchYear}</td>
    </tr>
  </tbody>
</table>


        </div>
     )

     
    }
}

export default formProximoFeriado;