import React from 'react';
import ReactDOM from 'react-dom';
/**Componente funcional encargado de crear un portal dentro de un elemento 
 * en el DOM utilizando ReactDOM.createPortal();
 */
const SuccessModal = ({message, isOpen, onClose}) => {
    
    /**Sí isOpen es falso no muestra nada */
    if (!isOpen) return null;
    return ReactDOM.createPortal(
        <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className='modal-footer d-flex justify-content-center'>
                        <button type="button" 
                                className="btn btn-primary " 
                                data-bs-dismiss="modal" 
                                aria-label="Close"
                                onClick={onClose}>¡Ok!</button>
                    </div>
                </div>
            </div>
        </div>,
        /**Se toma el elemento DOM el cual va a contener o mostrar nuestro Modal o Portal.*/
        document.querySelector('#portal')
    );

};

export default SuccessModal;
