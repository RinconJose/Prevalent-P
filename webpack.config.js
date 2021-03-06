const path = require('path'), // for routes
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    autoprefixer = require('autoprefixer'),
    postcssCustomProperties = require('postcss-custom-properties'),
    // htmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    JavaScriptObfuscator = require('webpack-obfuscator');

module.exports = { // object for node js
    entry: './sources/index.js',
    // mode: 'production',
    output: {
        path: path.resolve(__dirname, 'deploy'),
        filename: 'js/app.js'
    },
    devtool: 'source-map',
    watch: true,
    module: { // for loaders
        rules: [
            { // It can also be an Arrays of Objects
                test: /\.(js)$/, // all js files
                exclude: /node_modules/, // than excludes
                loader: "babel-loader" // name loader
            },
            {
                test: /\.(css|scss)$/, // CSS or SASS files
                use: [
                    'style-loader',
                    {
                        loader: miniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/deploy/css/',
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 1,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: {
                                browser: [ 'last 2 versions' ]
                            },
                            sourceMap: true,
                            // plugins: () => [ autoprefixer ]
                            plugins: () => [ autoprefixer, postcssCustomProperties ]
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            // {
            //     test: /\.(jpg|jpeg|png|svg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 publicPath: '/img',
            //                 outputPath: 'img/',
            //             }
            //         }
            //     ]
            // }
        ]
    },
    // devServer: {
    //     watchOptions: {
    //         ignored: /node_modules/
    //     },
    //     hot: true,
    //     contentBase: path.join(__dirname, 'deploy'),
    //     compress: true,
    //     port: 8000
    // },
    plugins: [
        // new htmlWebpackPlugin({ // For HTML
        //     template: './sources/index.html',
        //     minify: {
        //         collapseWhitespace: true,
        //         removeComments: true,
        //         removeRedundantAttributes: true,
        //         removeScriptTypeAttributes: true,
        //         removeStyleLinkTypeAttributes: true,
        //         useShortDoctype: true
        //     }
        // }),
        new miniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['./deploy/*.html', './deploy/css/*.css', './deploy/*.js'],
            server: { baseDir: ['deploy'] }
        }),
        // new JavaScriptObfuscator ({
        //     rotateUnicodeArray: true
        // })
    ]
}