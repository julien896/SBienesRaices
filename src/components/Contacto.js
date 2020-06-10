import React,{ useState } from 'react';
import '../App.css'
import Navbar from './Navbar';
import M from 'materialize-css';



const Contacto = () => {
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {dismissible: false});
   
 });
      const [btnDisabled, setBtnDisabled] = useState(true);
const [data,setData] = useState({
email : null,
nombre :null,
textarea : null
});
//const onChange = e => {
//setData({[e.target.name]: e.target.value})
//e.preventDefault();
//};
const { nombre, email, textarea } = data;

//setBtnDisabled = nombre.length < 1 && email.length < 1 && textarea.length < 1;

    return ( 
       <>
       <Navbar/>
<div className="fon">
       <div class="row">
              <form class="col s12"  >
                     <div class="row">
                            <div id="d1" className="input-field col s8">
                            <input placeholder="" name="name" id="first_name" value={nombre} type="text"  class="validate" color="white" minLength='3' required onChange={(nombre) => setBtnDisabled(!nombre.length < 3)} autocomplete='off' />
                            <label for="first_name">Nombre</label>
		<span class="helper-text" data-error="Ingrese su nombre por favor" data-success=" "></span>
                            </div>
                            <div id="d2" className="input-field col s6 ">
                            <input name="email" id="email" type="email" value={email} class="validate" color="white" auto-complete="off"  required onChange={(email) => setBtnDisabled(!email.target.value  )} autocomplete='off'/>
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="Ingrese un mail valido" data-success=""></span>
                            </div>
                            <div id="d3" className="input-field col s12">
                            <textarea name="textarea" id="textarea1" class="materialize-textarea" value={textarea} color="white" required></textarea>
                            <label for="textarea1">Escriba su consulta</label>
                           
                            </div>
		<button id = "d4" data-target="modal1" class="btn modal-trigger col s2" type="submit" name="action" disabled={btnDisabled}>Enviar
			</button>
                            

  
  <div id="modal1" class="modal">
    <div class="modal-content">
      <h4 id="m1">Muchas gracias por comunicarse.</h4><p id="m2"> Su consulta ha sido enviada correctamente. Lo contactaremos a la brevedad</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ok</a>
    </div>
  </div>
<div id="modal2" class="modal">
    <div class="modal-content">
      <h4 id="m1">error</h4><p id="m2"> Su consulta ha sido enviada correctamente. Lo contactaremos a la brevedad</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Ok</a>
    </div>
  </div>
                            
                     </div>
              </form>
               
       </div>
       <p className="fcontacto"> <b>Sanchez</b> <b>Hurtado</b> Bienes <b>Raices</b><br/>
       <em> Empresa de servicios inmobiliarios y afines, le ofrecemos los siguientes servicios: Ventas – Permutas - Alquileres – Tasaciones – Remates – Informes y Gestiones
         <hr/>Todas las medidas enunciadas son meramente orientativas, las medidas exactas serán las que se expresen en el respectivo título de propiedad de cada inmueble. 
         Todas las fotos, imagenes y videos son meramente ilustrativos y no contractuales. Los precios enunciados son meramente orientativos y no contractuales. </em> </p>
</div>

       </>

     );
}
 
export default Contacto;


//
  //                         <a id = "d4"class="waves-effect waves-light btn modal-trigger col s2" href="#modal1">Enviar</a>
    //                        