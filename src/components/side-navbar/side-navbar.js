import * as React from "react";
import styled from "@emotion/styled";
import EventList from "../event-list/event-list";
import { EventListType } from "../../utils/config";
import { Transform, sideNavbarLinks } from "../../utils/data";
import FeaturedWork from "../featured-work/featured-work";
import { ExternalLink, InternalLink, size } from "../../index.styles";
import Streaming from "../streaming/streaming";
import { graphql, useStaticQuery } from "gatsby";
import { Cross as Hamburger } from "hamburger-react";
import { render } from "react-dom";

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
    padding: 0;
  }
`;

const NavbarItemsWrapper = styled.div`
  @media only screen and (max-width: ${size.tablet}) {
    padding: 1rem;
  }
`;

const ShowInTabletOrLess = styled.div`
  display: none;
  @media only screen and (max-width: ${size.tablet}) {
    display: block;
  }
`;

const ShowInDesktopOnly = styled.div`
  display: block;
  @media only screen and (max-width: ${size.tablet}) {
    display: none;
  }
`;

const SideNavbar = () => {
  const [isOpen, setOpen] = React.useState(false);

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
          <InternalLink activeClassName="is_active" key={index} to={"/contact"}>
            contact
          </InternalLink>
        );
        break;
      case "MIXES":
        comp = (
          <InternalLink activeClassName="is_active" key={index} to={"/mixes"}>
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

  const toggleOpen = (toggleState) => {
    setOpen(toggleState);
  };

  const renderNavbarLinks = () => {
    return (
      <>
        <NavbarItemsWrapper>
          <InternalLink activeClassName="is_active" to="/xyz">
            anja ngozi
          </InternalLink>
          {navbarItems.map((item, index) => (
            <>{renderNavbarItem(item, index)}</>
          ))}
        </NavbarItemsWrapper>
      </>
    );
  };

  return (
    <SideNavbarWrapper>
      <ShowInTabletOrLess>
        <Hamburger
          size={20}
          direction="right"
          toggled={isOpen}
          toggle={toggleOpen}
        />
        {isOpen && renderNavbarLinks()}
      </ShowInTabletOrLess>
      <ShowInDesktopOnly>
        {renderNavbarLinks()}
      </ShowInDesktopOnly>
    </SideNavbarWrapper>
  );
};

export default SideNavbar;
