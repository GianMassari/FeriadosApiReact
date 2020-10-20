import React from 'react';


class FormDatos extends React.Component{
constructor(props){
super(props)
this.state={
  anio:"2020",
  pais:"AR",
}


//SETEO DE LAS FUNCIONES
this.handlerSelectPais = this.handlerSelectPais.bind(this);
this.handlerSelectAnio = this.handlerSelectAnio.bind(this);
this.consultarFeriados=this.consultarFeriados(this);
this.consultarFinDeSemana=this.consultarFinDeSemana(this);
}

handlerSelectPais(event){
  let pais = event.target.value;
  this.setState({
    pais:pais,
  })
  }

  handlerSelectAnio(event){
    let anio = event.target.value;
    this.setState({
      anio:anio,
  })
  }

  consultarFeriados(){
    this.props.handlerFeriadoApi(this.state.anio,this.state.pais,"BotonFeriado");
  }

  consultarFinDeSemana(){
    this.props.handlerFinDeSemanaApi(this.state.anio,this.state.pais,"BotonFinDe");
    
  }

  consultarProximoFeriado(){
    this.props.handlerProximoFeriadoApi(this.state.anio,this.state.pais,"BotonProximo");
    
  }
    
  

  render(){
     return(
<div class="form-group border">
  <div className="col-4 offset-4">
  <label for="paises">Paises</label>
  <select class="form-control mb-2" id="paises" name="paises" onChange={this.handlerSelectPais}>
    <option value="AR" selected>AR</option>
    <option value="US">US</option>
    <option value="ES">ES</option>
    <option value="UY">UY</option>
  </select>
  </div>
  <div className="col-4 offset-4">
  <label for="anio">Año</label>
  <select class="form-control mb-2" id="anio" name="anio" onChange={this.handlerSelectAnio}>
    <option value="2020" selected>2020</option>
    <option value="2021">2021</option>
    <option value="2020">2022</option>
    <option value="2023">2023</option>
  </select>
  </div>
  <div className="d-flex justify-content-center"> 
  <button onClick={this.consultarFeriados} class="btn btn-primary m-1">
    Consultar Feriados
  </button>
  <button onClick={this.consultarFinDeSemana} class="btn btn-primary m-1" >
    Consultar fin de Semanas
  </button>
  <button onClick={this.consultarFinDeSemana} class="btn btn-primary m-1">
    Consultar Proximos Feriados
  </button>
  </div>
</div>
     )
    }
}

export default FormDatos;