import { ref } from "vue";

export const useCards = () => {

    const tendencias = ref([
        {
            title:'Tendencias',
            linkRouter: 'tendencias',
            isHovering: false,
            slidesPerView: 5,
            listado: [
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Vue', tags: {title: 'Vue', desc: 'Tailwind'}, isHovering:false},
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Node', tags: {title: 'Node', desc: 'Express'}, isHovering:false },
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel React', tags: {title: 'React Native', desc: 'Firebase'}, isHovering:false },
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",  title: 'Carrusel Flutter', tags: {title: 'Flutter', desc: 'Dart'}, isHovering:false },
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Angular', tags: {title: 'Angular', desc: 'Typscript'}, isHovering:false },
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Vite', tags: {title: 'Vite', desc: 'Html'}, isHovering:false },
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Games', tags: {title: 'Unity', desc: 'Unreal'}, isHovering:false }
            ]
        },
    ])
    const frontEnd = ref([
        {
            title:'Front End',
            linkRouter: 'tendencias',
            isHovering: false,
            slidesPerView: 3,
            listado: [
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Vue', tags: {title: 'Vue', desc: 'Tailwind'}, isHovering:false},
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel React', tags: {title: 'React Native', desc: 'Firebase'}, isHovering:false },
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Vite', tags: {title: 'Vite', desc: 'Html'}, isHovering:false },
        
            ]
        },
    
    ]);

    const backEnd = ref([
        {
            title:'Back End',
            linkRouter: 'tendencias',
            isHovering: false,
            slidesPerView: 3,
            listado: [
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Node', tags: {title: 'Node', desc: 'Express'}, isHovering:false },
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",  title: 'Carrusel Flutter', tags: {title: 'Flutter', desc: 'Dart'}, isHovering:false },
                { cardName:'default', image: "http://image.tmdb.org/t/p/w1280/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", title: 'Carrusel Angular', tags: {title: 'Angular', desc: 'Typscript'}, isHovering:false },
        
            ]
        },

    ])
    
  return { tendencias, frontEnd, backEnd };
}