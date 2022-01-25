import React from 'react';
import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoImgDark from "../../../assets/images/car-logo-dark.png";
import tw from "twin.macro";
import styled from "styled-components";

interface ILogoProps{
    color?: "white" | "dark";
    bg?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `};
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  ${tw`
    h-6
    md:h-9
  `};
  
  img{
    width: auto;
    height: 100%;
  }
`

export function Logo(props: ILogoProps){

    const { color, bg } = props;

    return <LogoContainer>
        <Image>
            <img src={bg === "dark" ? CarLogoImgDark : CarLogoImg} alt="Logo" />
        </Image>
        <LogoText color={color || "dark"}>GOcar</LogoText>
    </LogoContainer>
}