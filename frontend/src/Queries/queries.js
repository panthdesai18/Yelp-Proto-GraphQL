import { gql } from 'apollo-boost';

const getProfileQuery = gql`
query profile($email: String) 
    {
        profile(email: $email) {
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

const getSearchRestaurantQuery = gql`
query restaurantSearchProperty($city: String, $guest: Int, $sDate: String, $eDate: String, $filterPrice: String, $bedroom: String, $pageNo: Int) 
    {
        searchProperty(city: $city, guest: $guest, sDate: $sDate, eDate: $eDate, filterPrice: $filterPrice, bedroom: $bedroom, pageNo: $pageNo) {
            properties{
                _id
                ownerEmail,
                headline,
                description,
                streetAddress,
                city,
                propertyType,
                bedroom,
                accommodates,
                bathroom,
                amenitiesDetails,
                kitchenDetails,
                generalDetails,
                rate,
                availableFrom,
                availableTill,
                photos,
                created_at,
                updated_at
            }
            totalPages
        }
    }
`;

const getTravellersBookingQuery = gql`
query travellerProperties($travellerId: String, $propertyName: String, $sDate: String, $eDate: String, $pageNo: Int) 
    {
        travellerProperties(travellerId: $travellerId, propertyName: $propertyName, sDate: $sDate, eDate: $eDate, pageNo: $pageNo) {
            properties{
                ownerEmail,
                headline,
                streetAddress,
                city,
                propertyId,
                travellerId,
                guest,
                cost,
                photos,
                bookedFrom,
                bookedTill
            }
            totalPages
        }
    }
`;

const getOwnerBookingQuery = gql`
query ownerBookings($ownerEmail: String, $propertyName: String, $sDate: String, $eDate: String, $pageNo: Int) 
    {
        ownerBookings(ownerEmail: $ownerEmail, propertyName: $propertyName, sDate: $sDate, eDate: $eDate, pageNo: $pageNo) {
            properties{
                ownerEmail,
                headline,
                streetAddress,
                city,
                propertyId,
                travellerId,
                guest,
                cost,
                photos,
                bookedFrom,
                bookedTill
            }
            totalPages
        }
    }
`;

const getOwnerPropertiesQuery = gql`
query ownerProperties($ownerEmail: String) 
    {
        ownerProperties(ownerEmail: $ownerEmail) {
            properties{
                headline,
                city,
                availableFrom,
                availableTill,
                photos,
            }
        }
    }
`;

export { getProfileQuery, getSearchRestaurantQuery, getTravellersBookingQuery, getOwnerBookingQuery, getOwnerPropertiesQuery };