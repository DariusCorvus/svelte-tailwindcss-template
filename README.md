# svelte tailwindcss app

This is a project template for [Svelte](https://svelte.dev) & [TailwindCSS](https://tailwindcss.com/) apps. It lives at https://github.com/DariusCorvus/svelte-tailwindcss-template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit dariuscorvus/svelte-tailwindcss-template svelte-tailwindcss-app
cd svelte-tailwindcss-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-tailwindcss-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies`.

---
## Adjustments that were needed
### Configure plugins
>TailwindCSS and  AutoPrefixer plugin were added in the `rollup.config.js` file.
```javascript
///...
import sveltePreprocess from 'svelte-preprocess';
///...
export default {
    //...
    plugins: [
        svelte({
            //...
            preprocess: sveltePreprocess({
				sourceMap: !production,
				postcss: {
					plugins: [require('tailwindcss'), require('autoprefixer')]
				}
			})
        }),
        //...
    ],
    //...
};
```
>Configurated the `tailwind.config.js` file.
```javascript
module.exports = {
    mode: "jit", // JIT stands for Just in Time Compiler and makes the Build and the Startup so fast.
                // at the moment JIT is just in the preview but works like a charme.
    purge: ['./public/index.html', './src/**/*.svelte'],
    //...
}
```
### Apply TailwindCSS
>Created `TailwindCSS.svelte` file in the `src` directory.
```javascript
<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
```

>And added the import in the main svelte file 'App.svelte' to apply TailwindCSS project wide.
```svelte
<script>
    import TailwindCss from "./TailwindCSS.svelte";
</script>
```
