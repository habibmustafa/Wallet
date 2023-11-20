import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
// PWA
import { VitePWA } from "vite-plugin-pwa";
// Svg Component
import svgr from "@svgr/rollup";
// Absolute Path
import * as path from "path";

// PWA
const manifestForPlugIn: any = {
  registerType: "autoUpdate",
  includeAssests: ["favicon.ico", "apple-touch-icon.png", "maskable_icon.png"],
  manifest: {
    name: "Wallet",
    short_name: "wallet",
    description: "I am a wallet app",
    theme_color: "#fcfcfc",
    background_color: "#fcfcfc",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/maskable_icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 2000,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "chunks/[name][hash].js",
        assetFileNames: "assets/[name][hash].[ext]",
        manualChunks: (path) =>
          path.split("/").reverse()[
            path.split("/").reverse().indexOf("node_modules") - 1
          ],
      },
    },
  },
  /* Absolute Path */
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    svgr(),
    react(),
    splitVendorChunkPlugin(),
    VitePWA({
      ...manifestForPlugIn,
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
