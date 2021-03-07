const path = require('path');

module.exports = {
    mode: 'production', // development - production
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
            {
                test:/\.(woff|woff2|eot|ttf|svg|mp4)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 100000000,
                      name: './font/[hash].[ext]',
                      mimetype: 'application/font-woff'
                    }
                  }
                ]


            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader','css-loader','sass-loader'],
            },
             
        ],
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    performance: {
        hints: false,
        maxEntrypointSize: 999999,//580000,
        maxAssetSize: 999999,//580000,  
    },
    //devtool (dev): 'eval-cheap-module-source-map', 
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    },
};