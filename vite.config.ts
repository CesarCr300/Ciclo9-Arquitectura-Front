import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      port: env.VITE_PORT,
      watch: {
        usePolling: true,
      },
    },
    preview: { port: env.VITE_PORT },
    define: {
      'process.env': process.env,
      global: {},
    },
  };
});