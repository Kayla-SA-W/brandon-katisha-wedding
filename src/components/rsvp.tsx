import React, { useState } from 'react';
import styled from 'styled-components';
import "@fontsource/sacramento";
import '@fontsource/montserrat';
import { rsvpResponse, sendConfirmationEmail } from '../modules/email-confirmation';

const Form = styled.div`
    background-color: #3C1114;
    width: 70%;
    height: fit-content;
    display: flex;
    padding: 50px;
    margin: 50px;
    flex-direction: column;
`

const Container = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    font-family: 'montserrat';
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    > input {
        width: 200px;
    };
    > textarea {
        width: 200px;
    }
`

const Title = styled.div`
    font-family: 'Sacramento';
    color: white;
    font-size: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const Inputs = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    margin-right: 15%;
`

const AcceptDecline = styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin: 20px 0;
`

const Button = styled.button`
    margin-top: 10px;
    width: fit-content;
    background-color: white;
    font-family: 'montserrat';
    border: none;
    border-radius: 5px;
`

const RsvpConfirmation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`

export const RSVP = () => {
    const [filledOutForm, setFilledOutForm] = useState(false);
    const [rsvp, setRsvp] = useState({
        attending: false,
        name: '',
        phone: '',
        email: ''
    });

    const onClick = () => {
        sendConfirmationEmail(rsvp);
        rsvpResponse(rsvp);
        setFilledOutForm(true);
    }
    return (
        <Container id="RSVP">
            <Form>
                <Title>
                    RSVP
                </Title>
                {
                    !filledOutForm ?
                        <Inputs>
                            <AcceptDecline>
                                <div>
                                    <input type="radio" id="accept" name="acceptDecline" value='accept' onClick={(e) => setRsvp({ ...rsvp, attending: true })} />
                                    <label htmlFor="accept">Accepts with Pleasure</label>
                                </div>
                                <div>
                                    <input type="radio" id="decline" name="acceptDecline" value='decline' onClick={(e) => setRsvp({ ...rsvp, attending: false })} />
                                    <label htmlFor="decline">Declines with Regret</label>
                                </div>
                            </AcceptDecline>
                            <InputBox>
                                <label htmlFor='name'>Name:</label>
                                <input type="text" id="name" name="name" onChange={(e) => setRsvp({ ...rsvp, name: e.target.value })}></input>
                            </InputBox>
                            <InputBox>
                                <label htmlFor='phone'>Phone Number:</label>
                                <input type="text" id="phone" name="phone" onChange={(e) => setRsvp({ ...rsvp, phone: e.target.value })}></input>
                            </InputBox>
                            <InputBox>
                                <label htmlFor='email'>Email Address:</label>
                                <input type="text" id="email" name="email" onChange={(e) => setRsvp({ ...rsvp, email: e.target.value })}></input>
                            </InputBox>
                            <Button onClick={onClick}>Submit</Button>
                        </Inputs>
                        :
                        <RsvpConfirmation>Thank you for your RSVP.</RsvpConfirmation>
                }
            </Form>
        </Container>
    )
}