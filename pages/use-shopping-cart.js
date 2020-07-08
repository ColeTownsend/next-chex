import Layout from '../components/Layout';
import { useSession, getSession } from 'next-auth/client';
import AccessDenied from '../components/access-denied';
import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';
import Products from '../components/Products';

const DonatePage = () => {
  const [session, loading] = useSession();

  if (!session) {
    return <AccessDenied />;
  }
  return (
    <Layout title="Shopping Cart | Next.js + TypeScript Example">
      <h1>Shopping Cart</h1>
      <p>
        Powered by the <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a> React
        hooks library.
      </p>
      <Cart>
        <CartSummary />
        <Products />
      </Cart>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  // If you need to make calls to a service (e.g. an API or database) to make
  // data avalible only to authenticated users, you can do that here by checking
  // the session object is not null or by accessing the contents of session.user
  const session = await getSession(context);
  return {
    props: { session },
  };
}

export default DonatePage;
