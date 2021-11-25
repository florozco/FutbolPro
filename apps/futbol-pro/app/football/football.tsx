import { IndexProps } from '@futbol-pro/types';
import { useFootball } from './useFootball';
import {createGlobalStyle} from "styled-components"
import FontFaceObserver from "../../pages/fontfaceobserver.standalone";
import styled from 'styled-components';
import UnicodeFlag from '../unicode-flag/unicode-flag';
import Image from 'next/image'

export function Football() {
  const [footballArray] = useFootball();
  const football = footballArray;

   return (
    <>
      <h1>Football</h1>
      {
   
      }
    </>
  );
}

export default Football;