import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, '¡Demasiado corto!')
    .max(50, '¡Demasiado largo!')
    .required('El nombre es necesario'),
  textarea: Yup.string()
    .min(6, '¡Demasiado corto!')
    .max(700, '¡Demasiado largo!')
    .required('Escribe tu mensaje'),
  email: Yup.string()
    .email('Email invalido')
    .required('El Email es necesario'),
});

export default FormSchema;