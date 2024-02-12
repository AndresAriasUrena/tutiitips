import{
    logo,
    libroBanner,
    tulsi,
    hero,
    arte1,
    arte2,
    arte3,
    arte4,
    arte,
    educacion,
    familia,
    individual,
    pareja,
} from '../assets';

export const navLinks = [
    {
        id: 'tulsi',
        title: 'Tulsi',
    },
    {
        id: 'servicios',
        title: 'Servicios',
    },
    {
        id: 'testimonios',
        title: 'Testimonios',
    },
    {
        id:'faq',
        title: 'FAQ',
    },
    {
        id:'contacto',
        title:'Contacto',
    },
]

const servicios = [
    {
        title: 'Terapia Individual',
        img: individual,
    },
    {
        title: 'Terapia de Pareja',
        img: pareja,
    },
    {
        title: 'Terapia Familiar',
        img: familia,
    },
    {
        title: 'Talleres para Instituciones Educativas',
        img: educacion,
    },
    {
        title: 'Talleres de Arteterapia',
        img: arte,
    },
]

const arteterapia = [
    {
        title: 'Ejercicio 1',
        img: arte1,
    },
    {
        title: 'Ejercicio 2',
        img: arte2,
    },
    {
        title: 'Ejercicio 3',
        img: arte3,
    },
    {
        title: 'Ejercicio 4',
        img: arte4,
    },
]

export { servicios, arteterapia };