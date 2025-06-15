module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        config: './postcss.config.js',
                    },
                },
            },
        ],
    },
};