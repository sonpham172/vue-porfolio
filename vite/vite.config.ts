import {defineConfig} from "vite";
import * as glob from 'glob';
import * as path from 'node:path';
import {fileURLToPath} from 'node:url';
import {svelte} from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

export default defineConfig({
  plugins: [
    svelte({
      preprocess: sveltePreprocess({}),
      // @ts-ignore
      exclude: /\.wc\.svelte$/,
      emitCss: false,
    }),
    svelte({
      preprocess: sveltePreprocess(),
      // @ts-ignore
      include: /\.wc\.svelte$/,
      compilerOptions: {
        customElement: true,
      },
      emitCss: false,
    }),
  ],
  envDir: "..",
  envPrefix: "NEXT_PUBLIC_",
  resolve: {
    /** Map import paths */
    alias : [
      {find: '@', replacement: path.resolve(__dirname, '../')},
      {find: 'components', replacement: path.resolve(__dirname, 'src/components')},
      {find: 'pages', replacement: path.resolve(__dirname, 'src/pages')},
      {find: 'wc', replacement: path.resolve(__dirname, 'src/wc')},
    ]
  },
  build: {
    sourcemap: false,
    target: "modules",
    // lib: {
    //   entry: ["src/main.ts"],
    //   name: "<<name>>",
    //   fileName: "components",
    // },
    outDir: '../public/vite',
    rollupOptions: {
      input: {
        ...Object.fromEntries(
          glob.sync('src/wc/**/*.wc.svelte').map(file => {
            const name = file.replace('src/', '').replace('.wc.svelte', '')
            return [
              name,
              fileURLToPath(new URL(file, import.meta.url))
            ];
          }),
        ),
      },
      output: {
        entryFileNames: '[name].js'
      }
    }

  },
});