import moment from "moment";

export const formatDate = (eventObject) => {
  // If there is no start date
  if (!eventObject.startDate || !moment.isMoment(eventObject.startDate)) {
    return "";
  }

  // If there is an end date
  if (eventObject.endDate && moment.isMoment(eventObject.endDate)) {
    //If start date and end date are in the same month
    if (eventObject.startDate.month() === eventObject.endDate.month()) {
      return `${eventObject.startDate.format(
        "MMM D"
      )} - ${eventObject.endDate.format("D")}`;
    } else {
      return `${eventObject.startDate.format(
        "MMM D"
      )} - ${eventObject.endDate.format("MMM D")}`;
    }
  }

  return eventObject.startDate.format("MMM D");
};


export const isInThePast = (date) => {
    return moment().isSameOrAfter(date);
}

export const getMixCloudUrl = (id) => {
  return `https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=${encodeURIComponent(id)}`
}

