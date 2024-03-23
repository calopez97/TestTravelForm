import React, {useState, useEffect} from 'react';
import SuccessModal from '../Modals/SuccessModal';
import Form from '../Validations/Form';


const FormTravel = ({titleForm}) => {

    /*STATES */
    /*Valor y/o estado inicial para el value de input range. */
    const [ageValue, setAgeValue] = useState(18);
    /*Valor y/o estado inicial para el abrir o cerrar el modal.*/
    const [openModal, setOpenModal] = useState(false);
    /*Valor y/o estado inicial para el formulario. */
    const [form, setForm] = useState({
        type: titleForm,
        name: "",
        email: "",
        phone: "",
        age: ageValue,
    });
    
    /*Valor y/o estado inicial correspondiente a cada input del formulario.*/
    const [errors, setErrors] = useState({
        name: "Por favor, ingrese sólo texto.",
        email: "Por favor, dígite un correo válido.",
        phone: "Por favor, ingrese sólo números.",
        range: "Por favor, selecciona tu edad",
    });

    
    /*Hook encargado de setear el campo 'type'(Clasifica el formulario.) dentro del formulario una vez haya detectado
    cambios desde el menu.*/ 
    useEffect(()=>{
        setForm({
            ...form,
            type:titleForm,
        });
        /*Sí se detecta un cambio en el parametro titleForm se setean valores en formulario 
        y a su vez se resetea el formulario de lado del cliente.*/ 
        document.getElementById("form-travel").reset();
    },[titleForm]);

    
    /*Función encargada de detectar cualquier cambio en los campos
    name, email, phone y actualizar y/o setear los valores del formulario declarado anteriormente.*/
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    };

    /*Función encargada de detectar cualquier cambio en el
    campo rangeAge y actualizar y/o setear los valores del formulario y variables declarados
    anteriormente.*/
    const handleChangeRange = (e) => {
        setAgeValue(e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        });
    };

    /*Función encargada de manejar el submit o envio de nuestro formulario 
    imprimiendo en consola los valores en cada campo válidado, resetear el formulario y abrir el
    modal de confirmación de envio de datos, por último, dado a los requerimientos establecidos, 
    el modal se cierra pasados 5 seg. */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.table(form);
        let registerForm = document.getElementById("form-travel");
        registerForm.reset();
        setAgeValue(18)
        setOpenModal(true);
        setTimeout(() => {
            setOpenModal(false);
        }, 5000);
    };

    return (
        <>
            <Form
                className="form-travel"
                id="form-travel"
                onSubmit={handleSubmit}
            >
                <div className="form-container">
                    <h3 className="section-title">{`Formulario de viaje ${titleForm}`}</h3>
                    <div className="form-group">
                        <label htmlFor="InputName" className="form-label">Nombre Completo</label>
                        <input
                            type="text"
                            className="form-control isNotSpecialCharacter minMaxCharacter"
                            name="name"
                            id="InputName"
                            data-minlength="3"
                            placeholder="Escribe el nombre de la empresa"
                            data-maxlength="30"
                            onChange={handleChange} 
                            />

                        <span className="alert-error">{errors.name}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputEmail" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control isEmail"
                            id="InputEmail"
                            placeholder="Escribe el correo electrónico"
                            name="email"
                            onChange={handleChange} />
                        <span className="alert-error">{errors.email}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputPhone" className="form-label">Teléfono de contacto</label>
                        <input
                            type="text"
                            className="form-control allowOnlyNumbers minMaxCharacter"
                            name="phone"
                            id="InputPhone"
                            data-minlength="3"
                            placeholder="Escribe un teléfono de contacto"
                            data-maxlength="30"
                            onChange={handleChange} />
                        <span className="alert-error">{errors.phone}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="customRange1" className="form-label">Rango de edad</label>
                        <input 
                            type="range" 
                            className="form-range"
                            name='age'
                            id="customRange1"
                            min={18}
                            max={100}
                            onChange={handleChangeRange}
                            step={1}
                            value={ageValue}></input>    
                        <span className='age'>{`${ageValue} Años`}</span>
                        <span className="alert-error">{errors.range}</span>
                    </div>
                    <button className="btn btn-primary form-submit">Enviar</button>
                </div>
            </Form>
            <SuccessModal 
                message={`Tu información fue enviada con éxito, estaremos en contacto contigo.`}
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
        </>
    );
};

export default FormTravel;

