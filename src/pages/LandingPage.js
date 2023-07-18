import React from "react";
import Carousel from '../components/Carousel';
import Slideshow from '../components/Slideshow';
import FullCard from '../components/FullCard';
import TableCellCard from '../components/TableCellCard';
import SplitCard from '../components/SplitCard';


function LandingPage() {
    return (
    <>
    <Carousel />
    <Slideshow />
    <FullCard />
    <TableCellCard />
    <SplitCard />
    </>
  )

}

export default LandingPage;
