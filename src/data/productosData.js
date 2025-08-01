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
        imagen: '/images/faltantes/abrillantadorB.webp'
    },
    {
        id: 2,
        nombre: 'Abrillantador en Gel',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/faltantes/abrillantadorB.webp'
    },
    {
        id: 3,
        nombre: 'Auto Shampoo',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/faltantes/autoSB.webp'
    },
    {
        id: 4,
        nombre: 'Auto Shampoo Alta Espuma',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/faltantes/autoSB.webp'
    },
    {
        id: 5,
        nombre: 'Desengrasante Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/faltantes/desengrasanteb.webp'
    },
    {
        id: 6,
        nombre: 'Limpiador de Vestiduras',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/faltantes/autoSB.webp'
    },
    {
        id: 7,
        nombre: 'Cera Líquida',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.webp'
    },
    {
        id: 8,
        nombre: 'Atomizador de Uso Rudo Canyon',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/A_industrial.webp'
    },
    {
        id: 9,
        nombre: 'Atomizador Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/A_Rudo.webp'
    },
    {
        id: 10,
        nombre: 'Microfibra',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/microfibra.webp'
    },
    {
        id: 11,
        nombre: 'Cepillo Bi-Level tipo Raqueta de PVC',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/c_pvc.webp'
    },
    {
        id: 12,
        nombre: 'Cepillo Brush Bi-Level Redondo',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/c-redondo.webp'
    },
    {
        id: 13,
        nombre: ' Cepillo Brush Sencillo de PVC',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/c_sencillo_pvc.webp'
    },
    {
        id: 14,
        nombre: ' Abrillantador en Gel',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/A_industrial.webp'
    },
    {
        id: 15,
        nombre: 'Cepillo de Ixtle',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/c_ixtle.webp'
    },
    {
        id: 16,
        nombre: 'Trapo Industrial',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/trapo_industrial.webp'
    },
    {
        id: 17,
        nombre: 'Esponja tipo Cacahuate 4"',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/e_cacahuate_4.webp'
    },
    {
        id: 18,
        nombre: 'Esponja tipo Cacahuate 8"',
        categoria: 'Lavado Automotriz',
        destacado: true,
        imagen: '/images/lavado_automotriz/e_cacahuate_8.webp'
    },
    {
        id: 19,
        nombre: 'Franela gris',
        categoria: 'Lavado Automotriz',
        destacado: false,
        imagen: '/images/lavado_automotriz/franela_gris.webp'
    },
    // AEROSOLES Y AROMAS
    {
        id: 20,
        nombre: 'Abrillantador de Muebles Pledge',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/pledge.webp'
    },
    {
        id: 21,
        nombre: 'Abrillantador de Muebles Wiese',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/abrillantador_wiese.webp'
    },
    {
        id: 22,
        nombre: 'Aromatizante BAEMI',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/aerosoles_aromas/pledge.webp'
    },
    {
        id: 23,
        nombre: 'Aromatizante Glade 400 ml',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/aerosoles_aromas/armoatizante_glade.webp'
    },
    {
        id: 24,
        nombre: 'Aromatizante Wiese 400 ml',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/armoatizante_wiese.webp'
    },
    {
        id: 25,
        nombre: 'Raid Casa y Jardin',
        categoria: 'Aerosoles y Aromas',
        destacado: true,
        imagen: '/images/aerosoles_aromas/raid.webp'
    },
    {
        id: 26,
        nombre: 'Repuesto Aromatizante Wiese',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/repuesto_wiese.webp'
    },
    {
        id: 27,
        nombre: ' Repuesto Aromatizante Glade',
        categoria: 'Aerosoles y Aromas',
        destacado: false,
        imagen: '/images/aerosoles_aromas/repuesto_glade.webp'
    },
    // Líquidos para el hogar
    {
        id: 28,
        nombre: 'Windex',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/faltantes/windexB.webp'
    },
    {
        id: 29,
        nombre: 'Ácido Muriático"',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.webp'
    },
    {
        id: 30,
        nombre: 'Sarricida',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.webp'
    },
    {
        id: 31,
        nombre: 'Cloro',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/faltantes/Clorobaemi.webp'
    },
    {
        id: 32,
        nombre: 'Pinol',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/autos/pinolB.webp'
    },
    {
        id: 33,
        nombre: 'Limpiador Multiusuos',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/faltantes/limpMB.webp'
    },
    {
        id: 34,
        nombre: 'Desengransante para Parrilla',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/faltantes/desengrasanteb.webp'
    },
    {
        id: 35,
        nombre: 'Detergente Líquido Tipo Ariel',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/faltantes/ArielB.webp'
    },
    {
        id: 36,
        nombre: 'Detergente Tipo Foca',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/armoatizante_glade.webp'
    },
    {
        id: 37,
        nombre: 'Detergente Tipo Vanish',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/faltantes/vanishB.webp'
    },
    {
        id: 38,
        nombre: 'Detergente Líquido Tipo Zote',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/autos/desinfectanteFV.webp'
    },
    {
        id: 39,
        nombre: 'Suavizante de Telas Aromas Varios',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/faltantes/suavizanteB.webp'
    },
    {
        id: 40,
        nombre: 'Insecticida (arañas, hormigas, cucarachas)',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/autos/desinfectanteFV.webp'
    },
    {
        id: 41,
        nombre: 'Jabón para Manos Aromas Variados',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/faltantes/shampooManosB.webp'
    },
    {
        id: 42,
        nombre: 'Jabón Lavatrastes tipo Axión',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/faltantes/LavatrastesB.webp'
    },
    {
        id: 43,
        nombre: 'Detergente en Polvo Arcoíris',
        categoria: 'Líquidos para el Hogar',
        destacado: false,
        imagen: '/images/liquidos_hogar/arcoiris.webp'
    },
    {
        id: 44,
        nombre: 'Detergente en Polvo Roma',
        categoria: 'Líquidos para el Hogar',
        destacado: true,
        imagen: '/images/liquidos_hogar/roma.webp'
    },
    // PRODUCTOS DE LINEA
    {
        id: 45,
        nombre: 'Desinfectante Multiusos Lysol',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/desinfectante_lysol.webp'
    },
    {
        id: 46,
        nombre: 'Fabuloso Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/fabuloso.webp'
    },
    {
        id: 47,
        nombre: 'Pinol Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/pinol.webp'
    },
    {
        id: 48,
        nombre: 'Cristales con Fragancia Vern Nel',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/cristales_vernel.webp'
    },
    {
        id: 49,
        nombre: 'Desinfectante en Aerosol Sanytol',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/desinfectante_sanytol.webp'
    },
    {
        id: 50,
        nombre: 'Febreze Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/febreze.webp'
    },
    {
        id: 51,
        nombre: 'Repuesto de Aromas Variados Air Wick',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/repuesto_airwick.webp'
    },
    {
        id: 52,
        nombre: 'Limpiador harpic Power Ultra',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/harpic.webp'
    },
    {
        id: 53,
        nombre: 'Detergente Líquido Foca',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/foca.webp'
    },
    {
        id: 54,
        nombre: 'Jabón Zote Rosa',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/zote_rosa.webp'
    },
    {
        id: 55,
        nombre: 'Jabon Zote Azul',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/zote_azul.webp'
    },
    {
        id: 56,
        nombre: 'Jabón de Tocador Lirio Dermatológico',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/liro.webp'
    },
    {
        id: 57,
        nombre: 'Jabón de Tocador Rosa Venus',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/rosavenus.webp'
    },
    {
        id: 58,
        nombre: 'Jabón de Tocador Zest Aroma Variado',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/zest.webp'
    },
    {
        id: 59,
        nombre: 'Insecticida para Moscas marca Trón',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/tron.webp'
    },
    {
        id: 60,
        nombre: 'Desinfectante Multiusos Biovéne',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/biovene.webp'
    },
    {
        id: 61,
        nombre: 'Repelente Wiese Citonela y Eucalipto',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/repelente_wiese.webp'
    },
    {
        id: 62,
        nombre: 'Cloralex',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/cloralex.webp'
    },
    {
        id: 63,
        nombre: 'Shampoo Sedal Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/sedal.webp'
    },
    {
        id: 64,
        nombre: 'Shampoo Savilé Aromas Variados',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/savile.webp'
    },
    {
        id: 65,
        nombre: 'Jabón Líquido para Manos Kleenex',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/jabon_kleenex.webp'
    },
    {
        id: 66,
        nombre: 'Jabón Líquido para Manos Blumen',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/jabon_blumen.webp'
    },
    {
        id: 67,
        nombre: 'Jabón Líquido para Trastes Axión',
        categoria: 'Productos de Línea',
        destacado: true,
        imagen: '/images/productos_linea/axion.webp'
    },
    {
        id: 68,
        nombre: 'Windex Mr.Musculo',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/mrmusculo.webp'
    },
    {
        id: 69,
        nombre: 'Ajax Amonia',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/ajax_amonia.webp'
    },
    {
        id: 70,
        nombre: 'Soporte para Aromatizante Glade',
        categoria: 'Productos de Línea',
        destacado: false,
        imagen: '/images/productos_linea/soporte_glade.webp'
    },
    // COVID
    {
        id: 71,
        nombre: 'Desinfectante Sanitizante Universal',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/covid/.webp'
    },
    {
        id: 72,
        nombre: 'Mascarilla KN95',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/covid/kn95.webp'
    },
    {
        id: 73,
        nombre: 'Charola Sanitizante',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/charola_sanitizante.webp'
    },
    {
        id: 74,
        nombre: 'Toallitas Desinfectantes',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/toallitas_desinfectantes.webp'
    },
    {
        id: 75,
        nombre: 'Gel Antibacterial',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/.webp'
    },
    {
        id: 76,
        nombre: 'Desinfectante Universal Lysol',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/covid/lysol_spray.webp'
    },
    {
        id: 77,
        nombre: 'Caja de Cubrebocas',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/caja_cubrebocas.webp'
    },
    {
        id: 78,
        nombre: 'Guantes de Latex Bajo Polvo',
        categoria: 'Material COVID-19',
        destacado: false,
        imagen: '/images/covid/guantes_latex.webp'
    },
    {
        id: 79,
        nombre: 'Guantes de Nitrilo Desechable',
        categoria: 'Material COVID-19',
        destacado: true,
        imagen: '/images/covid/guantes_nitrilo.webp'
    },
    // PAPEL Y DESPACHADORES
    {
        id: 80,
        nombre: 'Papel Higiénico JR Dalia',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/paperlJR.webp'
    },
    {
        id: 81,
        nombre: 'Papel Higiénico Jumbo Dalia',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/papelJumbo.webp'
    },
    {
        id: 82,
        nombre: 'Papel Higiénico Kleenex',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/papel_kleenex.webp'
    },
    {
        id: 83,
        nombre: 'Toalla Azul Scott',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/toalla_scott.webp'
    },
    {
        id: 84,
        nombre: 'Toalla en Rollo Blanca',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/toalla_rolloB.webp'
    },
    {
        id: 85,
        nombre: 'Toalla en Rollo Café',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/toalla_rolloC.webp'
    },
    {
        id: 86,
        nombre: 'Toalla Interdoblada',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/toalla_interdoblada.webp'
    },
    {
        id: 87,
        nombre: 'Toalla Interdoblada (Paquete)',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/ti_paquete.webp'
    },
    {
        id: 88,
        nombre: 'Vaso Cónico #140',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/vaso_conico.webp'
    },
    {
        id: 89,
        nombre: 'Despachador de Jabón Oval',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/DJ_oval.webp'
    },
    {
        id: 90,
        nombre: 'Despachador de Papel JR',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/DP_jr.webp'
    },
    {
        id: 91,
        nombre: 'Despachador de Papel Jumbo',
        categoria: 'Papel y Despachadores',
        destacado: true,
        imagen: '/images/papel/DP_jumbo.webp'
    },
    {
        id: 92,
        nombre: 'Despachador de Toalla en Rollo',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/DT_rollo.webp'
    },
    {
        id: 93,
        nombre: 'Despachador de Toalla Interdoblada',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/DT_interdoblada.webp'
    },
    {
        id: 94,
        nombre: 'Papel Higiénico 160m Elite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/PH_elite.webp'
    },
    {
        id: 95,
        nombre: 'Toalla en Rollo ELite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/TR_elite.webp'
    },
    {
        id: 96,
        nombre: 'Toalla en Rollo Café ELite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/TR_eliteC.webp'
    },
    {
        id: 97,
        nombre: 'Papel Higiénico 180m Elite',
        categoria: 'Papel y Despachadores',
        destacado: false,
        imagen: '/images/papel/PH_elite180.webp'
    },
    // BOLSAS PLASTICAS
    {
        id: 98,
        nombre: 'Bolsa Can Liners Negra/Natural 24x24',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/bolsas/bolsa_24x24.webp'
    },
    {
        id: 99,
        nombre: 'Bolsa Can Liners Negra/Natural 48x48',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/bolsas/bolsa_48x48.webp'
    },
    {
        id: 100,
        nombre: 'Bolsa CAmiseta Ecológica Grande',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/bolsas/bc_granade.webp'
    },
    {
        id: 101,
        nombre: 'Bolsa de Camiseta Ecológica Jumbo',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/bolsas/bc_jumbo.webp'
    },
    {
        id: 102,
        nombre: 'Bolsa Negra 50x40',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/bolsas/bolsa70x90.webp'
    },
    {
        id: 103,
        nombre: 'Bolsa Negra 70x90',
        categoria: 'Bolsas Plásticas',
        destacado: true,
        imagen: '/images/bolsas/bolsa70x90.webp'
    },
    {
        id: 104,
        nombre: 'Bolsa Negra 90x120',
        categoria: 'Bolsas Plásticas',
        destacado: false,
        imagen: '/images/bolsas/bolsa_90x120.webp'
    },
    //TRAPEADORES
    {
        id: 105,
        nombre: 'Trapeador de Hilaza #20',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/trapeadores/t_hilaza20.webp'
    },
    {
        id: 106,
        nombre: 'Trapeador de Hilaza #30',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/trapeadores/t_hilaza30.webp'
    },
    {
        id: 107,
        nombre: 'Trapeador de Magitel',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/trapeadores/t_magitel.webp'
    },
    {
        id: 108,
        nombre: 'Trapeador de Pabilo #30',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/trapeadores/t_pabilo30.webp'
    },
    {
        id: 109,
        nombre: 'Trapeador de Pabilo #40',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/trapeadores/t_pabilo40.webp'
    },
    {
        id: 110,
        nombre: 'Trapeador Industrial 1 kg',
        categoria: 'Trapeadores',
        destacado: false,
        imagen: '/images/trapeadores/t_industrial.webp'
    },
    {
        id: 111,
        nombre: 'Trapeador de Microfibra (CH, M, G)',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/trapeadores/t_microfirba.webp'
    },
    {
        id: 112,
        nombre: 'Trapeador de Microfibra Española',
        categoria: 'Trapeadores',
        destacado: true,
        imagen: '/images/trapeadores/t_microfibra_española.webp'
    },
    //FIBRAS
    {
        id: 113,
        nombre: 'Fibra de Metal (Delgada)',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/fibras/fibra_delgada.webp'
    },
    {
        id: 114,
        nombre: 'Fibra de Metal (Gruesa)',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/fibras/fibra_gruesa.webp'
    },
    {
        id: 115,
        nombre: 'Firba Negra Delgada p/Acero Inoxidable',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/fibras/fibra_negra_delgada.webp'
    },
    {
        id: 116,
        nombre: 'Fibra Negra Delgada p/Parrillas',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/fibras/fibra_negra_parrillas.webp'
    },
    {
        id: 117,
        nombre: 'Fibra P96 Scotch 3M',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/fibras/fibra_3m.webp'
    },
    {
        id: 118,
        nombre: 'Fibra Scotch Brite Verde con Amarrillo',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/fibras/fibra_verde_amarillo.webp'
    },
    {
        id: 119,
        nombre: 'Fibra Verde con Amarillo (Par)',
        categoria: 'Fibras',
        destacado: true,
        imagen: '/images/fibras/fibra_verde_amarillo_par.webp'
    },
    {
        id: 120,
        nombre: 'Franela Gris',
        categoria: 'Fibras',
        destacado: false,
        imagen: '/images/fibras/franela_gris.webp'
    },
    //
    {
        id: 121,
        nombre: 'Estructura para Mop 60 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/fm_60.webp'
    },
    {
        id: 122,
        nombre: 'Estructura para Mop 90 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/fm_90.webp'
    },
    {
        id: 123,
        nombre: 'Estructura para Mop 120 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/fm_120.webp'
    },
    {
        id: 124,
        nombre: 'Estructura para Mop 150 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/fm_90.webp'
    },
    {
        id: 125,
        nombre: 'Estructura (Avión) para Mop 60 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/avm_60.webp'
    },
    {
        id: 126,
        nombre: 'Estructura (Avión) para Mop 90 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/avm_90.webp'
    },
    {
        id: 127,
        nombre: 'Estructura (Avión) para Mop 120 cm',
        categoria: 'Estructuras y Fundas para Mop',
        destacado: false,
        imagen: '/images/estructuras/avm_120.webp'
    },
    // RECOGEDORES, CUBETAS Y MAS
    {
        id: 128,
        nombre: 'Recogedor Económico',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: true,
        imagen: '/images/recogedores/r_economico.webp'
    },
    {
        id: 129,
        nombre: 'Recogedor de Media Luna de Plástico',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/recogedores/r_mediaLuna.webp'
    },
    {
        id: 130,
        nombre: 'Pinzas',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/recogedores/pinzas.webp'
    },
    {
        id: 131,
        nombre: 'Plumero',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/recogedores/plumero.webp'
    },
    {
        id: 132,
        nombre: 'Cubeta #12',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: true,
        imagen: '/images/recogedores/cubeta12.webp'
    },
    {
        id: 133,
        nombre: 'Cubeta Exprimidora 20L',
        categoria: 'Recogedores, Cubetas y Más',
        destacado: false,
        imagen: '/images/recogedores/cubeta20.webp'
    },
    //ESCOBAS
    {
        id: 134,
        nombre: 'Escoba Arcoiris',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/escobas/e_arcoiris.webp'
    },
    {
        id: 135,
        nombre: 'Escoba de Cepillo',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/escobas/e_cepillo.webp'
    },
    {
        id: 136,
        nombre: 'Escoba Abanico',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/escobas/e_abanico.webp'
    },
    {
        id: 137,
        nombre: 'Escoba Industrial',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/escobas/e_industrial.webp'
    },
    {
        id: 138,
        nombre: 'Escoba Premium Ultrasuave',
        categoria: 'Escobas',
        destacado: true,
        imagen: '/images/escobas/e_premium.webp'
    },
    {
        id: 139,
        nombre: 'Escoba tipo Cepillo para Carro',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/escobas/e_carro.webp'
    },
    {
        id: 140,
        nombre: 'Escoba Peñolera',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/escobas/e_peñolera.webp'
    },
    {
        id: 141,
        nombre: 'Escoba Super',
        categoria: 'Escobas',
        destacado: false,
        imagen: '/images/escobas/e_super.webp'
    },
    // CEPILLOS
    {
        id: 142,
        nombre: 'Cepillo Curvo',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_curvo.webp'
    },
    {
        id: 143,
        nombre: 'Cepillo de Ixtle 6"',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/cepillos/c_ixtle6.webp'
    },
    {
        id: 144,
        nombre: 'Cepillo de Ixtle 8"',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/cepillos/c_ixtle8.webp'
    },
    {
        id: 145,
        nombre: 'Cepillo Escobeta',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_escobeta.webp'
    },
    {
        id: 146,
        nombre: 'Cepillo Lava Platos Alemán',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_aleman.webp'
    },
    {
        id: 147,
        nombre: 'Cepillo Manual tipo Plancha',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_plancha.webp'
    },
    {
        id: 148,
        nombre: 'Cepillo Manualito',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_manualito.webp'
    },
    {
        id: 149,
        nombre: 'Cepillo Manualito Grande',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_manualitoG.webp'
    },
    {
        id: 150,
        nombre: 'Cepillo para Baño',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_baño.webp'
    },
    {
        id: 151,
        nombre: 'Cepillo para Baño con Base',
        categoria: 'Cepillos',
        destacado: true,
        imagen: '/images/cepillos/c_bañobase.webp'
    },
    {
        id: 152,
        nombre: 'Cepillo tipo Plancha Alemana',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_plan_alemana.webp'
    },
    {
        id: 153,
        nombre: 'Cepillo tipo Plancha Italiana',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_plancha_italiana.webp'
    },
    {
        id: 154,
        nombre: 'Cepillo tipo Plancha Italiana Grande',
        categoria: 'Cepillos',
        destacado: false,
        imagen: '/images/cepillos/c_plancha_italianaG.webp'
    },
    //BOTES,CESTOS y MAS
    {
        id: 155,
        nombre: 'Cesto de Ropa',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/cesto_ropa.webp'
    },
    {
        id: 156,
        nombre: 'Bomba para Baños',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/bomba_baños.webp'
    },
    {
        id: 157,
        nombre: 'Bote de Basura 12L',
        categoria: 'Botes, Cestos y Más',
        destacado: true,
        imagen: '/images/botes/bote12.webp'
    },
    {
        id: 158,
        nombre: 'Bote de Basura 6 L',
        categoria: 'Botes, Cestos y Más',
        destacado: true,
        imagen: '/images/botes/bote6.webp'
    },
    {
        id: 159,
        nombre: 'Bote de Basura de Colores 10 L',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/bote_colores.webp'
    },
    {
        id: 160,
        nombre: 'Bastón con punta Reforzada',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/baston_reforzado.webp'
    },
    {
        id: 161,
        nombre: 'Bastón Acero con Extensión 120-240 cm',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/b_acero.webp'
    },
    {
        id: 162,
        nombre: 'Bastón de Madera',
        categoria: 'Botes, Cestos y Más',
        destacado: false,
        imagen: '/images/botes/b_madera.webp'
    },
    // JARCERIA
    {
        id: 163,
        nombre: 'Pastilla de Cloro',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/jarceria/pastillas_cloro.webp'
    },
    {
        id: 164,
        nombre: 'Pastilla Institucional Azul',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/pastilla_azul.webp'
    },
    {
        id: 165,
        nombre: 'Pastilla para Baño Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/p_baño_wiese.webp'
    },
    {
        id: 166,
        nombre: 'Pastilla para Migitorio Azul 86g Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/p_migitorio.webp'
    },
    {
        id: 167,
        nombre: 'Tapete Antisalpicadura para Migitorio Wiese',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/tapete_migitorio.webp'
    },
    {
        id: 168,
        nombre: 'Matamoscas',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/matamoscas.webp'
    },
    {
        id: 169,
        nombre: 'Lazo 7 mts',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/lazo.webp'
    },
    {
        id: 170,
        nombre: 'Jalador 50 cm',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/jarceria/jalador_50.webp'
    },
    {
        id: 171,
        nombre: 'Jalador 40 cm',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/jarceria/jalador_40.webp'
    },
    {
        id: 172,
        nombre: 'Jalador con Esponja 20 cm',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/jalador_esponja.webp'
    },
    {
        id: 173,
        nombre: 'Jerga',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/jerga.webp'
    },
    {
        id: 174,
        nombre: 'Magitel',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/magitel.webp'
    },
    {
        id: 175,
        nombre: 'Botella de Plástico 1 L',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/botella1l.webp'
    },
    {
        id: 176,
        nombre: 'Botella de Plástico 1/2 L',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/botella12.webp'
    },
    {
        id: 177,
        nombre: 'Cuadritela',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/cuadritela.webp'
    },
    {
        id: 178,
        nombre: 'Guantes de Limpieza',
        categoria: 'Jarcería',
        destacado: true,
        imagen: '/images/jarceria/guantes.webp'
    },
    {
        id: 179,
        nombre: 'Jabón Lavalozas',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.webp'
    },
    {
        id: 180,
        nombre: 'Abrillantaador Lavaloza',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.webp'
    },
    {
        id: 181,
        nombre: 'Desincrustrante de Metales',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.webp'
    },
    {
        id: 182,
        nombre: 'Desengrasante para Parrilla Caliente',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.webp'
    },
    {
        id: 183,
        nombre: 'Sanitizante de Superficies y Utensiios de Cocina',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/b_madera.webp'
    },
    {
        id: 184,
        nombre: 'Desinfectante para Frutas y Verduras',
        categoria: 'Jarcería',
        destacado: false,
        imagen: '/images/jarceria/desinfectanteFV.webp'
    },
    // ESTETICA AUTOMOTRIZ
    {
        id: 185,
        nombre: 'Restaurador de Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/restaurador_B_sonax.webp'
    },
    {
        id: 186,
        nombre: 'Limpiador de Rines Plus Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/sonax_rines.webp'
    },
    {
        id: 187,
        nombre: 'Sellado en Spray Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/sonax-spray.webp'
    },
    {
        id: 188,
        nombre: 'Cera Rápida de Alto Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/cera_rapida_sonax.webp'
    },
    {
        id: 189,
        nombre: 'Shampoo Alto Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/sonax_shampoo.webp'
    },
    {
        id: 190,
        nombre: 'Limpia Tapices Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/S_tapices.webp'
    },
    {
        id: 191,
        nombre: 'Limpiador de AC Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/s_ac.webp'
    },
    {
        id: 192,
        nombre: 'Profiline NP 03-06 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/s_0306.webp'
    },
    {
        id: 193,
        nombre: 'Pulimento Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/pulimento_f.webp'
    },
    {
        id: 194,
        nombre: 'Renovador de Goma Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/goma_s.webp'
    },
    {
        id: 195,
        nombre: 'Quita Alquitrán Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/alquitran_s.webp'
    },
    {
        id: 196,
        nombre: 'Claydisc 150 mm Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/claydisc_s.webp'
    },
    {
        id: 197,
        nombre: 'Esponja Pulidora Gris 160 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/pulidora_s.webp'
    },
    {
        id: 198,
        nombre: 'Lija B-99 Micro Fino Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/lija_fandeli.webp'
    },
    {
        id: 199,
        nombre: 'Aceite Lubricante Hidráulico',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/lubricante_h.webp'
    },
    {
        id: 200,
        nombre: 'Protector de Vinil Chemical Guys',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/vinil_CG.webp'
    },
    {
        id: 201,
        nombre: '',
        categoria: 'Cera Líquida Chemical Guys',
        destacado: false,
        imagen: '/images/autos/ceraCG.webp'
    },
    {
        id: 202,
        nombre: 'Compuesto Pulidor 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/pulidor3m.webp'
    },
    {
        id: 203,
        nombre: 'Pulimento para Faros Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/farosS.webp'
    },
    {
        id: 204,
        nombre: 'Plastilina Limpiadora 3M',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/plastilina3m.webp'
    },
    {
        id: 205,
        nombre: 'Abrasivo para Cromo y Aluminio Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/abrasivoS.webp'
    },
    {
        id: 206,
        nombre: 'Quita Goma de Alfombras 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/goma3m.webp'
    },
    {
        id: 207,
        nombre: 'Cera en Pasta 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/cera_pasta3M.webp'
    },
    {
        id: 208,
        nombre: 'Limpia Frenos Química TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/frenosQTF.webp'
    },
    {
        id: 209,
        nombre: 'Masilla de Acabado Premium 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masilla3m.webp'
    },
    {
        id: 210,
        nombre: 'Arrancador para Motores Química TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/arrancadorQTF.webp'
    },
    {
        id: 211,
        nombre: 'Protector de Terminal de Baterías Gunk',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/grasaBard.webp'
    },
    {
        id: 212,
        nombre: 'Limpiador de Terminal de Baterías Gunk',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/grasaBard.webp'
    },
    {
        id: 213,
        nombre: 'Silenciador para Frenos de Disco TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/frenosQTF.webp'
    },
    {
        id: 214,
        nombre: 'Aflojatodo Auto Zone',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/aflojatodoAZ.webp'
    },
    {
        id: 215,
        nombre: 'Super Aflojatodo TF',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/s_aflojatodotf.webp'
    },
    {
        id: 216,
        nombre: 'Clean and Shine 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/cleanNshine3m.webp'
    },
    {
        id: 217,
        nombre: 'Limpiador de Piel y Vinil 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/LPiel_vinil3m.webp'
    },
    {
        id: 218,
        nombre: 'Cera Limpiadora 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/ceraLimp_3m.webp'
    },
    {
        id: 220,
        nombre: 'Cera Suave para Auto 3M',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/C_suave3M.webp'
    },
    {
        id: 221,
        nombre: 'Removedor de Rayones Turtle Wax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/rayones_turtleW.webp'
    },
    {
        id: 222,
        nombre: 'Limpiador de Vidrio Repelente a la Lluvia',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/vidrios_repelente.webp'
    },
    {
        id: 223,
        nombre: 'Limpiador de Vidrios 3M',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/L_vidrios3m.webp'
    },
    {
        id: 224,
        nombre: 'Profiline Speedprotect Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/profiline_sonax.webp'
    },
    {
        id: 225,
        nombre: 'Limpiador de Plásticos Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/plasticos_profi_sonax.webp'
    },
    {
        id: 226,
        nombre: 'HW 02-04 Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/hw0204.webp'
    },
    {
        id: 227,
        nombre: 'Removedor de Manchas de Agua Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/manchas_agua_s.webp'
    },
    {
        id: 228,
        nombre: 'Visión Clara 1:100 Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/1100_sonax.webp'
    },
    {
        id: 229,
        nombre: 'Spray Anti Empañante Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/anti_empañante.webp'
    },
    {
        id: 230,
        nombre: 'Limpia Tapices Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/tapices_sonaax.webp'
    },
    {
        id: 231,
        nombre: 'Pulimento Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/pulimento_f.webp'
    },
    {
        id: 232,
        nombre: 'Esponja Multiusos 2 en 1 Sonax',
        categoria: 'Estética Automotriz',
        destacado: true,
        imagen: '/images/autos/esponja_sonax.webp'
    },
    {
        id: 233,
        nombre: 'Cepillo de Rin Ultra Suave Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/cepillorin.webp'
    },
    {
        id: 234,
        nombre: 'Flexi Espatula Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/flexi_sonax.webp'
    },
    {
        id: 235,
        nombre: 'Esponja Aplicadora Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/E_aplicadora_s.webp'
    },
    {
        id: 236,
        nombre: 'Shampoo Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/sBrilloS.webp'
    },
    {
        id: 237,
        nombre: 'Shampoo con Cera Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/SCeraS.webp'
    },
    {
        id: 238,
        nombre: 'Polish and Wax Color Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/polishNwaxS.webp'
    },
    {
        id: 239,
        nombre: 'Limpia Insectos Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/insectosS.webp'
    },
    {
        id: 240,
        nombre: 'Lack Prepare Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/lackPrepareS.webp'
    },
    {
        id: 241,
        nombre: 'Renovador de Gomas Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/renovadro_gomasS.webp'
    },
    {
        id: 242,
        nombre: 'Sellador en Spray Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/selladorSpSonax.webp'
    },
    {
        id: 243,
        nombre: 'Restaurador de Brillo Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/R_brilloSonax.webp'
    },
    {
        id: 244,
        nombre: 'Supreme Discs Foam Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/supremeDiscF.webp'
    },
    {
        id: 245,
        nombre: 'Recubrimiento Cerámico Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/recubrimientoSOnax.webp'
    },
    {
        id: 246,
        nombre: 'Easy Shine Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/easyShineS.webp'
    },
    {
        id: 247,
        nombre: 'Protector de Interiores Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/prot_int_sonax.webp'
    },
    {
        id: 248,
        nombre: 'Glass Polish Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/glas_polishSonax.webp'
    },
    {
        id: 249,
        nombre: 'Renovador Plástico Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/renovadorPlastSonax.webp'
    },
    {
        id: 250,
        nombre: 'Borrador de Suciedad Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/borra_suciedad.webp'
    },
    {
        id: 251,
        nombre: 'Limpia Parabrisas',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/limpiaParabrisas.webp'
    },
    {
        id: 252,
        nombre: 'Hybrid Wool Pad 143 DA Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/woolPad143.webp'
    },
    {
        id: 253,
        nombre: 'Cut and Finish Profiline Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/cutNfisishSon.webp'
    },
    {
        id: 254,
        nombre: 'Almohadilla de Espuma Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/almohadillaSOnax.webp'
    },
    {
        id: 255,
        nombre: 'Plastilina Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/PlastiSonax.webp'
    },
    {
        id: 256,
        nombre: 'Esponja para Aplicaciones Sonax',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/esponja_aplicadores.webp'
    },
    {
        id: 257,
        nombre: 'Masking Automotriz 2" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masking2.webp'
    },
    {
        id: 258,
        nombre: 'Masking Automotriz 3/4" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masking2.webp'
    },
    {
        id: 259,
        nombre: 'Masking Automotriz 1/2" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masking12.webp'
    },
    {
        id: 260,
        nombre: 'Masking Automotriz 1" Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/masking1.webp'
    },
    {
        id: 261,
        nombre: 'Jalador para Vidrio',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/jalador.webp'
    },
    {
        id: 262,
        nombre: 'Rellenador Ligero Fandeli',
        categoria: 'Estética Automotriz',
        destacado: false,
        imagen: '/images/autos/rellenadorF.webp'
    },
    // DIAGNOSTICO Y PRUEBAS
    {
        id: 263,
        nombre: 'Panel de Prueba de Antidoping',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/panel_anitd.webp'
    },
    {
        id: 264,
        nombre: 'Prueba de Antidoping de Tira',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/antid_tira.webp'
    },
    {
        id: 265,
        nombre: 'Frasco para Pruebas',
        categoria: 'Diagnóstico y Pruebas',
        destacado: true,
        imagen: '/images/diagnostico/frasco.webp'
    },
    {
        id: 266,
        nombre: 'Prueba de Saliva',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/saliva.webp'
    },
    {
        id: 267,
        nombre: 'Alcoholímetro Iblow',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/alcoh_iblow.webp'
    },
    {
        id: 268,
        nombre: 'Alcoholímetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/alcohol.webp'
    },
    {
        id: 269,
        nombre: 'Alcoholímetro de Pared',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/alcoh_pared.webp'
    },
    {
        id: 270,
        nombre: 'Glucómetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/glucometro.webp'
    },
    {
        id: 271,
        nombre: 'Baumanómetro',
        categoria: 'Diagnóstico y Pruebas',
        destacado: false,
        imagen: '/images/diagnostico/baumano.webp'
    },
    // MEDICAMENTOS Y MAS
    {
        id: 272,
        nombre: 'Aspitak P 30 Compuesto 100 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/aspitak.webp'
    },
    {
        id: 273,
        nombre: 'Doloxen 10 Tabletas 100 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/doloxen.webp'
    },
    {
        id: 274,
        nombre: 'Farex Ibuprofeno 10 Tabletas 600 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/farex.webp'
    },
    {
        id: 275,
        nombre: 'Ketorolaco INY 30 ML',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/ketorolaco.webp'
    },
    {
        id: 276,
        nombre: 'Mavidol SL 4 Tabletas 30 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/mavidol.webp'
    },
    {
        id: 277,
        nombre: 'Metoclopramida 6 Ampolletas 10mg/2ml',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/metoclopramida.webp'
    },
    {
        id: 278,
        nombre: 'Dirpasid 20 Tabletas 10 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/dirpasid.webp'
    },
    {
        id: 279,
        nombre: 'Portem 10 Tbletas 500 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/portem.webp'
    },
    {
        id: 280,
        nombre: 'KY6 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/ky6.webp'
    },
    {
        id: 281,
        nombre: 'Masferol 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/masferol.webp'
    },
    {
        id: 282,
        nombre: ' Rosel 24 Tabletas 300mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/rosel.webp'
    },
    {
        id: 283,
        nombre: ' Cinarizina Ultra 60 Tabletas 75 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/cinarizina.webp'
    },
    {
        id: 284,
        nombre: 'Venda Elástica #10',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/venda.webp'
    },
    {
        id: 285,
        nombre: 'Gasas 10x10',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/gasas10.webp'
    },
    {
        id: 286,
        nombre: 'Gasas 7.5x7.5',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/gasas10.webp'
    },
    {
        id: 287,
        nombre: 'Cinta Microporosa 1"',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/cinta.webp'
    },
    {
        id: 288,
        nombre: 'Bandas Adhesivas (Curitas)',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/curitas.webp'
    },
    {
        id: 289,
        nombre: 'Mertiolate 30 ml',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/mertiolate.webp'
    },
    {
        id: 290,
        nombre: 'Algodón 500 g',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/algodon.webp'
    },
    {
        id: 291,
        nombre: 'Cartilla de Snellen para Examen Visual',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/snellen.webp'
    },
    {
        id: 292,
        nombre: 'Botiquín de Primeros Auxilios',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/botiquin.webp'
    },
    {
        id: 293,
        nombre: ' Termómetro Infrarrojo',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/termometor.webp'
    },
    {
        id: 294,
        nombre: 'Oxímetro de Pulso Digital',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/oxi.webp'
    },
    {
        id: 295,
        nombre: 'Tiras Reactivas para Glucómetro Active',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/tiras_gluco.webp'
    },
    {
        id: 296,
        nombre: 'Lancetas Soft Clix',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/softclix.webp'
    },
    {
        id: 297,
        nombre: 'Alcohol Etílico 70%',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/alochetilik.webp'
    },
    {
        id: 298,
        nombre: 'Extintor de 6.8 kg Dióxido de Carbono',
        categoria: 'Medicamentos y Más',
        destacado: true,
        imagen: '/images/medicina/exti68.webp'
    },
    {
        id: 299,
        nombre: ' Extintor de 6 kg Clase K',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/extiK.webp'
    },
    {
        id: 301,
        nombre: 'Diclofenaco 100 mg 20 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/diclofenaco.webp'
    },
    {
        id: 302,
        nombre: 'Clorfenamina 4 mg 20 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/clorfen.webp'
    },
    {
        id: 303,
        nombre: ' Loperamida 2 mg 12 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/loperamida.webp'
    },
    {
        id: 304,
        nombre: ' Difenidol 25 mg 30 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/difenidol.webp'
    },
    {
        id: 305,
        nombre: 'Sal de Uvas Picot 12 Sobres',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/saldeuvas.webp'
    },
    {
        id: 306,
        nombre: 'Benzonatato 100 mg Perlas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/benxonotato.webp'
    },
    {
        id: 307,
        nombre: 'Dextrometorfano 15 mg',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/dex.webp'
    },
    {
        id: 308,
        nombre: 'Hioscina 10 mg 10 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/hios.webp'
    },
    {
        id: 309,
        nombre: 'Ciprofloxacino 250 mg 12 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/cip.webp'
    },
    {
        id: 310,
        nombre: 'Omeprazol',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/omep.webp'
    },
    {
        id: 311,
        nombre: 'Aspirinas 500 mg 40 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/aspirinas.webp'
    },
    {
        id: 312,
        nombre: 'Dramamine 50 mg 24 Tabletas',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/dramamine.webp'
    },
    {
        id: 313,
        nombre: 'Pepto Bismol',
        categoria: 'Medicamentos y Más',
        destacado: false,
        imagen: '/images/medicina/pepto.webp'
    },
    // SEGURIDAD VIAL
    {
        id: 314,
        nombre: 'Boya Amarilla',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/boya.webp'
    },
    {
        id: 315,
        nombre: 'Vialetas Plásticas',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/vialetas.webp'
    },
    {
        id: 316,
        nombre: 'Tope Grande',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/topeG.webp'
    },
    {
        id: 317,
        nombre: 'Tope Chico',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/topeC.webp'
    },
    {
        id: 318,
        nombre: 'Poste Alineador',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/poste.webp'
    },
    {
        id: 319,
        nombre: 'Barrera solapada',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/barrera.webp'
    },
    {
        id: 320,
        nombre: 'Trafitambo',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/trafiambo.webp'
    },
    {
        id: 321,
        nombre: 'Cono',
        categoria: 'Seguridad Vial',
        destacado: false,
        imagen: '/images/seguridad/cono.webp'
    },
    {
        id: 322,
        nombre: 'Señal de Alto',
        categoria: 'Seguridad Vial',
        destacado: true,
        imagen: '/images/seguridad/alto.webp'
    },
    // EQUIPO DE SEGURIDAD
    {
        id: 323,
        nombre: 'Lentes de Seguridad',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/lentes.webp'
    },
    {
        id: 324,
        nombre: 'Calzado de Seguridad',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/calzdo.webp'
    },
    {
        id: 325,
        nombre: 'Chaleco Reflejante',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/chaleco.webp'
    },
    {
        id: 326,
        nombre: 'Faja',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/faja.webp'
    },
    {
        id: 327,
        nombre: 'Guante Anticorte',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/guanteA.webp'
    },
    {
        id: 328,
        nombre: 'Guante de Nylon Nitrilo',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/guanteNN.webp'
    },
    {
        id: 329,
        nombre: 'Tapón de Oído desechable',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/tapon.webp'
    },
    {
        id: 330,
        nombre: 'Orejeras',
        categoria: 'Equipo de Seguridad',
        destacado: false,
        imagen: '/images/eSeguridad/orejeras.webp'
    },
    //FERRETERIA Y MAS
    {
        id: 331,
        nombre: 'Broca de 3/6',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/broca36.webp'
    },
    {
        id: 332,
        nombre: 'Broca de 3/8',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/broca38.webp'
    },
    {
        id: 333,
        nombre: 'Broca de 5/16',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/broca516.webp'
    },
    {
        id: 334,
        nombre: 'Calibrador de Aire de 150 lbs',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/calibrador.webp'
    },
    {
        id: 335,
        nombre: 'Clavija para Extensión Plástica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/calvija.webp'
    },
    {
        id: 336,
        nombre: 'Conector Glandular 3/4',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/conector.webp'
    },
    {
        id: 337,
        nombre: 'Contacto Duplex Volteck',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/contatco.webp'
    },
    {
        id: 338,
        nombre: 'Disco de Corte para Metal 4 1/2',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/disco.webp'
    },
    {
        id: 339,
        nombre: 'Gas Butano',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/gas.webp'
    },
    {
        id: 340,
        nombre: 'Gas Refrigerante',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/gasR.webp'
    },
    {
        id: 341,
        nombre: 'Machuelo 7/16',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/machuelo716.webp'
    },
    {
        id: 342,
        nombre: 'Machuelo 1/2 Estándar',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/machuelo12.webp'
    },
    {
        id: 343,
        nombre: 'Parche',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/parche.webp'
    },
    {
        id: 344,
        nombre: 'Pija 1/4 x 1" 1/2',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/pija14.webp'
    },
    {
        id: 345,
        nombre: 'Piola Estándard',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/piola.webp'
    },
    {
        id: 346,
        nombre: 'Placa de Aluminio Gris',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/placa.webp'
    },
    {
        id: 347,
        nombre: 'Remache de 3/16" x 3/4"',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/remache316.webp'
    },
    {
        id: 348,
        nombre: 'Multicontactos',
        categoria: 'Ferretería y Más',
        destacado: true,
        imagen: '/images/ferreteria/multicon.webp'
    },
    {
        id: 349,
        nombre: 'Cable de uso Rudo 1 m',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/cableR.webp'
    },
    {
        id: 350,
        nombre: 'Extensión Eléctrica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/extensionC.webp'
    },
    {
        id: 351,
        nombre: 'Martillo',
        categoria: 'Ferretería y Más',
        destacado: true,
        imagen: '/images/ferreteria/martillo.webp'
    },
    {
        id: 352,
        nombre: 'Desarmador',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/desarmador.webp'
    },
    {
        id: 353,
        nombre: 'Destornillador',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/destornillador.webp'
    },
    {
        id: 354,
        nombre: 'Sierra Eléctrica',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/sierraE.webp'
    },
    {
        id: 355,
        nombre: 'Sierra',
        categoria: 'Ferretería y Más',
        destacado: false,
        imagen: '/images/ferreteria/sierra.webp'
    },
    // SEGURIDAD INDUSTRIAL
    {
        id: 356,
        nombre: 'Cinta de Precaución',
        categoria: 'Seguridad Industrial',
        destacado: true,
        imagen: '/images/seguridadI/precaucion.webp'
    },
    {
        id: 357,
        nombre: 'Cinta de Prohibido el Paso',
        categoria: 'Seguridad Industrial',
        destacado: true,
        imagen: '/images/seguridadI/prohibido.webp'
    },
    {
        id: 358,
        nombre: 'Malla Delimitadora',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/malla.webp'
    },
    {
        id: 359,
        nombre: 'Casco',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/casco.webp'
    },
    {
        id: 360,
        nombre: 'Careta de Soldador',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/careta.webp'
    },
    {
        id: 361,
        nombre: 'Mandil de Carnaza',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/madil.webp'
    },
    {
        id: 362,
        nombre: 'Manga de Kevlar',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/manga.webp'
    },
    {
        id: 363,
        nombre: 'Overol Desechable',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/overol.webp'
    },
    {
        id: 364,
        nombre: 'Árnes Sencillo',
        categoria: 'Seguridad Industrial',
        destacado: false,
        imagen: '/images/seguridadI/arnes.webp'
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