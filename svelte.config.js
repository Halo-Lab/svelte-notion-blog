import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";
import typescript from "@rollup/plugin-typescript";

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({ out: "build"}),
  },
  vite: {
    plugins: [typescript()],
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
