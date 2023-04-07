import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNewsPage } from '../store/News.Slice';
import NewsBanner from '../Components/NewsComponents/NewsBanner/NewsBanner';
import NewsSection from '../Components/NewsComponents/NewsSection/NewsSection';

export default function News() {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.news);
  
    useEffect(() => {
      dispatch(getNewsPage());
    }, [dispatch]);
  return (
    <>
    <NewsBanner banner={data?.banner}/>
    <NewsSection news={data?.news.cards}/>
    </>
  )
}
