import React from "react";
import "./style.css";
import style from "./InitiativeEvent.module.scss";
import EventsGallery from "../EventsGallery/EventsGallery";
import JourneyGallery from "../JourneyGallery/JourneyGallery";

export default function InitiativeEvent({ journey, events, eventSection }) {
  return (
    <div className={`${style.mainEvent}`}>
      <div className="container">
        <div className={`${style.eventInfo}`}>
          <div
            className={`${style.eventTabs} nav nav-tabs`}
            id="myTab"
            role="tablist"
          >
            <div className={`${style.right}`}>
              <button
                className={`${style.navEvent} nav-link active`}
                id="img-tab"
                data-bs-toggle="tab"
                data-bs-target="#journey-tab-pane"
                type="button"
                role="tab"
                aria-controls="journey-tab-pane"
                aria-selected="true"
              >
                {journey?.sectionTitle}
              </button>
            </div>
            <div className={`${style.left}`}>
              <button
                className={`${style.navEvent} nav-link`}
                id="video-tab"
                data-bs-toggle="tab"
                data-bs-target="#events-tab-pane"
                type="button"
                role="tab"
                aria-controls="events-tab-pane"
                aria-selected="false"
              >
                {eventSection?.sectionTitle}
              </button>
            </div>
          </div>

          <div className={`${style.tabContent} tab-content`} id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="journey-tab-pane"
              role="tabpanel"
              aria-labelledby="journey-tab"
              tabIndex={0}
            >
              <div className="container">
                <div className={`${style.journeyContent}`}>
                  <p
                    dangerouslySetInnerHTML={{ __html: journey?.description }}
                  ></p>
                  <JourneyGallery journey={journey} />
                </div>
              </div>
            </div>

            <div
              className={`${style.myEvent} tab-pane fade`}
              id="events-tab-pane"
              role="tabpanel"
              aria-labelledby="events-tab"
              tabIndex={0}
            >
              <EventsGallery events={events} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
