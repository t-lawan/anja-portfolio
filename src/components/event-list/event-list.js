import * as React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { formatDate, isInThePast } from "../../utils/format";
import { data_events } from "../../utils/data";
import { EventListType } from "../../utils/config";
const EventListWrapper = styled.div``;
const EventWrapper = styled.div`
  margin-bottom: 1rem;
  /* :hover{
  } */
`;

const EventText = styled.p`
  margin: 0;
`;

const EventTitle = styled(EventText)`
  font-style: bold;
  /* animation: shadow ${(Math.random() * 5 + 3).toFixed(2)}s linear infinite alternate; */

`;

const EventDate = styled(EventText)`
  font-style: italic;
`;

const EventLink = styled.a`
  color: white;
  text-decoration: none;
`;

const Heading = styled.p`
  cursor: pointer;
  text-decoration: underline;
  :hover {
    color: #FFFFED;
    animation: rainbow 2s linear infinite, shadow 2s ease-in-out infinite alternate;

  }
`;

const EventList = (props) => {
  let events = data_events;
  const [open, setOpen] = React.useState(false);
  const toggleOpenState = () => {
    setOpen(!open);
  };

  switch(props.type) {
    case EventListType.UPCOMING: {
        events = events.filter((event) => {
            return !isInThePast(event.start_date)
        });
        break;
    }
    case EventListType.PAST: {
        events = events.filter((event) => {
            return isInThePast(event.start_date)
        })
        break;
    }
    default: {
        events = []
    }
  }

  
  events.sort((a, b) => b.start_date - a.start_date);

  return (
    <EventListWrapper>
      <Heading onClick={toggleOpenState}>
        {" "}
        {props.type === EventListType.UPCOMING
          ? "upcoming events"
          : "past events"}{" "}
      </Heading>
      {open ? (
        <>
          {" "}
          {events.map((event, index) => (
            <EventWrapper key={index}>
              <EventDate>{formatDate(event)}</EventDate>
              <EventTitle>{event.title}</EventTitle>
              <EventText>{event.short_description}</EventText>
            </EventWrapper>
          ))}
        </>
      ) : null}
    </EventListWrapper>
  );
};

EventList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default EventList;
