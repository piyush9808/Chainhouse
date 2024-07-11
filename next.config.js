/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config, { isServer }) => {
  

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net:false,
        tls:false,
      };
    }

    return config;
  },
  images: {
    domains: ['ipfs.io','gateway.pinata.cloud', 'copper-rear-chickadee-886.mypinata.cloud'],
  }
  
}

module.exports = nextConfig
