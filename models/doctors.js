const Joi = require("joi");

module.exports.doctorCreateSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  middle_name: Joi.string().required(),
  longitude: Joi.number().min(-180).max(180).required(),
  latitude: Joi.number().min(-90).max(90).required(),
  start_time: Joi.number().required().min(0).max(24),
  end_time: Joi.number().required().min(0).max(24),
  age: Joi.number().integer().min(18).required(),
  gender: Joi.string().valid("Male", "Female").required(),
  position: Joi.string().required(),
});

module.exports.doctorUpdateSchema = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  middle_name: Joi.string(),
  longitude: Joi.number().min(-180).max(180),
  latitude: Joi.number().min(-90).max(90),
  start_time: Joi.number().min(0).max(24),
  end_time: Joi.number().min(0).max(24),
  age: Joi.number().integer().min(18),
  gender: Joi.string().valid("Male", "Female"),
  position: Joi.string(),
}).or(
  "first_name",
  "last_name",
  "gender",
  "position",
  "age",
  "gender",
  "middle_name",
  "longitude",
  "latitude",
  "start_time",
  "end_time"
);

module.exports.doctorGetSchema =Joi.object({
    query: Joi.string(),
    limit: Joi.number().integer().min(1),
    page: Joi.number().integer().min(1),
    orderBy: Joi.string().valid("asc", "desc"),
    sortBy: Joi.string().valid("created_at", "updated_at","first_name","last_name","age","start_time","end_time"),
  })

  module.exports.doctorGetByIdSchema =Joi.number().integer().min(1)