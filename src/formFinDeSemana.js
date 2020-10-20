import React from 'react';




class formFinDeSemana extends React.Component{
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
          <h2 className="d-flex justify-content-center">Fines de Semanas</h2>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Fecha de inicio</th>
      <th scope="col">Fecha de fin</th>
      <th scope="col">Dias</th>
      <th scope="col">Feriado Puente</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     <th scope="row">{this.state.countryCode}</th>
     <td>{this.state.date}</td>
     <td>{this.state.localName}</td>
     <td>{this.state.name}</td>
    </tr>
  </tbody>
</table>


        </div>
     )

     
    }
}

export default formFinDeSemana;