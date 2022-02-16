export function validateControl(e, errors, attrObject = {}) {
  const fieldName = e.target.name;
  errors[fieldName] = validator(e.target.value, attrObject);
}

export function validateForm(student, errors, fieldArray) {
  fieldArray.forEach((fieldName) => {
    if (fieldName === "joiningDate") {
      errors[fieldName] = validator(student[fieldName], { date: "futureDate" });
    } else if (fieldName === "phone") {
      errors[fieldName] = validator(student[fieldName], { exact: 10 });
    } else {
      errors[fieldName] = validator(student[fieldName], {});
    }
  });
}

export function isFormValid(errors, fields) {
  let isError = true;
  fields.forEach((field) => {
    isError = errors[field].length === 0;
  });
  return isError;
}


function validator(value, attrObject) {
    let errors = [];
    const requiredError = "It is required!";
  
    if (attrObject.date) {
      if (attrObject.date === "futureDate") {
        const futureDateError = "It can't be a future date!";
        const date = new Date(value);
        const isValidDate =
          new Date(date.toDateString()) < new Date(new Date().toDateString());
  
        if (!isValidDate) {
          errors.push(futureDateError);
        } else {
          errors = errors.filter((item) => item !== futureDateError);
        }
      }
    }
  
    if (attrObject.exact) {
      if (value.length !== attrObject.exact) {
        errors.push(`It must be ${attrObject.exact} characters!`);
      } else
        errors = errors.filter(
          (item) => item !== `It must be ${attrObject.exact} characters!`
        );
    }
  
    if (attrObject.min) {
      if (value.length < attrObject.min) {
        errors.push(`It should me of minimum of ${attrObject.min} characters!`);
      } else
        errors = errors.filter(
          (item) =>
            item !== `It should me of minimum of ${attrObject.min} characters!`
        );
    }
  
    if (value.length === 0) {
      errors.push(requiredError);
    } else errors = errors.filter((item) => item !== requiredError);
  
    return errors;
  }
  
