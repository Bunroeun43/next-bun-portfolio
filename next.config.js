// @ts-check

const isProduction = process.env.NODE_ENV === "production";
const outputDir = process.env.BRANCH === 'dev' ? 'dev' : '.next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: outputDir,
  compiler: {
    reactRemoveProperties: isProduction,
    removeConsole: isProduction,
    styledComponents: {
      displayName: !isProduction,
      minify: isProduction,
      pure: true,
    },
  },
  devIndicators: {
    buildActivityPosition: "top-right",
  },
  experimental: {
    legacyBrowsers: false,
    swcFileReading: true,
    appDir: true,
  },
  optimizeFonts: true,
  productionBrowserSourceMaps: isProduction,
  swcMinify: !isProduction,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  images: {
    // Option 1 : Autoriser des domaines entiers
    domains: [
      'example.com',
      'images.unsplash.com',
      'cdn.shopify.com'
    ],

    // Option 2 : Autoriser des patterns d'URL précis
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://www.lasecurecrute.fr', // ** permet tous les sous-domaines
        port: '', // optionnel
        pathname: '/**/**', // ** permet tous les chemins après /images/
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**',
      }
    ],
  },
};

module.exports = nextConfig;
