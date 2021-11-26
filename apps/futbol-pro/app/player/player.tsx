import { PlayerProps } from '@futbol-pro/types';
import { useFootball } from '../football/useFootball';
import { useEffect } from 'react';
import Image from 'next/image'

export  function Player(props: PlayerProps) {


  const FootballContext = useFootball();
  
  useEffect(()=> {FootballContext.getPlayers(props.teamID)},[]);

  //<Image loader={() => `https://media.api-sports.io/football/players/${players.id}.png`} src={players.photo} alt={players.name} width={32} height={32} /> 
  return (
    <>
      <h1>Welcome to Player!</h1>
      {
        FootballContext.players && FootballContext.players.length > 0
          ?
          FootballContext.players.map(            
            ({players}) =>
              <li key={players.id}>          
                 {players.id} - {players.name} -  {players.photo}
                             
              </li>
            )
          :
          <p>error</p>
      }
    </>
  );
}

export default Player;
