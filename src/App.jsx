import { useState } from 'react';
import './App.css';

const fortunes = [
  { title: '🐉 용의 기운', msg: '올해는 네가 움직일수록 운이 따라붙는다. 자리에서 일어나라!' },
  { title: '💰 돈복 상승', msg: '뜻밖의 보너스가 들어온다. 지갑은 가볍게, 마음은 무겁게!' },
  { title: '❤️ 연애 운쌈', msg: '소개팅에서 “그 말투”가 통한다. 멘트는 담백하게!' },
  { title: '🧠 집중력 폭발', msg: '미루던 일, 오늘 끝난다. 대신 간식은 필수.' },
  { title: '🧧 세뱃돈 띵동', msg: '돈은 들어오는데 지출도 같이 들어온다. 밸런스 게임 승리!' },
  { title: '😎 인간관계 금상첨화', msg: '말 한마디가 사람을 살린다. 인사부터 하자.' },
  { title: '🥟 떡국 기운', msg: '떡국 두 그릇 먹으면 복이 두 배! 과식은 금지.' },
  { title: '🎯 목표 달성', msg: '작은 목표부터 체크하면 큰 목표가 슬쩍 달라붙는다.' },
  { title: '🧹 액운 청소', msg: '정리하면 돈이 들어온다. 특히 책상!' },
  { title: '🚀 대박 스타트', msg: '새해 첫 클릭이 행운을 부른다. 지금이 그 클릭.' }
];

export default function App() {
  const [picked, setPicked] = useState(null);
  const [shake, setShake] = useState(false);

  const pickFortune = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
    const f = fortunes[Math.floor(Math.random() * fortunes.length)];
    setPicked(f);
  };

  return (
    <div className="container">
      <header>
        <h1>🎉 새해 운세 카드 뽑기</h1>
        <p>설날 기념! 재미로 보는 오늘의 운세 한 장.</p>
      </header>

      <section className={`card ${shake ? 'shake' : ''}`}>
        {picked ? (
          <>
            <h2>{picked.title}</h2>
            <p className="msg">{picked.msg}</p>
          </>
        ) : (
          <>
            <h2>카드를 뽑아주세요</h2>
            <p className="msg">운세는 마음이 열렸을 때 온다…!</p>
          </>
        )}
      </section>

      <div className="actions">
        <button onClick={pickFortune}>운세 뽑기</button>
        {picked && <button className="ghost" onClick={() => setPicked(null)}>다시 뽑기</button>}
      </div>

      <footer>
        <small>© 2026 새해 운세 — 재미로만 즐겨요 😊</small>
      </footer>
    </div>
  );
}
