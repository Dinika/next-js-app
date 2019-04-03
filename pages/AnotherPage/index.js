import React from 'react';
import Router from 'next/router';
import Greeting from '../../components/Greeting';

const AnotherPage = () => (
  <div>
    This is another page <br />
    <Greeting message="Hola!" />
    <button onClick={() => Router.push('/')}>Back</button>
    <style jsx>{`
      div {
        text-align: center;
      }
    `}</style>
  </div>
);
export default AnotherPage;
