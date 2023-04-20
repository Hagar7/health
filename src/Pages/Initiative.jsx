import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InitiativeBanner from "../Components/InitiativeComponents/InitiativeBanner/InitiativeBanner";
import { getInitiativePage } from "../store/Initiative.slice";
import InitiativeAbout from "../Components/InitiativeComponents/InitiativeAbout/InitiativeAbout";
import Fitness from "../Components/InitiativeComponents/Fitness/Fitness";
import InitiativeEvent from "../Components/InitiativeComponents/InitiativeEvent/InitiativeEvent";
import AnimatedRoutes from "./AnimatedRoutes";

export default function Initiative() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.initiative);
  const  {lang}  = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getInitiativePage(lang));
  }, [dispatch,lang]);

  return (
    <>
    <AnimatedRoutes/>
    <div className="container-fluid px-0 bg-white">
      <InitiativeBanner banner={data?.banner} />
      <InitiativeAbout initiative={data?.initiative} />
      <Fitness nutrition={data?.nutrition} />
      <InitiativeEvent
        journey={data?.journey}
        events={data?.events.cards}
        eventSection={data?.events}
      />
      </div>
    </>
  );
}
