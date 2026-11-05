import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './Mines.css';

const Mines = () => {
  const { profile, updateBalance } = useAuth();
  
  const [bet, setBet] = useState(100);
  const [minesCount, setMinesCount] = useState(3);
  const [gameState, setGameState] = useState('betting'); // betting, playing, gameOver
  const [board, setBoard] = useState([]);
  const [revealed, setRevealed] = useState([]);
  const [message, setMessage] = useState('');
  const [multiplier, setMultiplier] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!profile) return <div style={{ color: 'white', padding: 20 }}>Загрузка профиля...</div>;

  const currentBalance = profile.balance || 0;

  // Функция для расчета множителя (чем больше мин, тем выше риск и выигрыш)
  const calculateMultiplier = (openedSafeCells) => {
    if (openedSafeCells === 0) return 1;
    
    let mult = 1;
    const totalCells = 25;
    // Формула для честного множителя (упрощенная, с комиссией казино ~3%)
    for (let i = 0; i < openedSafeCells; i++) {
      const remainingCells = totalCells - i;
      const remainingSafe = totalCells - minesCount - i;
      mult *= (remainingCells / remainingSafe) * 0.97; 
    }
    return Math.floor(mult * 100) / 100;
  };

  const startGame = async () => {
    if (currentBalance < bet || bet <= 0) {
      setMessage('Недостаточно средств или неверная ставка!');
      return;
    }
    if (minesCount < 1 || minesCount > 24) {
      setMessage('Выберите от 1 до 24 мин');
      return;
    }

    setIsProcessing(true);
    await updateBalance(currentBalance - bet);

    // Генерируем поле с бомбами
    const newBoard = Array(25).fill('safe');
    let bombsPlaced = 0;
    while (bombsPlaced < minesCount) {
      const randomIndex = Math.floor(Math.random() * 25);
      if (newBoard[randomIndex] === 'safe') {
        newBoard[randomIndex] = 'bomb';
        bombsPlaced++;
      }
    }

    setBoard(newBoard);
    setRevealed([]);
    setMultiplier(1);
    setGameState('playing');
    setMessage('Открывайте клетки, но бойтесь мин!');
    setIsProcessing(false);
  };

  const handleCellClick = async (index) => {
    if (gameState !== 'playing' || revealed.includes(index)) return;

    const newRevealed = [...revealed, index];
    setRevealed(newRevealed);

    if (board[index] === 'bomb') {
      // Взорвались
      setGameState('gameOver');
      setMessage('БУМ! Вы наткнулись на мину и проиграли.');
      return;
    }

    // Если безопасно - увеличиваем множитель
    const safeCellsOpened = newRevealed.length;
    const newMultiplier = calculateMultiplier(safeCellsOpened);
    setMultiplier(newMultiplier);

    // Проверка на победу (если открыли все безопасные клетки)
    if (safeCellsOpened === 25 - minesCount) {
      await cashout(newMultiplier);
    }
  };

  const cashout = async (currentMultiplier = multiplier) => {
    if (gameState !== 'playing' && currentMultiplier === 1) return;
    
    setIsProcessing(true);
    const winAmount = Math.floor(bet * currentMultiplier);
    
    await updateBalance(currentBalance + winAmount);
    setMessage(`Вы забрали ${winAmount} ₽ (Множитель: x${currentMultiplier})!`);
    setGameState('gameOver');
    setIsProcessing(false);
  };

  const resetGame = () => {
    setGameState('betting');
    setBoard([]);
    setRevealed([]);
    setMessage('');
    setMultiplier(1);
  };

  return (
    <div className="mines-container">
      <div className="mines-header" style={{ justifyContent: 'flex-end' }}>
        <div className="balance-display">
          Баланс: <span>{currentBalance} ₽</span>
        </div>
      </div>

      <div className="mines-controls-panel">
        <div className="control-group">
          <label>Ставка (₽)</label>
          <input 
            type="number" 
            value={bet} 
            onChange={(e) => setBet(Number(e.target.value))} 
            min="10" 
            step="10"
            disabled={gameState === 'playing' || isProcessing}
          />
        </div>
        <div className="control-group">
          <label>Количество мин (1-24)</label>
          <input 
            type="number" 
            value={minesCount} 
            onChange={(e) => setMinesCount(Number(e.target.value))} 
            min="1" 
            max="24"
            disabled={gameState === 'playing' || isProcessing}
          />
        </div>
        
        {gameState === 'betting' && (
          <button className="btn btn-register" onClick={startGame} disabled={isProcessing}>
            Начать игру
          </button>
        )}

        {gameState === 'playing' && (
          <div className="play-actions">
            <div className="multiplier-badge">
              Множитель: <strong>x{multiplier}</strong>
            </div>
            <button className="btn btn-register" onClick={() => cashout()} disabled={revealed.length === 0 || isProcessing}>
              Забрать {Math.floor(bet * multiplier)} ₽
            </button>
          </div>
        )}

        {gameState === 'gameOver' && (
          <button className="btn btn-register" onClick={resetGame}>
            Играть снова
          </button>
        )}
      </div>

      <div className="message-area">
        {message && <h2 className="game-message">{message}</h2>}
      </div>

      <div className="mines-board">
        {Array(25).fill(null).map((_, i) => {
          const isRevealed = revealed.includes(i);
          const isBomb = board[i] === 'bomb';
          const showBomb = gameState === 'gameOver' && isBomb;
          
          return (
            <button 
              key={i} 
              className={`mine-cell ${isRevealed && !isBomb ? 'safe' : ''} ${showBomb ? 'bomb' : ''} ${isRevealed && isBomb ? 'exploded' : ''}`}
              onClick={() => handleCellClick(i)}
              disabled={gameState !== 'playing' || isRevealed}
            >
              {isRevealed && !isBomb && '💎'}
              {(showBomb || (isRevealed && isBomb)) && '💣'}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Mines;