import { useEffect, useState } from "react"



export const useFootball = () => {
  const [football, setFootball] = useState([]);

  const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "13d6349e35e7ced3cbbd9e14d8efcb36");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");



  fetch("https://v3.football.api-sports.io/status", {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  })
    .then(response => console.log(response))
//    .then(response => response.text())
    .then(result => console.log(result))
    //.then(Response => console.log(Response))
    .catch(error => console.log('error', error));

  return [football];
}

export default useFootball;