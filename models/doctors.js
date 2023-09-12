const Joi = require('joi');

const doctorCreateSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  middle_name: Joi.string().required(),
  longitude: Joi.number().min(-180).max(180).required(),
  latitude: Joi.number().min(-90).max(90).required(),
  start_date: Joi.date().iso().required(),
  end_date: Joi.date().iso().required(),
  age: Joi.number().integer().min(18).required(),
  gender: Joi.string().valid('Male', 'Female').required(),
  position: Joi.string().required(),
  image: Joi.string().allow(null),
  created_at: Joi.date().iso(),
  updated_at: Joi.date().iso(),
});

module.exports = doctorSchema;
