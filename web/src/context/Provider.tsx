import axios from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';

type UserThemeContextProps = {
  children: ReactNode;
}

export interface GameType {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

interface PropsGameContext { 
  games: GameType[], 
  setGames: React.Dispatch<React.SetStateAction<GameType[]>>,
  gameSelected: string,
  setGameSelected: React.Dispatch<React.SetStateAction<string>>,
}

const DEFAULT_VALUE = {
  games: [{
    id: 'string',
    title: 'string',
    bannerUrl: 'string',
    _count: {
      ads: 1
  }}],
  setGames: () => {},
  gameSelected: 'string',
  setGameSelected: () => {},
}

export const APIContext = createContext<PropsGameContext>(DEFAULT_VALUE)

export const APIContextProvider = ({ children }: UserThemeContextProps) => {
  const [games, setGames] = useState(DEFAULT_VALUE.games)
  const [gameSelected, setGameSelected] = useState(DEFAULT_VALUE.gameSelected)

  const props = {
    games, 
    setGames,
    gameSelected, 
    setGameSelected
  }
  
  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
      console.log('CONTROLE - Requisição feita');
    })
  }, [])

  
  
  return (
    <APIContext.Provider value={ props }>
      {children}
    </APIContext.Provider>
  );
};
