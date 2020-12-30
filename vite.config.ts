const fs = require('fs')
const path = require('path')

const dotenv = require('dotenv')

const envFiles = [
  /** default file */ `.env`,
  /** mode file*/ `.env.${process.env.NODE_ENV}`,
]

for (let file of envFiles) {
  let envConfig = dotenv.parse(fs.readFileSync(file))
  for (let k in envConfig) {
    process.env[k] = envConfig[k]
  }
}

module.exports = {
  alias: {
    // 路径映射必须以/开头和结尾
    '/@/': path.resolve(__dirname, './src'),
  },
  optimizeDeps: {
    include: ['echarts'],
  },
  hostname: process.env.VITE_HOST,
  port: process.env.VITE_PORT,
  // 压缩
  minify: 'esbuild',
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  base: process.env.VITE_BASE_URL,
  // proxy: {
  //   '/ajax': {
  //     target: 'http://59.110.226.77:5000/api/private/v1/',
  //     changeOrigin: true,
  //   },
  // },
}
