// src/data/productosData.js
export const categorias = [
    { id: 1, nombre: 'Todos' },
    { id: 2, nombre: 'Lavado Automotriz' },
    { id: 3, nombre: 'Aerosoles y Aromas' },
    { id: 4, nombre: 'Líquidos para el Hogar' },
    { id: 5, nombre: 'Productos de Línea' },
    { id: 6, nombre: 'Material COVID-19' },
    { id: 7, nombre: 'Papel y Despachadores' },
    { id: 8, nombre: 'Bolsas Plásticas' },
    { id: 9, nombre: 'Trapeadores' },
    { id: 10, nombre: 'Fibras' },
    { id: 11, nombre: 'Estructuras y Fundas para Mop' },
    { id: 12, nombre: 'Estética Recogedores, Cubetas y más' },
    { id: 13, nombre: 'Escobas' },
    { id: 14, nombre: 'Cepillos' },
    { id: 15, nombre: 'Botes, Cestos y más' },
    { id: 16, nombre: 'Jarcería' },
    { id: 17, nombre: 'Estética Automotriz' },
    { id: 18, nombre: 'Pruebas, Diagnósticos y más' },
    { id: 19, nombre: 'Medicamentos y más' },
    { id: 20, nombre: 'Seguridad Vial' },
    { id: 21, nombre: 'Equipo de Seguridad' },
    { id: 22, nombre: 'Ferretería y más' },
    { id: 23, nombre: 'Seguridad Industrial' }
];

export const productos = [
    // LAVADO AUTOMOTRIZ
    {
        id: 1,
        nombre: 'Abrillantador para Llantas',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/limpiador-multiusos.jpg'
    },
    {
        id: 2,
        nombre: 'Abrillantador en Gel',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 3,
        nombre: 'Auto Shampoo',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 4,
        nombre: 'Auto Shampoo Alta Espuma',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 5,
        nombre: 'Desengrasante Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 6,
        nombre: 'Limpiador de Vestiduras',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 7,
        nombre: 'Cera Líquida',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 8,
        nombre: 'Atomizador de Uso Rudo Canyon',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 9,
        nombre: 'Atomizador Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 10,
        nombre: 'Microfibra',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 11,
        nombre: 'Cepillo Bi-Level tipo Raqueta de PVC',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 12,
        nombre: 'Cepillo Brush Bi-Level Redondo',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 13,
        nombre: ' Cepillo Brush Sencillo de PVC',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 14,
        nombre: ' Abrillantador en Gel',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 15,
        nombre: 'Cepillo de Ixtle',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 16,
        nombre: 'Trapo Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 17,
        nombre: 'Esponja tipo Cacahuate 4"',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 18,
        nombre: 'Esponja tipo Cacahuate 8"',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 19,
        nombre: 'Franela gris',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // AEROSOLES Y AROMAS
    {
        id: 20,
        nombre: 'Abrillantador de Muebles Pledge',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 21,
        nombre: 'Abrillantador de Muebles Wiese',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    }, {
        id: 22,
        nombre: 'Aromatizante BAEMI',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 23,
        nombre: 'Aromatizante Glade 400 ml',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 24,
        nombre: 'Aromatizante Wiese 400 ml',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 25,
        nombre: 'Raid Casa y Jardin',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 26,
        nombre: 'Repuesto Aromatizante Wiese',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 27,
        nombre: ' Repuesto Aromatizante Glade',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // Líquidos para el hogar
    {
        id: 28,
        nombre: 'Windex',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 29,
        nombre: 'Ácido Muriático"',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 30,
        nombre: 'Sarricida',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 31,
        nombre: 'Cloro',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 32,
        nombre: 'Pinol',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 33,
        nombre: 'Fabuloso Aromas Variados',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 34,
        nombre: 'Desengransante para Parrilla',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 35,
        nombre: 'Detergente Líquido Tipo Ariel',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 36,
        nombre: 'Detergente Tipo Foca',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 37,
        nombre: 'Detergente Tipo Vanish',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 38,
        nombre: 'Detergente Líquido Tipo Zote',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 39,
        nombre: 'Suavizante de Telas Aromas Varios',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 40,
        nombre: 'Insecticida (arañas, hormigas, cucarachas)',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 41,
        nombre: 'Jabón para Manos Aromas Variados',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 42,
        nombre: 'Jabón Lavatrastes tipo Axión',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 43,
        nombre: 'Detergente en Polvo Arcoíris',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 44,
        nombre: 'Detergente en Polvo Roma',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // PRODUCTOS DE LINEA
    {
        id: 45,
        nombre: 'Desinfectante Multiusos Lysol',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 46,
        nombre: 'Fabuloso Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 47,
        nombre: 'Pinol Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 48,
        nombre: 'Cristales con Fragancia Vern Nel',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 49,
        nombre: 'Desinfectante en Aerosol Sanytol',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 50,
        nombre: 'Febreze Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 51,
        nombre: 'Repuesto de Aromas Variados Air Wick',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 52,
        nombre: 'Limpiador harpic Power Ultra',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 53,
        nombre: 'Detergente Líquido Foca',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 54,
        nombre: 'Jabón Zote Rosa',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 55,
        nombre: 'Jabon Zote Azul',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 56,
        nombre: 'Jabón de Tocador Lirio Dermatológico',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 57,
        nombre: 'Jabón de Tocador ROsa Venus',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 58,
        nombre: 'Jabón de Tocador Zest Aroma Variado',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 59,
        nombre: 'Insecticida para Moscas marca Trón',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 60,
        nombre: 'Desinfectante Multiusos Biovéne',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 61,
        nombre: 'Repelente Wiese Citonela y Eucalipto',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 62,
        nombre: 'Cloralex',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 63,
        nombre: 'Shampoo Sedal Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 64,
        nombre: 'Shampoo Savilé Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 65,
        nombre: 'Jabón Líquido para Manos Kleenex',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 66,
        nombre: 'Jabón Líquido para Manos Blumen',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 67,
        nombre: 'Jabón Líquido para Trastes Axión',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 68,
        nombre: 'Windex Mr.Musculo',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 69,
        nombre: 'Ajax Amonia',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 70,
        nombre: 'Soporte para Aromatizante Glade',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // COVID
    {
        id: 71,
        nombre: 'Desinfectante Sanitizante Universal',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 72,
        nombre: 'Mascarilla KN95',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: 'Charola Sanitizante',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 74,
        nombre: 'Toallitas Desinfectantes',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 75,
        nombre: 'Gel Antibacterial',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 76,
        nombre: 'Desinfectante Universal Lysol',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 77,
        nombre: 'Caja de Cubrebocas',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 78,
        nombre: 'Guantes de Latex Bajo Polvo',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 79,
        nombre: 'Guantes de Nitrilo Desechable',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // PAPEL Y DESPACHADORES
    {
        id: 80,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 81,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 82,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },


    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 73,
        nombre: '',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },

];

// Función de filtrado reutilizable
export const filtrarProductos = (productos, filtro, terminoBusqueda) => {
    return productos.filter(producto => {
        const matchesCategory = filtro === 'Todos' || producto.categoria === filtro;
        const matchesSearch = producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase());
        return matchesCategory && matchesSearch;
    });
};