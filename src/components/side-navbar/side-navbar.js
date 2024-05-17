import * as React from "react";
import styled from "@emotion/styled";
import EventList from "../event-list/event-list";
import { EventListType } from "../../utils/config";
import { Transform, sideNavbarLinks } from "../../utils/data";
import FeaturedWork from "../featured-work/featured-work";
import { ExternalLink, InternalLink, size } from "../../index.styles";
import Streaming from "../streaming/streaming";
import { graphql, useStaticQuery } from "gatsby";

const SideNavbarWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  padding: 1rem;
  overflow-x: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  ::-webkit-scrollbar{
    display: none;
  }

  @media only screen and (max-width: ${size.tablet}) {
    height: auto;
  } 

`;

const SideNavbar = () => {
  const events =  Transform.events(useStaticQuery(graphql`  {
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
  }`));


  return (
    <SideNavbarWrapper>
      <InternalLink activeClassName="is_active" to="/xyz"> xyz </InternalLink>
      {sideNavbarLinks.map((link, index) => link.external ?( 
        <ExternalLink key={index} href={link.url} target="__blank">
          {" "}
          {link.title}{" "}
        </ExternalLink>
      ) : (<InternalLink activeClassName="is_active" key={index} to={link.url}> {link.title} </InternalLink>))}

      <EventList events={events} type={EventListType.UPCOMING} />
      <EventList events={events} type={EventListType.PAST} />
      <FeaturedWork /> 
      <Streaming />
    </SideNavbarWrapper>
  );
};

export default SideNavbar;
