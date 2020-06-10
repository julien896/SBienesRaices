import React, { useEffect } from 'react';
import M from 'materialize-css';




const Home = () => {
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.chips');
     M.Chips.init(elems);  });
    
	useEffect(() => {
         let elements = document.querySelectorAll('.parallax');
        M.Parallax.init(elements);
    },[]);
            return ( 
       
              <>
        <div className="parallax-container">
        <div className="parallax">

        <img src="descarga.jpg" alt="p1"/>
	
        </div>
        </div>
	
        <div className="parallax-container">
        <div className="parallax">
         
        <img src="descarga1.jpg" alt="p1"/>
	
        </div>
        <div className = "section" >
        
        <p>Nuestra empresa cuenta con 10 años de probada experiencia en el rubro inmobiliario.
A través de nuestra cartera de propiedades y emprendimientos logramos satisfacer las necesidades de nuestros clientes.
 Ofrecemos las mejores y más actualizadas herramientas para tener mayor presencia en el mercado y lograr una adecuada concreción de las operaciones.</p>
 <div class="chip col s12 m4 l2" id="x">
         <img src="wts.png" alt="Contact Person"/>
        03544-59-8330
      </div>
     <div id="v" class="chip col s6 m4 l2">
         <img src="gm.png" alt="Contact Person"/>
        shconsultora.asesor@gmail.com
	
      </div>
<div id="z" class="chip col s6 m4 l2 top">


         <img src="maps.jpg" alt="Contact Person" />
	<a id="o" href="https://www.google.com/maps/place/SH+Inmobiliaria/@-31.9474702,-65.1906321,17z/data=!3m1!4b1!4m5!3m4!1s0x942cd4a0f994da1f:0xb08dd86f60615703!8m2!3d-31.9474748!4d-65.1884434">Ramón Cárcano, 208. Villa Dolores. Córdoba.</a>
        
      </div>
        </div>
    </div>

      </>
         );
}
 
export default Home;





