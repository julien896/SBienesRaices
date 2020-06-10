import React from 'react';
import Navbar from './Navbar';
import M from 'materialize-css';




const Propiedades = () => {

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {dist:-200});
      });

    return ( 
 <>
<Navbar/>
<div className = "container3">
    <div className = "row">
        <div id="divprop1" className = "propiedad1 col s12">
            <h6><strong><em>Casa con importante terreno, Villa De Las Rosas, TRASLASIERRA.</em></strong></h6>
           <p id="prop1">Vendo casa en Villa de Las Rosas de 2 dormitorios, cocina-comedor, baño, galeria, con terreno de 5000m2, sobre calle Guasmara, pegadito al camping y balneario municipal y costeando el arroyo.
                        Una verdadera oportunidad para emprendimientos
                        Precio de venta : USD 50.000 (dólares)</p>
                        <div class="carousel">
                            <a class="carousel-item" href="#one!"><img src="a.jpg"/></a>
                            <a class="carousel-item" href="#two!"><img src="a1.jpg"/></a>
                            <a class="carousel-item" href="#three!"><img src="a2.jpg"/></a>
                            <a class="carousel-item" href="#four!"><img src="a3.jpg"/></a>
		                    <a class="carousel-item" href="#five!"><img src="a4.jpg"/></a>
                        </div>
        </div >   
        <div id="divprop1" className = "propiedad2 col s12">
            <h6><strong><em>Alquiler anual, cabañas en Las Rabonas para 3 o 4 personas.</em></strong></h6>
           <p id="prop1">Cuatro hectáreas parquizadas, con arboledas y vertientes naturales. Cada cabaña cuenta con 3 habitaciones, 1 baño ,cocheras y asadores individuales, salamandras de doble combustión y hogar a leña.
                        Precio: $18.000 p/mes más expensas. Se requiere garantia propietaria y mes de anticipo</p>
                        <div class="carousel">
                            <a class="carousel-item" href="#one!"><img src="b1.jpg"/></a>
                            <a class="carousel-item" href="#two!"><img src="b2.jpg"/></a>
                            <a class="carousel-item" href="#three!"><img src="b3.jpg"/></a>
		                    <a class="carousel-item" href="#four!"><img src="b4.jpg"/></a>
                        </div>
        </div >   
        
        <div id="divprop1" className = "propiedad4 col s12">
            <h6><strong><em>Venta: Excelente lote con escritura</em></strong></h6>
           <p id="prop1"> Ubicado en el exclusivo paraje El Huaico. Nono. Traslasierra Córdoba.
                        Superficie. 27.481 mts 2. Agua (Aprobada de DIPAS). Telefeno (Telecom). Energía Electrica. 
                        Frente a Gaynor Restaurante (Casa Celta). Al lado del exlcusivo  Calma Nono Suites. 
                        Totalmente forestado con añosos árboles en su mayoria autóctonos como algarrobos, chañares, piquillín, cactus, etc. Execelte vista a las sierras. A 2,5 km de la ruta.
                        Precio: 80.000u$s/ La Mitad 45.000.000 U$s</p>
                        <div class="carousel">
                            <a class="carousel-item" href="#one!"><img src="d.jpg"/></a>
                            <a class="carousel-item" href="#two!"><img src="d1.jpg"/></a>
                            <a class="carousel-item" href="#three!"><img src="d2.jpg"/></a>
                        </div>
        </div > 
        <div id="divprop1" className = "propiedad5 col s12">
            <h6><strong><em>Casa en Villa de Las Rosas</em></strong></h6>
           <p id="prop1">
                        2 hermosas casas, de 3 dormitorios cada una, muy lindas, modernas, todos los servicios en puertas.
                        A pocas cuadras del centro, del rincón más turístico del Valle de Traslasierra, conocido por su gran feria gastronómica.
                        Ideal para inversión.
                        Líneas de transportes públicos a 1 cuadra</p>
                        <div class="carousel">
                            <a class="carousel-item" href="#one!"><img src="e.jpg"/></a>
                            <a class="carousel-item" href="#two!"><img src="e1.jpg"/></a>
                            <a class="carousel-item" href="#three!"><img src="e3.jpg"/></a>
                            <a class="carousel-item" href="#three!"><img src="e4.jpg"/></a>
                        </div>
        </div > 
        <div id="divprop1" className = "propiedad3 col s12">
            <h6><strong><em>Villa de Las Rosas,
                            Camino a Barranca de Los Loros.</em></strong></h6>
           <p id="prop1">
                        LOTES DE 2.500 MTS2 Y DE 5.060 MTS2. OTRO DE 5.100 CON CASA A TERMINAR. PRECIO POR MTS2 U$ 12.- TÍTULOS AL DÍA</p>
                        <div class="carousel">
                            <a class="carousel-item" href="#one!"><img src="c.jpg"/></a>
                            <a class="carousel-item" href="#two!"><img src="c1.jpg"/></a>
                            <a class="carousel-item" href="#three!"><img src="c2.jpg"/></a>
                        </div>
        </div > 
    </div >
</div >
 </>
     );
}
 
export default Propiedades;