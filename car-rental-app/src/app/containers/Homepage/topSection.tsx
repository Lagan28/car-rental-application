import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";

import carMc from "../../../assets/images/mclaren-orange-big.png";
import blobBg from "../../../assets/images/blob.svg";
import {SCREENS} from "../../components/responsive";
import {Button} from "../../components/buttons";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `}
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -2em;
  top: -9em;
  z-index: -1;
  transform: rotate(-50deg);
  
  img{
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  
  @media (min-width: ${SCREENS.sm}){
    width: 20em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}){
    width: 50em;
    max-height: 30em;
    right: -2em;
    top: -15em;
    transform: rotate(-50deg);
  }
  @media (min-width: ${SCREENS.xl}){
    width: 70em;
    max-height: 30em;
    right: -9em;
    top: -25em;
    transform: rotate(-28deg);
  }
`;

const StandAloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  
  img{
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}){
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}){
    height: 21em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}){
    height: 30em;
    right: -12em;
    top: -9em;
  }
`;

const ButtonContainer = styled.div`
    ${tw`
        flex
        flex-wrap      
        mt-4
    `};
`;

export function TopSection(){
    return <TopSectionContainer>
        <LeftContainer>
            <Slogan>With us, you'll just get the best quality cars!</Slogan>
            <Description>
                Choose the best cars from our local stores or get the best remote cars at your doorstep
                at the right price and the best quality.
            </Description>
            <ButtonContainer>
                <Button text="Book your ride!" />
                <Button theme="filled" text="Sell your car" />
            </ButtonContainer>
        </LeftContainer>
        <RightContainer>
            <BlobContainer>
                <img src={blobBg} />
            </BlobContainer>
            <StandAloneCar>
                <img src={carMc} />
            </StandAloneCar>
        </RightContainer>
    </TopSectionContainer>
}