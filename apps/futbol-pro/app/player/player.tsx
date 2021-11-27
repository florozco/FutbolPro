import { PlayerProps } from '@futbol-pro/types';
import { useFootball } from '../football/useFootball';
import { useEffect } from 'react';
import Image from 'next/image'

export  function Player(props: PlayerProps) {


  const FootballContext = useFootball();
  
  useEffect(()=> {FootballContext.getPlayers(props.teamID)},[]);

  const [listaJug] = [FootballContext.players];
  
  return (
    <>
      <h1>Welcome to Player!</h1>
      {
        listaJug && listaJug.length > 0
          ?
          listaJug.map(            
            ({id,name,photo}) =>
             <li key={id}>          
                 {id} - {name}   -
                 <Image loader={() =>  `https://media.api-sports.io/football/players/${id}.png`} src={photo} alt={name} width={32} height={32} />                           
            </li>
            )
          :
          <p>error</p>
      }
    </>
  );
}

export default Player;
