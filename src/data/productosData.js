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
    { id: 22, nombre: 'Ferretería y Más' },
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
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 3,
        nombre: 'Auto Shampoo',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 4,
        nombre: 'Auto Shampoo Alta Espuma',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 5,
        nombre: 'Desengrasante Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 6,
        nombre: 'Limpiador de Vestiduras',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 7,
        nombre: 'Cera Líquida',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
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
        imagen: '/images/aerosoles_aromas/pledge.png'
    },
    {
        id: 21,
        nombre: 'Abrillantador de Muebles Wiese',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/abrillantador_wiese.png'
    },
    {
        id: 22,
        nombre: 'Aromatizante BAEMI',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/aerosoles_aromas/pledge.png'
    },
    {
        id: 23,
        nombre: 'Aromatizante Glade 400 ml',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/aerosoles_aromas/armoatizante_glade.png'
    },
    {
        id: 24,
        nombre: 'Aromatizante Wiese 400 ml',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/armoatizante_wiese.png'
    },
    {
        id: 25,
        nombre: 'Raid Casa y Jardin',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/aerosoles_aromas/raid.png'
    },
    {
        id: 26,
        nombre: 'Repuesto Aromatizante Wiese',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/repuesto_wiese.png'
    },
    {
        id: 27,
        nombre: ' Repuesto Aromatizante Glade',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/repuesto_glade.png'
    },
    // Líquidos para el hogar
    {
        id: 28,
        nombre: 'Windex',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 29,
        nombre: 'Ácido Muriático"',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 30,
        nombre: 'Sarricida',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 31,
        nombre: 'Cloro',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 32,
        nombre: 'Pinol',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 33,
        nombre: 'Fabuloso Aromas Variados',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 34,
        nombre: 'Desengransante para Parrilla',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 35,
        nombre: 'Detergente Líquido Tipo Ariel',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 36,
        nombre: 'Detergente Tipo Foca',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/armoatizante_glade.png'
    },
    {
        id: 37,
        nombre: 'Detergente Tipo Vanish',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 38,
        nombre: 'Detergente Líquido Tipo Zote',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 39,
        nombre: 'Suavizante de Telas Aromas Varios',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 40,
        nombre: 'Insecticida (arañas, hormigas, cucarachas)',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 41,
        nombre: 'Jabón para Manos Aromas Variados',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 42,
        nombre: 'Jabón Lavatrastes tipo Axión',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.png'
    },
    {
        id: 43,
        nombre: 'Detergente en Polvo Arcoíris',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/liquidos_hogar/arcoiris.png'
    },
    {
        id: 44,
        nombre: 'Detergente en Polvo Roma',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/liquidos_hogar/roma.png'
    },
    // PRODUCTOS DE LINEA
    {
        id: 45,
        nombre: 'Desinfectante Multiusos Lysol',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/desinfectante_lysol.png'
    },
    {
        id: 46,
        nombre: 'Fabuloso Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/fabuloso.png'
    },
    {
        id: 47,
        nombre: 'Pinol Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/pinol.png'
    },
    {
        id: 48,
        nombre: 'Cristales con Fragancia Vern Nel',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/cristales_vernel.png'
    },
    {
        id: 49,
        nombre: 'Desinfectante en Aerosol Sanytol',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/desinfectante_sanytol.png'
    },
    {
        id: 50,
        nombre: 'Febreze Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/febreze.png'
    },
    {
        id: 51,
        nombre: 'Repuesto de Aromas Variados Air Wick',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/repuesto_airwick.png'
    },
    {
        id: 52,
        nombre: 'Limpiador harpic Power Ultra',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/harpic.png'
    },
    {
        id: 53,
        nombre: 'Detergente Líquido Foca',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/foca.png'
    },
    {
        id: 54,
        nombre: 'Jabón Zote Rosa',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/zote_rosa.png'
    },
    {
        id: 55,
        nombre: 'Jabon Zote Azul',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/zote_azul.png'
    },
    {
        id: 56,
        nombre: 'Jabón de Tocador Lirio Dermatológico',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/liro.png'
    },
    {
        id: 57,
        nombre: 'Jabón de Tocador Rosa Venus',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/rosavenus.png'
    },
    {
        id: 58,
        nombre: 'Jabón de Tocador Zest Aroma Variado',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/zest.png'
    },
    {
        id: 59,
        nombre: 'Insecticida para Moscas marca Trón',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/tron.png'
    },
    {
        id: 60,
        nombre: 'Desinfectante Multiusos Biovéne',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/biovene.png'
    },
    {
        id: 61,
        nombre: 'Repelente Wiese Citonela y Eucalipto',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/repelente_wiese.png'
    },
    {
        id: 62,
        nombre: 'Cloralex',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/cloralex.png'
    },
    {
        id: 63,
        nombre: 'Shampoo Sedal Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/sedal.png'
    },
    {
        id: 64,
        nombre: 'Shampoo Savilé Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/savile.png'
    },
    {
        id: 65,
        nombre: 'Jabón Líquido para Manos Kleenex',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/jabon_kleenex.png'
    },
    {
        id: 66,
        nombre: 'Jabón Líquido para Manos Blumen',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/jabon_blumen.png'
    },
    {
        id: 67,
        nombre: 'Jabón Líquido para Trastes Axión',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/axion.png'
    },
    {
        id: 68,
        nombre: 'Windex Mr.Musculo',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/mrmusculo.png'
    },
    {
        id: 69,
        nombre: 'Ajax Amonia',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/ajax_amonia.png'
    },
    {
        id: 70,
        nombre: 'Soporte para Aromatizante Glade',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/soporte_glade.png'
    },
    // COVID
    {
        id: 71,
        nombre: 'Desinfectante Sanitizante Universal',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/covid/.png'
    },
    {
        id: 72,
        nombre: 'Mascarilla KN95',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/covid/kn95.png'
    },
    {
        id: 73,
        nombre: 'Charola Sanitizante',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/charola_sanitizante.png'
    },
    {
        id: 74,
        nombre: 'Toallitas Desinfectantes',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/toallitas_desinfectantes.png'
    },
    {
        id: 75,
        nombre: 'Gel Antibacterial',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/.png'
    },
    {
        id: 76,
        nombre: 'Desinfectante Universal Lysol',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/covid/lysol_spray.png'
    },
    {
        id: 77,
        nombre: 'Caja de Cubrebocas',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/caja_cubrebocas.png'
    },
    {
        id: 78,
        nombre: 'Guantes de Latex Bajo Polvo',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/guantes_latex.png'
    },
    {
        id: 79,
        nombre: 'Guantes de Nitrilo Desechable',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/covid/guantes_nitrilo.png'
    },
    // PAPEL Y DESPACHADORES
    {
        id: 80,
        nombre: 'Papel Higiénico JR Dalia',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/paperlJR.png'
    },
    {
        id: 81,
        nombre: 'Papel Higiénico Jumbo Dalia',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/papelJumbo.png'
    },
    {
        id: 82,
        nombre: 'Papel Higiénico Kleenex',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/papel_kleenex.png'
    },
    {
        id: 83,
        nombre: 'Toalla Azul Scott',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/toalla_scott.png'
    },
    {
        id: 84,
        nombre: 'Toalla en Rollo Blanca',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/toalla_rolloB.png'
    },
    {
        id: 85,
        nombre: 'Toalla en Rollo Café',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/toalla_rolloC.png'
    },
    {
        id: 86,
        nombre: 'Toalla Interdoblada',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/toalla_interdoblada.png'
    },
    {
        id: 87,
        nombre: 'Toalla Interdoblada (Paquete)',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/ti_paquete.png'
    },
    {
        id: 88,
        nombre: 'Vaso Cónico #140',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/vaso_conico.png'
    },
    {
        id: 89,
        nombre: 'Despachador de Jabón Oval',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/DJ_oval.png'
    },
    {
        id: 90,
        nombre: 'Despachador de Papel JR',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/DP_jr.png'
    },
    {
        id: 91,
        nombre: 'Despachador de Papel Jumbo',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/DP_jumbo.png'
    },
    {
        id: 92,
        nombre: 'Despachador de Toalla en Rollo',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/DT_rollo.png'
    },
    {
        id: 93,
        nombre: 'Despachador de Toalla Interdoblada',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/DT_interdoblada.png'
    },
    {
        id: 94,
        nombre: 'Papel Higiénico 160m Elite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/PH_elite.png'
    },
    {
        id: 95,
        nombre: 'Toalla en Rollo ELite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/TR_elite.png'
    },
    {
        id: 96,
        nombre: 'Toalla en Rollo Café ELite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/TR_eliteC.png'
    },
    {
        id: 97,
        nombre: 'Papel Higiénico 180m Elite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/PH_elite180.png'
    },
    // BOLSAS PLASTICAS
    {
        id: 98,
        nombre: 'Bolsa Can Liners Negra/Natural 24x24',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/bolsas/bolsa_24x24.png'
    },
    {
        id: 99,
        nombre: 'Bolsa Can Liners Negra/Natural 48x48',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/bolsas/bolsa_48x48.png'
    },
    {
        id: 100,
        nombre: 'Bolsa CAmiseta Ecológica Grande',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/bolsas/bc_granade.png'
    },
    {
        id: 101,
        nombre: 'Bolsa de Camiseta Ecológica Jumbo',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/bolsas/bc_jumbo.png'
    },
    {
        id: 102,
        nombre: 'Bolsa Negra 50x40',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/bolsas/bolsa70x90.png'
    },
    {
        id: 103,
        nombre: 'Bolsa Negra 70x90',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/bolsas/bolsa70x90.png'
    },
    {
        id: 104,
        nombre: 'Bolsa Negra 90x120',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/bolsas/bolsa_90x120.png'
    },
    //TRAPEADORES
    {
        id: 105,
        nombre: 'Trapeador de Hilaza #20',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/trapeadores/t_hilaza20.png'
    },
    {
        id: 106,
        nombre: 'Trapeador de Hilaza #30',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/trapeadores/t_hilaza30.png'
    },
    {
        id: 107,
        nombre: 'Trapeador de Magitel',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/trapeadores/t_magitel.png'
    },
    {
        id: 108,
        nombre: 'Trapeador de Pabilo #30',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/trapeadores/t_pabilo30.png'
    },
    {
        id: 109,
        nombre: 'Trapeador de Pabilo #40',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/trapeadores/t_pabilo40.png'
    },
    {
        id: 110,
        nombre: 'Trapeador Industrial 1 kg',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/trapeadores/t_industrial.png'
    },
    {
        id: 111,
        nombre: 'Trapeador de Microfibra (CH, M, G)',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/trapeadores/t_microfirba.png'
    },
    {
        id: 112,
        nombre: 'Trapeador de Microfibra Española',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/trapeadores/t_microfibra_española.png'
    },
    //FIBRAS
    {
        id: 113,
        nombre: 'Fibra de Metal (Delgada)',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/fibras/fibra_delgada.png'
    },
    {
        id: 114,
        nombre: 'Fibra de Metal (Gruesa)',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/fibras/fibra_gruesa.png'
    },
    {
        id: 115,
        nombre: 'Firba Negra Delgada p/Acero Inoxidable',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/fibras/fibra_negra_delgada.png'
    },
    {
        id: 116,
        nombre: 'Fibra Negra Delgada p/Parrillas',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/fibras/fibra_negra_parrillas.png'
    },
    {
        id: 117,
        nombre: 'Fibra P96 Scotch 3M',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/fibras/fibra_3m.png'
    },
    {
        id: 118,
        nombre: 'Fibra Scotch Brite Verde con Amarrillo',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/fibras/fibra_verde_amarillo.png'
    },
    {
        id: 119,
        nombre: 'Fibra Verde con Amarillo (Par)',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/fibras/fibra_verde_amarillo_par.png'
    },
    {
        id: 120,
        nombre: 'Franela Gris',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/fibras/franela_gris.png'
    },
    //
    {
        id: 121,
        nombre: 'Estructura para Mop 60 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/fm_60.png'
    },
    {
        id: 122,
        nombre: 'Estructura para Mop 90 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/fm_90.png'
    },
    {
        id: 123,
        nombre: 'Estructura para Mop 120 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/fm_120.png'
    },
    {
        id: 124,
        nombre: 'Estructura para Mop 150 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/fm_90.png'
    },
    {
        id: 125,
        nombre: 'Estructura (Avión) para Mop 60 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/avm_60.png'
    },
    {
        id: 126,
        nombre: 'Estructura (Avión) para Mop 90 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/avm_90.png'
    },
    {
        id: 127,
        nombre: 'Estructura (Avión) para Mop 120 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/avm_120.png'
    },
    // RECOGEDORES, CUBETAS Y MAS
    {
        id: 128,
        nombre: 'Recogedor Económico',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: true,
        imagen: '/images/recogedores/r_economico.png'
    },
    {
        id: 129,
        nombre: 'Recogedor de Media Luna de Plástico',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/recogedores/r_mediaLuna.png'
    },
    {
        id: 130,
        nombre: 'Pinzas',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/recogedores/pinzas.png'
    },
    {
        id: 131,
        nombre: 'Plumero',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/recogedores/plumero.png'
    },
    {
        id: 132,
        nombre: 'Cubeta #12',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: true,
        imagen: '/images/recogedores/cubeta12.png'
    },
    {
        id: 133,
        nombre: 'Cubeta Exprimidora 20L',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/recogedores/cubeta20.png'
    },
    //ESCOBAS
    {
        id: 134,
        nombre: 'Escoba Arcoiris',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/escobas/e_arcoiris.png'
    },
    {
        id: 135,
        nombre: 'Escoba de Cepillo',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/escobas/e_cepillo.png'
    },
    {
        id: 136,
        nombre: 'Escoba Abanico',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/escobas/e_abanico.png'
    },
    {
        id: 137,
        nombre: 'Escoba Industrial',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/escobas/e_industrial.png'
    },
    {
        id: 138,
        nombre: 'Escoba Premium Ultrasuave',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/escobas/e_premium.png'
    },
    {
        id: 139,
        nombre: 'Escoba tipo Cepillo para Carro',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/escobas/e_carro.png'
    },
    {
        id: 140,
        nombre: 'Escoba Peñolera',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/escobas/e_peñolera.png'
    },
    {
        id: 141,
        nombre: 'Escoba Super',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/escobas/e_super.png'
    },
    // CEPILLOS
    {
        id: 142,
        nombre: 'Cepillo Curvo',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_curvo.png'
    },
    {
        id: 143,
        nombre: 'Cepillo de Ixtle 6"',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/cepillos/c_ixtle6.png'
    },
    {
        id: 144,
        nombre: 'Cepillo de Ixtle 8"',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/cepillos/c_ixtle8.png'
    },
    {
        id: 145,
        nombre: 'Cepillo Escobeta',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_escobeta.png'
    },
    {
        id: 146,
        nombre: 'Cepillo Lava Platos Alemán',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_aleman.png'
    },
    {
        id: 147,
        nombre: 'Cepillo Manual tipo Plancha',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_plancha.png'
    },
    {
        id: 148,
        nombre: 'Cepillo Manualito',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_manualito.png'
    },
    {
        id: 149,
        nombre: 'Cepillo Manualito Grande',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_manualitoG.png'
    },
    {
        id: 150,
        nombre: 'Cepillo para Baño',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_baño.png'
    },
    {
        id: 151,
        nombre: 'Cepillo para Baño con Base',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/cepillos/c_bañobase.png'
    },
    {
        id: 152,
        nombre: 'Cepillo tipo Plancha Alemana',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_plan_alemana.png'
    },
    {
        id: 153,
        nombre: 'Cepillo tipo Plancha Italiana',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_plancha_italiana.png'
    },
    {
        id: 154,
        nombre: 'Cepillo tipo Plancha Italiana Grande',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_plancha_italianaG.png'
    },
    //BOTES,CESTOS y MAS
    {
        id: 155,
        nombre: 'Cesto de Ropa',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/cesto_ropa.png'
    },
    {
        id: 156,
        nombre: 'Bomba para Baños',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/bomba_baños.png'
    },
    {
        id: 157,
        nombre: 'Bote de Basura 12L',
        categoria: 'Botes, Cestos y Más',
        destacado: true,
        imagen: '/images/botes/bote12.png'
    },
    {
        id: 158,
        nombre: 'Bote de Basura 6 L',
        categoria: 'Botes, Cestos y Más',
        destacado: true,
        imagen: '/images/botes/bote6.png'
    },
    {
        id: 159,
        nombre: 'Bote de Basura de Colores 10 L',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/bote_colores.png'
    },
    {
        id: 160,
        nombre: 'Bastón con punta Reforzada',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/baston_reforzado.png'
    },
    {
        id: 161,
        nombre: 'Bastón Acero con Extensión 120-240 cm',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/b_acero.png'
    },
    {
        id: 162,
        nombre: 'Bastón de Madera',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/b_madera.png'
    },
    // JARCERIA
    {
        id: 163,
        nombre: 'Pastilla de Cloro',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/jarceria/pastillas_cloro.png'
    },
    {
        id: 164,
        nombre: 'Pastilla Institucional Azul',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/pastilla_azul.png'
    },
    {
        id: 165,
        nombre: 'Pastilla para Baño Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/p_baño_wiese.png'
    },
    {
        id: 166,
        nombre: 'Pastilla para Migitorio Azul 86g Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/p_migitorio.png'
    },
    {
        id: 167,
        nombre: 'Tapete Antisalpicadura para Migitorio Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/tapete_migitorio.png'
    },
    {
        id: 168,
        nombre: 'Matamoscas',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/matamoscas.png'
    },
    {
        id: 169,
        nombre: 'Lazo 7 mts',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/lazo.png'
    },
    {
        id: 170,
        nombre: 'Jalador 50 cm',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/jarceria/jalador_50.png'
    },
    {
        id: 171,
        nombre: 'Jalador 40 cm',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/jarceria/jalador_40.png'
    },
    {
        id: 172,
        nombre: 'Jalador con Esponja 20 cm',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/jalador_esponja.png'
    },
    {
        id: 173,
        nombre: 'Jerga',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/jerga.png'
    },
    {
        id: 174,
        nombre: 'Magitel',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/magitel.png'
    },
    {
        id: 175,
        nombre: 'Botella de Plástico 1 L',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/botella1l.png'
    },
    {
        id: 176,
        nombre: 'Botella de Plástico 1/2 L',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/botella12.png'
    },
    {
        id: 177,
        nombre: 'Cuadritela',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/cuadritela.png'
    },
    {
        id: 178,
        nombre: 'Guantes de Limpieza',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/jarceria/guantes.png'
    },
    {
        id: 179,
        nombre: 'Jabón Lavalozas',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.png'
    },
    {
        id: 180,
        nombre: 'Abrillantaador Lavaloza',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.png'
    },
    {
        id: 181,
        nombre: 'Desincrustrante de Metales',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.png'
    },
    {
        id: 182,
        nombre: 'Desengrasante para Parrilla Caliente',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.png'
    },
    {
        id: 183,
        nombre: 'Sanitizante de Superficies y Utensiios de Cocina',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.png'
    },
    {
        id: 184,
        nombre: 'Desinfectante para Frutas y Verduras',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/desinfectanteFV.png'
    },
    // ESTETICA AUTOMOTRIZ
    {
        id: 185,
        nombre: 'Restaurador de Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/restaurador_B_sonax.png'
    },
    {
        id: 186,
        nombre: 'Limpiador de Rines Plus Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/sonax_rines.png'
    },
    {
        id: 187,
        nombre: 'Sellado en Spray Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/sonax-spray.png'
    },
    {
        id: 188,
        nombre: 'Cera Rápida de Alto Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/cera_rapida_sonax.png'
    },
    {
        id: 189,
        nombre: 'Shampoo Alto Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/sonax_shampoo.png'
    },
    {
        id: 190,
        nombre: 'Limpia Tapices Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/S_tapices.png'
    },
    {
        id: 191,
        nombre: 'Limpiador de AC Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/s_ac.png'
    },
    {
        id: 192,
        nombre: 'Profiline NP 03-06 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/s_0306.png'
    },
    {
        id: 193,
        nombre: 'Pulimento Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/pulimento_f.png'
    },
    {
        id: 194,
        nombre: 'Renovador de Goma Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/goma_s.png'
    },
    {
        id: 195,
        nombre: 'Quita Alquitrán Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/alquitran_s.png'
    },
    {
        id: 196,
        nombre: 'Claydisc 150 mm Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/claydisc_s.png'
    },
    {
        id: 197,
        nombre: 'Esponja Pulidora Gris 160 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/pulidora_s.png'
    },
    {
        id: 198,
        nombre: 'Lija B-99 Micro Fino Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/lija_fandeli.png'
    },
    {
        id: 199,
        nombre: 'Aceite Lubricante Hidráulico',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/lubricante_h.png'
    },
    {
        id: 200,
        nombre: 'Protector de Vinil Chemical Guys',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/vinil_CG.png'
    },
    {
        id: 201,
        nombre: '',
        categoria: 'Cera Líquida Chemical Guys',
        destacado: false,
        imagen: '/images/autos/ceraCG.png'
    },
    {
        id: 202,
        nombre: 'Compuesto Pulidor 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/pulidor3m.png'
    },
    {
        id: 203,
        nombre: 'Pulimento para Faros Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/farosS.png'
    },
    {
        id: 204,
        nombre: 'Plastilina Limpiadora 3M',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/plastilina3m.png'
    },
    {
        id: 205,
        nombre: 'Abrasivo para Cromo y Aluminio Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/abrasivoS.png'
    },
    {
        id: 206,
        nombre: 'Quita Goma de Alfombras 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/goma3m.png'
    },
    {
        id: 207,
        nombre: 'Cera en Pasta 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/cera_pasta3M.png'
    },
    {
        id: 208,
        nombre: 'Limpia Frenos Química TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/frenosQTF.png'
    },
    {
        id: 209,
        nombre: 'Masilla de Acabado Premium 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masilla3m.png'
    },
    {
        id: 210,
        nombre: 'Arrancador para Motores Química TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/arrancadorQTF.png'
    },
    {
        id: 211,
        nombre: 'Protector de Terminal de Baterías Gunk',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/grasaBard.png'
    },
    {
        id: 212,
        nombre: 'Limpiador de Terminal de Baterías Gunk',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/grasaBard.png'
    },
    {
        id: 213,
        nombre: 'Silenciador para Frenos de Disco TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/frenosQTF.png'
    },
    {
        id: 214,
        nombre: 'Aflojatodo Auto Zone',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/aflojatodoAZ.png'
    },
    {
        id: 215,
        nombre: 'Super Aflojatodo TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/s_aflojatodotf.png'
    },
    {
        id: 216,
        nombre: 'Clean and Shine 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/cleanNshine3m.png'
    },
    {
        id: 217,
        nombre: 'Limpiador de Piel y Vinil 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/LPiel_vinil3m.png'
    },
    {
        id: 218,
        nombre: 'Cera Limpiadora 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/ceraLimp_3m.png'
    },
    {
        id: 220,
        nombre: 'Cera Suave para Auto 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/C_suave3M.png'
    },
    {
        id: 221,
        nombre: 'Removedor de Rayones Turtle Wax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/rayones_turtleW.png'
    },
    {
        id: 222,
        nombre: 'Limpiador de Vidrio Repelente a la Lluvia',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/vidrios_repelente.png'
    },
    {
        id: 223,
        nombre: 'Limpiador de Vidrios 3M',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/L_vidrios3m.png'
    },
    {
        id: 224,
        nombre: 'Profiline Speedprotect Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/profiline_sonax.png'
    },
    {
        id: 225,
        nombre: 'Limpiador de Plásticos Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/plasticos_profi_sonax.png'
    },
    {
        id: 226,
        nombre: 'HW 02-04 Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/hw0204.png'
    },
    {
        id: 227,
        nombre: 'Removedor de Manchas de Agua Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/manchas_agua_s.png'
    },
    {
        id: 228,
        nombre: 'Visión Clara 1:100 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/1100_sonax.png'
    },
    {
        id: 229,
        nombre: 'Spray Anti Empañante Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/anti_empañante.png'
    },
    {
        id: 230,
        nombre: 'Limpia Tapices Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/tapices_sonaax.png'
    },
    {
        id: 231,
        nombre: 'Pulimento Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/pulimento_f.png'
    },
    {
        id: 232,
        nombre: 'Esponja Multiusos 2 en 1 Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/esponja_sonax.png'
    },
    {
        id: 233,
        nombre: 'Cepillo de Rin Ultra Suave Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/cepillorin.png'
    },
    {
        id: 234,
        nombre: 'Flexi Espatula Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/flexi_sonax.png'
    },
    {
        id: 235,
        nombre: 'Esponja Aplicadora Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/E_aplicadora_s.png'
    },
    {
        id: 236,
        nombre: 'Shampoo Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/sBrilloS.png'
    },
    {
        id: 237,
        nombre: 'Shampoo con Cera Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/SCeraS.png'
    },
    {
        id: 238,
        nombre: 'Polish and Wax Color Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/polishNwaxS.png'
    },
    {
        id: 239,
        nombre: 'Limpia Insectos Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/insectosS.png'
    },
    {
        id: 240,
        nombre: 'Lack Prepare Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/lackPrepareS.png'
    },
    {
        id: 241,
        nombre: 'Renovador de Gomas Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/renovadro_gomasS.png'
    },
    {
        id: 242,
        nombre: 'Sellador en Spray Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/selladorSpSonax.png'
    },
    {
        id: 243,
        nombre: 'Restaurador de Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/R_brilloSonax.png'
    },
    {
        id: 244,
        nombre: 'Supreme Discs Foam Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/supremeDiscF.png'
    },
    {
        id: 245,
        nombre: 'Recubrimiento Cerámico Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/recubrimientoSOnax.png'
    },
    {
        id: 246,
        nombre: 'Easy Shine Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/easyShineS.png'
    },
    {
        id: 247,
        nombre: 'Protector de Interiores Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/prot_int_sonax.png'
    },
    {
        id: 248,
        nombre: 'Glass Polish Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/glas_polishSonax.png'
    },
    {
        id: 249,
        nombre: 'Renovador Plástico Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/renovadorPlastSonax.png'
    },
    {
        id: 250,
        nombre: 'Borrador de Suciedad Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/borra_suciedad.png'
    },
    {
        id: 251,
        nombre: 'Limpia Parabrisas',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/limpiaParabrisas.png'
    },
    {
        id: 252,
        nombre: 'Hybrid Wool Pad 143 DA Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/woolPad143.png'
    },
    {
        id: 253,
        nombre: 'Cut and Finish Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/cutNfisishSon.png'
    },
    {
        id: 254,
        nombre: 'Almohadilla de Espuma Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/almohadillaSOnax.png'
    },
    {
        id: 255,
        nombre: 'Plastilina Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/PlastiSonax.png'
    },
    {
        id: 256,
        nombre: 'Esponja para Aplicaciones Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/esponja_aplicadores.png'
    },
    {
        id: 257,
        nombre: 'Masking Automotriz 2" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masking2.png'
    },
    {
        id: 258,
        nombre: 'Masking Automotriz 3/4" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masking2.png'
    },
    {
        id: 259,
        nombre: 'Masking Automotriz 1/2" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masking12.png'
    },
    {
        id: 260,
        nombre: 'Masking Automotriz 1" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masking1.png'
    },
    {
        id: 261,
        nombre: 'Jalador para Vidrio',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/jalador.png'
    },
    {
        id: 262,
        nombre: 'Rellenador Ligero Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/rellenadorF.png'
    },
    // DIAGNOSTICO Y PRUEBAS
    {
        id: 263,
        nombre: 'Panel de Prueba de Antidoping',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/panel_anitd.png'
    },
    {
        id: 264,
        nombre: 'Prueba de Antidoping de Tira',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/antid_tira.png'
    },
    {
        id: 265,
        nombre: 'Frasco para Pruebas',
        categoria: 'Diagnóstico y Pruebas',
        destacado: true,
        imagen: '/images/diagnostico/frasco.png'
    },
    {
        id: 266,
        nombre: 'Prueba de Saliva',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/saliva.png'
    },
    {
        id: 267,
        nombre: 'Alcoholímetro Iblow',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/alcoh_iblow.png'
    },
    {
        id: 268,
        nombre: 'Alcoholímetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/alcohol.png'
    },
    {
        id: 269,
        nombre: 'Alcoholímetro de Pared',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/alcoh_pared.png'
    },
    {
        id: 270,
        nombre: 'Glucómetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/glucometro.png'
    },
    {
        id: 271,
        nombre: 'Baumanómetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/baumano.png'
    },
    // MEDICAMENTOS Y MAS
    {
        id: 272,
        nombre: 'Aspitak P 30 Compuesto 100 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/aspitak.png'
    },
    {
        id: 273,
        nombre: 'Doloxen 10 Tabletas 100 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/doloxen.png'
    },
    {
        id: 274,
        nombre: 'Farex Ibuprofeno 10 Tabletas 600 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/farex.png'
    },
    {
        id: 275,
        nombre: 'Ketorolaco INY 30 ML',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/ketorolaco.png'
    },
    {
        id: 276,
        nombre: 'Mavidol SL 4 Tabletas 30 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/mavidol.png'
    },
    {
        id: 277,
        nombre: 'Metoclopramida 6 Ampolletas 10mg/2ml',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/metoclopramida.png'
    },
    {
        id: 278,
        nombre: 'Dirpasid 20 Tabletas 10 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/dirpasid.png'
    },
    {
        id: 279,
        nombre: 'Portem 10 Tbletas 500 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/portem.png'
    },
    {
        id: 280,
        nombre: 'KY6 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/ky6.png'
    },
    {
        id: 281,
        nombre: 'Masferol 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/masferol.png'
    },
    {
        id: 282,
        nombre: ' Rosel 24 Tabletas 300mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/rosel.png'
    },
    {
        id: 283,
        nombre: ' Cinarizina Ultra 60 Tabletas 75 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/cinarizina.png'
    },
    {
        id: 284,
        nombre: 'Venda Elástica #10',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/venda.png'
    },
    {
        id: 285,
        nombre: 'Gasas 10x10',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/gasas10.png'
    },
    {
        id: 286,
        nombre: 'Gasas 7.5x7.5',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/gasas10.png'
    },
    {
        id: 287,
        nombre: 'Cinta Microporosa 1"',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/cinta.png'
    },
    {
        id: 288,
        nombre: 'Bandas Adhesivas (Curitas)',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/curitas.png'
    },
    {
        id: 289,
        nombre: 'Mertiolate 30 ml',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/mertiolate.png'
    },
    {
        id: 290,
        nombre: 'Algodón 500 g',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/algodon.png'
    },
    {
        id: 291,
        nombre: 'Cartilla de Snellen para Examen Visual',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/snellen.png'
    },
    {
        id: 292,
        nombre: 'Botiquín de Primeros Auxilios',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/botiquin.png'
    },
    {
        id: 293,
        nombre: ' Termómetro Infrarrojo',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/termometor.png'
    },
    {
        id: 294,
        nombre: 'Oxímetro de Pulso Digital',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/oxi.png'
    },
    {
        id: 295,
        nombre: 'Tiras Reactivas para Glucómetro Active',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/tiras_gluco.png'
    },
    {
        id: 296,
        nombre: 'Lancetas Soft Clix',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/softclix.png'
    },
    {
        id: 297,
        nombre: 'Alcohol Etílico 70%',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/alochetilik.png'
    },
    {
        id: 298,
        nombre: 'Extintor de 6.8 kg Dióxido de Carbono',
        categoria: 'Medicamentos y Más',
        destacado: true,
        imagen: '/images/medicina/exti68.png'
    },
    {
        id: 299,
        nombre: ' Extintor de 6 kg Clase K',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/extiK.png'
    },
    {
        id: 301,
        nombre: 'Diclofenaco 100 mg 20 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/diclofenaco.png'
    },
    {
        id: 302,
        nombre: 'Clorfenamina 4 mg 20 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/clorfen.png'
    },
    {
        id: 303,
        nombre: ' Loperamida 2 mg 12 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/loperamida.png'
    },
    {
        id: 304,
        nombre: ' Difenidol 25 mg 30 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/difenidol.png'
    },
    {
        id: 305,
        nombre: 'Sal de Uvas Picot 12 Sobres',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/saldeuvas.png'
    },
    {
        id: 306,
        nombre: 'Benzonatato 100 mg Perlas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/benxonotato.png'
    },
    {
        id: 307,
        nombre: 'Dextrometorfano 15 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/dex.png'
    },
    {
        id: 308,
        nombre: 'Hioscina 10 mg 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/hios.png'
    },
    {
        id: 309,
        nombre: 'Ciprofloxacino 250 mg 12 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/cip.png'
    },
    {
        id: 310,
        nombre: 'Omeprazol',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/omep.png'
    },
    {
        id: 311,
        nombre: 'Aspirinas 500 mg 40 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/aspirinas.png'
    },
    {
        id: 312,
        nombre: 'Dramamine 50 mg 24 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/dramamine.png'
    },
    {
        id: 313,
        nombre: 'Pepto Bismol',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/pepto.png'
    },
    // SEGURIDAD VIAL
    {
        id: 314,
        nombre: 'Boya Amarilla',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/boya.png'
    },
    {
        id: 315,
        nombre: 'Vialetas Plásticas',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/vialetas.png'
    },
    {
        id: 316,
        nombre: 'Tope Grande',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/topeG.png'
    },
    {
        id: 317,
        nombre: 'Tope Chico',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/topeC.png'
    },
    {
        id: 318,
        nombre: 'Poste Alineador',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/poste.png'
    },
    {
        id: 319,
        nombre: 'Barrera solapada',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/barrera.png'
    },
    {
        id: 320,
        nombre: 'Trafitambo',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/trafiambo.png'
    },
    {
        id: 321,
        nombre: 'Cono',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/cono.png'
    },
    {
        id: 322,
        nombre: 'Señal de Alto',
        categoria: 'Seguridad Vial',
        destacado: true,
        imagen: '/images/seguridad/alto.png'
    },
    // EQUIPO DE SEGURIDAD
    {
        id: 323,
        nombre: 'Lentes de Seguridad',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/lentes.png'
    },
    {
        id: 324,
        nombre: 'Calzado de Seguridad',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/calzdo.png'
    },
    {
        id: 325,
        nombre: 'Chaleco Reflejante',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/chaleco.png'
    },
    {
        id: 326,
        nombre: 'Faja',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/faja.png'
    },
    {
        id: 327,
        nombre: 'Guante Anticorte',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/guanteA.png'
    },
    {
        id: 328,
        nombre: 'Guante de Nylon Nitrilo',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/guanteNN.png'
    },
    {
        id: 329,
        nombre: 'Tapón de Oído desechable',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/tapon.png'
    },
    {
        id: 330,
        nombre: 'Orejeras',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/orejeras.png'
    },
    //FERRETERIA Y MAS
    {
        id: 331,
        nombre: 'Broca de 3/6',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/broca36.png'
    },
    {
        id: 332,
        nombre: 'Broca de 3/8',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/broca38.png'
    },
    {
        id: 333,
        nombre: 'Broca de 5/16',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/broca516.png'
    },
    {
        id: 334,
        nombre: 'Calibrador de Aire de 150 lbs',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/calibrador.png'
    },
    {
        id: 335,
        nombre: 'Clavija para Extensión Plástica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/calvija.png'
    },
    {
        id: 336,
        nombre: 'Conector Glandular 3/4',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/conector.png'
    },
    {
        id: 337,
        nombre: 'Contacto Duplex Volteck',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/contatco.png'
    },
    {
        id: 338,
        nombre: 'Disco de Corte para Metal 4 1/2',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/disco.png'
    },
    {
        id: 339,
        nombre: 'Gas Butano',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/gas.png'
    },
    {
        id: 340,
        nombre: 'Gas Refrigerante',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/gasR.png'
    },
    {
        id: 341,
        nombre: 'Machuelo 7/16',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/machuelo716.png'
    },
    {
        id: 342,
        nombre: 'Machuelo 1/2 Estándar',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/machuelo12.png'
    },
    {
        id: 343,
        nombre: 'Parche',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/parche.png'
    },
    {
        id: 344,
        nombre: 'Pija 1/4 x 1" 1/2',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/pija14.png'
    },
    {
        id: 345,
        nombre: 'Piola Estándard',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/piola.png'
    },
    {
        id: 346,
        nombre: 'Placa de Aluminio Gris',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/placa.png'
    },
    {
        id: 347,
        nombre: 'Remache de 3/16" x 3/4"',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/remache316.png'
    },
    {
        id: 348,
        nombre: 'Multicontactos',
        categoria: 'Ferretería y Más',
        destacado: true,
        imagen: '/images/ferreteria/multicon.png'
    },
    {
        id: 349,
        nombre: 'Cable de uso Rudo 1 m',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/cableR.png'
    },
    {
        id: 350,
        nombre: 'Extensión Eléctrica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/extensionC.png'
    },
    {
        id: 351,
        nombre: 'Martillo',
        categoria: 'Ferretería y Más',
        destacado: true,
        imagen: '/images/ferreteria/martillo.png'
    },
    {
        id: 352,
        nombre: 'Desarmador',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/desarmador.png'
    },
    {
        id: 353,
        nombre: 'Destornillador',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/destornillador.png'
    },
    {
        id: 354,
        nombre: 'Sierra Eléctrica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/sierraE.png'
    },
    {
        id: 355,
        nombre: 'Sierra',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/sierra.png'
    },
    // SEGURIDAD INDUSTRIAL
    {
        id: 356,
        nombre: 'Cinta de Precaución',
        categoria: 'Seguridad Industrial',
        destacado: true,
        imagen: '/images/seguridadI/precaucion.png'
    },
    {
        id: 357,
        nombre: 'Cinta de Prohibido el Paso',
        categoria: 'Seguridad Industrial',
        destacado: true,
        imagen: '/images/seguridadI/prohibido.png'
    },
    {
        id: 358,
        nombre: 'Malla Delimitadora',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/malla.png'
    },
    {
        id: 359,
        nombre: 'Casco',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/casco.png'
    },
    {
        id: 360,
        nombre: 'Careta de Soldador',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/careta.png'
    },
    {
        id: 361,
        nombre: 'Mandil de Carnaza',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/madil.png'
    },
    {
        id: 362,
        nombre: 'Manga de Kevlar',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/manga.png'
    },
    {
        id: 363,
        nombre: 'Overol Desechable',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/overol.png'
    },
    {
        id: 364,
        nombre: 'Árnes Sencillo',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/arnes.png'
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