import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';

const IS_PRODUCTION = !process.env.ROLLUP_WATCH;

export default defineConfig([
  {
    input: './.build/src/index.js',
    external: id => !/^[./]/.test(id),
    plugins: [
      resolve(),
      IS_PRODUCTION && terser(),
    ],
    output: [
      {
        file: 'dist/index.mjs',
        format: 'es',
      },
      {
        file: 'dist/index.js',
        format: 'cjs',
      }
    ],
  },
  {
    input: './.build/src/index.d.ts',
    external: id => !/^[./]/.test(id),
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
  }
]);