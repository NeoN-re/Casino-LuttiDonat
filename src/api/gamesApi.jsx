const gamesData = [
  {
    id: 1,
    img: '/games/zeusvshades.jpg',
    title: 'Zeus vs Hades',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20godsofwar&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
  {
    id: 2,
    img: '/games/junglevolcano.jpg',
    title: 'Jungle Volcano',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympgate&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
  {
    id: 3,
    img: '/games/mummyland.jpg',
    title: 'Mummyland Treasures',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympgate&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
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
    img: '/games/wildbounty.jpg',
    title: 'Wild Bounty Showdown',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20olympgate&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
]

export const fetchGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gamesData)
    }, 1200)
  })
}