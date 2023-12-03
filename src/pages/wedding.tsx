import React, { useContext } from "react";
import { BranKatish, GeometricShape, HorizontalContainer } from "../components/common";
import { Intro } from "../components/intro";
import { Nav } from "../components/nav";
import { WeddingDetails } from "../components/wedding-details";
import { Timeline } from "../components/timeline/timeline";
import { BridalParty } from "../components/bridal-party";
import { RSVP } from "../components/rsvp";
import { CanEnterContext } from "../context/can-enter-context";

const Wedding = () => {
    const { canEnter } = useContext(CanEnterContext);
    if (typeof window !== 'undefined' && canEnter) {
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
    }
    return <div/>
};

export default Wedding;