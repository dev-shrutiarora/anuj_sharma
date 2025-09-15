// nect.config.js
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
output: 'export',
reactStrictMode: true,
images:{
  unoptimized: true, //required for static exports
},
typescript:{
  ignoreBuildErrors: false, // recommended to keep this false
},
//Enable if you're using styled-components
compiler: {
  styledComponents: true,
},

//Custom webpack configurations
webpack(config){
  //Add your custom webpack configurations here
  return config
},
// Environment variables that should be availabe at build time
env: {
  MY_ENV_VAR: process.env.MY_ENV_VAR,
},

}

export default nextConfig
