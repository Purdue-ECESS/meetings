import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import {Item} from "../components/item";

export function fetchItems() {
  return new Promise(resolve => {
    fetch(
      "https://api.reddit.com",
    ).then(res => res.json())
      .then(res => resolve(res));
  });
}


const Home: NextPage = () => {
  const [post, setPosts] = useState<any>([]);
  useEffect(() => {
    fetchItems().then((res: any) => {
      console.log(res);
      setPosts(res?.data?.children || []);
    })
  }, []);
  return (
    <>
      {
        post.map((item: any) => {
          console.log(item);
          return (
            <Item key={item.data.id} item={item}/>
          )
        })
      }
    </>
  )
}

export default Home
