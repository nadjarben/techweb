import React from 'react';
import DescriptionEn from '../../components/home/en/DescriptionEn';
import ResponsiveEn from '../../components/home/en/ReponsiveEn';
import ServicesEn from '../../components/home/en/ServicesEn';
import '../../components/home/Home.css';

export default function HomePage() {
  return (
    <div>
      <DescriptionEn />
      <ResponsiveEn />
      <ServicesEn />
    </div>
  ) 
}
