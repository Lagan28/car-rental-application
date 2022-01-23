import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import {faCalendarAlt, faCarSide, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
  `};
`;

const Title = styled.h2`
  ${tw`
    text-2xl
    lg:text-4xl
    text-black
    font-extrabold
  `};
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `};
`;

const  StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    m-3
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
  `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    rounded-lg
    items-center
    justify-center
    p-6
  `};
`;

const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    font-semibold
    mt-4
  `};
`;

const StepDesc = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `};
`;

const StepIcon = styled.span`
  ${tw`
    text-red-500
    text-3xl    
  `};
`;

export function BookingSteps(){
    return <Container>
        <Title>Steps to rent your GOcar</Title>
        <StepsContainer>
            <StepContainer>
            <Step>
                <StepIcon>
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                </StepIcon>
            </Step>
            <StepTitle>Choose Location</StepTitle>
            <StepDesc>
                Find the nearest GOcar booth to book your car.
            </StepDesc>
        </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </StepIcon>
                </Step>
                <StepTitle>Pick a date</StepTitle>
                <StepDesc>
                    Pick up the date to rent your GOcar.
                </StepDesc>
            </StepContainer>
            <StepContainer>
                <Step>
                    <StepIcon>
                        <FontAwesomeIcon icon={faCarSide} />
                    </StepIcon>
                </Step>
                <StepTitle>Book the car</StepTitle>
                <StepDesc>
                    Select the car and book it in a single step.
                </StepDesc>
            </StepContainer>
        </StepsContainer>
    </Container>
}