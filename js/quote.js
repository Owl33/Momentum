
    const qutoes =[
        {
            qutoe : "'잘 살아가는 것과 잘 죽어가는 것은 같은 것이다.'",
            author : "마하트마 간디",
        },
        {
            qutoe : "'생각하는 대로 된다.'",
            author : "마하트마 간디",
        },
        {
            qutoe : "'쉽게 빠져나가는 방법은 없다.'",
            author : "오프라 윈프리",
        },
        {
            qutoe : "'잘 살아가는 당신의 노력을 존중하며, 당신 자신을 존중하라.'",
            author : "클린트 이스트우드",
        },
        {
            qutoe : "'운은 계획에서 비롯된다.'",
            author : "브렌치 리키",
        }
    ];

    const quotespan = document.querySelector('#quote>div:nth-child(1)');
    const authorspan = document.querySelector('#quote>div:nth-child(2)');

    const random = Math.floor(Math.random()*qutoes.length);
    const today = qutoes[random];

    quotespan.innerText = today.qutoe;
    authorspan.innerText = today.author;
    
