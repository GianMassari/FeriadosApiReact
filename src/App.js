
import React from 'react';

//COMPONENTES
import FormDatos from "./formDatos";
import FormFeriados from './formFeriados';
import FormFinDeSemana from './formFinDeSemana';
import FormProximoFeriado from './formProximoFeriado';

//Funciones
const obtenerFeriados = require("./apiFeriados");
const obtenerFinSemana = require("./apiFeriados");
const obtenerProximosFeriados = require("./apiFeriados");



class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
     anio:"",
     pais:"",
     boton:"",
date:"",
localName:"",
name:"",
countryCode:"",
fixed:false,
global:false,
counties:"",
launchYear:"",
startDate:"",
endDate:"",
dayCount:"",
needBridgeDay:false,

   };

this.handlerFeriadoApi=this.handlerFeriadoApi.bind(this);
this.handlerFinDeSemanaApi=this.handlerFinDeSemanaApi(this);
this.Resultado=this.Resultado(this);
 }


 handlerFeriadoApi(anio,pais,boton){
   obtenerFeriados(anio,pais)
   .then((feriado) =>{
    this.setState({
      anio:anio,
      pais:pais,
      boton:boton,
      date:feriado.date,
       localName:feriado.localName,
       name:feriado.name,
        countryCode:feriado.countryCode,
        fixed:feriado.fixed,
        global:feriado.global,
        counties:feriado.counties,
        launchYear:feriado.launchYear,
     });
   }).catch((err) => {
     alert('El pais que ingreso no es correcto');
   });
 }

 handlerProximoFeriadoApi(anio,pais,boton){
  obtenerProximosFeriados(anio,pais)
  .then((proximoFeriado) =>{
   this.setState({
     anio:anio,
     pais:pais,
     boton:boton,
     date:proximoFeriado.date,
      localName:proximoFeriado.localName,
      name:proximoFeriado.name,
       countryCode:proximoFeriado.countryCode,
       fixed:proximoFeriado.fixed,
       global:proximoFeriado.global,
       counties:proximoFeriado.counties,
       launchYear:proximoFeriado.launchYear,
    });
  }).catch((err) => {
    alert('El pais que ingreso no es correcto');
  });
}

 handlerFinDeSemanaApi(anio,pais,boton){
   obtenerFinSemana(anio,pais)
   .then((finDeSemana) => {
     this.state({
anio:anio,
pais:pais,
boton:boton,
startDate:finDeSemana.startDate,
endDate:finDeSemana.endDate,
dayCount:finDeSemana.dayCount,
needBridgeDay:finDeSemana.needBridgeDay,
     });
   }).catch((err) =>{
     alert('El pais no se encuentra');
   });
 }

Resultado(props) {
   const boton=props.boton;
   if(boton==="BotonFeriado"){
     return <FormFeriados 
     anio= {this.state.anio}
     pais={this.state.pais}
     date={this.state.date}
     localName={this.state.localName}
     name={this.state.name}
     countryCode={this.state.countryCode}
     fixed={this.state.fixed}
     global={this.state.global}
     counties={this.state.counties}
     launchYear={this.state.launchYear}
     />
   }else if(boton==="BotonFinDe"){
return <FormFinDeSemana 
anio={this.state.anio}
pais={this.state.pais}
startDate={this.state.startDate}
endDate={this.state.endDate}
dayCount={this.state.dayCount}
needBridgeDay={this.state.needBridgeDay}
/>
   }else if (boton==="BotonProximo"){
return <FormProximoFeriado 
anio= {this.state.anio}
pais={this.state.pais}
date={this.state.date}
localName={this.state.localName}
name={this.state.name}
countryCode={this.state.countryCode}
fixed={this.state.fixed}
global={this.state.global}
counties={this.state.counties}
launchYear={this.state.launchYear}
/>
   }
 }

  render(){
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="container">
<h1 className="d-flex justify-content-center">Feriados Api</h1>
{/* DONDE SE INSERTAN LOS DATOS */}
<FormDatos handlerFeriadoApi={this.handlerFeriadoApi} handlerFinDeSemanaApi={this.handlerFinDeSemanaApi} handlerProximoFeriadoApi={this.handlerProximoFeriadoApi}/>

{/* RESULTADOS segun el boton apretado*/ }
<this.Resultado boton={this.state.boton}/>

      </main>
    
    </div>
  )
}
}

export default App;
