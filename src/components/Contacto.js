import React from 'react';
import { Formik } from 'formik';
import FormSchema from './FormSchema' 
import '../App.css'
import Navbar from './Navbar';
import uuid from 'uuid/v4'


const Contacto = () => (

<>

<Navbar/>

 <Formik 
      initialValues={{ nombre: '', email: '', textarea: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          values.id=uuid();
          {console.log(values)}
           alert(`${values.nombre}, gracias por comunicarte. Nos contactaremos a la brevedad`)
          setSubmitting(false);
        }, 1000);
      }}
    >{({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    }) => (
      <div className="fon">
      <div class="row">
      <form class="col s12" onSubmit={handleSubmit}>
        <div id="d1" className="input-field col s8">
          <input
            type="text"
            id="first_name"
            name="nombre"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nombre}
            class="validate" 
            color="white"
          />
          <label htmlFor="first_name">Nombre</label>
        <span class="helper-text" data-error="Ingrese su nombre por favor" data-success=" "></span>
            {errors.nombre && touched.nombre && errors.nombre}
        </div>
        <div id="d2" className="input-field col s6 ">
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            class="validate" 
            color="white" 
            auto-complete="off"
          />
          <label htmlFor="email">Email</label>
          <span class="helper-text" data-error="Ingrese un mail valido" data-success=""></span>
          {errors.email && touched.email && errors.email}
        </div>
        <div id="d3" className="input-field col s12">
          <textarea
            type="textarea"
            name="textarea"
            id="textarea1" 
            class="materialize-textarea" 
            color="white"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.textarea}
          ></textarea>
            <label htmlFor="textarea">Escriba su consulta</label>
          {errors.textarea && touched.textarea && errors.textarea}
        </div>
        <button type="submit" name="action" id = "d4" 
         class="btn modal-trigger col s2" data-target="modal1"
         disabled={isSubmitting}>
          {isSubmitting ? 'Enviando' : 'Enviar'}
        </button>
        
        

       </form>
      </div>
      <div>
          <p className="fcontacto"> <b>Sanchez</b> <b>Hurtado</b> Bienes <b>Raices</b><br/>
          <em> Empresa de servicios inmobiliarios y afines, le ofrecemos los siguientes servicios: Ventas – Permutas - Alquileres – Tasaciones – Remates – Informes y Gestiones
            <hr/>Todas las medidas enunciadas son meramente orientativas, las medidas exactas serán las que se expresen en el respectivo título de propiedad de cada inmueble. 
            Todas las fotos, imagenes y videos son meramente ilustrativos y no contractuales. Los precios enunciados son meramente orientativos y no contractuales. </em> </p>
      </div>
        </div>
          
    )}
  </Formik>
  </>
);

export default Contacto;


