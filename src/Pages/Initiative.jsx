import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import InitiativeBanner from '../Components/InitiativeComponents/InitiativeBanner/InitiativeBanner';
import { getInitiativePage } from '../store/Initiative.slice';
import InitiativeAbout from '../Components/InitiativeComponents/InitiativeAbout/InitiativeAbout';
import Fitness from '../Components/InitiativeComponents/Fitness/Fitness';
import InitiativeEvent from '../Components/InitiativeComponents/InitiativeEvent/InitiativeEvent';

export default function Initiative() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.initiative);

  useEffect(() => {
    dispatch(getInitiativePage());
  }, [dispatch]);

  return (
    <>
    <InitiativeBanner banner={data?.banner}/>
    <InitiativeAbout initiative={data?.initiative}/>
    <Fitness nutrition={data?.nutrition}/>
    <InitiativeEvent journey={data?.journey} events={data?.events.cards} eventSection={data?.events} />
    </>
  )
}
