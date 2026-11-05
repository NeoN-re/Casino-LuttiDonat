import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blackjack.css';

const SUITS = ['♠', '♥', '♦', '♣'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const createDeck = () => {
  const deck = [];
  for (let suit of SUITS) {
    for (let rank of RANKS) {
      deck.push({ suit, rank });
    }
  }
  return deck.sort(() => Math.random() - 0.5);
};

const getCardValue = (card) => {
  if (['J', 'Q', 'K'].includes(card.rank)) return 10;
  if (card.rank === 'A') return 11;
  return parseInt(card.rank);
};

const calculateScore = (hand) => {
  let score = 0;
  let aces = 0;
  for (let card of hand) {
    score += getCardValue(card);
    if (card.rank === 'A') aces += 1;
  }
  while (score > 21 && aces > 0) {
    score -= 10;
    aces -= 1;
  }
  return score;
};

const Blackjack = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameState, setGameState] = useState('betting'); // betting, playing, dealerTurn, gameOver
  const [message, setMessage] = useState('');
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(100);

  const startGame = () => {
    if (balance < bet) {
      setMessage('Недостаточно средств!');
      return;
    }
    setBalance((prev) => prev - bet);
    const newDeck = createDeck();
    const newPlayerHand = [newDeck.pop(), newDeck.pop()];
    const newDealerHand = [newDeck.pop(), newDeck.pop()];

    setDeck(newDeck);
    setPlayerHand(newPlayerHand);
    setDealerHand(newDealerHand);
    setGameState('playing');
    setMessage('');

    const playerScore = calculateScore(newPlayerHand);
    const dealerScore = calculateScore(newDealerHand);

    if (playerScore === 21) {
      if (dealerScore === 21) {
        setMessage('Ничья (Пуш)! У обоих Блэкджек.');
        setBalance((prev) => prev + bet);
        setGameState('gameOver');
      } else {
        setMessage('Блэкджек! Вы выиграли!');
        setBalance((prev) => prev + bet * 2.5);
        setGameState('gameOver');
      }
    }
  };

  const hit = () => {
    const newDeck = [...deck];
    const newPlayerHand = [...playerHand, newDeck.pop()];
    setDeck(newDeck);
    setPlayerHand(newPlayerHand);

    if (calculateScore(newPlayerHand) > 21) {
      setMessage('Перебор! Вы проиграли.');
      setGameState('gameOver');
    }
  };

  const stand = () => {
    setGameState('dealerTurn');
  };

  useEffect(() => {
    if (gameState === 'dealerTurn') {
      const timer = setTimeout(() => {
        const currentDealerScore = calculateScore(dealerHand);
        const currentPlayerScore = calculateScore(playerHand);

        if (currentDealerScore < 17) {
          const newDeck = [...deck];
          const newDealerHand = [...dealerHand, newDeck.pop()];
          setDeck(newDeck);
          setDealerHand(newDealerHand);
        } else {
          // Дилер закончил набирать
          if (currentDealerScore > 21) {
            setMessage('Дилер перебрал! Вы выиграли!');
            setBalance((prev) => prev + bet * 2);
          } else if (currentDealerScore > currentPlayerScore) {
            setMessage('Дилер выиграл. Вы проиграли.');
          } else if (currentDealerScore < currentPlayerScore) {
            setMessage('Вы выиграли!');
            setBalance((prev) => prev + bet * 2);
          } else {
            setMessage('Ничья (Пуш)!');
            setBalance((prev) => prev + bet);
          }
          setGameState('gameOver');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameState, dealerHand, deck, playerHand, bet]);

  const resetGame = () => {
    setGameState('betting');
    setPlayerHand([]);
    setDealerHand([]);
    setMessage('');
  };

  const renderCard = (card, hidden = false) => {
    const isRed = card.suit === '♥' || card.suit === '♦';
    return (
      <div className={`card ${hidden ? 'card-hidden' : ''} ${isRed ? 'red' : ''}`}>
        {!hidden && (
          <>
            <span className="card-rank">{card.rank}</span>
            <span className="card-suit">{card.suit}</span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="blackjack-container">
      <div className="blackjack-header">
        <Link to="/" className="btn btn-login" style={{ textDecoration: 'none' }}>
          ← Назад в лобби
        </Link>
        <div className="balance-display">
          Баланс: <span>{balance} ₽</span>
        </div>
      </div>

      <div className="blackjack-table">
        {/* Дилер */}
        <div className="hand-container">
          <h3>Дилер: {gameState === 'playing' ? '?' : calculateScore(dealerHand)}</h3>
          <div className="cards-row">
            {dealerHand.map((card, i) => renderCard(card, i === 1 && gameState === 'playing'))}
          </div>
        </div>

        {/* Сообщение */}
        <div className="message-area">
          {message && <h2 className="game-message">{message}</h2>}
        </div>

        {/* Игрок */}
        <div className="hand-container">
          <div className="cards-row">
            {playerHand.map((card, i) => renderCard(card))}
          </div>
          <h3>Вы: {calculateScore(playerHand)}</h3>
        </div>
      </div>

      {/* Управление */}
      <div className="blackjack-controls">
        {gameState === 'betting' && (
          <div className="bet-controls">
            <label>Ставка: </label>
            <input
              type="number"
              value={bet}
              onChange={(e) => setBet(Number(e.target.value))}
              min="10"
              max={balance}
              step="10"
            />
            <button className="btn btn-register" onClick={startGame}>
              Раздать
            </button>
          </div>
        )}

        {gameState === 'playing' && (
          <div className="action-controls">
            <button className="btn btn-register" onClick={hit}>Взять (Hit)</button>
            <button className="btn btn-login" onClick={stand}>Хватит (Stand)</button>
          </div>
        )}

        {gameState === 'gameOver' && (
          <button className="btn btn-register" onClick={resetGame}>
            Играть снова
          </button>
        )}
      </div>
    </div>
  );
};

export default Blackjack;