import type { NextPage } from 'next'
import { Typography } from '@mui/material';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Typography variant="h3">
        Tutorial Website
      </Typography>
      <p>
        Please refer to the README located <a href={"https://github.com/Purdue-ECESS/meetings/tree/main/nextjs-css/README.md"}>here</a>.
      </p>

      <Link href={"/lessons"}>Click here to look at the lessons.</Link>
    </div>
  )
}

export default Home
