## Get started

Install the dependencies...

```bash
cd armitage
nvm use v13
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Firestore emulator

More info: https://firebase.google.com/docs/rules/emulator-setup

```bash
nvm use v13
firebase setup:emulators:firestore
npm run firestore:emulate
```

by default, the app will connect to local emulator - to init it with the data, see App.svelte line:
//INIT EMULATOR DB
and change the condition to true
