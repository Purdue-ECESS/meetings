# Getting Started

Start By Running These Commands
```bash
$ npx create-next-app@latest --ts
$ cd (app name)
$ npm i sass
$ npm install @mui/material @emotion/react @emotion/styled
```
If you run 
```bash
$ npm run dev
```
it will work, but removing the styles will break the current program. But the template has a lot 
of useless files. So here is the process of removing it.

In addition, we installed mui (material design user interface). Use this to make your website 
look better.
https://mui.com/getting-started/installation/
```bash
$ rm -rf styles/*
```

Edit the following files.
```typescript
// pages/index.tsx
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <></>
  )
}

export default Home
```

```typescript
// pages/_app.tsx
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```

```javascript
// next.config.js
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
```

```bash
$ npm run dev
```
https://nextjs.org/docs/messages/install-sass

You can use my personal website,
https://www.matthewwen.com/, as reference on what
you want to do your website.

Tutorial List
1. [inline-style](nextjs-example/pages/lessons/inline-style)
2. [sass-style](nextjs-example/pages/lessons/sass-style)
3. [center-vertial](nextjs-example/pages/lessons/center-vertical)
4. [flex](nextjs-example/pages/lessons/flex)
5. [image](nextjs-example/pages/lessons/image)
6. [mui](nextjs-example/pages/lessons/mui)
7. [nav-bar](nextjs-example/pages/lessons/nav-bar)
8. [iterate-list](nextjs-example/pages/lessons/iterate-list)
