import React from 'react';
import Description from '../components/home/Description';
import Responsive from '../components/home/Reponsive';
import Services from '../components/home/Services';
import '../components/home/Home.css';

export default function HomePage() {
  return (
    <div>
      <Description />
      <Responsive />
      <Services />
    </div>
  ) 
}
