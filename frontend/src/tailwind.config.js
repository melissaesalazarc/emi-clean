module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind escanee todos tus archivos
    ],
    theme: {
        extend: {
            colors: {
                'turquesa-oscuro': 'var(--turquesa-oscuro)',
                'turquesa-claro': 'var(--turquesa-claro)',
                'blanco-puro': 'var(--blanco-puro)',
                'gris-claro': 'var(--gris-claro)',
                'verde-lima': 'var(--verde-lima)',
                'amarillo-pastel': 'var(--amarillo-pastel)',
            },
        },
    },
    plugins: [],
};