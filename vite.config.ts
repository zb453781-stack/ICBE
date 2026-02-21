import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import fs from 'fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function normalizeBasePath(value?: string): string {
  const input = (value || '/').trim();

  if (!input || input === '/' || input === './') {
    return '/';
  }

  const normalized = input.replace(/^\/+|\/+$/g, '');
  return normalized ? `/${normalized}/` : '/';
}

function resolveHomepageBasePath(): string | undefined {
  try {
    const packageJsonPath = path.resolve(__dirname, './package.json');
    const packageJsonRaw = fs.readFileSync(packageJsonPath, 'utf8');
    const packageJson = JSON.parse(packageJsonRaw) as { homepage?: string };
    const homepage = packageJson.homepage?.trim();

    if (!homepage) {
      return undefined;
    }

    if (/^https?:\/\//i.test(homepage)) {
      return new URL(homepage).pathname || '/';
    }

    return homepage;
  } catch {
    return undefined;
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const homepageBase = resolveHomepageBasePath();
  const configuredBase = env.VITE_APP_BASENAME?.trim();

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 5173,
      open: true,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'router': ['react-router-dom'],
          },
        },
      },
    },
    assetsInclude: ['**/*.svg', '**/*.csv'],
    base: normalizeBasePath(configuredBase || homepageBase || '/'),
  };
});
