import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div>
      <Head>
        <title>카페 소개 :: Caffe Next.js</title>
      </Head>

      <Navigation />

      <div className="container">
        <h1>카페 소개</h1>
        <p>소개 내용 생략...</p>
      </div>
    </div>
  );
}
