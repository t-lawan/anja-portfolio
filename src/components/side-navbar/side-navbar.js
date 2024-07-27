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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: ${size.tablet}) {
    height: auto;
  }
`;

const SideNavbar = () => {
  let navbarItems = Transform.sideNavbarLinks(
    useStaticQuery(graphql`
      {
        contentfulWebsite {
          navbarItems {
            title
          }
        }
      }
    `)
  );
  const renderNavbarItem = (item, index) => {
    let comp;
    switch (item.title) {
      case "BANDCAMP":
        comp = (
          <ExternalLink
            key={index}
            href="https://ngozii.bandcamp.com/"
            target="__blank"
          >
            bandcamp
          </ExternalLink>
        );
        break;
      case "CONTACT":
        comp = (
          <InternalLink activeClassName="is_active" key={index} to={'/contact'}>
          contact
        </InternalLink>
        );
        break;
      case "MIXES":
        comp = (
          <InternalLink activeClassName="is_active" key={index} to={'/mixes'}>
          mixes
        </InternalLink>
        );
        break;
      case "SIBIN":
        comp = (
          <ExternalLink
            key={index}
            href="https://sibin.bandcamp.com/music"
            target="__blank"
          >
            sibin
          </ExternalLink>
        );
        break;
      case "UPCOMING_EVENTS":
        comp = <EventList type={EventListType.UPCOMING} />;
        break;
      case "PAST_EVENTS":
        comp = <EventList type={EventListType.PAST} />;
        break;
      case "STREAMING":
        comp = <Streaming />;
        break;
      case "FEATURED_WORK":
        comp = <FeaturedWork />;
        break;
    }

    return comp;
  };

  return (
    <SideNavbarWrapper>
      <InternalLink activeClassName="is_active" to="/xyz">
        {" "}
        xyz{" "}
      </InternalLink>

      {navbarItems.map((item, index) => (
        <>{renderNavbarItem(item, index)}</>
      ))}
    </SideNavbarWrapper>
  );
};

export default SideNavbar;
