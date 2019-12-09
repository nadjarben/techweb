import React from 'react';
import { Helmet } from 'react-helmet';
import Description from '../components/home/Description';
import Responsive from '../components/home/Reponsive';
import Services from '../components/home/Services';
import '../components/home/Home.css';

export default function HomePage() {
  return (
    <div>
      <Helmet>
          <title>Tech Web : Développeurs Web</title>
          <meta name="description" content="Tech Web est un collectif de développeurs web partageant leurs connaissances web et ouvert à toute proposition de freelance" />
      </Helmet>
      <Description />
      <Responsive />
      <Services />
    </div>
  ) 
}
