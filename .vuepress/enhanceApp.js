import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import VueClipboard from 'vue-clipboard2'
import VueParticles from 'vue-particles'


export default ({Vue, options, router}) => {
    Vue.use(VueAwesomeSwiper)
    Vue.use(VueClipboard)
    Vue.use(VueParticles)
};

