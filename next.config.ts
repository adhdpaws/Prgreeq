import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack configuration
  turbopack: {
    root: process.cwd(),
  },
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
};

class VeliteWebpackPlugin {
  static started = false
  apply(compiler: any) {
    // executed three times in nextjs
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      const { build } = await import('velite')
      await build({ watch: dev, clean: !dev })
    })
  }
}

export default nextConfig;

