const gamesData = [
  {
    id: 1,
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
    demo: 'https://chicken-road.inout.games/api/modes/game?gameMode=chicken-road&operatorId=ee2013ed-e1f0-4d6e-97d2-f36619e2eb52&authToken=a2018b32-eb32-46b6-921d-439ed744743a&currency=USD&lang=en&theme=&gameCustomizationId=&lobbyUrl=',
  },
  {
    id: 11,
    img: `${import.meta.env.BASE_URL}/games/ChickenRoadVegasIO.jpg`, 
    title: 'Chicken Road Vegas IO',
    demo: 'https://chicken-road-vegas.inout.games/api/modes/game?gameMode=chicken-road-vegas&operatorId=ee2013ed-e1f0-4d6e-97d2-f36619e2eb52&authToken=f4554bef-d8f2-493e-bc9f-b6344b4925bc&currency=USD&lang=en&theme=&gameCustomizationId=&lobbyUrl=',
  },
  {
    id: 12,
    img: `${import.meta.env.BASE_URL}/games/MinesOR.jpg`, 
    title: 'MinesOR',
    demo: 'https://api.mellstr.games/game/MinesOR/DEMO?api_exit=/',
  },
  {
    id: 13,
    img: `${import.meta.env.BASE_URL}/games/BlackjackOR.jpg`, 
    title: 'BlackjackOR',
    demo: 'https://api.mellstr.games/game/BlackjackSurrenderPT/DEMO?api_exit=/',
  },
  {
    id: 14,
    img: `${import.meta.env.BASE_URL}/games/PenguSportIO.jpg`, 
    title: 'PenguSportIO',
    demo: 'https://pengu-sport.inout.games/api/modes/game?gameMode=pengu-sport&operatorId=ee2013ed-e1f0-4d6e-97d2-f36619e2eb52&authToken=d591cf0d-bf72-47cd-8c13-560d979c762e&currency=USD&lang=en&theme=&gameCustomizationId=&lobbyUrl=',
  },
  {
    id: 15,
    img: `${import.meta.env.BASE_URL}/games/vortexgame.jpg`, 
    title: 'Vortex',
    demo: 'https://hub.turbogames.io/api/integrations/globonet?game_id=vortex&token=&lang=en&home=https://slotcatalog.com/en&channel=desktop&demo=1',
  },
  {
    id: 16,
    img: `${import.meta.env.BASE_URL}/games/vortexgame2.jpg`, 
    title: 'Vortex 2',
    demo: 'https://vortex2.turbogames.io',
  },
  {
    id: 17,
    img: `${import.meta.env.BASE_URL}/games/vortexgamefootball.jpg`, 
    title: 'Vortex Power Kick',
    demo: 'https://vortexpowerkick.turbogames.io',
  },
  {
    id: 18,
    img: `${import.meta.env.BASE_URL}/games/blackjack-local.jpg`,
    title: 'Блэкджек, Blackjack, 21, очко',
    demo: null,
    isLocal: true,
  },
]
  

export const fetchGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gamesData)
    }, 1200)
  })
}
