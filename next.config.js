module.exports = {
    exportPathMap: () => {
        let routes = {};
        // páginas a serem expostadas
        const pages = ['', 'repos', 'commits'];
        // gerador de rotas
        pages.forEach(page => routes[`/${page}`] = { "page": `/${page}` });
        return routes
    },
    webpack: (config) => {
        // configuraç±ao do eslint
        config.module.rules.push({
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: { fix: true }
        });
        return config;
    }
}