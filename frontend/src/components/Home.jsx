import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosel from './CategoryCarosel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Home() {
  useGetAllJobs();
  const {user} = useSelector(store => store.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if(user?.role === 'recruiter'){
      navigate('/admin/companies')
    }
  }, [])
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarosel/>
        <LatestJobs/>
       <Footer/>
    </div>
  )
}
