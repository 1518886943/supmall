module.exports={
    configureWebpack:{
        resolve:{
            extensions:[],//省略路径名
            alias: {
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}