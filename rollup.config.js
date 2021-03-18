import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import sveltePreprocess from "svelte-preprocess";
import dotenv from "dotenv";

const production = !process.env.ROLLUP_WATCH;

if (!production) {
  dotenv.config();
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        API_URL: JSON.stringify(process.env.API_URL),
        GOOGLE_CLIENT_ID: JSON.stringify(process.env.GOOGLE_CLIENT_ID),
        HOSTED_DOMAIN: JSON.stringify(process.env.HOSTED_DOMAIN),
        "process.env.NODE_ENV": JSON.stringify("production"),
        __buildDate__: () => JSON.stringify(new Date()),
      },
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      css: (css) => {
        css.write("bundle.css");
      },

      preprocess: sveltePreprocess({
        // https://github.com/kaisermann/svelte-preprocess/#user-content-options
        sourceMap: !production,
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      }),
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      mainFields: ["main", "module"],
      browser: true,
      dedupe: (importee) =>
        importee === "svelte" || importee.startsWith("svelte/"),
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production &&
      serve({
        port: 3000,
      }),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};

function serve(options = {}) {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn(
          "npm",
          ["run", "start", "--", "--dev", "--host"],
          {
            stdio: ["ignore", "inherit", "inherit"],
            shell: true,
            env: {
              ...process.env,
              PORT: options.port,
            },
          }
        );
      }
    },
  };
}
