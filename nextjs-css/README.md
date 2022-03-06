```bash
$ npx create-next-app@latest --ts
$ cd (app name)
$ npm run dev
$ npm install @mui/material @emotion/react @emotion/styled
$ rm -rf styles/*
```

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
$ npm i sass
```

https://mui.com/getting-started/installation/
https://nextjs.org/docs/messages/install-sass
https://www.matthewwen.com/

Tutorial List
1. inline-style
2. sass-style
3. center-vertial
4. flex
5. image
6. mui
7. nav-bar
8. iterate-list