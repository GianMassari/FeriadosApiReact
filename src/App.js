import React from 'react';

//COMPONENTES
import FormDatos from "./formDatos";


//Funciones


class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
    
   };

 }


 
 /* feriado=objeto */
  render(){
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className="container">
<h1 className="d-flex justify-content-center">Feriados Api</h1>
{/* DONDE SE INSERTAN LOS DATOS */}
<FormDatos updateDatosFeriado={this.setearEstados}/>

      </main>
    
    </div>
  )
}
}

export default App;
