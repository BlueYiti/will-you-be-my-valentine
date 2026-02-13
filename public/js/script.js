const answers_no = [
    "No",
    "Are you sure?",
    "Are you really sure??",
    "Are you really realy sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold?",
    "Maybe we can talk about it?",
    "I am not going to ask again!",
    "Ok now this is hurting my feelings!",
    "You are now just being mean!",
    "Why are you doing this to me?",
    "Please give me a chance!",
    "I am begging you to stop!",
    "Ok, Let's just start over.."
];

const noGifs = [
    "public/images/no1.gif",
    "public/images/no2.gif",
    "public/images/no3.gif",
    "public/images/no4.gif"
];

let lastGifIndex = -1;
let gifIndex = 0;

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');

let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    const banner = document.getElementById('banner');

    // Random GIF but not same as previous
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * noGifs.length);
    } while (randomIndex === lastGifIndex);

    lastGifIndex = randomIndex;

    banner.src = noGifs[randomIndex];
    refreshBanner();

    clicks++;

    const sizes = [40, 50, 30, 35, 45];
    size += sizes[Math.floor(Math.random() * sizes.length)];

    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;

    if (i < answers_no.length - 1) {
        no_button.innerHTML = answers_no[i];
        i++;
    } else {
        alert(answers_no[i]);
        i = 1;
        no_button.innerHTML = answers_no[0];
        yes_button.innerHTML = "<p>Yes</p>";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    const banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();

    document.querySelector('.buttons').style.display = "none";
    document.querySelector('.message').style.display = "block";
});

function refreshBanner() {
    const banner = document.getElementById('banner');
    const src = banner.src;
    banner.src = '';
    banner.src = src;
}
