import { NextPage } from 'next';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import PrintObject from '../components/PrintObject';
import Cart from '../components/Cart';
import ClearCart from '../components/ClearCart';

import { fetchGetJSON } from '../utils/api-helpers';
import useSWR from 'swr';

const ResultPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout_sessions/${router.query.session_id}` : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  return (
    <Layout title="Checkout Payment Result | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
        <p>You will receive an email within 24 hours with your product.</p>
        <Cart>
          <ClearCart />
        </Cart>
      </div>
    </Layout>
  );
};

export default ResultPage;
