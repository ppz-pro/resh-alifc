import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

export default {
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true
    }),
    commonjs(),
    json()
  ]
}