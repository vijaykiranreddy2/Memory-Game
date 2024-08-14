let cardsArray = [
        {
            'name': 'CSS',
            'img': 'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png',
        },
        {
            'name': 'HTML',
            'img': 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png',
        },
        {
            'name': 'jQuery',
            'img': 'https://cdn.iconscout.com/icon/free/png-256/free-jquery-8-1175153.png',
        },
        {
            'name': 'JS',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
        },
        {
            'name': 'Node',
            'img': 'https://seeklogo.com/images/N/nodejs-logo-065257DE24-seeklogo.com.png',
        },
        {
            'name': 'Python',
            'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
        }
    ];


    const parentDiv = document.querySelector('#card-section');

    // step 2 to duplicate each card
    const gameCard = cardsArray.concat(cardsArray)
    console.log(gameCard)

    let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


    let clickCount = 0;
    let firstCard = "";
    let secondCard = "";


    // styling the match card
    const card_matches = () => {
        let card_selected = document.querySelectorAll('.card_selected');

        card_selected.forEach((curElem) => {
            curElem.classList.add('card_match')
        })
    }


    // step 7

    const resetGame = () => {
        firstCard = "";
        secondCard = "";
        clickCount = 0;

        let card_selected = document.querySelectorAll('.card_selected');

        card_selected.forEach((curElem) => {
            curElem.classList.remove('card_selected')
        })

    }

    // step 4
    parentDiv.addEventListener('click', (event) => {
        let curCard = event.target;

        if(curCard.id === "card-section"){return false }

        clickCount ++;

        if(clickCount < 3){

            if(clickCount === 1){
                firstCard = curCard.parentNode.dataset.name;
                curCard.parentNode.classList.add('card_selected');
            }else{
                secondCard = curCard.parentNode.dataset.name;
                curCard.parentNode.classList.add('card_selected');
            }

            if(firstCard !== "" && secondCard !== ""){
                if(firstCard === secondCard){
                    // curCard.classList.add('card_match')
                    setTimeout(() => {
                        card_matches()
                        resetGame()
                    }, 1000)

                }else{
                    setTimeout(() => {
                        resetGame()
                    }, 1000)
                }
            }

        }

    })


    // step 1 to add the card
    for(let i=0; i<shuffledChild.length; i++){

        const childDiv = document.createElement('div')
        childDiv.classList.add('card')
        childDiv.dataset.name = shuffledChild[i].name;
        // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

        const front_div = document.createElement('div');
        front_div.classList.add('front-card')

        const back_div = document.createElement('div');
        back_div.classList.add('back-card')

        back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

        parentDiv.appendChild(childDiv)

        childDiv.appendChild(front_div)
        childDiv.appendChild(back_div)
    }
