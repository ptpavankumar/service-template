const Joi = require('joi');
const exp = require('express');

const router = new exp.Router();

// Input data schema
const inputSchema = Joi.object().keys({
  Id: Joi.string().required(),
  name: Joi.string().min(3).max(300).required(),
  dob: Joi.date().required(),
  email: Joi.string().email().required(),
  sex: Joi.string().optional(),
  address: Joi.object().keys({
    number: Joi.number().required(),
    name: Joi.string().required(),
    suburb: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
});

router.post('/schemavalidator', (req, res) => {
  const validationInfo = inputSchema.validate(req.body);
  if (validationInfo.errors) {
    return res.status(400).send({ errors: validationInfo.errors });
  }

  return res.status(201).send('input data is valid!');
});

module.exports = router;
