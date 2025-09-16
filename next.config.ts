import type { NextConfig } from 'next'
import { config } from 'process';

const NextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  


images:{
  unoptimized: true,
},
  typescript: {
   ignoreBuildErrors: false,
    },

  compiler: {
     styledComponents: true,
    },
 basePath: '/as_lab',
assetPrefix: '/as_lab/',

  env: {
    MY_ENV_VAR: process.env.MY_ENV_VAR,
  }
  
}



export default NextConfig;

