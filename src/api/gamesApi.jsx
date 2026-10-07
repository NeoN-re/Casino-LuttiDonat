const gamesData = [
  {
    id: 1,
    img: '/games/zeusvshades.jpg',
    title: 'Zeus vs Hades',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20godsofwar&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
  {
    id: 2,
    img: '/games/sugarrush.jpg',
    title: 'Sugar Rush',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&cur=RUB&gameSymbol=vs20sugarrush&jurisdiction=99',
  },
  {
    id: 3,
    img: '/games/gemsbonanza.jpg',
    title: 'Gems Bonanza',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&cur=RUB&gameSymbol=vs20goldfever&jurisdiction=99',
  },
  {
    id: 4,
    img: '/games/sweetbonanza.jpg',
    title: 'Sweet Bonanza',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitsw&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
  {
    id: 5,
    img: '/games/sweetbonanza2500.jpg',
    title: 'Sweet Bonanza 2500',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitswx&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
  {
    id: 6,
    img: '/games/thedoghouse.jpg',
    title: 'The Dog House Megaways',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&cur=RUB&gameSymbol=vs20doghouse&jurisdiction=99',
  },
]

export const fetchGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gamesData)
    }, 1200)
  })
}