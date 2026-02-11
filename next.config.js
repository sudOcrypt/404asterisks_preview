/** @type {import('next').NextConfig} */
const basePath = '/404asterisks_preview'
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

module.exports = nextConfig
