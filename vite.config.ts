import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    plugins: [react()],
    server: {
      port: 5200,
      cors: true,
      headers: {
        'Cross-Origin-Embedder-Policy': 'unsafe-none',
        'Cross-Origin-Opener-Policy': 'same-origin',
      },
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
        contexts: resolve(__dirname, "src", "contexts"),
        layouts: resolve(__dirname, "src", "layouts"),
        pages: resolve(__dirname, "src", "pages"),
        utils: resolve(__dirname, "src", "utils"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Vendor chunks - split by library
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              if (id.includes('react-router-dom')) {
                return 'vendor-router';
              }
              return 'vendor';
            }
            
            // Split layouts into separate chunks
            if (id.includes('/layouts/')) {
              return 'layouts';
            }
            
            // Split pages into separate chunks (each page gets its own chunk)
            if (id.includes('/pages/')) {
              const pageName = id.split('/pages/')[1]?.split('/')[0];
              if (pageName) {
                return `page-${pageName.toLowerCase()}`;
              }
            }
            
            // Split organisms (heavy components) into separate chunk
            if (id.includes('/components/organisms/')) {
              return 'components-organisms';
            }
            
            // Split contexts into separate chunk
            if (id.includes('/contexts/')) {
              return 'contexts';
            }
            
            // Split SVG sprite loader into separate chunk
            if (id.includes('/components/atoms/svg-sprite-loader/')) {
              return 'components-svg-sprite';
            }
            
            // Exclude demo and example components from production build
            if (id.includes('/demo/') || id.includes('/examples/')) {
              return null;
            }
          },
          // Optimize chunk file names for better caching
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            // Separate CSS into its own directory for better organization
            if (assetInfo.name?.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[ext]/[name]-[hash].[ext]';
          },
        },
        treeshake: {
          moduleSideEffects: false,
          preset: 'recommended',
        },
      },
      target: 'esnext',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info'],
          passes: 2,
        },
        format: {
          comments: false,
        },
      },
      cssCodeSplit: true,
      cssMinify: true,
      cssTarget: 'esnext',
      sourcemap: false,
      chunkSizeWarningLimit: 500,
      modulePreload: {
        polyfill: false,
        // Only preload critical chunks to reduce chain length
        resolveDependencies: (filename, deps) => {
          // Only preload vendor chunks and main entry, not page-specific chunks
          if (filename.includes('vendor-') || filename.includes('index') || !filename.includes('page-')) {
            return deps;
          }
          return [];
        },
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
