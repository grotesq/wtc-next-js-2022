import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if( process.env.NEXT_PUBLIC_MAINTENANCE === 'true' ) {
    return <>정기 점검중입니다.</>
  }
  return <Component {...pageProps} />
}

export default MyApp
