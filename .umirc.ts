import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  outputPath: './docs',
  history: 'hash', //采用hash路由：#/xxx的形式
  base:'./',
  publicPath: './',
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi-pro',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
