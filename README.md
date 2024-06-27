# spa-mrx-demos

svelte-kit webapp to demonstrate different aspects of how MetaRex work

## configuration

The web app is run in a docker container and requires:

* `mrx-reg-svr` MetaRex register server - to deliver JSON for a registration ID
* `mrx-demo-svc` MetaRex demo service - to perform metadata conversions

See [mrx-demo-config.ts](src/lib/cfg/mrx-demo-config.ts) for the paths that
are used to access these services.

The code that uses these paths decides what environment is in use:

```typescript
import cfgData from '$lib/cfg/mrx-demo-config.ts'
import { dev } from '$app/environment';

let cfgEnv = (dev) ? cfgData.environment.development : cfgData.environment.production

// make a query with the right urls for dev or prod
queryRegister(cfgEnv.path.mrxReg, MetaRexId)
```

## Develop

Clone the repo and install the dependencies:

```sh
yarn
yarn run dev -- --open

```

## Deploy

All the content for the app is served from a lightweight docker container using
nginx as a static web server. See [www-metarex-media][1] for the connectivity
between components

## Building

To create a production version of your app:

```bash
# check that the project is clean
yarn run check

# if you have clog then build the docker container with some help
[ -n "$(which clog)" ] && clog svelte

# if you don't have clog then just run the build script
[ -n "$(which clog)" ] && bash clogrc/svelte

# preview the build
yarn run preview
```

[1]: https://github.com/metarex-media/www-metarex-media