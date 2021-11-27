import { createGlobalStyle } from 'styled-components';
import { Ui } from '@futbol-pro/ui';
import Navbar from '../components/navbar/navbar';
import {Team} from "../app/team/team";
import { GetServerSideProps } from 'next';
import { TeamProps } from '@futbol-pro/types';

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

export function FootballTeam(props:TeamProps) {
  return (
    <>
    <GlobalStyle/>
    <Navbar/>    
    <h1>Welcome to FootballTeam!</h1>
    <Team country={props.country} />    
  </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
 
  return {
       props: { 
        country: context.query.country        
       }
   }
};

export default FootballTeam;
