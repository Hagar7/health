import React, { useEffect } from 'react'
import AnimatedRoutes from './AnimatedRoutes'
import { useDispatch, useSelector } from 'react-redux';
import { getDonationPage } from '../store/DonationSlice';
import DonationBanner from '../Components/DonationComponents/DonationBanner/DonationBanner';
import DonationForm from '../Components/DonationComponents/DonationForm/DonationForm';

export default function Donation() {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.donation);
    const { lang } = useSelector((state) => state.loading);
    useEffect(() => {
      dispatch(getDonationPage(lang));
    }, [dispatch, lang]);
  return (
    <>
    <AnimatedRoutes/>
    <DonationBanner banner={data?.banner}/>
    <DonationForm/>
    </>
  )
}
