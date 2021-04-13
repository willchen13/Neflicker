import React from 'react';
import JumbotronContainer from './containers/jumbotron';
import FooterContainer from './containers/footer';
import FaqsContainer from './containers/faq';

export default function App() {
  return (
    <>
      <JumbotronContainer/>
      <FaqsContainer/>
      <FooterContainer/>
    </>
  );
}
