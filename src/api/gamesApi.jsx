const gamesData = [
  {
    id: 1,
    // Обратите внимание на обратные кавычки ` ` вместо одинарных ' '
    img: `${import.meta.env.BASE_URL}/games/zeusvshades.jpg`, 
    title: 'Zeus vs Hades',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20godsofwar&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
  {
    id: 2,
    img: `${import.meta.env.BASE_URL}/games/sugarrush.jpg`, 
    title: 'Sugar Rush',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&cur=RUB&gameSymbol=vs20sugarrush&jurisdiction=99',
  },
  {
    id: 3,
    img: `${import.meta.env.BASE_URL}/games/gemsbonanza.jpg`, 
    title: 'Gems Bonanza',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&cur=RUB&gameSymbol=vs20goldfever&jurisdiction=99',
  },
  {
    id: 4,
    img: `${import.meta.env.BASE_URL}/games/sweetbonanza.jpg`, 
    title: 'Sweet Bonanza',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitsw&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
  {
    id: 5,
    img: `${import.meta.env.BASE_URL}/games/sweetbonanza2500.jpg`, 
    title: 'Sweet Bonanza 2500',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?gameSymbol=vs20fruitswx&websiteUrl=https://demogamesfree.pragmaticplay.net&jurisdiction=99&lang=ru&cur=RUB',
  },
  {
    id: 6,
    img: `${import.meta.env.BASE_URL}/games/thedoghouse.jpg`, 
    title: 'The Dog House Megaways',
    demo: 'https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?lang=ru&cur=RUB&gameSymbol=vs20doghouse&jurisdiction=99',
  },
  {
    id: 7,
    img: `${import.meta.env.BASE_URL}/games/aviamasters.jpg`, 
    title: 'Aviamasters',
    demo: 'https://demo.bgaming-network.com/play/Aviamasters/FUN?server=demo',
  },
  {
    id: 8,
    img: `${import.meta.env.BASE_URL}/games/fallingpickaxe.jpg`, 
    title: 'Falling Pickaxe',
    demo: 'https://games-ru.pixmove.co/falling_pickaxe/?token=Gr2PPUJ9aJlMSOz9nl7lhDL7m',
  },
  {
    id: 9,
    img: `${import.meta.env.BASE_URL}/games/aviatorSP.jpg`, 
    title: 'AviatorSP',
    demo: 'https://api.mellstr.games/game/AviatorSP/DEMO?api_exit=/',
  },
  {
    id: 10,
    img: `${import.meta.env.BASE_URL}/games/ChickenRoadBonusIO.jpg`, 
    title: 'Chicken Road Bonus IO',
    demo: 'https://api.mellstr.games/game/AviatorSP/DEMO?api_exit=/',
  },
  {
    id: 11,
    img: `${import.meta.env.BASE_URL}/games/ChickenRoadVegasIO.jpg`, 
    title: 'Chicken Road Vegas IO',
    demo: 'https://api.mellstr.games/game/AviatorSP/DEMO?api_exit=/',
  },
  {
    id: 12,
    img: `${import.meta.env.BASE_URL}/games/MinesOR.jpg`, 
    title: 'MinesOR',
    demo: 'https://api.mellstr.games/game/AviatorSP/DEMO?api_exit=/',
  },
  {
    id: 13,
    img: `${import.meta.env.BASE_URL}/games/BlackjackOR.jpg`, 
    title: 'BlackjackOR',
    demo: 'https://api.mellstr.games/game/BlackjackSurrenderPT/DEMO?api_exit=/',
  },
]

export const fetchGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gamesData)
    }, 1200)
  })
}
