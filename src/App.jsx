import { useState } from 'react';
import './App.css';

const fortunes = [
  { title: '🐉 용의 기운', msg: '올해는 네가 움직일수록 운이 따라붙는다. 자리에서 일어나라!', art: '🐉' },
  { title: '💰 돈복 상승', msg: '뜻밖의 보너스가 들어온다. 지갑은 가볍게, 마음은 무겁게!', art: '💰' },
  { title: '❤️ 연애 운쌈', msg: '소개팅에서 “그 말투”가 통한다. 멘트는 담백하게!', art: '❤️' },
  { title: '🧠 집중력 폭발', msg: '미루던 일, 오늘 끝난다. 대신 간식은 필수.', art: '🧠' },
  { title: '🧧 세뱃돈 띵동', msg: '돈은 들어오는데 지출도 같이 들어온다. 밸런스 게임 승리!', art: '🧧' },
  { title: '😎 인간관계 금상첨화', msg: '말 한마디가 사람을 살린다. 인사부터 하자.', art: '😎' },
  { title: '🥟 떡국 기운', msg: '떡국 두 그릇 먹으면 복이 두 배! 과식은 금지.', art: '🥟' },
  { title: '🎯 목표 달성', msg: '작은 목표부터 체크하면 큰 목표가 슬쩍 달라붙는다.', art: '🎯' },
  { title: '🧹 액운 청소', msg: '정리하면 돈이 들어온다. 특히 책상!', art: '🧹' },
  { title: '🚀 대박 스타트', msg: '새해 첫 클릭이 행운을 부른다. 지금이 그 클릭.', art: '🚀' }
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const pickCard = (idx) => {
    if (revealed) return;
    setSelected(idx);
    setTimeout(() => setRevealed(true), 350);
  };

  const reset = () => {
    setSelected(null);
    setRevealed(false);
  };

  return (
    <div className="container">
      <header>
        <h1>🎉 새해 운세 카드 뽑기</h1>
        <p>설날 기념! 재미로 보는 오늘의 운세 한 장.</p>
      </header>

      <section className="card">
        <h2>카드를 선택하세요</h2>
        <p className="msg">타로처럼 펼쳐진 카드 중 하나를 골라보세요.</p>

        <div className="grid">
          {fortunes.map((f, i) => {
            const isSelected = selected === i;
            const flip = isSelected && revealed;
            return (
              <button
                key={i}
                className={`card-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => pickCard(i)}
                disabled={revealed}
                aria-label={`${i + 1}번째 카드 선택`}
              >
                <div className={`flip ${flip ? 'flip-on' : ''}`}>
                  <div className="face back">🃏</div>
                  <div className="face front">
                    <div className="art">{f.art}</div>
                    <div className="title">{f.title}</div>
                    <div className="desc">{f.msg}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {revealed && selected !== null && (
          <div className="result">
            <h3>{fortunes[selected].title}</h3>
            <p>{fortunes[selected].msg}</p>
          </div>
        )}
      </section>

      <div className="actions">
        <button onClick={reset}>다시 뽑기</button>
      </div>

      <footer>
        <small>© 2026 새해 운세 — 재미로만 즐겨요 😊</small>
      </footer>
    </div>
  );
}
