var Joi = require("joi");
const _ = require("lodash");

const validateandThrowException=(type, data) =>{

    const options = {
      abortEarly: false,
      errors: {
        wrap: {
          label: "'",
        },
      },
      context: { condition: true },
    };
  
    switch (type) {
        case 'TamponProduction': {
          validator = tamponValidator.validate(data, options);
          if (validator !== null && !_.isUndefined(validator.error)){
            throw new Error(validator.error.details["0"]["message"])
          }  
          break;
        }
        case 'TamponByUnit': {
            validator = tamponByUnit.validate(data, options);
            if (validator !== null && !_.isUndefined(validator.error)){
              throw new Error(validator.error.details["0"]["message"])
            }  
          }
          break;
    }
}

const tamponValidator= Joi.object({
    cotton:Joi.number().integer().min(0).required(),
    hemp:Joi.number().integer().min(0),
    string:Joi.number().integer().min(0),
    wrapper:Joi.number().integer().min(0)
})

const tamponByUnit= Joi.object({
    type:Joi.string().valid("regular", "super").required(),
    units:Joi.number().integer().min(0)
})

module.exports={validateandThrowException}