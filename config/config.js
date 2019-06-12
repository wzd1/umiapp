
// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    plugins: [
      // ref: https://umijs.org/plugin/umi-plugin-react.html
      ['umi-plugin-react', {
        antd: false,
        dva: {
            // 推荐开启 dva-immer 以简化 reducer 编写，
            immer: true
        },
        dynamicImport: false,
        title: 'umiapp',
        dll: false,
        
        routes: {
          exclude: [
            /components\//,
          ],
        },
      }],
    ],
    mock: {
        // 排除 mock 目录下不作 mock 处理的文件。比如要 exclude 所有 _ 前缀的文件和文件夹
        exclude: [
          'mock/**/_*.js',
          'mock/_*/**/*.js',
        ],
    },
}
  