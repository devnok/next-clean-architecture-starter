/*
esbuild로 build하는게 약 0.5s 더 빠르긴 한데
안정성 & 타입 체크를 위해 tsc빌드로 가겠습니다~
*/
import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';

const IS_PRODUCTION = !process.env.ROLLUP_WATCH;

export default defineConfig([
  {
    input: 'src/index.ts',
    external: id => !/^[./]/.test(id),
    plugins: [
      esbuild({
        minify: IS_PRODUCTION,
      }),
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
    input: 'src/index.ts',
    external: id => !/^[./]/.test(id),
    plugins: [dts()],
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
  }
]);