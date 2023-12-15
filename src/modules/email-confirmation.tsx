import emailjs from 'emailjs-com';

export interface Rsvp {
    name: string;
    attending: boolean;
    phone: string;
    email: string;
}

const attendingMessage = "We are so thankful that you will be able to join us on our special day! We are looking forward to celebrating with you.";
const notAttendingMessage = "We are so sorry that you will not be able to join us on our special day. We will miss you and hope to see you soon!";

export const sendConfirmationEmail = (rsvp: Rsvp) => {
    emailjs.send("service_4oqeqrs", "template_mllsm37", {
        name: rsvp.name,
        attending: rsvp.attending ? 'will be attending' : 'will not be attending',
        phone: rsvp.phone,
        email: rsvp.email
    }, 'user_nY97bkcJucuzmbFNnsTFY');
};

export const rsvpResponse = (rsvp: Rsvp) => {
    emailjs.send("service_4oqeqrs", "template_nid8ypm", {
        name: rsvp.name,
        attending: rsvp.attending ? 'yes' : 'no',
        message: rsvp.attending ? attendingMessage : notAttendingMessage,
        email: rsvp.email
    }, 'user_nY97bkcJucuzmbFNnsTFY');
};
