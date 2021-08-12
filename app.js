const socialmedia = ['facebook','twitter','instagram','youtube'];

const main = document.querySelector('main');
const socialMediaBox = document.createElement('div');
socialMediaBox.className = 'socialMedia-Container';



socialmedia.forEach(e =>{
    let card = document.createElement('div');
    card.classList.add('card');
    let box = document.createElement('div');
    box.classList.add(`box`)
    box.classList.add(`${e}-box`);
    card.classList.add(`${e}-card`);

    let imgIcon = document.createElement('img');
    imgIcon.src=`images/icon-${e}.svg`;
    imgIcon.alt=`${e} icon`;

    let userId = document.createElement('p');

    let numbers = document.createElement('h3');
    numbers.classList.add('numbers');

    let follower = document.createElement('p');
    follower.classList.add('follower');
    
    let icon = document.createElement('img');
    icon.classList.add('icon');

    let today =document.createElement('p');

    if(e === 'facebook' || e === 'twitter') {
        userId.innerHTML = '@nathanf';
        icon.src='images/icon-up.svg';
        icon.classList.add('green');
        follower.innerHTML = 'FOLLOWERS';
        follower.style.borderImageSlice
        if(e=== 'facebook'){
            numbers.innerHTML = '1987';
            today.innerHTML='12 Today';
            
        }else{
            numbers.innerHTML = '1044';
            today.innerHTML = '99 Today';
            
        }
    }else if(e === 'instagram'){
        userId.innerHTML = '@realnathanf';
        numbers.innerHTML ='11k';
        icon.src='images/icon-up.svg';
        icon.classList.add('green');
        today.innerHTML='1099 Today';
        follower.innerHTML = 'FOLLOWERS';
    }else if(e === 'youtube'){
        userId.innerHTML = 'Nathan F.';
        numbers.innerHTML = '8239';
        icon.src='images/icon-down.svg';
        icon.classList.add('red');
        today.innerHTML='144 Today';
        follower.innerHTML = 'SUBSCRIBERS';
        
    }
    let userInfo =document.createElement('div');
    userInfo.classList.add('userInfo');
    userInfo.appendChild(imgIcon);
    userInfo.appendChild(userId);
    
    let userFollower = document.createElement('div');
    userFollower.classList.add('userFollower');
    userFollower.appendChild(numbers);
    userFollower.appendChild(follower);

    let status = document.createElement('div')
    status.classList.add('status');
    status.appendChild(icon);
    status.appendChild(today);

    box.appendChild(userInfo);
    box.appendChild(userFollower);
    box.appendChild(status);
    card.appendChild(box);
    
    socialMediaBox.appendChild(card);

});
main.appendChild(socialMediaBox);
socialmedia.forEach(e =>{
    let classCard = document.querySelector(`.${e}-card`);
    let classBox = document.querySelector(`.${e}-box`)
    if(e === `facebook`){
        // console.log(classBox);
        classCard.style.borderTop = `3px solid var(--facebook)`;
    }else if(e === `twitter`){
        classCard.style.borderTop = `3px solid var(--twitter)`;
    }else if(e === `instagram`){
        classBox.style.borderTop = `3px solid`;
        classBox.style.borderImageSlice = `1`;
        classBox.style.borderImageSource = `var(--instagram)`;
    }else if(e === `youtube`){
        classCard.style.borderTop = `3px solid var(--youTube)`;
    }
})
