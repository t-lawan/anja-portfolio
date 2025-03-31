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

const SideNavbarWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* height: 100vh; */
  padding: 1rem;

  overflow: hidden;

  @media only screen and (max-width: ${size.tablet}) {
    height: auto;
    padding: 0;
  }
`;

const NavbarItemsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: ${size.tablet}) {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

const HamburgerWrapper = styled.div`
  background: ${(props) => (props.$show ? `rgba(0, 0, 0, 0.5)` : "none")};
  width: 100%;
`;

const MobileNavbarItemsWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 200;
`;

const ShowInTabletOrLess = styled.div`
  display: none;
  @media only screen and (max-width: ${size.tablet}) {
    width: 100%;
    display: block;
  }
`;

const ShowInDesktopOnly = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  @media only screen and (max-width: ${size.tablet}) {
    /* display: none; */
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

  const StyledExternalLink = styled(ExternalLink)`
    font-size: 2rem;
    @media only screen and (max-width: ${size.tablet}) {
      font-size: 1.5rem;
    }
  `;
  const StyledInternalLink = styled(InternalLink)`
    font-size: 2rem;
    @media only screen and (max-width: ${size.tablet}) {
      font-size: 1.5rem;
    }
  `;
  const renderNavbarItem = (item, index) => {
    let comp;
    switch (item.title) {
      case "BANDCAMP":
        comp = (
          <StyledExternalLink
            key={index}
            href="https://ngozii.bandcamp.com/"
            target="__blank"
          >
            bandcamp
          </StyledExternalLink>
        );
        break;
      case "CONTACT":
        comp = (
          <StyledInternalLink
            activeClassName="is_active"
            key={index}
            to={"/contact"}
          >
            contact
          </StyledInternalLink>
        );
        break;
      case "MIXES":
        comp = (
          <StyledInternalLink
            activeClassName="is_active"
            key={index}
            to={"/mixes"}
          >
            mixes
          </StyledInternalLink>
        );
        break;
      case "SIBIN":
        comp = (
          <StyledExternalLink
            key={index}
            href="https://sibin.bandcamp.com/music"
            target="__blank"
          >
            sibin
          </StyledExternalLink>
        );
        break;
      case "UPCOMING_EVENTS":
        comp = <EventList key={index} type={EventListType.UPCOMING} />;
        break;
      case "PAST_EVENTS":
        comp = <EventList key={index} type={EventListType.PAST} />;
        break;
      case "STREAMING":
        comp = <Streaming key={index} />;
        break;
      case "FEATURED_WORK":
        comp = <FeaturedWork key={index} />;
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
          <StyledInternalLink activeClassName="is_active" to="/xyz">
            anja ngozi
          </StyledInternalLink>
          {navbarItems.map((item, index) => (
            <>{renderNavbarItem(item, index)}</>
          ))}
        </NavbarItemsWrapper>
      </>
    );
  };

  return (
    <SideNavbarWrapper>
      <ShowInDesktopOnly>
        <HamburgerWrapper>
          <Hamburger
            size={20}
            direction="right"
            toggled={isOpen}
            toggle={toggleOpen}
          />
        </HamburgerWrapper>

        {isOpen && renderNavbarLinks()}
      </ShowInDesktopOnly>
    </SideNavbarWrapper>
  );
};

export default SideNavbar;
