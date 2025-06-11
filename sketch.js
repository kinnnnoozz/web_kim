//let introVideo;
let typingText = "hi this is youngju kim\n\Art, code, and broken circuits\n ▼ 시작하기";
let displayedText = "";
let index = 0;
let isTyping = false;
let typingSpeed = 100;
let lastTypedTime = 0;


let artworks = [
  { src: "kibo.JPG", text: "<b>kibo(2025)</b>" },
  { src: "kibo2.JPG", text: "" },
  { src: "kibo6.jpg", text: "<b>Kineshin & Phage</b>" },
  { src: "kibo5.jpg", text: "<b>Kineshiin - zoom in</b>" },
  { src: "kibo4.jpg", text: "<b>Phage - zoom in</b>" },
  { src: "kibo3.JPG", text: "" },
  { src: "kibo9.JPG", text: "" },
  { src: "kibo7.JPG", text: "" },
  { src: "kibo10.JPG", text: "" },

];

let projectData = {
  "logo1.png": {
    artworks: [
      { src: "trans.jpg", text: "<b>transition(2022)</b>" },
      { src: "t1.png", text: "" },
      { src: "t2.png", text: "" },
      { src: "t3.png", text: "" },
      { src: "t4.png", text: "" },
      { src: "t5.png", text: "" },
      { src: "t6.png", text: "" }
    ],
    description: "<b>transition</b><br>미디어 게임, 컬러, 사운드; 모니터, 조이스틱, 포스터, 10‘<br><br>"+
    "> 독립적인 형태로 물질대사가 불가능하지만, 인간을 숙주로 삼아 물질대사를 이루는 바이러스의 존재에 대해 인간과 흡사한 지점이 있다는 것을 발견하였고 그들을 긍정적으로 바라보기 시작하였으나 쉽지 않았다. 지극히 바이러스의 관점에서 인간은 지구에 도움이 되기보단 자신의 책임을 다른 대상에게 전가하며 갈등을 유발하고, 파괴시킨다. 그렇기에 우리는 다른 존재로 인식한다면 온전히 공존할 수 없고 상호적일 수 없었지만 사랑을 생각하면 왜 인지 찔리는 부분이 있었다.<br><br>"
    + "그들은 생존을 이유로 인간을 필요로 하고 그 과정에서 서로간 밀접한 접촉은 필수이다. 자신을 복제해가며 죽음을 맞이하는 부분도 어떤 부분에서는 섬뜩한 사랑이 연상된다. 어드벤처 게임 속 의인화된 바이러스를 1인칭 주인공 즉, 플레이어로 설정하여 인간과의 융합적 사랑을 보여주며 전염을 통해 공생하는 엔딩을 보여준다."
  },
  "logo2.png": {
    artworks: [
      { type: "video", src: "https://www.youtube.com/embed/ptbFwS01E9E?si=stMs9jib5WgFpWIx", text: "" },
      { type: "image", src: "s1.jpg", text: "<b>MARS Project(2022)</b>" },
      { type: "image", src: "s2.jpg", text: "<b>Second OPPY</b>" }
    ],
    description: "<b>MARS Project</b><br>인터렉티브 미디어, 컬러, 사운드; 모니터, 모터로봇, 흙, 20'<br><br>" +
    "> 가상의 인물 Steven Park이라는 공학자를 설정하여 실제 인물과 사건을 대치, 혼합하였다. 스티븐의 셀프 인터뷰에 나오는 스페이스 X와 팔콘 로켓, 실제 물질에서 일어나는 열역학적 법칙은 허구의 인물이 발언하는 것과 행동의 의문을 짓게 되며 어디까지 진실인지 가짜인지 혼동하게 한다."
  },
  "logo3.png": {
    artworks: [
      { src: "n.png", text: "<b>너만을 좋아해!(2022)</b>" },
      { src: "n2.png", text: "" },
      { src: "n3.png", text: "" },
      { src: "n4.png", text: "" },
      { src: "n5.png", text: "" },
      { src: "n6.png", text: "" },
      { src: "n7.png", text: "" },
      { src: "n8.png", text: "" },
      { src: "n9.png", text: "" },
      { src: "n10.png", text: "과연 니나는 무슨 말을.."
      },
    ], description:"<b>너만을 좋아해!</b><br>시뮬레이션 게임, 컬러, 사운드, 10~15’<br><br>" + 
        "> 기존의 남성향 미소녀 연애 시뮬레이션 게임을 비튼다. 플레이어는 니나라는 캐릭터에게 호감을 느끼고, 자연스럽게 데이트를 이어가며 그녀와의 성공적인 연애 엔딩을 기대하게 된다. 그러나 이야기가 진행될수록 어떤 선택지를 고르더라도 결국 배드엔딩으로 귀결된다. 이는 니나의 주체적인 선택이 게임 내 누구에게도 중요하지 않으며, 모든 로맨스가 플레이어의 일방적인 선택에 의해 구성된 환상임을 드러낸다.<br><br><br><br>" + 
        "▶ <a href= \https://drive.google.com/file/d/1Q9PGFSvUTbiEmk4ZXOk-peTlnR7GZzht/view?usp=drive_link\ target=\_blank\ style=\color:palegreen; text-decoration:underline;\> 너만을 좋아해! 다음 장면이 궁금하다면</a> <br><br><br><br>...zip 풀고 kinnnnoozzwork.exe 선택 후 플레이"
    
  },
  "logo4.png": {
    artworks: [
      { type: "video", src: "https://www.youtube.com/embed/FjphlA3k5S4?si=sF7dH9WRJt6_BXSW", text: "" },
      { type: "image", src: "m1.png", text: "<b>안녕하세요, 명왕성에서 온 명걸이입니다(2023)</b>" },
      { type: "image", src: "m2.jpg", text: "<b></b>" }, 
      { type: "image", src: "m3.jpg", text: "<b></b>" },
      { type: "image", src: "m4.jpg", text: "<b></b>" },
      { type: "image", src: "m5.png", text: "" },
    ],
    description: "<b>안녕하세요, 명왕성에서 온 명걸이입니다</b><br>온라인 개인 방송, 버추얼, 트래킹 및 모션캡쳐, 00:20:00‘<br><br>" +
    "> 버튜버와 시청자들의 관계는 극단적이고 기이하다. 시청자는 버튜버의 애인유무를 감시하고 유사 연애적 소통 및 컨텐츠를 소비한다. 명왕성, 소외된 행성에서 온 외계인이라는 컨셉의 버튜버가 바라본 인터넷 방송 속 사람들은 버튜버가 외계인인 것보다 현실에서 다니는 학교, 나이 등 신상과 관련된 정보에 더 많은 관심을 가진다. 명걸이가 했던 자신의 정체성을 알리는 시위나 명왕성을 태양계로 받아들이고자 하는 노력보다 그가 시위했던 장소, 고려대학교의 어느 학번, 어느 과, 어떤 여성인지를 더 궁금해한다. 명걸이의 팬들 또한 더더욱 이러한 시위보다는 명걸이와 직접적인 소통, 어떠한 컨텐츠로 자신들과 놀 것인지 그것을 더 중요하게 여긴다.<br><br>"+
    "현실에서의 모습을 드러내지 않고 꾸며낸 모습일수록 버튜버의 캐릭터는 강화된다. 그런 과정에서 버튜버가 약간의 현실 정보를 흘리는 것은 시청자에게 유사 연애적 욕망을 부추기는데, 그들은 버튜버가 ‘현실에 존재한다’라는 사실만으로 각자 다른 욕망을 버튜버에게 투사하며 표출한다. 1인 방송 플랫폼에서 명걸이라는 버츄얼과 시청자들의 관계는 얼핏 일방적이고 상하적으로 보인다. 그러나 거짓 정보들을 나열하며 일관되지 않는 모습을 보이는 명걸이의 빨간약(화면 뒤 명걸이를 연기하는 인물)과 상상적 욕망을 투영한 자신만의 명걸이를 만들어 내는 시청자 간의 관계는 서로를 고려하지 못한 채 계속해서 어긋나기만 한다. 이러한 비상호적인 인간들 사이에 오히려 비인간적인 존재, 명걸이 자체만은 실재하게끔 느낀다."
  },"logo5.png": {
    artworks: [
      { type: "video", src: "https://www.youtube.com/embed/WNQ1D9age1k?si=xZNksdM86NvgJAit", text: "" },
      { type: "image", src: "v.jpg", text: "<b>Fragment of memories(2024) Poster</b>" },
      { type: "image", src: "v1.jpg", text: "<b>room 1</b>" },
      { type: "image", src: "v2.jpg", text: "<b>BEEPER(DIY device)</b>" }
    ],
    description:"<b>Fragment of memories</b><br>껍데기는와라<br>인터랙티브 미디어 전시 버추얼, 인터랙션 통신 디바이스, 프로젝션 맵핑<br><br>" + 
    "> 본 전시는 기존 버추얼 캐릭터의 한계를 넘어, 기술 기반의 상호작용을 통해 관객과의 직접적인 소통을 시도하였다. SM엔터테인먼트의 버추얼 아이돌 <b>‘나이비스(naevis)</b>와의 협업을 통해, 버추얼 캐릭터가 차원을 넘나들며 자신의 기억을 찾아가는 여정을 담았다.<br> 상호작용이 가능하게 제작한 디바이스를 관객에게 직접 제공하여, 공간마다의 이벤트를 체험하도록 구성하였다. 이제까지의 2D 화면 중심의 버추얼 콘텐츠 및 미디어 전시 형식에서 벗어나, 참여형+몰입형 전시 형식을 시도했다."
  }
};

let currentIndex = 0;
let imgElem, textElem;
let prevButton, nextButton;
let wrapperDiv; 
let frame; 
let gameTextBox;
let homeButton;

function preload() {
  introVideo = createVideo("intro.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  introVideo.size(windowWidth, windowHeight);
  introVideo.volume(0);
  introVideo.elt.muted = true;
  introVideo.hide();
  introVideo.loop();
  homeButton = createButton('Home');
  homeButton.style('position', 'fixed');
  homeButton.style('top', '20px');
  homeButton.style('left', '20px');
  homeButton.style('padding', '15px 25px');
  homeButton.style('background', 'black');
  homeButton.style('color', 'palegreen');
  homeButton.style('font-family', 'Courier New, monospace');
  homeButton.style('font-size', '15px');
  homeButton.style('border', '1px solid palegreen');
  homeButton.style('border-radius', '5px');
  homeButton.style('cursor', 'pointer');
  homeButton.style('z-index', '999');
  homeButton.mousePressed(showBlackOverlay);
  homeButton.hide(); // 시작할 때는 숨김

  homeButton.mouseOver(() => {
    homeButton.style('border', 'rgba(255, 255, 255, 0.4)');
  });
  
  homeButton.mouseOut(() => {
    homeButton.style('border', '1px solid palegreen');
  });

  function startRandomBlinking(elem) {
    function blink() {
      // 랜덤 시간 (300ms ~ 1500ms)
      const delay = Math.random() * 1200 + 300;
  
      // 깜빡이기: 숨겼다가 다시 보이기
      elem.style('opacity', '0');
      setTimeout(() => {
        elem.style('opacity', '1');
      }, 100); // 깜빡이는 시간
  
      // 다음 깜빡임 예약
      setTimeout(blink, delay);
    }
  
    blink();
  }

  textFont('Courier New');
  textSize(32);
  fill(255);

  createSlideShow(); 
}

function draw() {
  let scrollY = window.scrollY || document.documentElement.scrollTop;

  if (scrollY > windowHeight / 3) {
    canvas.style.opacity = "0";
    introVideo.pause();
    wrapperDiv.show();  
  } else {
    canvas.style.opacity = "1";
    introVideo.loop();
    wrapperDiv.hide(); 
  }

  clear();
  background(0);
  image(introVideo, 0, 0, windowWidth, windowHeight);

    
  textFont('Courier New', 20);
  fill('palegreen');

  if (isTyping && millis() - lastTypedTime > typingSpeed) {
    if (index < typingText.length) {
      displayedText += typingText.charAt(index);
      index++;
      lastTypedTime = millis();
    }
  }
  
  


  textAlign(CENTER, CENTER);
  text(displayedText, width / 2, height / 2);
  if (scrollY > windowHeight / 3) {
    canvas.style.opacity = "0";
    introVideo.pause();
    frame.show(); 
    homeButton.show(); //  슬라이드쇼 보이면 버튼도 보임
  } else {
    canvas.style.opacity = "1";
    introVideo.loop();
    frame.hide();
    homeButton.hide(); //  인트로 영상 땐 버튼 숨김
  }
}

function mousePressed() {
  if (!isTyping) {
    displayedText = "";
    index = 0;
    isTyping = true; 
    lastTypedTime = millis();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  introVideo.size(windowWidth, windowHeight);
  wrapperDiv.style('left', windowWidth / 8 + 'px');
}


function createSlideShow() {

  wrapperDiv = createDiv();
  wrapperDiv.style('position', 'fixed');
  wrapperDiv.style('top', '20%');
  wrapperDiv.style('z-index', '15');
  wrapperDiv.style('display', 'flex');
  wrapperDiv.style('flex-direction', 'row'); // 좌우 정렬
  wrapperDiv.style('align-items', 'flex-start');
  wrapperDiv.style('gap', '30px');
  wrapperDiv.style('max-width', '50vw');
  
  //wrapperDiv.style('overflow-x', 'auto'); // 가로 스크롤 허용
  //wrapperDiv.style('white-space', 'nowrap'); // 줄바꿈 방지
  //wrapperDiv.style('flex-wrap', 'nowrap');   // flex 줄바꿈 방지
  wrapperDiv.hide();

  //텍스트
  gameTextBox = createDiv();
  gameTextBox.style('position', 'fixed');
  gameTextBox.style('background-color', 'black');
  gameTextBox.style('color', 'palegreen');
  gameTextBox.style('top', '15%');
  gameTextBox.style('left', 'calc(55%)');
  gameTextBox.style('right', '5%');
  gameTextBox.style('font-family', 'Courier New, monospace');
  gameTextBox.style('font-size', '20px');
  gameTextBox.style('padding', '20px');
  gameTextBox.style('width', 'auto'); // 반응형 너비
  //gameTextBox.style('max-width', '500px'); // 최대 너비 제한
  gameTextBox.style('height', 'auto');
  //gameTextBox.style('overflow-x', 'auto');
  //gameTextBox.style('white-space', 'nowrap');
  gameTextBox.style('border-radius', '5px');
  gameTextBox.html('<b>kibo</b><br>' +
  '키네신 로봇, 퍼지 로봇, 설치형 게임<br><br>' +
  '&gt; 키보(2025)는 현실공간 속 움직이는 로봇들과 이것을 가상 공간에서 조작하려는 인간 사이의 물리적 충돌을 유발하는 설치형 게임 작업이다. 이 작업은 두 개의 공간으로 구성된다. <b>공간(1)</b>은 가상 게임을 할 수 있는 공간으로, 플레이어가 모니터와 조이스틱을 통해 3가지 캐릭터 중 하나를 선택해 아케이드 게임 <i>안티테제</i>를 진행한다. 동시에, <b>공간(2)</b>에 배치된 두 종류의 로봇 중 키네신 로봇은 이 조작에 따라 현실에서도 실시간으로 움직이며, 플레이어는 자신이 조작한 결과가 현실 공간에서 어떤 물리적 반응을 일으키고 있는지 인지하지 못한다. 이에 따라 현실공간에 위치한 사람들은 예측 불가능한 로봇의 행동에 의해 위협받고 제약받게 된다.<br><br>' + 
  '<b>공간(2)</b>에는 진동하며 무작위로 움직이는 다수의 퍼지 로봇과, 세 개의 다리로 이루어진 조작 가능한 키네신 로봇 세 대가 배치된다. 제어 불가능한 퍼지 로봇들은 서로 얽히며 점차 영역을 확장해 공간을 복잡하게 만들고, 키네신 로봇의 이동 경로에도 간접적인 영향을 미친다. 반면 키네신 로봇은 조작이 가능하지만, 불안정한 구조 특성상 유연하고 ‘정상적으로’ 움직일 수 없다. 이처럼 불안정한 형태의 키네신 로봇은 조작에 겨우 맞춰 위험하게 공간을 휘저으며 이동하고, 그 과정에서 의도치 않게 인간을 위협한다.<br><br>' + 
  '시간이 지날수록 로봇들의 움직임은 소모되는 전력과 관성의 영향으로 점차 정지하거나 고장나고 만다. 뒤집어진 채 발발대는 퍼지 로봇과 조인트 관절이 삐그덕 대는 키네신 로봇은 더이상 인간을 위협하거나 제지할 수 없게 되지만, 조작과 공간의 통제에서 벗어나 그자체로 움직인다. 기계의 오작동과 누설되는 전류는 ‘망가짐’을 이끌지만, 왜인지 그들은 자유로워 보인다.');
  gameTextBox.parent(wrapperDiv);

  //슬라이드쇼
  frame = createDiv();
  frame.id("slideshow-frame");
  frame.style('width', '50vw');
  frame.style('left', '5%');
  frame.style('max-width', '1000px');
  frame.style('height', '100%');
  frame.style('aspect-ratio', '5 / 3'); // 반응형 비율 유지
  frame.style('background-color', '#222');
  frame.style('padding', '0px');
  frame.style('border-radius', '15px');
  frame.style('display', 'flex');
  frame.style('flex-direction', 'column');
  frame.style('align-items', 'center');
  frame.style('position', 'relative'); // 내부 버튼 포지셔닝
  frame.parent(wrapperDiv);


  //작업사진
  imgElem = createImg(artworks[currentIndex].src);
  imgElem.style('width', '100%');
  imgElem.style('height', '100%');
  imgElem.style('object-fit', 'cover');
  imgElem.style('border-radius', '10px');
  imgElem.parent(frame);

  //설명글
  textElem = createP(artworks[currentIndex].text);
  textElem.style('color', 'palegreen');
  textElem.style('font-family', 'Courier New, monospace');
  textElem.style('text-align', 'center');
  textElem.style('margin', '16px auto 0 auto');
  textElem.style('font-size', '1.2rem');
  textElem.style('padding', '0.5vw');
  textElem.style('max-width', '95%');
  textElem.style('box-sizing', 'border-box');
  textElem.parent(frame);

  // 버튼
  prevButton = createButton('◀');
  prevButton.mousePressed(showPrev);
  styleButton(prevButton, 'left');
  prevButton.parent(frame);

  nextButton = createButton('▶');
  nextButton.mousePressed(showNext);
  styleButton(nextButton, 'right');
  nextButton.parent(frame);

  if (windowWidth < 600) {
    textElem.style('font-size', '1rem');
    textElem.style('margin', '12px auto 0 auto');
  }
}


function styleButton(btn, side) {
  btn.style('position', 'absolute');
  btn.style('top', '50%');
  btn.style(side, '10px');
  btn.style('transform', 'translateY(-50%)');
  btn.style('background', 'rgba(0,0,0,0.4)');
  btn.style('border', 'none');
  btn.style('color', 'white');
  btn.style('padding', '10px 15px');
  btn.style('border-radius', '50%');
  btn.style('cursor', 'pointer');
}

function showPrev() {
  currentIndex = (currentIndex - 1 + artworks.length) % artworks.length;
  updateFrame();
}

function showNext() {
  currentIndex = (currentIndex + 1) % artworks.length;
  updateFrame();
}

function updateFrame() {
  const currentItem = artworks[currentIndex];

  // 기존 iframe 제거 (있는 경우)
  const existingIframe = frame.elt.querySelector('iframe');
  if (existingIframe) existingIframe.remove();

  // 비디오일 경우 iframe 생성
  if (currentItem.type === "video") {
    if (imgElem) {
      imgElem.hide();  // 이미지 숨김 (src는 그대로 두기)
    }

    const iframe = document.createElement('iframe');
    iframe.src = currentItem.src;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '10px';
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    frame.elt.appendChild(iframe);

  } else {
    if (!imgElem) {
      imgElem = createImg(currentItem.src);
      imgElem.parent(frame);
      imgElem.style('width', '100%');
      imgElem.style('height', '100%');
      imgElem.style('object-fit', 'cover');
      imgElem.style('border-radius', '10px');
    } else {
      imgElem.show(); 
      imgElem.attribute('src', currentItem.src); // 여기 유지
    }
  }

  textElem.html(currentItem.text); // 이 줄도 그대로 유지
}


function showBlackOverlay() {
  let overlay = createDiv();
  overlay.style('position', 'fixed');
  overlay.style('top', '0'); 
  overlay.style('height', 'calc(100vh - 100px)'); 
  overlay.style('left', '0');
  overlay.style('width', '100vw');
  overlay.style('height', '100vh');
  overlay.style('background-color', 'rgba(0,0,0)');
  overlay.style('z-index', '998');
  overlay.style('display', 'flex');
  overlay.style('flex-wrap', 'wrap');        // 여러 줄로 나열
  overlay.style('justify-content', 'center'); // 중앙 정렬
  overlay.style('align-items', 'center');
  overlay.style('gap', '50px');              // 이미지 사이 여백
  overlay.style('padding', '40px');
  overlay.style('box-sizing', 'border-box');
  overlay.style('overflow-y', 'auto'); //스크롤


  let introText = createDiv("▶ 김영주의 작업은 작동의 주체와 반응하는 객체가 관계적이고 역동적인 과정 속에서 ‘서로 얽힘’을 통해 의미를 갖는 방식으로 전개된다. 그는 인간의 욕망과 가상 존재들을 대치시키며, 마치 서로를 먹고 먹히는 관계처럼 긴장감 있는, 자극적인 상황을 만들어낸다. 데이터 쪼가리로 만든 캐릭터들이 현실의 인간과 접속하기 위해 변수와 분기점을 설계하지만, 이 시도는 매번 그의 욕망과 물리적 조건에 부딪혀 실패하고 망가진다.<br><br>"+
   "<span class='glitch-text' data-text= ▶김영주는 실패의 반복 속에서, 무력한 존재들을 갈망하며 세상에 앞세운다.'>" +
   "▶김영주는 실패의 반복 속에서, 무력한 존재들을 갈망하며 세상에 앞세운다.</span>"
  );

  
  introText.parent(overlay);
  introText.style('position', 'absolute');
  introText.style('top', '5%'); 
  introText.style('left', '50%');
  introText.style('transform', 'translateX(-50%)');
  introText.style('width', '80%');
  introText.style('max-width', '1600px');
  introText.style('margin', '0 auto 60px auto');  
  introText.style('color', 'palegreen');
  introText.style('font-family', 'Courier New, monospace');
  introText.style('font-size', '20px');
  introText.style('line-height', '1.6');





  let imagePaths = [
    "logo1.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
   
  ];


  imagePaths.forEach(path => {
    let img = createImg(path);
    img.parent(overlay);
    img.style('width', 'min(200px, 30vw)');
    img.style('height', 'auto');
    img.style('border-radius', '20px');
    img.style('box-shadow', '0 0 10px rgba(255,255,255,0.3)');
    img.style('cursor', 'pointer');

  img.mousePressed(() => {
    overlay.remove(); 
    showProject(path); // 슬라이드쇼 보여주기
    });
  });

  
  frame.hide();
  gameTextBox.hide();
}

function showProject(logoPath) {
  let data = projectData[logoPath];
  if (!data) return;

  artworks = data.artworks;
  currentIndex = 0;
  updateFrame(); 
  gameTextBox.html(data.description);
  wrapperDiv.show();
  frame.show();
  gameTextBox.show();
  homeButton.show();

  let currentItem = artworks[currentIndex];

  // 조건 분기
  if (logoPath === "logo1.png") {
    if (currentItem.type !== "video") {
      imgElem?.style('width', 'auto');
      imgElem?.style('height', '100%');
      imgElem?.style('right', '100px');
      imgElem?.style('display', 'block');
      imgElem?.style('margin', '30px auto 10px auto');
      imgElem?.style('border-radius', '0px');
    }

    gameTextBox.style('top', '23%');
    

  } else if (logoPath === "logo2.png") {
    gameTextBox.style('top', '30%');
   

  } else if (logoPath === "logo3.png") {
    if (currentItem.type !== "video") {
      imgElem?.style('width', '100%');        
      imgElem?.style('height', '100%');
      imgElem?.style('margin', '40px auto');
      imgElem?.style('display', 'block');
      imgElem?.style('object-fit', 'contain');
      imgElem?.style('border-radius', '0px');
    }
    gameTextBox.style('top', '25%');
    

  } else if (logoPath === "logo4.png") {
    if (currentItem.type !== "video") {
      imgElem?.style('width', '100%');        
      imgElem?.style('height', '100%');
      imgElem?.style('margin', '40px auto');
      imgElem?.style('display', 'block');
      imgElem?.style('object-fit', 'contain');
      imgElem?.style('border-radius', '0px');
    }
    gameTextBox.style('top', '15%');
    
  } else if (logoPath === "logo5.png") {
    
    gameTextBox.style('top', '25%');
    
  } else {
    if (currentItem.type !== "video") {
      imgElem?.style('width', '100%');
      imgElem?.style('height', '100%');
      imgElem?.style('object-fit', 'cover');
      imgElem?.style('margin', '0');
      imgElem?.style('border-radius', '10px');
    }

    gameTextBox.style('top', '15%');
    
  }
}
