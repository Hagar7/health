import React, { useEffect } from 'react'
import ContactBanner from '../Components/ContactComponents/ContactBanner/ContactBanner'
import AnimatedRoutes from './AnimatedRoutes'
import { useDispatch, useSelector } from 'react-redux';
import { getContactPage } from '../store/Contact.Slice';
import ContactInfo from '../Components/ContactComponents/ContactInfo/ContactInfo';
import ContactMap from '../Components/ContactComponents/ContactMap/ContactMap';
import Form from '../Components/ContactComponents/Form/Form';

export default function Contact() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.contact);
  const { lang } = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(getContactPage(lang));
  }, [dispatch, lang]);
  return (
   <>
   <AnimatedRoutes/>
   <ContactBanner banner={data?.banner}/>
   <ContactInfo collaborations={data?.collaborations}/>
   <ContactMap info ={data?.contactInfo}/>
   <Form/>
   </>
  )
}
