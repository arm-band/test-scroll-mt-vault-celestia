import Ukiyo from 'ukiyojs';

window.addEventListener( 'load', () => {
    const ukiyoParallaxes = document.querySelectorAll( '.ukiyo' );
    ukiyoParallaxes.forEach( (ukiyoParallax) => {
        new Ukiyo( ukiyoParallax );
    });
});
