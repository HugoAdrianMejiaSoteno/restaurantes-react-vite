
export const headerMov = ()=>{
    const restaurantes = document.querySelector('.m');
    const panelRestaurantes = document.querySelector('.restaurantes');
    const principales = document.querySelector('.h');
    const panelPrincipales = document.querySelector('.principales');
    const favoritos = document.querySelector('.n');
    const panelFavoritos = document.querySelector('.favoritos');
    const locales = document.querySelector('.a');
    const panelLocales = document.querySelector('.locales');
    
    //Mujer
    restaurantes.addEventListener('mouseover', ()=>{
        panelRestaurantes.style.visibility = 'visible';
    });

    restaurantes.addEventListener('click', ()=>{
        panelRestaurantes.style.visibility = 'hidden';
    });

    restaurantes.addEventListener('mouseleave', ()=>{
        panelRestaurantes.style.visibility = 'hidden';
    });
        
    panelRestaurantes.addEventListener('mouseover', ()=>{
        panelRestaurantes.style.visibility = 'visible';
        
    });

    panelRestaurantes.addEventListener('mouseleave', ()=>{
        panelRestaurantes.style.visibility = 'hidden';
        
    });

    //Hombre
    principales.addEventListener('mouseover', ()=>{
        panelPrincipales.style.visibility = 'visible';
    });

    principales.addEventListener('mouseleave', ()=>{
        panelPrincipales.style.visibility = 'hidden';
    });

    principales.addEventListener('click', ()=>{
        panelPrincipales.style.visibility = 'hidden';
    });
        
    panelPrincipales.addEventListener('mouseover', ()=>{
        panelPrincipales.style.visibility = 'visible';
        
    });

    panelPrincipales.addEventListener('mouseleave', ()=>{
        panelPrincipales.style.visibility = 'hidden';
    });

    //ninos
    favoritos.addEventListener('mouseover', ()=>{
        panelFavoritos.style.visibility = 'visible';
    });

    favoritos.addEventListener('mouseleave', ()=>{
        panelFavoritos.style.visibility = 'hidden';
    });

    favoritos.addEventListener('click', ()=>{
        panelFavoritos.style.visibility = 'hidden';
    });
        
    panelFavoritos.addEventListener('mouseover', ()=>{
        panelFavoritos.style.visibility = 'visible';
        
    });

    panelFavoritos.addEventListener('mouseleave', ()=>{
        panelFavoritos.style.visibility = 'hidden';
    });

   //accesorios
   locales.addEventListener('mouseover', ()=>{
        panelLocales.style.visibility = 'visible';
    });

    locales.addEventListener('mouseleave', ()=>{
        panelLocales.style.visibility = 'hidden';
    });

    locales.addEventListener('click', ()=>{
        panelLocales.style.visibility = 'hidden';
    });
        
    panelLocales.addEventListener('mouseover', ()=>{
        panelLocales.style.visibility = 'visible';
        
    });

    panelLocales.addEventListener('mouseleave', ()=>{
        panelLocales.style.visibility = 'hidden';
    });
}

// funcionalidad para scroll en  moviles

//Añadimos la funcionalidad de que si se mueve hacia abajo con scroll en moviles el header cambie a color trasnparente con la clase scroll y cuando llegue al tope de arriba se haga de color blanco
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
  });
  
