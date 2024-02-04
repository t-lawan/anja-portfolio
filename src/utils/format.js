import moment from "moment";

export const formatDate = (eventObject) => {
  // If there is no start date
  if (!eventObject.start_date || !moment.isMoment(eventObject.start_date)) {
    return "";
  }

  // If there is an end date
  if (eventObject.end_date && moment.isMoment(eventObject.end_date)) {
    //If start date and end date are in the same month
    if (eventObject.start_date.month() === eventObject.end_date.month()) {
      return `${eventObject.start_date.format(
        "MMM D"
      )} - ${eventObject.end_date.format("D")}`;
    } else {
      return `${eventObject.start_date.format(
        "MMM D"
      )} - ${eventObject.end_date.format("MMM D")}`;
    }
  }

  return eventObject.start_date.format("MMM D");
};


export const isInThePast = (date) => {
    return moment().isSameOrAfter(date);
}

export const getMixCloudUrl = (id) => {
  return `https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=${encodeURIComponent(id)}`
}

