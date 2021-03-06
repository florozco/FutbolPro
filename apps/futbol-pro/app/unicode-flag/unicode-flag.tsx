import styled from 'styled-components';
import { UnicodeFlagProps } from '@futbol-pro/types';
import Image from 'next/image'

export function UnicodeFlag(props: UnicodeFlagProps) {


  const myLoader = ({ src, width, quality }) => {
    return `https://upload.wikimedia.org/wikipedia/commons/${src}?w=${width}&q=${quality || 75}`
  }

  const flagDictionary = {
    '🇦🇩': (
      <Image
        loader={myLoader}
        src={'7/70/Emojione_1F1E6-1F1E9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇪': (
      <Image
        loader={myLoader}
        src={'e/ee/Emojione_1F1E6-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇫': (
      <Image
        loader={myLoader}
        src={'b/bb/Emojione_1F1E6-1F1EB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇬': (
      <Image
        loader={myLoader}
        src={'f/f2/Emojione_1F1E6-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇮': (
      <Image
        loader={myLoader}
        src={'6/69/Emojione_1F1E6-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇱': (
      <Image
        loader={myLoader}
        src={'a/a1/Emojione_1F1E6-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇲': (
      <Image
        loader={myLoader}
        src={'9/93/Emojione_1F1E6-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇴': (
      <Image
        loader={myLoader}
        src={'5/5d/Emojione_1F1E6-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇶': (
      <Image
        loader={myLoader}
        src={'f/f8/True_South_Antarctic_Flag.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇷': (
      <Image
        loader={myLoader}
        src={'7/7f/Emojione_1F1E6-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇸': (
      <Image
        loader={myLoader}
        src={'8/87/Flag_of_American_Samoa.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇹': (
      <Image
        loader={myLoader}
        src={'f/f1/Emojione_1F1E6-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇺': (
      <Image
        loader={myLoader}
        src={'4/44/Emojione_1F1E6-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇼': (
      <Image
        loader={myLoader}
        src={'9/94/Emojione_1F1E6-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇽': (
      <Image
        loader={myLoader}
        src={'5/52/Flag_of_%C3%85land.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇦🇿': (
      <Image
        loader={myLoader}
        src={'d/de/Emojione_1F1E6-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇦': (
      <Image
        loader={myLoader}
        src={'9/98/Emojione_1F1E7-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇧': (
      <Image
        loader={myLoader}
        src={'7/7f/Emojione_1F1E7-1F1E7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇩': (
      <Image
        loader={myLoader}
        src={'f/f5/Emojione_1F1E7-1F1E9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇪': (
      <Image
        loader={myLoader}
        src={'e/eb/Emojione_1F1E7-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇫': (
      <Image
        loader={myLoader}
        src={'6/60/Emojione_1F1E7-1F1EB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇬': (
      <Image
        loader={myLoader}
        src={'8/82/Emojione_1F1E7-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇭': (
      <Image
        loader={myLoader}
        src={'8/86/Emojione_1F1E7-1F1ED.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇮': (
      <Image
        loader={myLoader}
        src={'1/13/Emojione_1F1E7-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇯': (
      <Image
        loader={myLoader}
        src={'2/27/Emojione_1F1E7-1F1EF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇱': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1EB-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇲': (
      <Image
        loader={myLoader}
        src={'2/27/Emojione_1F1E7-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇳': (
      <Image
        loader={myLoader}
        src={'e/e9/Emojione_1F1E7-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇴': (
      <Image
        loader={myLoader}
        src={'d/d0/Emojione_1F1E7-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇶': (
      <Image
        loader={myLoader}
        src={'d/d8/Emojione_1F1F3-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇷': (
      <Image
        loader={myLoader}
        src={'5/58/Emojione_1F1E7-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇸': (
      <Image
        loader={myLoader}
        src={'7/7c/Emojione_1F1E7-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇹': (
      <Image
        loader={myLoader}
        src={'b/bd/Emojione_1F1E7-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇻': (
      <Image
        loader={myLoader}
        src={'4/4f/Emojione_1F1F3-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇼': (
      <Image
        loader={myLoader}
        src={'9/9b/Emojione_1F1E7-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇾': (
      <Image
        loader={myLoader}
        src={'9/93/Emojione_1F1E7-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇧🇿': (
      <Image
        loader={myLoader}
        src={'8/85/Emojione_1F1E7-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇦': (
      <Image
        loader={myLoader}
        src={'8/8c/Emojione_1F1E8-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇨': (
      <Image
        loader={myLoader}
        src={'7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇩': (
      <Image
        loader={myLoader}
        src={'1/1a/Emojione_1F1E8-1F1E9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇫': (
      <Image
        loader={myLoader}
        src={'6/6c/Emojione_1F1E8-1F1EB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇬': (
      <Image
        loader={myLoader}
        src={'1/1e/Emojione_1F1E8-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇭': (
      <Image
        loader={myLoader}
        src={'8/86/Emojione_1F1E8-1F1ED.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇮': (
      <Image
        loader={myLoader}
        src={'b/ba/Emojione_1F1E8-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇰': (
      <Image
        loader={myLoader}
        src={'3/35/Flag_of_the_Cook_Islands.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇱': (
      <Image
        loader={myLoader}
        src={'7/78/Emojione_1F1E8-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇲': (
      <Image
        loader={myLoader}
        src={'c/c1/Emojione_1F1E8-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇳': (
      <Image
        loader={myLoader}
        src={'e/e5/Emojione_1F1E8-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇴': (
      <Image
        loader={myLoader}
        src={'d/d4/Emojione_1F1E8-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇷': (
      <Image
        loader={myLoader}
        src={'2/29/Emojione_1F1E8-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇺': (
      <Image
        loader={myLoader}
        src={'a/a3/Emojione_1F1E8-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇻': (
      <Image
        loader={myLoader}
        src={'1/15/Emojione_1F1E8-1F1FB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇼': (
      <Image
        loader={myLoader}
        src={'b/b1/Flag_of_Cura%C3%A7ao.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇽': (
      <Image
        loader={myLoader}
        src={'6/67/Flag_of_Christmas_Island.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇾': (
      <Image
        loader={myLoader}
        src={'0/0f/Emojione_1F1E8-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇨🇿': (
      <Image
        loader={myLoader}
        src={'6/6d/Emojione_1F1E8-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇩🇪': (
      <Image
        loader={myLoader}
        src={'7/75/Emojione_1F1E9-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇩🇯': (
      <Image
        loader={myLoader}
        src={'3/36/Emojione_1F1E9-1F1EF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇩🇰': (
      <Image
        loader={myLoader}
        src={'d/d6/Emojione_1F1E9-1F1F0.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇩🇲': (
      <Image
        loader={myLoader}
        src={'3/39/Emojione_1F1E9-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇩🇴': (
      <Image
        loader={myLoader}
        src={'4/4e/Emojione_1F1E9-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇩🇿': (
      <Image
        loader={myLoader}
        src={'e/e2/Emojione_1F1E9-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇪🇨': (
      <Image
        loader={myLoader}
        src={'0/07/Emojione_1F1EA-1F1E8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇪🇪': (
      <Image
        loader={myLoader}
        src={'b/bb/Emojione_1F1EA-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇪🇬': (
      <Image
        loader={myLoader}
        src={'a/ae/Emojione_1F1EA-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇪🇭': (
      <Image
        loader={myLoader}
        src={'d/d5/Emojione_1F1EA-1F1ED.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇪🇷': (
      <Image
        loader={myLoader}
        src={'1/19/Emojione_1F1EA-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇪🇸': (
      <Image
        loader={myLoader}
        src={'b/b4/Emojione_1F1EA-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇪🇹': (
      <Image
        loader={myLoader}
        src={'9/99/Emojione_1F1EA-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇫🇮': (
      <Image
        loader={myLoader}
        src={'d/d7/Emojione_1F1EB-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇫🇯': (
      <Image
        loader={myLoader}
        src={'2/23/Emojione_1F1EB-1F1EF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇫🇰': (
      <Image
        loader={myLoader}
        src={'9/96/Emojione_1F1EB-1F1F0.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇫🇲': (
      <Image
        loader={myLoader}
        src={'b/b9/Emojione_1F1EB-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇫🇴': (
      <Image
        loader={myLoader}
        src={'8/8d/Emojione_1F1EB-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇫🇷': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1EB-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇦': (
      <Image
        loader={myLoader}
        src={'f/f4/Emojione_1F1EC-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇧': (
      <Image
        loader={myLoader}
        src={'8/83/Emojione_1F1EC-1F1E7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇩': (
      <Image
        loader={myLoader}
        src={'5/5b/Emojione_1F1EC-1F1E9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇪': (
      <Image
        loader={myLoader}
        src={'2/2e/Emojione_1F1EC-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇫': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1EB-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇬': (
      <Image
        loader={myLoader}
        src={'f/fa/Flag_of_Guernsey.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇭': (
      <Image
        loader={myLoader}
        src={'1/10/Emojione_1F1EC-1F1ED.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇮': (
      <Image
        loader={myLoader}
        src={'4/44/Emojione_1F1EC-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇱': (
      <Image
        loader={myLoader}
        src={'1/1f/Emojione_1F1EC-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇲': (
      <Image
        loader={myLoader}
        src={'f/f1/Emojione_1F1EC-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇳': (
      <Image
        loader={myLoader}
        src={'6/68/Emojione_1F1EC-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇵': (
      <Image
        loader={myLoader}
        src={'https://en.wikipedia.org/wiki/File:Emojione_1F1EB-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇶': (
      <Image
        loader={myLoader}
        src={'9/9c/Emojione_1F1EC-1F1F6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇷': (
      <Image
        loader={myLoader}
        src={'9/9d/Emojione_1F1EC-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇸': (
      <Image
        loader={myLoader}
        src={'8/83/Emojione_1F1EC-1F1E7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇹': (
      <Image
        loader={myLoader}
        src={'c/c8/Emojione_1F1EC-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇺': (
      <Image
        loader={myLoader}
        src={'7/7b/Emojione_1F1EC-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇼': (
      <Image
        loader={myLoader}
        src={'1/13/Emojione_1F1EC-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇬🇾': (
      <Image
        loader={myLoader}
        src={'2/25/Emojione_1F1EC-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇭🇰': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1ED-1F1F0.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇭🇲': (
      <Image
        loader={myLoader}
        src={'4/44/Emojione_1F1E6-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇭🇳': (
      <Image
        loader={myLoader}
        src={'3/37/Emojione_1F1ED-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇭🇷': (
      <Image
        loader={myLoader}
        src={'6/64/Emojione_1F1ED-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇭🇹': (
      <Image
        loader={myLoader}
        src={'5/5f/Emojione_1F1ED-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇭🇺': (
      <Image
        loader={myLoader}
        src={'f/f7/Emojione_1F1ED-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇩': (
      <Image
        loader={myLoader}
        src={'d/d4/Emojione_1F1EE-1F1E9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇪': (
      <Image
        loader={myLoader}
        src={'e/e4/Emojione_1F1EE-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇱': (
      <Image
        loader={myLoader}
        src={'b/bd/Emojione_1F1EE-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇲': (
      <Image
        loader={myLoader}
        src={'b/bc/Flag_of_the_Isle_of_Man.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇳': (
      <Image
        loader={myLoader}
        src={'b/b5/Emojione_1F1EE-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇴': (
      <Image
        loader={myLoader}
        src={
          '6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg'
        }
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇶': (
      <Image
        loader={myLoader}
        src={'6/6f/Emojione_1F1EE-1F1F6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇷': (
      <Image
        loader={myLoader}
        src={'0/0d/Emojione_1F1EE-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇸': (
      <Image
        loader={myLoader}
        src={'f/fa/Emojione_1F1EE-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇮🇹': (
      <Image
        loader={myLoader}
        src={'4/4d/Emojione_1F1EE-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇯🇪': (
      <Image
        loader={myLoader}
        src={'d/df/Emojione_1F1EF-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇯🇲': (
      <Image
        loader={myLoader}
        src={'4/4b/Emojione_1F1EF-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇯🇴': (
      <Image
        loader={myLoader}
        src={'1/11/Emojione_1F1EF-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇯🇵': (
      <Image
        loader={myLoader}
        src={'3/38/Emojione_1F1EF-1F1F5.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇪': (
      <Image
        loader={myLoader}
        src={'f/f9/Emojione_1F1F0-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇬': (
      <Image
        loader={myLoader}
        src={'4/43/Emojione_1F1F0-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇭': (
      <Image
        loader={myLoader}
        src={'c/c3/Emojione_1F1F0-1F1ED.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇮': (
      <Image
        loader={myLoader}
        src={'d/d6/Emojione_1F1F0-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇲': (
      <Image
        loader={myLoader}
        src={'5/54/Emojione_1F1F0-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇳': (
      <Image
        loader={myLoader}
        src={'8/8b/Emojione_1F1F0-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇵': (
      <Image
        loader={myLoader}
        src={'c/c7/Emojione_1F1F0-1F1F5.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇷': (
      <Image
        loader={myLoader}
        src={'d/da/Emojione_1F1F0-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇼': (
      <Image
        loader={myLoader}
        src={'e/e2/Emojione_1F1F0-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇾': (
      <Image
        loader={myLoader}
        src={'3/36/Emojione_1F1F0-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇰🇿': (
      <Image
        loader={myLoader}
        src={'c/ca/Emojione_1F1F0-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇦': (
      <Image
        loader={myLoader}
        src={'5/5a/Emojione_1F1F1-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇧': (
      <Image
        loader={myLoader}
        src={'0/0a/Emojione_1F1F1-1F1E7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇨': (
      <Image
        loader={myLoader}
        src={'c/c9/Emojione_1F1F1-1F1E8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇮': (
      <Image
        loader={myLoader}
        src={'6/67/Emojione_1F1F1-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇰': (
      <Image
        loader={myLoader}
        src={'0/01/Emojione_1F1F1-1F1F0.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇷': (
      <Image
        loader={myLoader}
        src={'a/a4/Emojione_1F1F1-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇸': (
      <Image
        loader={myLoader}
        src={'0/0c/Emojione_1F1F1-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇹': (
      <Image
        loader={myLoader}
        src={'7/75/Emojione_1F1F1-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇺': (
      <Image
        loader={myLoader}
        src={'c/cf/Emojione_1F1F1-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇻': (
      <Image
        loader={myLoader}
        src={'6/6d/Emojione_1F1F1-1F1FB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇱🇾': (
      <Image
        loader={myLoader}
        src={'a/a1/Emojione_1F1F1-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇦': (
      <Image
        loader={myLoader}
        src={'8/8a/Emojione_1F1F2-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇨': (
      <Image
        loader={myLoader}
        src={'8/85/Emojione_1F1F2-1F1E8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇩': (
      <Image
        loader={myLoader}
        src={'2/27/Emojione_1F1F2-1F1E9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇪': (
      <Image
        loader={myLoader}
        src={'b/b9/Emojione_1F1F2-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇫': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1EB-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇬': (
      <Image
        loader={myLoader}
        src={'6/6a/Emojione_1F1F2-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇭': (
      <Image
        loader={myLoader}
        src={'6/6a/Emojione_1F1F2-1F1ED.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇰': (
      <Image
        loader={myLoader}
        src={'6/6f/Emojione_1F1F2-1F1F0.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇱': (
      <Image
        loader={myLoader}
        src={'9/94/Emojione_1F1F2-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇲': (
      <Image
        loader={myLoader}
        src={'5/5b/Emojione_1F1F2-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇳': (
      <Image
        loader={myLoader}
        src={'e/ef/Emojione_1F1F2-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇴': (
      <Image
        loader={myLoader}
        src={'5/5a/Emojione_1F1F2-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇵': (
      <Image
        loader={myLoader}
        src={'e/e0/Flag_of_the_Northern_Mariana_Islands.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇶': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1EB-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇷': (
      <Image
        loader={myLoader}
        src={'a/a1/Emojione_1F1F2-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇸': (
      <Image
        loader={myLoader}
        src={'f/fd/Emojione_1F1F2-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇹': (
      <Image
        loader={myLoader}
        src={'1/15/Emojione_1F1F2-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇺': (
      <Image
        loader={myLoader}
        src={'5/54/Emojione_1F1F2-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇻': (
      <Image
        loader={myLoader}
        src={'a/af/Emojione_1F1F2-1F1FB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇼': (
      <Image
        loader={myLoader}
        src={'0/00/Emojione_1F1F2-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇽': (
      <Image
        loader={myLoader}
        src={'f/f4/Emojione_1F1F2-1F1FD.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇾': (
      <Image
        loader={myLoader}
        src={'d/d4/Emojione_1F1F2-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇲🇿': (
      <Image
        loader={myLoader}
        src={'b/ba/Emojione_1F1F2-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇦': (
      <Image
        loader={myLoader}
        src={'b/b2/Emojione_1F1F3-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇨': (
      <Image
        loader={myLoader}
        src={'e/e8/Emojione_1F1F3-1F1E8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇪': (
      <Image
        loader={myLoader}
        src={'e/e8/Emojione_1F1F3-1F1E8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇫': (
      <Image
        loader={myLoader}
        src={'4/48/Flag_of_Norfolk_Island.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇬': (
      <Image
        loader={myLoader}
        src={'f/f2/Emojione_1F1F3-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇮': (
      <Image
        loader={myLoader}
        src={'4/4d/Emojione_1F1F3-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇱': (
      <Image
        loader={myLoader}
        src={'d/d8/Emojione_1F1F3-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇴': (
      <Image
        loader={myLoader}
        src={'4/4f/Emojione_1F1F3-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇵': (
      <Image
        loader={myLoader}
        src={'2/2e/Emojione_1F1F3-1F1F5.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇷': (
      <Image
        loader={myLoader}
        src={'e/e7/Emojione_1F1F3-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇺': (
      <Image
        loader={myLoader}
        src={'7/76/Emojione_1F1F3-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇳🇿': (
      <Image
        loader={myLoader}
        src={'c/c4/Emojione_1F1F3-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇴🇲': (
      <Image
        loader={myLoader}
        src={'9/90/Emojione_1F1F4-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇦': (
      <Image
        loader={myLoader}
        src={'8/8e/Emojione_1F1F5-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇪': (
      <Image
        loader={myLoader}
        src={'a/ad/Emojione_1F1F5-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇫': (
      <Image
        loader={myLoader}
        src={'1/15/Emojione_1F1F5-1F1EB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇬': (
      <Image
        loader={myLoader}
        src={'3/3a/Emojione_1F1F5-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇭': (
      <Image
        loader={myLoader}
        src={'9/9b/Emojione_1F1F5-1F1ED.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇰': (
      <Image
        loader={myLoader}
        src={'0/04/Emojione_1F1F5-1F1F0.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇱': (
      <Image
        loader={myLoader}
        src={'c/c8/Emojione_1F1F5-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇲': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1EB-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇳': (
      <Image
        loader={myLoader}
        src={'8/83/Emojione_1F1EC-1F1E7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇷': (
      <Image
        loader={myLoader}
        src={'1/10/Emojione_1F1F5-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇸': (
      <Image
        loader={myLoader}
        src={'5/56/Emojione_1F1F5-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇹': (
      <Image
        loader={myLoader}
        src={'d/d0/Emojione_1F1F5-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇼': (
      <Image
        loader={myLoader}
        src={'b/b2/Emojione_1F1F5-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇵🇾': (
      <Image
        loader={myLoader}
        src={'3/35/Emojione_1F1F5-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇶🇦': (
      <Image
        loader={myLoader}
        src={'6/6d/Emojione_1F1F6-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇷🇪': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1EB-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇷🇴': (
      <Image
        loader={myLoader}
        src={'8/8a/Emojione_1F1F7-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇷🇸': (
      <Image
        loader={myLoader}
        src={'4/44/Emojione_1F1F7-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇷🇺': (
      <Image
        loader={myLoader}
        src={'6/6f/Emojione_1F1F7-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇷🇼': (
      <Image
        loader={myLoader}
        src={'8/8c/Emojione_1F1F7-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇦': (
      <Image
        loader={myLoader}
        src={'5/58/Emojione_1F1F8-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇧': (
      <Image
        loader={myLoader}
        src={'0/06/Emojione_1F1F8-1F1E7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇨': (
      <Image
        loader={myLoader}
        src={'5/56/Emojione_1F1F8-1F1E8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇩': (
      <Image
        loader={myLoader}
        src={'e/ef/Emojione_1F1F8-1F1E9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇪': (
      <Image
        loader={myLoader}
        src={'3/3d/Emojione_1F1F8-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇬': (
      <Image
        loader={myLoader}
        src={'b/be/Emojione_1F1F8-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇭': (
      <Image
        loader={myLoader}
        src={'b/be/Emojione_1F1F8-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇮': (
      <Image
        loader={myLoader}
        src={'f/f0/Flag_of_Slovenia.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇯': (
      <Image
        loader={myLoader}
        src={'4/4f/Emojione_1F1F3-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇰': (
      <Image
        loader={myLoader}
        src={'3/31/Emojione_1F1F8-1F1F0.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇱': (
      <Image
        loader={myLoader}
        src={'e/e5/Emojione_1F1F8-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇲': (
      <Image
        loader={myLoader}
        src={'2/28/Emojione_1F1F8-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇳': (
      <Image
        loader={myLoader}
        src={'9/95/Emojione_1F1F8-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇴': (
      <Image
        loader={myLoader}
        src={'4/47/Emojione_1F1F8-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇷': (
      <Image
        loader={myLoader}
        src={'7/75/Emojione_1F1F8-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇸': (
      <Image
        loader={myLoader}
        src={'7/7a/Flag_of_South_Sudan.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇹': (
      <Image
        loader={myLoader}
        src={'0/08/Emojione_1F1F8-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇻': (
      <Image
        loader={myLoader}
        src={'0/08/Emojione_1F1F8-1F1FB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇽': (
      <Image
        loader={myLoader}
        src={'d/d3/Flag_of_Sint_Maarten.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇾': (
      <Image
        loader={myLoader}
        src={'c/c4/Emojione_1F1F8-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇸🇿': (
      <Image
        loader={myLoader}
        src={'f/f0/Emojione_1F1F8-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇨': (
      <Image
        loader={myLoader}
        src={'a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇩': (
      <Image
        loader={myLoader}
        src={'c/cf/Emojione_1F1F9-1F1E9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇫': (
      <Image
        loader={myLoader}
        src={'a/a7/Flag_of_the_French_Southern_and_Antarctic_Lands.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇬': (
      <Image
        loader={myLoader}
        src={'a/a1/Emojione_1F1F9-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇭': (
      <Image
        loader={myLoader}
        src={'8/86/Emojione_1F1F9-1F1ED.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇯': (
      <Image
        loader={myLoader}
        src={'1/18/Emojione_1F1F9-1F1EF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇰': (
      <Image
        loader={myLoader}
        src={'8/8e/Flag_of_Tokelau.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇱': (
      <Image
        loader={myLoader}
        src={'5/5b/Emojione_1F1F9-1F1F1.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇲': (
      <Image
        loader={myLoader}
        src={'0/04/Emojione_1F1F9-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇳': (
      <Image
        loader={myLoader}
        src={'7/7e/Emojione_1F1F9-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇴': (
      <Image
        loader={myLoader}
        src={'c/c7/Emojione_1F1F9-1F1F4.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇷': (
      <Image
        loader={myLoader}
        src={'2/22/Emojione_1F1F9-1F1F7.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇹': (
      <Image
        loader={myLoader}
        src={'2/2b/Emojione_1F1F9-1F1F9.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇻': (
      <Image
        loader={myLoader}
        src={'5/59/Emojione_1F1F9-1F1FB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇼': (
      <Image
        loader={myLoader}
        src={'8/8c/Emojione_1F1F9-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇹🇿': (
      <Image
        loader={myLoader}
        src={'6/69/Emojione_1F1F9-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇺🇦': (
      <Image
        loader={myLoader}
        src={'8/8c/Emojione_1F1FA-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇺🇬': (
      <Image
        loader={myLoader}
        src={'f/fb/Emojione_1F1FA-1F1EC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇺🇲': (
      <Image
        loader={myLoader}
        src={'5/50/Emojione_1F1FA-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇺🇸': (
      <Image
        loader={myLoader}
        src={'5/50/Emojione_1F1FA-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇺🇾': (
      <Image
        loader={myLoader}
        src={'6/6e/Emojione_1F1FA-1F1FE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇺🇿': (
      <Image
        loader={myLoader}
        src={'3/3c/Emojione_1F1FA-1F1FF.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇻🇦': (
      <Image
        loader={myLoader}
        src={'8/80/Emojione_1F1FB-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇻🇨': (
      <Image
        loader={myLoader}
        src={'a/a6/Emojione_1F1FB-1F1E8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇻🇪': (
      <Image
        loader={myLoader}
        src={'4/47/Emojione_1F1FB-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇻🇬': (
      <Image
        loader={myLoader}
        src={'4/42/Flag_of_the_British_Virgin_Islands.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇻🇮': (
      <Image
        loader={myLoader}
        src={'b/be/Emojione_1F1FB-1F1EE.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇻🇳': (
      <Image
        loader={myLoader}
        src={'c/c6/Emojione_1F1FB-1F1F3.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇻🇺': (
      <Image
        loader={myLoader}
        src={'f/f2/Emojione_1F1FB-1F1FA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇼🇫': (
      <Image
        loader={myLoader}
        src={'c/cf/Emojione_1F1FC-1F1EB.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇼🇸': (
      <Image
        loader={myLoader}
        src={'2/2f/Emojione_1F1FC-1F1F8.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇽🇰': (
      <Image
        loader={myLoader}
        src={'b/b2/Emojione_1F1FD-1F1F0.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇾🇪': (
      <Image
        loader={myLoader}
        src={'5/59/Emojione_1F1FE-1F1EA.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇾🇹': (
      <Image
        loader={myLoader}
        src={'4/4f/Flag_of_Mayotte_%28Local%29.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇿🇦': (
      <Image
        loader={myLoader}
        src={'4/43/Emojione_1F1FF-1F1E6.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇿🇲': (
      <Image
        loader={myLoader}
        src={'9/98/Emojione_1F1FF-1F1F2.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
    '🇿🇼': (
      <Image
        loader={myLoader}
        src={'c/cc/Emojione_1F1FF-1F1FC.svg'}
        alt={props.unicode}
        width={32}
        height={32}
      />
    ),
  };

  return (
    <>
      {  flagDictionary[props.unicode] }
    </>
  );
}



export default UnicodeFlag;

