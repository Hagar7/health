import React, { useEffect } from 'react'
import CareerBanner from '../Components/CareerComponents/CareerBanner/CareerBanner'
import AnimatedRoutes from './AnimatedRoutes'
import { useDispatch, useSelector } from 'react-redux';
import { getCareerPage } from '../store/Career.Slice';
import CareerInfo from '../Components/CareerComponents/CareerInfo/CareerInfo';
import CareerForm from '../Components/CareerComponents/CareerForm/CareerForm';

export default function Career() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.career);
  const { lang } = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(getCareerPage(lang));
  }, [dispatch, lang]);
  return (
    <>
    <AnimatedRoutes/>
    <CareerBanner banner={data?.banner}/>
    <CareerInfo  team={data?.joinTheTeam}/>
    <CareerForm/>
    </>
  )
}
