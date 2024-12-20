const quotes = [
    "When your circle gets smaller, it means you’re winning.",
    "Don’t get carried away, even the winners are dragged back to the lobby.",
    "Maturity is realising that 1 medkit is better than 10 bandages.",
    "Gliders help you at your highest, and leave you at your lowest.",
    "Don’t treat her like a rare item if she treats you like a gray pistol.",
    "If your enemies can make edits, then bruh! It was never your build to begin with!",
    "If she doesn’t accept your gray pump, why take her to the upgrade bench?",
    "Remember, people will push you when your health is Low.",
    "Maturity is when you realise, that the walls won’t protect you forever. You’ve got to let it go at some point!",
    "You can change the skin from the outside, but it’s the same player inside.",
    "No matter how costly your skins are, everyone can get a victory Royale.",
    "Just because the door is closed, doesn’t mean no one has opened it before.",
    "They spectate only when you’re winning.",
    "If the door is open, it’s already been looted",
    "When the circle get smaller, doesn’t mean you’re lonely, it means you’re winning!",
    "Remember, not even the strongest shield can protect you from the storm.",
    "Life is like Fortnite, when you’re progressing, the circle will become smaller.",
    "The more you camp, the worst you get.",
    "Don’t spend too much time looting. You might not even get the chance to use them.",
    "Healing takes time, but you’ll get back to full health eventually.",
    "Sometimes, you have to lose a little shield to gain a lot of ground.",
    "A full inventory doesn’t matter if you don’t know when to use it.",
    "The ones who watch are often those who didn’t make it as far as you.",
    "Sometimes, the rarest things aren’t always the most useful.",
    "A steady aim is better than a hundred missed shots.",
    "Not everyone who lands with you is there to help — choose wisely.",
    "The real reward isn’t the loot; it’s the lessons learned in every game.",
    "Just because others have already looted doesn’t mean there’s nothing left for you.",
    "Every loss teaches you something the wins can’t.",
    "Sometimes, the best loot is found in the most unexpected places."
];

let usedQuotes = [];
let isMusicPlaying = false;
const audio = new Audio('assets/radio-sound.mp3');
audio.volume = 0.5;
const backgroundMusic = new Audio('assets/background-music.mp3');
backgroundMusic.loop = true;
backgroundMusic.pause();
document.getElementById('music-icon').src = 'assets/no-music-icon.png';

const wallpapers = [
    'assets/wallpaper-1.jpg',
    'assets/wallpaper-2.jpg',
    'assets/wallpaper-3.jpg'
];
let lastWallpaper = '';

document.getElementById('steve').addEventListener('click', () => {
    audio.play();

    let quote;
    do {
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (usedQuotes.includes(quote) && usedQuotes.length < quotes.length);

    if (usedQuotes.length >= quotes.length) {
        usedQuotes = [];
    }

    usedQuotes.push(quote);
    document.getElementById('quote').innerText = quote;
    document.querySelector('.bubble').style.display = 'block';
    document.getElementById('instruction').style.display = 'none';

    let randomWallpaper;
    do {
        randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    } while (randomWallpaper === lastWallpaper);

    lastWallpaper = randomWallpaper;
    document.body.style.backgroundImage = `url(${randomWallpaper})`;
});

document.getElementById('music-toggle').addEventListener('click', () => {
    const musicIcon = document.getElementById('music-icon');
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicIcon.src = 'assets/no-music-icon.png';
    } else {
        backgroundMusic.play();
        musicIcon.src = 'assets/music-icon.png';
    }
    isMusicPlaying = !isMusicPlaying;
});
