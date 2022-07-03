const BASE_URL = 'https://digimon-api.vercel.app/api/digimon/level/';
const CARDS_URL = 'https://digimoncard.io/api-public/search.php?n=Agumon&type=digimon&sort=name&sortdirection=desc&series=Digimon%20Card%20Game';

const getDigimonByLevel = async(levelStatus, imgDigimon) => {
    const DATA = await fetch(BASE_URL + levelStatus);
    const DATA_JSON = await DATA.json();
    
    for(let i = 0; i < DATA_JSON.length; i++){   
        digimonContainer = document.createElement('div');
        textContainer = document.createElement('div');
        newImg = document.createElement('img');
        nameDigimon = document.createElement('label');
        

        digimonContainer.className = 'digimon-container';
        textContainer.className = 'text-container';

        newImg.src = DATA_JSON[i].img;
        nameDigimon.textContent = DATA_JSON[i].name;
        imgDigimon.appendChild(digimonContainer);
        digimonContainer.appendChild(newImg)
        digimonContainer.appendChild(textContainer);
        textContainer.appendChild(nameDigimon);        
    }   
    
    getDigimonCards(DATA_JSON[0].name)
}

const getCards = async() => {
    /* const CARDS_DATA = await fetch(CARDS_URL);
    const ARRAY_CARDS_DATA_JSON = await CARDS_DATA.json();
    const OBJECT_CARDS_DATA_JSON = await ARRAY_CARDS_DATA_JSON; */
    

    try{        
       /*  const retorno = ARRAY_CARDS_DATA_JSON[Math.floor(Math.random() * (ARRAY_CARDS_DATA_JSON).length)]; */
        //return retorno.image_url;       
        return './images/group.jpg'
    }
    catch(e){
        console.log(e);
    }

   /*  for(let i = 0; i < CARDS_DATA_JSON.length; i++){
        const item = document.createElement('div');
        item.className = 'item';
        const imgCarousel = document.createElement('img');
        imgCarousel.setAttribute('alt', CARDS_DATA_JSON[i].name);
        imgCarousel.setAttribute('src', CARDS_DATA_JSON[i].image_url);
        imgCarousel.className = 'box-filmes';
        
        
        item.appendChild(imgCarousel);
        MY_CAROUSEL.appendChild(item)
        //ownCarousel.appendChild(item);
        //console.log(item)
    } */
}

const getDigimonCards = async(apiReturn) => {
    const digimonContainer = document.getElementsByClassName('digimon-container');
    const CARDS_CONTENT = document.getElementsByClassName('cards-content');
    const ahhh = document.getElementById('in-training');        
    const cards = document.getElementsByClassName('cards');  

    const MY_CAROUSEL = document.createElement('div');
    const closeButton = document.createElement('button');
    const closeButtonText = document.createElement('i');
    const informationContainer = document.createElement('div');
    const mainCarouselDiv = document.createElement('div');
    const nomeDigimonDiv = document.createElement('div');
    const colorDigimonDiv = document.createElement('div');
    const digimonTypeDiv = document.createElement('div');   
    const cardRarityDiv = document.createElement('div');
    const digimonLevelDiv = document.createElement('div');
    const nomeDigimon = document.createElement('p');
    const colorDigimon = document.createElement('p');
    const digimonType = document.createElement('p');
    const cardRarity = document.createElement('p');
    const digimonLevel = document.createElement('p');
    const nomeDigimonContent = document.createElement('p');
    const colorDigimonContent = document.createElement('p');
    const digimonTypeContent = document.createElement('p');
    const cardRarityContent = document.createElement('p');
    const digimonLevelContent = document.createElement('p');
    const cardContainer = document.createElement('div');
    const item = document.createElement('div');
    const imgCarousel = document.createElement('img');
    const buttonChangeCard = document.createElement('button');
    const buttonChangeCardContent = document.createElement('i');

    closeButton.className = 'close-button';
    cardContainer.classList = 'card-container';
    item.className = 'item';
    imgCarousel.className = 'box-filmes';
    buttonChangeCard.className = 'button-change-card';
    buttonChangeCardContent.classList.add('fa-solid', 'fa-arrows-rotate')
    closeButtonText.classList.add('fa-solid', 'fa-xmark');
    nomeDigimonDiv.classList.add('nome-card-div', 'information-container');   
    colorDigimonDiv.classList.add('color-digimon-div', 'information-container');    
    digimonTypeDiv.classList.add('digimon-type-div', 'information-container');   
    cardRarityDiv.classList.add('card-rarity', 'information-container');   
    digimonLevelDiv.classList.add('digimon-level', 'information-container');
    nomeDigimon.classList.add('nome-card', 'information-label')    
    colorDigimon.classList.add('color-digimon', 'information-label');    
    digimonType.classList.add('digimon-type', 'information-label');   
    cardRarity.classList.add('card-rarity', 'information-label');    
    digimonLevel.classList.add('digimon-level', 'information-label');   
    nomeDigimonContent.classList.add('nome-card-content', 'information-content');    
    colorDigimonContent.classList.add('color-digimon-content', 'information-content');   
    digimonTypeContent.classList.add('digimon-type-content', 'information-content');   
    cardRarityContent.classList.add('card-rarity-content', 'information-content');    
    digimonLevelContent.classList.add('digimon-level-content', 'information-content');

    MY_CAROUSEL.setAttribute('id', 'my-carousel');        
    //closeButtonText.textContent = 'close';            
    informationContainer.setAttribute('id','information-container');   
    mainCarouselDiv.setAttribute('id', 'main-carousel-div');    

    imgCarousel.src = await getCards();
                      
    nomeDigimon.textContent = 'Nome';
    colorDigimon.textContent = 'Cor';
    digimonType.textContent = 'Tipo';
    cardRarity.textContent = 'Raridade';
    digimonLevel.textContent = 'Nível';

    nomeDigimonContent.textContent = apiReturn;
    colorDigimonContent.textContent = apiReturn;
    digimonTypeContent.textContent = apiReturn;
    cardRarityContent.textContent = apiReturn;
    digimonLevelContent.textContent = '3'

    //imgCarousel.setAttribute('alt', CARDS_DATA_JSON[i].name);        
    
    item.appendChild(imgCarousel);
    cardContainer.appendChild(item);
    cardContainer.appendChild(buttonChangeCard);
    buttonChangeCard.appendChild(buttonChangeCardContent);
    mainCarouselDiv.appendChild(cardContainer);



    for(let i = 0; i < CARDS_CONTENT.length; i++){
        for(let i = 0; i < digimonContainer.length; i++){
            digimonContainer[i].onclick = () => {                                                                                    
                closeButton.appendChild(closeButtonText)
                MY_CAROUSEL.appendChild(closeButton);
                MY_CAROUSEL.appendChild(mainCarouselDiv);
                mainCarouselDiv.appendChild(informationContainer);

                informationContainer.appendChild(nomeDigimonDiv);
                nomeDigimonDiv.appendChild(nomeDigimon)
                nomeDigimonDiv.appendChild(nomeDigimonContent)

                informationContainer.appendChild(colorDigimonDiv);
                colorDigimonDiv.appendChild(colorDigimon);
                colorDigimonDiv.appendChild(colorDigimonContent);
                    
                informationContainer.appendChild(digimonTypeDiv);
                digimonTypeDiv.appendChild(digimonType);
                digimonTypeDiv.appendChild(digimonTypeContent);

                informationContainer.appendChild(cardRarityDiv);
                cardRarityDiv.appendChild(cardRarity);
                cardRarityDiv.appendChild(cardRarityContent);

                informationContainer.appendChild(digimonLevelDiv);
                digimonLevelDiv.appendChild(digimonLevel);
                digimonLevelDiv.appendChild(digimonLevelContent);
                              
                if(digimonContainer[i].parentElement.id === 'in-training'){
                    CARDS_CONTENT[0].appendChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'rookie'){
                    CARDS_CONTENT[1].appendChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'fresh'){
                    CARDS_CONTENT[2].appendChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'ultimate'){
                    CARDS_CONTENT[3].appendChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'champion'){
                    CARDS_CONTENT[4].appendChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'mega'){
                    CARDS_CONTENT[5].appendChild(MY_CAROUSEL);
                }
                    
                for(let i = 0; i < cards.length; i++){
                   // console.log(digimonContainer[i].parentElement.id)
                    if(digimonContainer[i].parentElement.id === 'in-training'){
                        cards[0].style.backgroundColor = 'rgba(0,0,0,0.5)';
                    }
                    else if(digimonContainer[i].parentElement.id === 'rookie'){
                        cards[1].style.backgroundColor = 'rgba(0,0,0,0.5)';
                    }
                    else if(digimonContainer[i].parentElement.id === 'fresh'){
                        cards[2].style.backgroundColor = 'rgba(0,0,0,0.5)';
                    }
                    else if(digimonContainer[i].parentElement.id === 'ultimate'){
                        cards[3].style.backgroundColor = 'rgba(0,0,0,0.5)';
                    }
                    else if(digimonContainer[i].parentElement.id === 'champion'){
                        cards[4].style.backgroundColor = 'rgba(0,0,0,0.5)';
                    }
                    else if(digimonContainer[i].parentElement.id === 'mega'){
                        cards[5].style.backgroundColor = 'rgba(0,0,0,0.5)';
                    }                    
                }                
            }        
        }
    }

    closeButton.onclick = () =>{        
        for(let i = 0; i < (CARDS_CONTENT).length; i++){            
            for(let i = 0; i < digimonContainer.length; i++){     
                //console.log(digimonContainer[i].parentElement.id)                                               
                if(digimonContainer[i].parentElement.id === 'in-training'){
                    CARDS_CONTENT[0].removeChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'rookie'){
                    CARDS_CONTENT[1].removeChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'fresh'){
                    CARDS_CONTENT[2].removeChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'ultimate'){
                    CARDS_CONTENT[3].removeChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'champion'){
                    CARDS_CONTENT[4].removeChild(MY_CAROUSEL);
                }
                else if(digimonContainer[i].parentElement.id === 'mega'){
                    CARDS_CONTENT[5].removeChild(MY_CAROUSEL);
                }
            }
        }

        //ahhh.removeChild(MY_CAROUSEL)         
        for(let i = 0; i < cards.length; i++){
            for(let i = 0; i < digimonContainer.length; i++){  
                if(digimonContainer[i].parentElement.id === 'in-training'){
                    cards[0].style.backgroundColor = 'rgba(176,224,230,1)';
                }
                else if(digimonContainer[i].parentElement.id === 'rookie'){
                    cards[1].style.backgroundColor = 'rgba(0,255,127,1)';
                }
                else if(digimonContainer[i].parentElement.id === 'fresh'){
                    cards[2].style.backgroundColor = 'rgba(255,222,173,1)';
                }
                else if(digimonContainer[i].parentElement.id === 'ultimate'){
                    cards[3].style.backgroundColor = 'rgba(255,215,0,1)';
                }
                else if(digimonContainer[i].parentElement.id === 'champion'){
                    cards[4].style.backgroundColor = 'rgba(255,140,0,1)';
                }
                else if(digimonContainer[i].parentElement.id === 'mega'){
                    cards[5].style.backgroundColor = 'rgba(255,69,0,1)';
                }     
                //cards[i].style.backgroundColor = 'rgba(176,224,230,1)';
            }
        }
    };      
}

const showDigimons = async() => {    
    const levels = [
        'intraining',
        'rookie',
        'fresh',
        'ultimate',
        'champion',
        'mega'
    ]
    
    const container = document.getElementById('container');
    const img = document.createElement('img');

    const inTraining = document.getElementById('in-training');
    const rookie = document.getElementById('rookie');
    const fresh = document.getElementById('fresh');
    const ultimate = document.getElementById('ultimate');    
    const champion = document.getElementById('champion');    
    const mega = document.getElementById('mega');        

        await getDigimonByLevel(levels[0], inTraining);
        await getDigimonByLevel(levels[1], rookie);
        await getDigimonByLevel(levels[2], fresh);
        await getDigimonByLevel(levels[3], ultimate);
        await getDigimonByLevel(levels[4], champion);
        await getDigimonByLevel(levels[5], mega);
}

showDigimons();