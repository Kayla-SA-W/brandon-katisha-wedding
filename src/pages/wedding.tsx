import { HeadFC, navigate } from "gatsby"
import React from "react";
import { Intro } from "../components/intro";
import { BranKatish, GeometricShape, HorizontalContainer } from "../components/common";
import { Timeline } from "../components/timeline/timeline";
import { WeddingDetails } from "../components/wedding-details";
import { BridalParty } from "../components/bridal-party";
import { Nav } from "../components/nav";
import { RSVP } from "../components/rsvp";

const WeddingPage = () => {
  const currentLogin = window.sessionStorage.getItem('currentPassword');
  if (currentLogin) {
    return (
      <main>
        <BranKatish>
          <Intro />
          <Nav />
          <WeddingDetails />
          <GeometricShape>
            <Timeline />
          </GeometricShape>
        <HorizontalContainer>
          <BridalParty />
        </HorizontalContainer>
        <RSVP />
        </BranKatish>
      </main>
    )
  } else {
    navigate('/index')
  }
}

export default WeddingPage

export const Head: HeadFC = () => <title>Wedding Home Page</title>