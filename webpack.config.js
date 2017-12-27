const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
    entry: __dirname + "/src/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        historyApiFallback: true,//不跳转
        inline: true//实时刷新

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'style-loader!css-loader',
                // use:['style-loader','css-loader',
                //     {
                //         loader:'postcss-loader',
                //         options:{
                //             //处理浏览器兼容的问题
                //             plugins:[require('postcss-import'),require('autoprefixer')],
                //             browser:['last 5 versions']}}],

                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })},
            {
                test: /\.(eot|woff|ttf)$/,
                loader: 'file-loader'
            },
            {
                test:/\.vue$/,
                loader: 'vue-loader'

            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                //设置打包范围，减少耗时
                // exclude:path.resolve(__dirname,'node_modules'),
                // exclude: /node_modules/,
                // exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                exclude: /node_modules/,
                //把es6语言转换为浏览器可识别的js语言
                query: {
                    presets: 'es2015',
                }
            },
            // {
            //     test:/\.scss$/,
            //     loader:'style-loader!css-loader!postcss-loader!sass-loader'
            // },
            {
                test: /\.(scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: "css-loader"},
                        {loader: "sass-loader"},
                    ],
                })
            },
            {
                //图片类型
                test:/\.(png|jpg|gif|svg)$/i,
                use:[
                    {
                        //图片压缩，打包后的名字
                        loader:'url-loader?limit=10000&name=assets/[name]-[hash:5].[ext]!image-webpack-loader'
                    }
                ]

            }]
    },
    //打包css在一个文件里('styles.css')
    plugins: [
        new ExtractTextPlugin('styles.css')
    ],
    resolve: {
        alias: { 'vue': 'vue/dist/vue.js' }
    }


}
//结尾
