import React, { useState } from 'react';
import './../css/content.css';

export default function Content() {
  const [selectedTab, setSelectedTab] = useState('A');

  return (
    <div>
      <nav className="tabs">
        <button className="btn" id="A" onClick={() => setSelectedTab('A')}>탄생설화</button>
        <button className="btn" id="B" onClick={() => setSelectedTab('B')}>역사</button>
        <button className="btn" id="C" onClick={() => setSelectedTab('C')}>민속</button>
        <button className="btn" id="D" onClick={() => setSelectedTab('D')}>삼다도</button>
      </nav>
      <main>
        {selectedTab == 'A' && (
          <div className="myth-container">
            <h1 className="main-title">재미있고 신비로운 제주탄생의 설화</h1>
            <div className="myth-images">
              <img src="https://www.visitjeju.net/image/jeju_story/img-story23.jpg" alt="Image 1" className="myth-image" />
              <img src="https://www.visitjeju.net/image/jeju_story/img-story24.jpg" alt="Image 2" className="myth-image" />
              <img src="https://www.visitjeju.net/image/jeju_story/img-story25.jpg" className="myth-image" />
            </div>
            <div className="myth-content">
              <article className="myth-article">
                <h2>태초에 세상이 열린 이야기, 개벽신화</h2>
                <p>오랫동안 세상은 그저 암흑이었습니다. 어둠과 혼돈으로 휩싸인 암흑천지에 개벽의 기운이 돌기 시작했어요. 갑자년 갑자월 갑자일 갑자시에 하늘 머리가 열리고, 을축년 을축월 을축일 을축시에 땅의 머리가 열리며 미세한 금이 생겨났습니다. 금이 점점 벌어지는 동안 땅이 솟아 오르고 물이 흘러내려 하늘과 땅의 경계가 조금씩 분명해져 갔어요.
이때 하늘에서 푸른 이슬이 내리고 땅에서 검은 이슬이 솟아나 서로 합쳐지고 트이면서 만물이 생겨나기 시작했답니다. 별이 가장 먼저 생겨났대요. 동쪽에 견우성, 서쪽에 직녀성, 남쪽에 노인성, 북쪽에 북두칠성, 중앙에 삼태성이 돋아나자 많은 별들이 속속 돋아 펼쳐지며 하늘 가득 자리를 잡았습니다.
별빛만으로는 아직 어두웠어요. 그저 어두운 채로, 동쪽에선 푸른 구름이, 서쪽에선 하얀 구름이, 남쪽에선 붉은 구름이, 북쪽에선 검은 구름이, 중앙에선 누런 구름이 오락가락했습니다. 어느 순간, 천황닭이 목을 들고, 지황닭이 날개를 치고, 인황닭이 꼬리를 쳐 크게 우니, 동방에서 먼동이 트기 시작했어요. 이때 하늘에서 천지왕이 두 개의 해와 두 개의 달을 내보내자, 세상이 밝아지며 천지가 활짝 열렸다는군요.</p>
              </article>
              <article className="myth-article">
                <h2>제주섬이 빚어진 이야기, 설문대 전설</h2>
                <p>옛날 옛적에 몸집이 아주 큰 설문대 할망이 있었답니다. 설문대 할망은 힘 또한 장사였는데, 어느 날 치마폭에 흙을 가득 퍼 날라다 넓디넓은 푸른 바다 한가운데 붓기 시작했습니다.
얼마나 부지런히 날라다 부었는지 바다 위로 섬의 형체가 만들어졌지요. 저절로 만들어진 오름들이 보기 좋았는지, 설문대는 흙을 집어 섬 여기저기에 오름을 만들기 시작했어요. 흙을 너무 많이 집어놓았다 싶은 것은 주먹으로 봉우리를 탁 쳐서 균형을 맞추었습니다. 봉우리가 움푹 파인 오름들은 그렇게 만들어진 것이랍니다.
드디어 섬 한가운데에 은하수를 만질 수 있을 만큼 높은 산이 만들어졌습니다. 바로 한라산이랍니다. 그런데 산이 너무 높아 보였는지, 봉우리를 툭 꺾어 바닷가로 던져버렸습니다. 남서쪽 바닷가로 날아간 그 봉우리는 산방산이 되었답니다.<br/>
- 제주신화에서의 '할망'은 '여신'을 일컬음 -</p>
              </article>
              <article className="myth-article">
                <h2>탐라국이 생겨난 이야기, 탐라개국신화</h2>
                <p>한라산 북녘 기슭 땅에 심상치 않은 기운이 돌더니 땅 속에서 세 신인이 차례로 솟아났습니다. 세 신인은 거친 산야에서 사냥을 해 가죽옷을 입고 고기를 먹으며 살았답니다.
어느 날 동쪽 바닷가에 커다란 상자 하나가 떠 내려와 머무는 걸 발견하고 달려갔어요. 그것은 자줏빛 흙으로 봉해진 나무상자였습니다. 상자를 여니, 붉은 띠를 두르고 자줏빛 옷을 입은 남자가 새알 모양의 옥함을 지키고 있었습니다. 옥함을 여니 푸른 옷을 입은 아리따운 처녀 셋과 망아지와 송아지, 그리고 오곡의 씨앗이 있었답니다.
상자에서 나온 남자는 "나는 동해 벽랑국 사자입니다. 우리 임금님께서 세 따님을 두셨는데, 삼신인이 솟아 장차 나라를 열고자 하나 배필이 없으니, 모시고 가라해서 왔습니다. 마땅히 배필을 삼으셔서 대업을 이루소서." 말하고는 홀연히 구름을 타고 날아가 버렸습니다.
세 신인과 공주는 몸과 마음을 깨끗이 하고 차례로 짝을 정해 혼례를 올린 뒤, 물 좋고 땅이 기름진 곳으로 가 차례로 활을 쏘아 거처할 땅을 정했습니다. 이때부터 오곡의 씨앗을 뿌리고 소와 말을 기르니 날로 백성이 많아지고 풍요로워져 마침내 '탐라국'을 이루게 되었답니다.</p>
              </article>
            </div>
          </div>
        )}
        {selectedTab == 'B' && (
          <div className="history-container">
            <h1 className="main-title">제주의 역사</h1>
            <p className="subtitle">제주도는 유구한 역사를 지니고 있는 곳이다. 삼국시대에서 고려, 조선시대를 거쳐 일제강점기와 현대사에 이르기까지 제주 역사를 여행해 보자.</p>
            <div className="history-images">
              <img src="https://www.visitjeju.net/image/jeju_story/img-history01.jpg" alt="History Image 1" className="history-image" />
              <img src="https://www.visitjeju.net/image/jeju_story/img-history02.jpg" alt="History Image 2" className="history-image" />
              <img src="https://www.visitjeju.net/image/jeju_story/img-history03.jpg" alt="History Image 3" className="history-image" />
            </div>
            <div className="history-content">
              <article className="history-article">
                <h2>천년의 역사 탐라</h2>
                <p>'섬나라'라는 뜻을 지닌 '탐라'는 제주의 옛 이름이다. 제주섬에 탐라가 건국된 과정은 '삼성신화'로 알려진 '탐라개국신화'에 잘 나타나 있다.
고고학적 흔적을 보고 싶다면 '삼양동 선사 유적'을 찾아가보면 된다. 국가사적 416호로 지정된 삼양동 선사 유적은 원삼국시대인 기원전 3세기경
제주에 처음으로 형성된 대규모 마을 유적으로 탐라형성기(B.C.200~A.D.200)시대의 사회모습을 보여준다. 삼국시대의 탐라는 백제, 고구려, 신라와
각각 교역했으며, 나당연합군에 의해 백제가 멸망한 직후에는 일본과 중국 당나라와도 외교관계를 맞는 등 독자적인 해상왕국의 역사를 이었다.</p>
              </article>
              <article className="history-article">
                <h2>‘탐라’가 ‘제주’로 바뀌다</h2>
                <p>고대 해양국가 탐라가 독립국으로서의 지위를 잃어버린 것은 고려 숙종 10년(1105)때였다. 고종(1213~1259) 때에 이르러서는
이름 또한 '바다 건너 큰 고을'이란 뜻을 지닌 '제주'로 바뀌었다. 고려시대 제주의 대표적인 흔적은 삼별초와 관련된 유적들이다.
제주섬은 고려시대 대몽항쟁의 주력군으로 활약했던 삼별초의 마지막 격전지였던 것. 고려정부군과 삼별초군이 번갈아가며 해안에 쌓았던
환해장성이 남아 있고, 삼별초군이 주둔했던 항몽유적지가 있다. 삼별초군은 애월에 각종 방어시설뿐만 아니라 궁궐과 관아까지 갖춘 항파두리성을 쌓고
여몽연합군에 맞섰지만 고려 원종 14년(1273)에 함락되었다. 그 후 제주는 고려 말 최영 장군이 목호군을 토벌할 때까지 몽골의 지배 속에 놓여 있었다.
새별오름, 외돌개, 막숙, 범섬 등이 최영장군과 목호군이 격전을 벌였던 고려시대의 유적지들이다.</p>
              </article>
              <article className="history-article">
                <h2>한손으로 열복진 ‘유배 1번지’</h2>
                <p>한라산 둘레길은 한라산의 허리 부분인 해발 600~800m의 둘레를 따라 걷는 일입니다.
제주는 고려시대 때부터 유배지로 이용되었다. 고려를 복속시킨 원은 삼별초 정벌 직후 제주를 그들의 직할지로 삼아 몇 차례에 걸쳐 도적과 죄인은 물론이고
왕족과 관리, 승려까지 유배시켰다. 제주가 본격적인 유배지로 이용된 것은 조선시대에 들어서였다. 조선시대 5백 년 동안 2백여 명이 유배를 왔는데,
왕족과 외척, 문무양반, 학자 등은 물론 도적과 국경을 넘다 잡힌 범인에 이르기까지 각계각층의 유배인들이 있었다. 조선조 5백 년을 통해 제주에서
유배생활을 한 숱한 인사들이 제주에 끼친 영향도 적지 않았다. 대표적인 인사 중 하나가 추사 김정희. 그 유명한 세한도와 추사체가 제주 유배생활 중 완성됐다.
대정읍 안성리에 추사적거지가 잘 복원돼 있다.</p>
                </article>
              <article className="history-article">
                <h2>아프지만 직시해야할 상처, 일제강점기</h2>
                <p>일제의 가혹한 식민지 지배는 제주라고 예외가 아니었다. 1930년대 이후 전시체제로 접어들면서 제주도를 주요 군사기지로 인식한 일제는 섬 전역에 군사시설을 강화시켜갔다.
군사시설 공사에는 많은 제주도민들이 동원돼 고초를 겪었다. 상당수의 제주도민들이 일제의 전시총동원령에 따라 징병 ∙ 징용 ∙ 정신대 등의 명목으로 부역에 동원되거나
전장으로 끌려갔다. 이러한 어려운 상황속에서도 제주사람들의 항일운동은 대단했다. 3 ∙ 1운동보다 1년 먼저 일으킨 법정사 항일운동, 해녀들이 중심이 된 항일투쟁,
일본으로 건너가서 벌였던 자주운항운동, 무정부주의 대중운동 등 다른 지역에서는 보기 힘든 항일운동을 펼쳤다. 제주 곳곳에 남아있는 일제군사유적지,
우리나라에서 유일하게 지역의 항일운동을 집대성해놓은 역사재현의 현장인 제주항일 기념관 등을 찾아가보자.</p>
              </article>
            </div>
          </div>
        )}
        {selectedTab === 'C' && (
          <div className="folk-container">
            <h1 className="main-title">제주의 민속</h1>
            <p className="subtitle">본섬과 제주도 주변의 문화를 함께 담아, 제주에는 '향과 곳'이라는 무속신앙이 독특한 문화로 남아있다고 한다.</p>
            <div className="folk-image-container">
              <img src="https://www.visitjeju.net/image/jeju_story/img-story20.jpg" alt="Folk Image 1" className="folk-image" />
            </div>
            <div className="folk-content">
              <article className="folk-article">
                <h2>당, 마을을 수호하는 신(神)이 사는 집</h2>
                <p>제주에는 마을마다 신들이 거처하는 장소인 당(堂)이 있다. 마을을 수호하고 모든 일을 관장하는 신을 모신 성소이며 제사장소다. 마을의 설촌 역사를 간직한 본향당, 아이들의 성장과 건강을 돌보는 일뤠당, 해녀와 어부들의 바다일과 관련된 돈짓당 등으로 이루어져 있는데, 어떤 마을은 7~8개소까지, 최소한 한 개소 이상은 지니고 있다.
                최근 조사에서 아직도 400여 개소의 당이 있는 것으로 밝혀졌다. 당 구경을 하고 싶다면, 어느 마을이건 그 마을 어른들에게 물어보면 된다. 그리고 겸허한 마음으로 조용히 둘러볼 것.</p>
              </article>
              <article className="folk-article">
                <h2>굿, 1만여 신들과 인간이 만나는 축제</h2>
                <p>무격(巫覡)을 둘러싼 주술종교의 모든 민속인 '무속(巫俗)'은 우리 민족의 고유 신앙이며 우리 민족문화의 근원을 밝히는 중요한 자료다. 1만8천 신들의 고향답게 제주에는 풍부한 무속이 전해지고 있다.
                대표적인 무속이 바로 '굿'이다. 굿을 집행하며 신과 인간의 매개 역할을 하는 '무당'을 제주에서는 '신방'이라 부른다. 신방들이 하는 의례는 기회나 규모, 형식 등에 따라 일반굿과 당굿, 비념 등으로 나뉜다. '일반굿'은 가정에서 생사, 질병, 생업, 계절 등을 관장하는 신들을 청해 축원하는 가제(家祭)이고, '당굿'은 마을을 수호하는 당신에 대해 마을사람들이 합동으로 당에서 하는 마을제다. 제주에서 가장 유명한 굿은 중요무형문화재 제71호로 지정된 칠머리당영등굿이다. 제주시 건입동 칠머리당에서 마을 수호신인 본향당신을 모시고 마을사람들이 하는 당굿이며, 영등굿인 칠머리당영등굿은 유네스코 세계무형유산에 등재되어 그 진가를 세계적으로 인정받고 있다. 이 소중하고 귀한 굿이 매년 음력 2월 1일과 14일에 사라봉 어귀에 자리 잡은 칠머리당에서 치러지고 있으나 일부러 시간 내어 동참해볼 만하다.</p>
              </article>
              <div className="folk-images">
                <img src="https://www.visitjeju.net/image/jeju_story/img-story21.jpg" alt="Folk Image 2" className="folk-small-image" />
                <img src="https://www.visitjeju.net/image/jeju_story/img-story22.jpg" alt="Folk Image 3" className="folk-small-image" />
              </div>
              <article className="folk-article">
                <h2>신구간, 신화가 살아있는 제주만의 독특한 풍속</h2>
                <p>신들의 고향이라 불리는 제주섬에도 신들이 자리를 비우는 유일한 기간이 있다. 바로 24절기의 마지막 절기인 '대한' 후 4일부터 첫 절기인 '입춘' 전 3일까지의 8일 동안이다.
                제주에서는 그 기간을 '묵은 철과 새 철의 사이'라는 뜻의 '신구간(新舊間)'이라 부른다. 24절기, 곧 음력이 아니라 양력에 토대를 둔 것이니 매년 1월 25일부터 2월 1일까지가 그 기간이다. 제주에서는 신구간에 지상의 모든 신들이 천상으로 올라가 옥황상제에게 1년 동안 인간세계에 있었던 모든 일들을 결산한다고 믿었다. 그래서 신들이 없는 신구간에 평소에는 동티날까 두려워 못했던 이사, 집수리, 변소개축, 이장 등을 해도 괜찮다는 것. 그 속신이 아직까지 전해 내려오고 있어 제주에는 신구간에 집수리를 하거나 이사하는 집이 많다.</p>
              </article>
              <article className="folk-article">
                <h2>포제단, 제주에서 마을별로 마을을 기원하는 마음제를 벌이는 곳</h2>
                <p>마을 남성들이 주관하여 유교식으로 거행하는 마을제를 포제라 하고, 이 포제를 행하는 장소가 바로 포제단이다. 여성들이 주관하는 무속제의인 당굿도 병존하고 있다.
                당굿과 포제는 원래 하나였던 것인데 조선시대에 들어와서 유교식 의례가 도입되면서 남성 주도의 포제로 분화되었다.</p>
              </article>
            </div>
          </div>
        )}
        {selectedTab === 'D' && (
          <div className="samdado-container">
            <h1 className="main-title">바람, 돌, 여자가 많다고 해서 불어진 이름, 삼다도</h1>
            <div className="samdado-images">
              
              <img src="https://www.visitjeju.net/image/jeju_story/img-story05.jpg" alt="Image 1" className="samdado-image" />
              <img src="https://www.visitjeju.net/image/jeju_story/img-story08.jpg" alt="Image 2" className="samdado-image" />
              <img src="https://www.visitjeju.net/image/jeju_story/img-story09.jpg" className="samdado-image" />
            
            </div>
            <div className="samdado-content">
              
              <article className="samdado-article">
                <h2>바람 - 바람 잘 날 없는 바람의 나라</h2>
                <p>
                  제주도는 사시사철 바람이 많아 '바람의 섬'이라 불리며, 그 바람은 제주 사람들의 생활 속에 깊이 자리잡고 있다. 해안가에서 불어오는 강한 바람은 제주 사람들에게 중요한 자연환경 요소이며, 전통적인 제주 집들은 이 바람을 막기 위해 독특한 구조로 설계되었다.
                </p>
              </article>
              
              <article className="samdado-article">
                <h2>돌 - 돌 없이 상상할 수 없는 돌의 섬</h2>
                <p>
                  제주는 화산섬으로, 곳곳에 현무암이 널려 있어 '돌의 섬'이라 불린다. 현무암은 제주 사람들의 삶 속에서 중요한 자원으로 활용되어 왔으며, 돌담은 제주 전통 경관의 중요한 요소다. 돌하르방 또한 제주도의 상징적인 조형물로 자리잡고 있다.
                </p>
              </article>
  
              <article className="samdado-article">
                <h2>여자 - 여신의 나라, 여자의 섬</h2>
                <p>
                  제주도는 '여성의 섬'으로도 불린다. 해녀들은 제주 여성의 강인함과 용기를 상징하며, 그들은 바다에서 해산물을 채취하는 전통을 이어가고 있다. 제주 여성들은 가정과 사회에서 중요한 역할을 하며, 그들의 문화와 전통은 제주도의 중요한 유산으로 남아 있다.
                </p>
              </article>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}