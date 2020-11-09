import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  outputPath: 'build',
  cssModulesTypescriptLoader: {
    mode: 'emit',
  },
  sass: {},
  esbuild: {},
  routes: [
    { exact: false, path: '/', component: '@/pages/index' },
    { exact: false, path: '/home', component: '@/pages/home/index' },
    { exact: false, component: '@/pages/404' },
  ],
  chainWebpack: (memo, { env, webpack, createCSSRule }) => {
    // 删除 umi 内置插件
    // memo.plugins.delete('friendly-error');
  },
  title: '测试环境',
});
