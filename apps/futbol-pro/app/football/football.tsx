import { useFootball } from './useFootball';
import { useEffect } from 'react';

export function Football() {
  const FootballContext = useFootball();
  console.log(FootballContext.football)
  useEffect(()=> {FootballContext.getStatus()},[]);
   return (
    <>
      <h1>Football</h1>
      {
      FootballContext.football 
      ?     
        <p>
          {FootballContext.football.account.firstname} - {FootballContext.football.account.lastname} - {FootballContext.football.account.email}
        </p>
      :
        <p>
          no data
        </p>
      }
    </>
  );
}

export default Football;