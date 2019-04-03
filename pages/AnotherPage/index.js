import React from 'react';
import Router from 'next/router';
import Greeting from '../../components/Greeting';

const AnotherPage = props => (
  <div>
    This is another page <br />
    <Greeting message="Hola!" /> {props.name}
    <button onClick={() => Router.push('/')}>Back</button>
    <style jsx>{`
      div {
        text-align: center;
      }
    `}</style>
  </div>
);

AnotherPage.getInitialProps = context => {
  console.log(context);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Bonita' });
    }, 1000);
  });
  return promise;
};

export default AnotherPage;
