//import type { NextConfig } from 'next'

//const NextConfig: NextConfig = {
  //output: 'export',
  //reactStrictMode: true,
  

//images:{
  //unoptimized: true,
//},
  //typescript: {
   //ignoreBuildErrors: false,
    //},

  //compiler: {
    // styledComponents: true,
    //},
 //basePath: '/as_lab',
//assetPrefix: '/as_lab/',

  //env: {
    //MY_ENV_VAR: process.env.MY_ENV_VAR,
  //}
  
//}


//export default NextConfig;
 import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docs.google.com',
      },
    ],
  },
}

export default nextConfig









