import { gql } from 'apollo-boost';

const getProfileQuery = gql`
query profile($email: String) {
    profile(email: $email) 
    {
        fname
        lname
        email
        phoneNumber
        aboutMe
        city
        country
        company
        school
        languages
        gender
        profilePhoto
        isOwner
    }
}
`;
export {getProfileQuery};