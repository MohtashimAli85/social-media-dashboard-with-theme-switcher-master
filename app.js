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
    icon.alt='icon';
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
});

class overView{
    constructor(name,title,value,flag){
        this.name=name;
        this.title = title;
        this.value = value;
        this.flag=flag;
    }
}

const facebookPageViews = new overView('facebook','Page Views','87','3%');
const facebookLikes = new overView('facebook','Likes','52','2%');

const instagramLikes = new overView('instagram','Likes','5462','2257%');
const instagramViews = new overView('instagram','Profile Views','52k','1375%');

const twitterRetweets = new overView('twitter','Retweets','117','303%');
const twitterLikes = new overView('twitter','Likes','507','553%');

const youtubeLikes = new overView('youtube','Likes','107','19%');
const youtubeViews = new overView('youtube','Total Views','1407','12%');

const socialObjects = [facebookPageViews,facebookLikes, instagramLikes,instagramViews,twitterRetweets,
    twitterLikes,youtubeLikes,youtubeViews];
const ov = document.createElement('h5');
ov.innerHTML = 'Overview - Today';
ov.className = 'overView';
main.appendChild(ov);
let overViewSection = document.createElement('div');
    overViewSection.className = `overViewSection`;
socialObjects.forEach(e =>{
    
   let card = document.createElement('div');
   card.classList.add('card');
   let rowOne = document.createElement('div');
   rowOne.classList.add('row');
   let title = document.createElement('p');
   title.innerHTML = e.title;
   let img = document.createElement('img');
   img.src=`images/icon-${e.name}.svg`;
   img.alt= 'icon';
   rowOne.appendChild(title); rowOne.appendChild(img);

   let rowTwo = document.createElement('div');
   rowTwo.classList.add('row');
   let numbers = document.createElement('h5');
   numbers.innerHTML = e.value;
   let icon = document.createElement('img');
    icon.classList.add('icon');
    let flag =document.createElement('p');
    if(e.title === 'Likes' && e.name === 'facebook'){
        icon.src='images/icon-down.svg';
        flag.className = 'red';
    }else if(e.name === 'youtube'){
        icon.src='images/icon-down.svg';
        flag.className = 'red';
    }else{
        icon.src='images/icon-up.svg';
    }
    icon.alt = 'icon';
    flag.innerHTML = e.flag;
    let status = document.createElement('div');
    status.classList.add('status');
    status.appendChild(icon); status.appendChild(flag);

    rowTwo.appendChild(numbers); rowTwo.appendChild(status);

    card.appendChild(rowOne); card.appendChild(rowTwo);

    overViewSection.appendChild(card);


});
main.appendChild(overViewSection);

const body = document.querySelector('body');
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click',e =>{
    body.classList.toggle('dark');
    console.log('here');
});

