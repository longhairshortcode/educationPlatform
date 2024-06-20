import Joi from 'joi';

const educatorProfileSchema = Joi.object({
  bio: Joi.string().required(),
  profile_picture_url: Joi.string().uri().required(),
  time_zone: Joi.string().required(),
  subjects: Joi.string().required(),
  grades: Joi.string().required(),
  classes: Joi.string().required(),
  location: Joi.string().required(),
  experience_years: Joi.number().integer().min(0).required(),
  education: Joi.string().required(),
  certifications: Joi.string().required(),
  availability: Joi.string().required()
});

export default educatorProfileSchema;