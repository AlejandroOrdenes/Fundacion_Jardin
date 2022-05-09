$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');


    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');  
        console.log(catProduct);

    //agregando clase active al enlace seleccionado 
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //ocultando productos
        $('.product-item').hide(); //esto esconde los productos al momento de hacer click en alguna categoria

        //Mostrar productitos 
        $('.product-item[category="'+catProduct+'"]').show(); //esto deja libre a que uno elija la categoria
        

      })
       // mostrando todos los productitos
      $('.category_item[category="all"]').click(function(){
        $('.product-item').show();

      })

  })

const xttp = new XMLHttpRequest();

    xttp.open('GET', './json/productos.json', true)

    xttp.send();

    xttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            

            for(let item of datos){
               //console.log(item); // la linea de item category 
               res.innerHTML += `
               <div class="product text-center col-lg-4 col-md-4 col-12">
               <div class="product-item" category="${item.category}">
               <img id="container" class="img-fluid mb-3 fotito" src="${item.imagen}" alt="${item.alt}">
             
               <h5 class="card-title">${item.nombre}</h5>
               <p class="card-text">${item.precio}</p>
               <!-- cambiar por pagina correspondiente al producto-->
               <button type="button" class="btn rounded-pill btn-success " data-bs-toggle="modal" data-bs-target="#myModal${item.idpro}">Ver producto</button>
               <div class="modal" id="myModal${item.idpro}">
                 <div class="modal-dialog">
                   <div class="modal-content">
               
                     <!-- Modal Header -->
                     <div class="modal-header">
                       <h4 class="modal-title">${item.nombre}</h4>
                       <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                     </div>
               
                     <!-- Modal body -->
                     <div class="modal-body">
                       <img class="img-fluid mb-3 " src="${item.imagen}" alt="${item.alt}">
                       <h4>${item.precio}</h4>
                       <h6>${item.descripcion} </h6>
                     </div>
               
                     <!-- Modal footer -->
                     <div class="modal-footer">
                       <button class="btn btn-outline-success">+<img class="nav-svg" src="img/carro2.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar al Carrito" alt="Shopping Cart"></button>
                     </div>
               
                   </div>
                 </div>
               </div>
               
              <!-- aca deberia ir la supuesta pagina o carrito si es que tenemos uno-->

             <button class="btn btn-outline-success">+<img class="nav-svg" src="img/carro2.png" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar al Carrito" alt="Shopping Cart"></button>
               
             
             </div>
             </div>
               `
            }
        }

    }


    function App() {}

    window.onload = function (event) {
        var app = new App();
        window.app = app;
    };
    
    App.prototype.processingButton = function(event) {
        const btn = event.currentTarget;
        const slickList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const slick = track.querySelectorAll('.slick');
    
        const slickWidth = slick[0].offsetWidth;
        
        const trackWidth = track.offsetWidth;
        const listWidth = slickList.offsetWidth;
    
        track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
    }
    
    let prevAction = (leftPosition,slickWidth,track) => {
        if(leftPosition > 0) {
            console.log("entro 2")
            track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
        }
    }
    
    let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
        if(leftPosition < (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
        }
    }
    // ${item.idpro}
    // ${item.nombre}
    // <img src=${item.imagen}>
    // ${item.descripcion}
    // ${item.precio}
    // ${item.carro}
    // ${item.alt}

// este codigo es de JSON para las pruebas del codigo 
      //,
      // {
      //   "idpro": "10",
      //   "nombre": "planteta",
      //   "imagen": "img/planta1dinero.jpg",
      //   "descripcion": "planta prueba",
      //   "precio":"9.999",
      //   "carro":"img/carro2.png",
      //   "alt":"planteta"
      // },
      // {
      //   "idpro": "11",
      //   "nombre": "plantita",
      //   "imagen": "img/planta1dinero.jpg",
      //   "descripcion": "planta prueba",
      //   "precio":"9.999",
      //   "carro":"img/carro2.png",
      //   "alt":"plantita"
      // }


 // Boton de maceteros especificadad para los 
 //distintos tipos de maceteros que se encuentran en la pagina web






 // lista de los items 
             // <div class="product-item" category="${item.category}">
            //    <div class="product text-center col-lg-4 col-md-4 col-3">
            //      <img class="img-fluid mb-3" src="${item.imagen}" alt="${item.alt}">
               
            //      <h5 class="card-title">${item.nombre}</h5>
            //      <p class="card-text">${item.precio}</p>
            //      <!-- cambiar por pagina correspondiente al producto-->
            //      <button type="button" class="btn rounded-pill btn-success " data-bs-toggle="modal" data-bs-target="#myModal${+item.idpro}">Ver producto</button>
            //      <div class="modal" id="myModal${+item.idpro}">
            //        <div class="modal-dialog">
            //          <div class="modal-content">
                 
            //            <!-- Modal Header -->
            //            <div class="modal-header">
            //              <h4 class="modal-title">${item.nombre}</h4>
            //              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            //            </div>
                 
            //            <!-- Modal body -->
            //            <div class="modal-body">
            //              <img class="img-fluid mb-3 " src="${item.imagen}" alt="${item.alt}">
            //              <h4>${item.precio}</h4>
            //              <h6>${item.descripcion}</h6>
            //            </div>
                 
            //            <!-- Modal footer -->
            //            <div class="modal-footer">
            //              <button class="btn btn-outline-success">+<img class="nav-svg" src="${item.carro}" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar al Carrito" alt="Shopping Cart"></button>
            //            </div>
                 
            //          </div>
            //        </div>
            //      </div>
                 
            //     <!-- aca deberia ir la supuesta pagina o carrito si es que tenemos uno-->
 
            //    <button class="btn btn-outline-success">+<img class="nav-svg" src="${item.carro}" data-bs-toggle="tooltip" data-bs-placement="top" title="Agregar al Carrito" alt="Shopping Cart"></button>
                 
               
            //    </div>
            // </div>
        
