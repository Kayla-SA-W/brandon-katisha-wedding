import { passwords } from "./passwords"

export const getPasswords = () => passwords.map(({password}) => password);

export const getMatchGuest = (codeWord: string) => {
    passwords.forEach(({password, guestOne, guestTwo}) => {
        if(password === codeWord){
            return {
                guestOne: guestOne,
                guestTwo: guestTwo
            }
        }
    });
};