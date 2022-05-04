import Chakra from "../components/chakra";
import Layout from "../components/layouts/main.js";

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </Chakra>
  );
};

export default Website;
