import path from 'node:path';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: true,
    },
    plugins: [
        mkcert({
            hosts: ['my.dev.com', 'localhost'],
            force: true,
            savePath: path.resolve(process.cwd(), 'node_modules/.cert'),
        }),
    ],
});
