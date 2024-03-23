import FormTravel from "./Forms/FormTravel";

const LayoutForm = ({title}) => {

  /*Componente funcional encargado de renderizar el formulario
  recibiendo párametro 'title' enviando desde el componente de AppRouter.js
  */
  return (
    <>
    <div className="container mt-5">
        <div className="row">
          <div className="content-info col-md-6">
            <h1 className="text-center align-items-center"> {`Hola, bienvenido, sabemos que quieres viajar en ${title}`}</h1>
            <p className="text-center">Por favor, diligencia el siguiente formulario.</p>
          </div>
          <div className="content-form col-md-6">
              <FormTravel titleForm={title} />  
          </div>   
        </div>
    </div>
    </>
    
  );
};

export default LayoutForm;
