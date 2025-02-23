//默认rollup 打包的时候查找当前目录下的rollup.config.js文件
// 采用es模块

// node 有模块规范是commonjs 和 esm
import ts from 'rollup-plugin-typescript2';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import path from 'path';
import { fileURLToPath } from 'url';

//当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
//当前文件的文件夹路径
const __dirname = path.dirname(__filename);

// 打包的配置对象
export default {
  input: './src/index.ts', // 修改为正确的入口文件路径
  output: {
    file: path.resolve(__dirname, 'dist/bundle.js'),
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    ts({
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    }),
    nodeResolve({extensions: ['.ts', '.tsx', '.js']}),
  ],
};
