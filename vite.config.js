import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                privacy: resolve(__dirname, 'privacy.html'),
                terms: resolve(__dirname, 'terms.html'),
                security: resolve(__dirname, 'security.html'),
                about: resolve(__dirname, 'about.html'),
                blog: resolve(__dirname, 'blog.html'),
                blog_post_1: resolve(__dirname, 'blog/how-llms-decide.html'),
                blog_post_2: resolve(__dirname, 'blog/black-box-seo.html'),
                blog_post_3: resolve(__dirname, 'blog/shift-search-synthesis.html'),
            },
        },
    },
});
