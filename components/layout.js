import Header from '../components/header';
import Head from 'next/head';
import Footer from '../components/footer';
import { Page, Text, Button } from '@zeit-ui/react';

export default ({ children }) => (
  <Page>
    <Head>
      <title>Palace Proxies | Unbanned AIO Residential proxies with Datacenter speeds</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tryhermes" />
      <meta name="twitter:title" content="Palace Proxies" />
      <meta
        name="twitter:description"
        content="nbanned AIO Residential proxies with Datacenter speeds"
      />
      <meta
        name="twitter:image"
        content="https://nextjs-typescript-react-stripe-js.now.sh/social_card.png"
      />
    </Head>
    <Header />
    <Page.Content>{children}</Page.Content>
    <Footer />
  </Page>
);
