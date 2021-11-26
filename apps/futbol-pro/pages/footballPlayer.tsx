import { createGlobalStyle } from 'styled-components';
import { Ui } from '@futbol-pro/ui';
import Navbar from '../components/navbar/navbar';
import {Player} from "../app/player/player";
import { GetServerSideProps } from 'next';
import { PlayerProps } from '@futbol-pro/types';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "noto-color-emoji";
    src: url("../public/NotoColorEmoji.ttf") format("ttf");
  }
  *{
    color: blue;
    font-family: "noto-color-emoji";
  }
`;

export function FootballPlayer(props:PlayerProps) {
  return (
    <>
    <GlobalStyle/>
    <Navbar/>    
    <h1>Welcome to FootballPlayer!</h1>
    <Player teamID={props.teamID} />    
  </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
 
  return {
       props: { 
        teamID: context.query.teamID        
       }
   }
};

export default FootballPlayer;
