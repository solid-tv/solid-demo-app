# SolidTV Demo App

View the demo - [https://solid-tv.github.io/solid-demo-app/](https://solid-tv.github.io/solid-demo-app/)

There are a few query params for customizing the application to test on devices

size='720' | '1080' | '4k'
numImageWorkers = 0 to disable image workers
disableBG=true to turn off background (reduce memory)
roundPoster=false to turn off rounded images on poster

https://solid-tv.github.io/solid-demo-app/?size=720&disableBG=true#/

## Main Repo

[SolidTV](https://github.com/solid-tv/solid)

## Getting started

Get an API Read Access Token from [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
and put the key in `src/api/key.js` with `export default 'KEY_VALUE'`

```
git clone https://github.com/solid-tv/solid-demo-app
cd solid-demo-app
pnpm i
pnpm start
```

If you're interested in using SolidTV with Web check out [Web Branch](https://github.com/solid-tv/solid-demo-app/tree/web) to see the setup.
