import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsPage } from '../store/News.Slice';
import NewsBanner from '../Components/NewsComponents/NewsBanner/NewsBanner';
import NewsSection from '../Components/NewsComponents/NewsSection/NewsSection';
import AnimatedRoutes from './AnimatedRoutes';

export default function News() {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.news);
    const  {lang}  = useSelector((state) => state.loading);
  
    useEffect(() => {
      dispatch(getNewsPage(lang));
    }, [dispatch,lang]);
  return (
    <>
    <AnimatedRoutes/>
    <NewsBanner banner={data?.banner}/>
    <NewsSection news={data?.news.cards}/>
    </>
  )
}
