import React from 'react';
import FormFeriados from './formFeriados';
import FormFinDeSemana from './formFinDeSemana';
import FormProximoFeriado from './formProximoFeriado';

const obtenerFeriados = require("./libraryFeriados");
const obtenerFinSemana = require("./libraryFinSemana");
const obtenerProximosFeriados = require("./libraryProximosFeriados");


class FormDatos extends React.Component{
constructor(props){
super(props)
this.state={
  anio:"2020",
  pais:"AR",
  boton:"",
feriado:"",
proximoFeriado:"",
finDeSemana:"",
cantFeriados:0,
}


//SETEO DE LAS FUNCIONES
this.handlerSelectPais = this.handlerSelectPais.bind(this);
this.handlerSelectAnio = this.handlerSelectAnio.bind(this);
this.handlerFeriadoApi=this.handlerFeriadoApi.bind(this);
this.handlerProximoFeriadoApi=this.handlerProximoFeriadoApi.bind(this);
this.handlerFinDeSemanaApi=this.handlerFinDeSemanaApi.bind(this);

}

handlerFeriadoApi(event){
  let botonApretado=event.target.value;
obtenerFeriados(this.state.anio,this.state.pais).then(feriado => {
  let cantidad= feriado.length;
   this.setState({
     boton:botonApretado,
       feriado:feriado,
       cantFeriados:cantidad,
    })
  }).catch((err) => {
    alert(err.message + "catch");
 
  });
}

handlerProximoFeriadoApi(event){
  let botonApretado=event.target.value;
 obtenerProximosFeriados(this.state.pais).then(proximoFeriado =>{
  this.setState({
    boton:botonApretado,
      proximoFeriado:proximoFeriado,
   })
 }).catch((err) => {
   alert('El pais que ingreso no es correcto');
 });
}

handlerFinDeSemanaApi(event){
  let botonApretado=event.target.value;
obtenerFinSemana(this.state.anio,this.state.pais).then(finDeSemana => {
   this.setState({
    boton:botonApretado,
    finDeSemana:finDeSemana,
    })
  }).catch((err) => {
    alert(err.message + "catch");
 
  });
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

  render(){
    let boton;
    if(this.state.boton==="BotonFeriado"){
      boton= <FormFeriados feriado={this.state.feriado} cantidad={this.state.cantFeriados}/>
    }else if(this.state.boton==="BotonFinDe"){
 boton= <FormFinDeSemana finDeSemana={this.state.finDeSemana}/>
    }else if (this.state.boton==="BotonProximo"){
 boton= <FormProximoFeriado proximoFeriado={this.state.proximoFeriado}/>
    }
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
  <button value="BotonFeriado" onClick={this.handlerFeriadoApi} class="btn btn-primary m-1">
    Consultar Feriados
  </button>
  <button value="BotonFinDe" onClick={this.handlerFinDeSemanaApi} class="btn btn-primary m-1" >
    Consultar fin de Semanas
  </button>
  <button value ="BotonProximo" onClick={this.handlerProximoFeriadoApi} class="btn btn-primary m-1">
    Consultar Proximos Feriados
  </button>
  </div>
  {/* RESULTADOS segun el boton apretado*/ }
{boton}
</div>

)
    }
}

export default FormDatos;