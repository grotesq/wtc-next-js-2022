import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';
import Navigation from '../components/Navigation';

const formatter = Intl.NumberFormat('ko-kr');

export default function Order() {
  const [espresso, setEspresso] = useState(0);
  const [americano, setAmericano] = useState(0);
  const [latte, setLatte] = useState(0);
  const [timer, setTimer] = useState(0);

  function addEspresso() {
    // espresso++; // 안됨
    setEspresso(espresso + 1);
  }

  function removeEspresso() {
    setEspresso(espresso - 1);
  }

  function addAmericano() {
    setAmericano(americano + 1);
  }

  function removeAmericano() {
    setAmericano(americano - 1);
  }

  function addLatte() {
    setLatte(latte + 1);
  }

  function removeLatte() {
    setLatte(latte - 1);
  }

  const sum = useMemo(
    function () {
      return espresso * 2500 + americano * 2800 + latte * 3000;
    },
    [espresso, americano, latte]
  );

  useEffect(() => {
    setInterval(() => setTimer((timer) => timer + 1), 1000);
  }, []);

  return (
    <div>
      <Head>
        <title>온라인 메뉴판 :: Caffe Next.js</title>
      </Head>

      <Navigation />

      <div className="container">
        <h1>온라인 메뉴판</h1>

        <p>접속 후 {timer}초가 지났습니다.</p>

        <dl className="row">
          <dt className="col-2">에스프레소</dt>
          <dd className="col-10">
            <p>2,500원</p>
            <div className="btn-group">
              <button className="btn btn-light btn-sm" onClick={removeEspresso}>
                -
              </button>
              <button className="btn btn-light btn-sm">{espresso}</button>
              <button className="btn btn-light btn-sm" onClick={addEspresso}>
                +
              </button>
            </div>
          </dd>

          <dt className="col-2">아메리카노</dt>
          <dd className="col-10">
            <p>2,800원</p>
            <div className="btn-group">
              <button
                className="btn btn-light btn-sm"
                onClick={removeAmericano}
              >
                -
              </button>
              <button className="btn btn-light btn-sm">{americano}</button>
              <button className="btn btn-light btn-sm" onClick={addAmericano}>
                +
              </button>
            </div>
          </dd>

          <dt className="col-2">카페라테</dt>
          <dd className="col-10">
            <p>3,000원</p>
            <div className="btn-group">
              <button className="btn btn-light btn-sm" onClick={removeLatte}>
                -
              </button>
              <button className="btn btn-light btn-sm">{latte}</button>
              <button className="btn btn-light btn-sm" onClick={addLatte}>
                +
              </button>
            </div>
          </dd>
        </dl>
        <hr />
        <div className="row">
          <div className="col-2">합계</div>
          <div className="col-10">{formatter.format(sum)}원</div>
        </div>
      </div>
    </div>
  );
}
