import { useEffect, useState,createContext, useContext, FC } from "react"


export const FootballContext = createContext(null);


export const FootballProvider:FC = (props) => {

  const apikey="dfac3592ff126f8593e0fd1eff5e8eaa"
  const [football, setFootball] = useState(null);
  const [players,setPlayers] = useState(null);
  const [teams,setTeams] = useState(null);
  
  const getStatus = async ()=> await fetch("https://v3.football.api-sports.io/status", {
    method: 'GET',
    headers: { 
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    },
    redirect: 'follow'
  })
  .then(function(response){
    //console.log(response)
    return response.json();
  })
  .then(function(myJson) {
   // console.log(myJson.response);
    setFootball(myJson.response)
  })
  .catch(error => console.log('error', error));


  const getTeams = async (country:string)=> await fetch(`https://v3.football.api-sports.io/teams?country=${country}`, {
    method: 'GET',
    headers: { 
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    },
    redirect: 'follow'
  }).then(function(response){
    //console.log(response)
    return response.json();
  })
  .then(function(myJson) {
    console.log("team");
    console.log(myJson.response);
    setTeams(myJson.response)
  })
  .catch(error => console.log('error', error));


  const getPlayers = async (teamID:string)=> await fetch(`https://v3.football.api-sports.io/players/squads?team=${teamID}`, {
    method: 'GET', 
    headers: { 
      'x-rapidapi-key': apikey,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    },
    redirect: 'follow'
  }).then(function(response){
    console.log(teamID)
    return response.json();
  })
  .then(function(myJson) { 
    console.log("player");
    console.log(myJson.response[0].players);
    setPlayers(myJson.response[0].players)
  })
  .catch(error => console.log('error', error));

  const value = {  
    football, getStatus:getStatus,
    players , getPlayers:getPlayers,
    teams   , getTeams:getTeams,      
  };

   return(
      <FootballContext.Provider value={value}>
        {props.children}
      </FootballContext.Provider>  
   );

}; 

export const useFootball = () => {
  return useContext(FootballContext);
}

export default useFootball;