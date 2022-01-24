import React, {useState} from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import {Car} from "../../components/car";
import {ICar} from "../../../typings/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import {useMediaQuery} from "react-responsive";
import {SCREENS} from "../../components/responsive";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
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

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10 
  `};
`;

export function TopCars(){

    const [current, setCurrent] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    const testCar: ICar = {
        name: "Audi S3 Car",
        mileage: "10k",
        thumbnailSrc:
            "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
        dailyPrice: 70,
        monthlyPrice: 1600,
        gearType: "Auto",
        gas: "Petrol",
    };

    const testCar2: ICar = {
        name: "HONDA City 5 Seater Car",
        mileage: "20k",
        thumbnailSrc:
            "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
        dailyPrice: 50,
        monthlyPrice: 1500,
        gearType: "Auto",
        gas: "Petrol",
    };

    const testCar3: ICar = {
        name: "McLaren P1",
        mileage: "9k",
        thumbnailSrc:
            "https://images.hgmsites.net/hug/mclaren_100508647_h.jpg",
        dailyPrice: 150,
        monthlyPrice: 16000,
        gearType: "Manual",
        gas: "Petrol",
    };

    const cars = [
        (<Car  {...testCar} />),
        (<Car  {...testCar2} />),
        (<Car  {...testCar3} />),
        (<Car  {...testCar2} />),
        (<Car  {...testCar3} />)
    ]

    const numberDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
    //console.log(numberDots)

    return <TopCarsContainer>
        <Title>Explore our top rented cars</Title>
        <CarsContainer>
            <Carousel value={current} onChange={setCurrent} slides={cars}
            plugins={[
                "clickToChange",
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 3,
                    },
                },
            ]}
            breakpoints={{
                640: {
                    plugins: [
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 1,
                            }
                        }
                    ]
                },
                900: {
                    plugins: [
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            }
                        }
                    ]
                }
            }}
            />
            <Dots value={current} onChange={setCurrent} number={numberDots} />
        </CarsContainer>
    </TopCarsContainer>
}