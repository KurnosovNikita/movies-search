const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = {
    entry: {
        main: "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.png|jpg$/,
                include: path.join(__dirname, 'src'),
                loader: ['file-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                })
            },
        ]
    },
    resolve: {extensions: ["*", ".js", ".jsx", ".scss", ".png"]},
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "../dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        watchContentBase: true,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'index.css',
        })
        ]
};

export default commonConfig;