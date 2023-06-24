import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <div  className='app-container' >
    <Head>
      <title>{pageProps.title ?? 'My NextJS App'}</title>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
}

export default MyApp
