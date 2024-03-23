import React from "react";

/*
 * Componente funcional reutilizable en los diferentes formularios de opción de viaje.
 */

const Form = ({ id, className, onSubmit, children }) => {

  let countErrors = 0;
  const defaultMinLength = 3;
  const defaultMaxLength = 30;

  const validateEmail = (element) => {
    let isEmail = element.className.indexOf("isEmail") !== -1;
    let pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (isEmail && !pattern.test(element.value.trim())) {
      element.parentNode.classList.add("error-form");
      countErrors++;
    }
  };

  const minMaxCharacters = (element) => {
    let min = defaultMinLength;
    let max = defaultMaxLength;

    let minMaxCharacter = element.className.indexOf("minMaxCharacter") !== -1;
    let fieldValue = element.value.trim();
    if (minMaxCharacter) {
      //se buscan valores en elemento
      if (element.dataset.minlength) {
        min = element.dataset.minlength;
      }

      if (element.dataset.maxlength) {
        max = element.dataset.maxlength;
      }

      let regexp = new RegExp(`^.{${min},${max}}$`);
      if (fieldValue.match(regexp) === null) {
        element.parentNode.classList.add("error-form");
        countErrors++;
      }
    }
  };

  const isNotSpecialCharacter = (element) => {
    let isNotSpecial =
      element.className.indexOf("isNotSpecialCharacter") !== -1;
    let pattern = new RegExp(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/);
    let number = /[0-9]/;

    if (isNotSpecial && pattern.test(element.value.trim())) {
      element.parentNode.classList.add("error-form");
      countErrors++;
    } else if (isNotSpecial && number.test(element.value.trim())) {
      element.parentNode.classList.add("error-form");
      countErrors++;
    } else {
    }
  };

  const allowOnlyNumber = (element) =>{
    let allowOnlyNumber = element.className.indexOf("allowOnlyNumbers") !== -1;
    let pattern = new RegExp(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/);
    let letters = /[a-zA-Z]/;

    if (allowOnlyNumber && pattern.test(element.value.trim())) {
      element.parentNode.classList.add("error-form");
      countErrors++;
    } else if (allowOnlyNumber && letters.test(element.value.trim())) {
      element.parentNode.classList.add("error-form");
      countErrors++;
    } else {
    }
  };
  
  
  const validateAndSubmit = (e) => {
    e.preventDefault();

    let inputs = e.target.querySelectorAll('input:not([type="submit"])');

    inputs.forEach((element) => {
      element.parentNode.classList.remove("error-form");
      validateEmail(element);
      minMaxCharacters(element);
      isNotSpecialCharacter(element);
      allowOnlyNumber(element);
    });

    if (countErrors <= 0) {
      onSubmit(e);
    }
  };

  return (
    <form className={className} onSubmit={validateAndSubmit} id={id} noValidate>
      {children}
    </form>
  );
};

export default Form;
