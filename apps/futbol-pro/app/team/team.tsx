import { TeamProps } from '@futbol-pro/types';
import { useFootball } from '../football/useFootball';
import { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/Link';

export  function Team(props: TeamProps) {


  const FootballContext = useFootball();
  
  useEffect(()=> {FootballContext.getTeams(props.country)},[]);


 
  return (
    <>
      <h1>Welcome to Team!</h1>
      {
        FootballContext.teams && FootballContext.teams.length > 0
          ?
          FootballContext.teams.map(
            ({team}) =>
            <Link key={team.id} href={{
              pathname: "/footballPlayer",
              query: {
                 teamID: team.id
            }}} >
               <li key={team.id}>          
                  {team.id} - {team.name} - <Image loader={() => `https://media.api-sports.io/football/teams/${team.id}.png`} src={team.logo} alt={team.name} width={32} height={32} />          
                </li>
            </Link>
            
            )
          :
          <p>error</p>
      }
    </>
  );
}

export default Team;


