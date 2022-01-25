import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import {Logo} from "../logo";
import {faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const FooterContainer = styled.div`
  //min-height: 20em;
  background-color: #1d2124;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    max-w-screen-2xl
    w-full
    h-full  
  `};
`;

const BottomContainer = styled.div`
  margin-right: -1em;
  ${tw`
    flex
    max-w-screen-2xl
    w-full
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 14px;
  ${tw`
    text-gray-400
  `};
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `};
`;

const AboutText = styled.p`
  ${tw`
    text-gray-50
    text-sm
    font-semibold
    max-w-xs
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-6
    md:mt-0
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};
  
  & > a {
    ${tw`
        text-sm
        text-white
        transition-all
        hover:text-gray-300
    `};
  };
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-bold  
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex  
    items-center    
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-8
    h-8
    rounded-full
    flex
    bg-red-500
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-white
    text-sm
  `};
`;

export function Footer(){
    return <FooterContainer>
        <InnerContainer>
            <AboutContainer>
                <Logo color="white" bg="dark"/>
                <AboutText>GOcar is a Car renting and booking company that provides solutions to your
                    daily transporting struggles. It is located at many locations providing high
                    quality service.
                </AboutText>
            </AboutContainer>
            <SectionContainer>
                <HeaderTitle>Our Links</HeaderTitle>
                <LinksList>
                   <ListItem><a href="#">Home</a></ListItem>
                   <ListItem><a href="#">About Us</a></ListItem>
                   <ListItem><a href="#">Services</a></ListItem>
                   <ListItem><a href="#">Models</a></ListItem>
                   <ListItem><a href="#">Forum</a></ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Other Links</HeaderTitle>
                <LinksList>
                    <ListItem><a href="#">FAQ</a></ListItem>
                    <ListItem><a href="#">Support</a></ListItem>
                    <ListItem><a href="#">Contact Us</a></ListItem>
                    <ListItem><a href="#">Privacy Policy</a></ListItem>
                    <ListItem><a href="#">Terms & Conditions</a></ListItem>
                </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Call Now</HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </RedIcon>
                    <SmallText>+91 555-666-7777</SmallText>
                </HorizontalContainer>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>E-mail Us</HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </RedIcon>
                    <SmallText>info@gocar.com</SmallText>
                </HorizontalContainer>
            </SectionContainer>
        </InnerContainer>
        <BottomContainer>
            <CopyrightText>Copyright &copy; {new Date().getFullYear()} GOcar. All rights reserved.</CopyrightText>
        </BottomContainer>
    </FooterContainer>
}