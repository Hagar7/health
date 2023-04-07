import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPublicationPage } from '../store/Publication.Slice';
import PubBanner from '../Components/PublicationComponents/PubBanner/PubBanner';
import Pub from '../Components/PublicationComponents/Pub/Pub';

export default function Publication() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.publication);
  
    useEffect(() => {
      dispatch(getPublicationPage());
    }, [dispatch]);
  return (
   <>
   <PubBanner banner={data?.banner}/>
   <Pub publications={data?.publications}/>
   </>
  )
}
