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
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              if (id.includes('react-router-dom')) {
                return 'vendor-router';
              }
              return 'vendor';
            }
            // Exclude demo and example components from production build
            if (id.includes('/demo/') || id.includes('/examples/')) {
              return null;
            }
          },
        },
        treeshake: {
          moduleSideEffects: false,
          preset: 'recommended',
        },
      },
      target: 'esnext',
      minify: 'terser',
      cssCodeSplit: true,
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      modulePreload: {
        polyfill: false,
      },
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
  };
});
