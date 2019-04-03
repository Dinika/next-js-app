import React from 'react';
import Router from 'next/router';

const AnotherPage = () => (
  <div>
    This is another page <br />
    <button onClick={() => Router.push('/')}>Back</button>
  </div>
);
export default AnotherPage;
