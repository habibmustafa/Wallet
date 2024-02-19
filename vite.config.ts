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
  // includeAssests: ["favicon.ico", "apple-touch-icon.png", "maskable_icon.png"],
  manifest: {
    name: "Wallet",
    short_name: "wallet",
    description: "I am a wallet app",
    theme_color: "#fcfcfc",
    background_color: "#13447B",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/pwa/Icon32.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/pwa/Icon48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/pwa/Icon72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/pwa/Icon92.png",
        sizes: "92x92",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/pwa/Icon144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/pwa/Icon196.png",
        sizes: "196x196",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/pwa/Icon512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "favicon",
      },
      {
        src: "/pwa/Icon180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/pwa/Icon512.png",
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
      includeAssets: [
        "/public/fonts/GT-Walsheim-Pro-Regular.OTF",
        "/public/fonts/GT-Walsheim-Pro-Medium.OTF",
        "/public/fonts/GT-Walsheim-Pro-Bold.OTF",
      ],
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
