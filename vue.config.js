module.exports = {
    outputDir:'dists',
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
    lintOnSave: false, //是否开启eslint
    // devServer: {
    //     open: true, //是否自动弹出浏览器页面
    //     host: "localhost",
    //     port: '8081',
    //     https: false,   //是否使用https协议
    //     hotOnly: false, //是否开启热更新
    //     proxy: {
    //         '/api': {
    //             target: 'http://m.youjiankang.net:8081', //API服务器的地址
    //             ws: true,  //代理websockets
    //             changeOrigin: true, // 虚拟的站点需要更管origin
    //             pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
            config.mode = 'production';
            config["performance"] = {//打包文件大小配置
                "maxEntrypointSize": 10000000,
                "maxAssetSize": 30000000

            }
        }
    }
}
