import React from "react";
import ReactGA from "react-ga";

const TRACKING_ID = "G-YZ99J5TXXP"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
export default useAnalyticsEventTracker;