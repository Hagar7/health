import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPublicationPage } from '../store/Publication.Slice';
import PubBanner from '../Components/PublicationComponents/PubBanner/PubBanner';
import Pub from '../Components/PublicationComponents/Pub/Pub';
import AnimatedRoutes from './AnimatedRoutes';

export default function Publication() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.publication);
    const  {lang}  = useSelector((state) => state.loading);

  
    useEffect(() => {
      dispatch(getPublicationPage(lang));
    }, [dispatch,lang]);
  return (
   <>
   <AnimatedRoutes/>
   <div className="container-fluid px-0 bg-white">
   <PubBanner banner={data?.banner}/>
   <Pub publications={data?.publications}/>
   </div>
   </>
  )
}
