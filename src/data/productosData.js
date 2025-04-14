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
    { id: 12, nombre: 'Recogedores, Cubetas y Más' },
    { id: 13, nombre: 'Escobas' },
    { id: 14, nombre: 'Cepillos' },
    { id: 15, nombre: 'Botes, Cestos y Más' },
    { id: 16, nombre: 'Jarcería' },
    { id: 17, nombre: 'Estética Automotriz' },
    { id: 18, nombre: 'Diagnóstico y Pruebas' },
    { id: 19, nombre: 'Medicamentos y Más' },
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
        imagen: '/images/lavado_automotriz/A_industrial.png'
    },
    {
        id: 9,
        nombre: 'Atomizador Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/A_Rudo.png'
    },
    {
        id: 10,
        nombre: 'Microfibra',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/microfibra.png'
    },
    {
        id: 11,
        nombre: 'Cepillo Bi-Level tipo Raqueta de PVC',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/c_pvc.png'
    },
    {
        id: 12,
        nombre: 'Cepillo Brush Bi-Level Redondo',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/c_redondo.png'
    },
    {
        id: 13,
        nombre: ' Cepillo Brush Sencillo de PVC',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/c_sencillo_pvc.png'
    },
    {
        id: 14,
        nombre: ' Abrillantador en Gel',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/A_industrial.png'
    },
    {
        id: 15,
        nombre: 'Cepillo de Ixtle',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/c_ixtle.png'
    },
    {
        id: 16,
        nombre: 'Trapo Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/trapo_industrial.png'
    },
    {
        id: 17,
        nombre: 'Esponja tipo Cacahuate 4"',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/e_cacahuate_4.png'
    },
    {
        id: 18,
        nombre: 'Esponja tipo Cacahuate 8"',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/e_cacahuate_8.png'
    },
    {
        id: 19,
        nombre: 'Franela gris',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/franela_gris.png'
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
        nombre: 'Papel Higiénico JR Dalia',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 81,
        nombre: 'Papel Higiénico Jumbo Dalia',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 82,
        nombre: 'Papel Higiénico Kleenex',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 83,
        nombre: 'Toalla Azul Scott',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 84,
        nombre: 'Toalla en Rollo Blanca',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 85,
        nombre: 'Toalla en Rollo Café',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 86,
        nombre: 'Toalla Interdoblada',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 87,
        nombre: 'Toalla Interdoblada (Paquete)',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 88,
        nombre: 'Vaso Cónico #140',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 89,
        nombre: 'Despachador de Jabón Oval',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 90,
        nombre: 'Despachador de Papel JR',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 91,
        nombre: 'Despachador de Papel Jumbo',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 92,
        nombre: 'Despachador de Toalla en Rollo',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 93,
        nombre: 'Despachador de Toalla Interdoblada',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 94,
        nombre: 'Papel Higiénico 160m Elite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 95,
        nombre: 'Toalla en Rollo ELite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 96,
        nombre: 'Toalla en Rollo Café ELite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 97,
        nombre: 'Papel Higiénico 180m Elite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // BOLSAS PLASTICAS
    {
        id: 98,
        nombre: 'Bolsa Can Liners Negra/Natural 24x24',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 99,
        nombre: 'Bolsa Can Liners Negra/Natural 48x48',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 100,
        nombre: 'Bolsa CAmiseta Ecológica Grande',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 101,
        nombre: 'Bolsa de Camiseta Ecológica Jumbo',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 102,
        nombre: 'Bolsa Negra 50x40',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 103,
        nombre: 'Bolsa Negra 70x90',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 104,
        nombre: 'Bolsa Negra 90x120',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    //TRAPEADORES
    {
        id: 105,
        nombre: 'Trapeador de Hilaza #20',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 106,
        nombre: 'Trapeador de Hilaza #30',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 107,
        nombre: 'Trapeador de Magitel',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 108,
        nombre: 'Trapeador de Pabilo #30',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 109,
        nombre: 'Trapeador de Pabilo #40',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 110,
        nombre: 'Trapeador Industrial 1 kg',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 111,
        nombre: 'Trapeador de Microfibra (CH, M, G)',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 112,
        nombre: 'Trapeador de Microfibra Española',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    //FIBRAS
    {
        id: 113,
        nombre: 'Fibra de Metal (Delgada)',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 114,
        nombre: 'Fibra de Metal (Gruesa)',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 115,
        nombre: 'Firba Negra Delgada p/Acero Inoxidable',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 116,
        nombre: 'Fibra Negra Delgada p/Parrillas',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 117,
        nombre: 'Fibra P96 Scotch 3M',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 118,
        nombre: 'Fibra Scotch Brite Verde con Amarrillo',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 119,
        nombre: 'Fibra Verde con Amarillo (Par)',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 120,
        nombre: 'Franela Gris',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    //
    {
        id: 121,
        nombre: 'Estructura para Mop 60 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 122,
        nombre: 'Estructura para Mop 90 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 123,
        nombre: 'Estructura para Mop 120 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 124,
        nombre: 'Estructura para Mop 150 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 125,
        nombre: 'Estructura (Avión) para Mop 60 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 126,
        nombre: 'Estructura (Avión) para Mop 90 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 127,
        nombre: 'Estructura (Avión) para Mop 120 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // RECOGEDORES, CUBETAS Y MAS
    {
        id: 128,
        nombre: 'Recogedor Económico',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 129,
        nombre: 'Recogedor de Media Luna de Plástico',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 130,
        nombre: 'Pinzas',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 131,
        nombre: 'Plumero',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 132,
        nombre: 'Cubeta #12',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 133,
        nombre: 'Cubeta Exprimidora 20L',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    //ESCOBAS
    {
        id: 134,
        nombre: 'Escoba Arcoiris',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 135,
        nombre: 'Escoba de Cepillo',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 136,
        nombre: 'Escoba Abanico',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 137,
        nombre: 'Escoba Industrial',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 138,
        nombre: 'Escoba Premium Ultrasuave',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 139,
        nombre: 'Escoba tipo Cepillo para Carro',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 140,
        nombre: 'Escoba Peñolera',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 141,
        nombre: 'Escoba Super',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // CEPILLOS
    {
        id: 142,
        nombre: 'Cepillo Curvo',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 143,
        nombre: 'Cepillo de Ixtle 6"',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 144,
        nombre: 'Cepillo de Ixtle 8"',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 145,
        nombre: 'Cepillo Escobeta',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 146,
        nombre: 'Cepillo Lava Platos Alemán',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 147,
        nombre: 'Cepillo Manual tipo Plancha',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 148,
        nombre: 'Cepillo Manualito',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 149,
        nombre: 'Cepillo Manualito Grande',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 150,
        nombre: 'Cepillo para Baño',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 151,
        nombre: 'Cepillo para Baño con Base',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 152,
        nombre: 'Cepillo tipo Plancha Alemana',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 153,
        nombre: 'Cepillo tipo Plancha Italiana',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 154,
        nombre: 'Cepillo tipo Plancha Italiana Grande',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    //BOTES,CESTOS y MAS
    {
        id: 155,
        nombre: 'Cesto de Ropa',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 156,
        nombre: 'Bomba para Baños',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 157,
        nombre: 'Bote de Basura 12L',
        categoria: 'Botes, Cestos y Más',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 158,
        nombre: 'Bote de Basura 6 L',
        categoria: 'Botes, Cestos y Más',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 159,
        nombre: 'Bote de Basura de Colores 10 L',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 160,
        nombre: 'Bastón con punta Reforzada',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 161,
        nombre: 'Bastón Acero con Extensión 120-240 cm',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 162,
        nombre: 'Bastón de Madera',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // JARCERIA
    {
        id: 163,
        nombre: 'Pastilla de Cloro',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 164,
        nombre: 'Pastilla Institucional Azul',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 165,
        nombre: 'Pastilla para Baño Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 166,
        nombre: 'Pastilla para Migitorio Azul 86g Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 167,
        nombre: 'Tapete Antisalpicadura para Migitorio Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 168,
        nombre: 'Matamoscas',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 169,
        nombre: 'Lazo 7 mts',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 170,
        nombre: 'Jalador 50 cm',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 171,
        nombre: 'Jalador 40 cm',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 172,
        nombre: 'Jalador con Esponja 20 cm',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 173,
        nombre: 'Jerga',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 174,
        nombre: 'Magitel',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 175,
        nombre: 'Botella de Plástico 1 L',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 176,
        nombre: 'Botella de Plástico 1/2 L',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 177,
        nombre: 'Cuadritela',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 178,
        nombre: 'Guantes de Limpieza',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 179,
        nombre: 'Jabón Lavalozas',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 180,
        nombre: 'Abrillantaador Lavaloza',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 181,
        nombre: 'Desincrustrante de Metales',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 182,
        nombre: 'Desengrasante para Parrilla Caliente',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 183,
        nombre: 'Sanitizante de Superficies y Utensiios de Cocina',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 184,
        nombre: 'Desinfectante para Frutas y Verduras',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // ESTETICA AUTOMOTRIZ
    {
        id: 185,
        nombre: 'Restaurador de Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 186,
        nombre: 'Limpiador de Rines Plus Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 187,
        nombre: 'Sellado en Spray Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 188,
        nombre: 'Cera Rápida de Alto Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 189,
        nombre: 'Shampoo Alto Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 190,
        nombre: 'Limpia Tapices Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 191,
        nombre: 'Limpiador de AC Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 192,
        nombre: 'Profiline NP 03-06 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 193,
        nombre: 'Pulimento Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 194,
        nombre: 'Renovador de Goma Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 195,
        nombre: 'Quita Alquitrán Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 196,
        nombre: 'Claydisc 150 mm Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 197,
        nombre: 'Esponja Pulidora Gris 160 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 198,
        nombre: 'Lija B-99 Micro Fino Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 199,
        nombre: 'Aceite Lubricante Hidráulico',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 200,
        nombre: 'Protector de Vinil Chemical Guys',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 201,
        nombre: '',
        categoria: 'Cera Líquida Chemical Guys',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 202,
        nombre: 'Compuesto Pulidor 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 203,
        nombre: 'Pulimento para Faros Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 204,
        nombre: 'Plastilina Limpiadora 3M',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 205,
        nombre: 'Abrasivo para Cromo y Aluminio Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 206,
        nombre: 'Quita Goma de Alfombras 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 207,
        nombre: 'Cera en Pasta 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 208,
        nombre: 'Limpia Frenos Química TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 209,
        nombre: 'Masilla de Acabado Premium 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 210,
        nombre: 'Arrancador para Motores Química TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 211,
        nombre: 'Protector de Terminal de Baterías Gunk',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 212,
        nombre: 'Limpiador de Terminal de Baterías Gunk',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 213,
        nombre: 'Silenciador para Frenos de Disco TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 214,
        nombre: 'Aflojatodo Auto Zone',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 215,
        nombre: 'Super Aflojatodo TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 216,
        nombre: 'Clean and Shine 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 217,
        nombre: 'Limpiador de Piel y Vinil 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 218,
        nombre: 'Cera Limpiadora',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 220,
        nombre: 'Cera Suave para Auto 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 221,
        nombre: 'Removedor de Rayones Turtle Wax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 222,
        nombre: 'Limpiador de Vidrio Repelente a la Lluvia',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 223,
        nombre: 'Limpiador de Vidrios 3M',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 224,
        nombre: 'Profiline Speedprotect Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 225,
        nombre: 'Limpiador de Plásticos Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 226,
        nombre: 'HW 02-04 Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 227,
        nombre: 'Removedor de Manchas de Agua Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 228,
        nombre: 'Visión Clara 1:100 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 229,
        nombre: 'Spray Anti Empañante Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 230,
        nombre: 'Limpia Tapices Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 231,
        nombre: 'Pulimento Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 232,
        nombre: 'Esponja Multiusos 2 en 1 Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 233,
        nombre: 'Cepillo de Rin Ultra Suave Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 234,
        nombre: 'Flexi Espatula Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 235,
        nombre: 'Esponja Aplicadora Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 236,
        nombre: 'Shampoo Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 237,
        nombre: 'Shampoo con Cera Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 238,
        nombre: 'Polish and Wax Color Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 239,
        nombre: 'Limpia Insectos Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 240,
        nombre: 'Lack Prepare Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 241,
        nombre: 'Renovador de Gomas Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 242,
        nombre: 'Sellador en Spray Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 243,
        nombre: 'Restaurador de Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 244,
        nombre: 'Supreme Discs Foam Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 245,
        nombre: 'Recubrimiento Cerámico Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 246,
        nombre: 'Easy Shine Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 247,
        nombre: 'Protector de Interiores Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 248,
        nombre: 'Glass Polish Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 249,
        nombre: 'Renovador Plástico Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 250,
        nombre: 'Borrador de Suciedad Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 251,
        nombre: 'Limpia Parabrisas',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 252,
        nombre: 'Hybrid Wool Pad 143 DA Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 253,
        nombre: 'Cut and Finish Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 254,
        nombre: 'Almohadilla de Espuma Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 255,
        nombre: 'Plastilina Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 256,
        nombre: 'Esponja para Aplicaciones Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 257,
        nombre: 'Masking Automotriz 2" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 258,
        nombre: 'Masking Automotriz 3/4" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 259,
        nombre: 'Masking Automotriz 1/2" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 260,
        nombre: 'Masking Automotriz 1" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 261,
        nombre: 'Jalador para Vidrio',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 262,
        nombre: 'Rellenador Ligero Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // DIAGNOSTICO Y PRUEBAS
    {
        id: 263,
        nombre: 'Panel de Prueba de Antidoping',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 264,
        nombre: 'Prueba de Antidoping de Tira',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 265,
        nombre: 'Frasco para Pruebas',
        categoria: 'Diagnóstico y Pruebas',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 266,
        nombre: 'Prueba de Saliva',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 267,
        nombre: 'Alcoholímetro Iblow',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 268,
        nombre: 'Alcoholímetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 269,
        nombre: 'Alcoholímetro de Pared',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 270,
        nombre: 'Glucómetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 271,
        nombre: 'Baumanómetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // MEDICAMENTOS Y MAS
    {
        id: 272,
        nombre: 'Aspitak P 30 Compuesto 100 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 273,
        nombre: 'Doloxen 10 Tabletas 100 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 274,
        nombre: 'Farex Ibuprofeno 10 Tabletas 600 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 275,
        nombre: 'Ketorolaco INY 30 ML',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 276,
        nombre: 'Mavidol SL 4 Tabletas 30 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 277,
        nombre: 'Metoclopramida 6 Ampolletas 10mg/2ml',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 278,
        nombre: 'Dirpasid 20 Tabletas 10 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 279,
        nombre: 'Portem 10 Tbletas 500 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 280,
        nombre: 'KY6 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 281,
        nombre: 'Masferol 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 282,
        nombre: ' Rosel 24 Tabletas 300mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 283,
        nombre: ' Cinarizina Ultra 60 Tabletas 75 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 284,
        nombre: 'Venda Elástica #10',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 285,
        nombre: 'Gasas 10x10',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 286,
        nombre: 'Gasas 7.5x7.5',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 287,
        nombre: ' Cinta Microporosa 1"',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 288,
        nombre: 'Bandas Adhesivas (Curitas)',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 289,
        nombre: 'Mertiolate 30 ml',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 290,
        nombre: 'Algodón 500 g',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 291,
        nombre: 'Cartilla de Snellen para Examen Visual',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 292,
        nombre: 'Botiquín de Primeros Auxilios',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 293,
        nombre: ' Termómetro Infrarrojo',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 294,
        nombre: 'Oxímetro de Pulso Digital',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 295,
        nombre: 'Tiras Reactivas para Glucómetro Active',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 296,
        nombre: 'Lancetas Soft Clix',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 297,
        nombre: 'Alcohol Etílico 70%',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 298,
        nombre: 'Extintor de 6.8 kg Dióxido de Carbono',
        categoria: 'Medicamentos y Más',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 299,
        nombre: ' Extintor de 6 kg Clase K',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 300,
        nombre: '',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 301,
        nombre: 'Diclofenaco 100 mg 20 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 302,
        nombre: 'Clorfenamina 4 mg 20 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 303,
        nombre: ' Loperamida 2 mg 12 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 304,
        nombre: ' Difenidol 25 mg 30 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 305,
        nombre: 'Sal de Uvas Picot 12 Sobres',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 306,
        nombre: 'Benzonatato 100 mg Perlas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 307,
        nombre: 'Dextrometorfano 15 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 308,
        nombre: 'Hioscina 10 mg 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 309,
        nombre: 'Ciprofloxacino 250 mg 12 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 310,
        nombre: 'Omeprazol',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 311,
        nombre: 'Aspirinas 500 mg 40 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 312,
        nombre: 'Dramamine 50 mg 24 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 313,
        nombre: 'Pepto Bismol',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // SEGURIDAD VIAL
    {
        id: 314,
        nombre: 'Boya Amarilla',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 315,
        nombre: 'Vialetas Plásticas',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 316,
        nombre: 'Tope Grande',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 317,
        nombre: 'Tope Chico',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 318,
        nombre: 'Poste Alineador',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 319,
        nombre: 'Barrera solapada',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 320,
        nombre: 'Trafitambo',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 321,
        nombre: 'Cono',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 322,
        nombre: 'Señal de Alto',
        categoria: 'Seguridad Vial',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // EQUIPO DE SEGURIDAD
    {
        id: 323,
        nombre: 'Lentes de Seguridad',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 324,
        nombre: 'Calzado de Seguridad',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 325,
        nombre: 'Chaleco Reflejante',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 326,
        nombre: 'Faja',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 327,
        nombre: 'Guante Anticorte',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 328,
        nombre: 'Guante de Nylon Nitrilo',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 329,
        nombre: 'Tapón de Oído desechable',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 330,
        nombre: 'Orejeras',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    //FERRETERIA Y MAS
    {
        id: 331,
        nombre: 'Broca de 3/6',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 332,
        nombre: 'Broca de 3/8',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 333,
        nombre: 'Broca de 5/16',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 334,
        nombre: 'Calibrador de Aire de 150 lbs',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 335,
        nombre: 'Clavija para Extensión Plástica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 336,
        nombre: 'Conector Glandular 3/4',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 337,
        nombre: 'Contacto Duplex Volteck',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 338,
        nombre: 'Disco de Corte para Metal 4 1/2',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 339,
        nombre: 'Gas Butano',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 340,
        nombre: 'Gas Refrigerante',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 341,
        nombre: 'Machuelo 7/16',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 342,
        nombre: 'Machuelo 1/2 Estándar',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 343,
        nombre: 'Parche',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 344,
        nombre: 'Pija 1/4 x 1" 1/2',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 345,
        nombre: 'Piola Estándard',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 346,
        nombre: 'Placa de Aluminio Gris',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 347,
        nombre: 'Remache de 3/16" x 3/4"',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 348,
        nombre: 'Multicontactos',
        categoria: 'Ferretería y Más',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 349,
        nombre: 'Cable de uso Rudo 1 m',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 350,
        nombre: 'Extensión Eléctrica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 351,
        nombre: 'Martillo',
        categoria: 'Ferretería y Más',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 352,
        nombre: 'Desarmador',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 353,
        nombre: 'Destornillador',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 354,
        nombre: 'Sierra Eléctrica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 355,
        nombre: 'Sierra',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    // SEGURIDAD INDUSTRIAL
    {
        id: 356,
        nombre: 'Cinta de Precaución',
        categoria: 'Seguridad Industrial',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 357,
        nombre: 'Cinta de Prohibido el Paso',
        categoria: 'Seguridad Industrial',
        destacado: true,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 358,
        nombre: 'Malla Delimitadora',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 359,
        nombre: 'Casco',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 360,
        nombre: 'Careta de Soldador',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 361,
        nombre: 'Mandil de Carnaza',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 362,
        nombre: 'Manga de Kevlar',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 363,
        nombre: 'Overol Desechable',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/productos/aromatizante-lavanda.jpg'
    },
    {
        id: 364,
        nombre: 'Árnes Sencillo',
        categoria: 'Seguridad Industrial',
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