import { graphql } from "gatsby";


export const allEventQuery = `
  {
    allContentfulEvent {
      edges {
        node {
          title
          description {
            description
          }
          venueName
          venueLocation
          startDate
          endDate
        }
      }
    }
  }
`;