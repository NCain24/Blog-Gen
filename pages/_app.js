import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { DM_Sans, Ubuntu_Mono } from '@next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../styles/globals.css';
import { PostsProvider } from '../context/postsContext';
config.autoAddCss = false;

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});
const ubuntu = Ubuntu_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-ubuntu',
});


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <UserProvider>
      <PostsProvider>
        <main
          className={`${ubuntu.variable}  font-body`}
        >
          {getLayout(<Component {...pageProps} />, pageProps)}
        </main>
      </PostsProvider>
    </UserProvider>
  );
}

export default MyApp;
