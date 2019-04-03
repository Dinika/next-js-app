import React from 'react';
import Users from './Users';
import Link from 'next/link';

const App = () => (
  <div>
    <h1>
      Hi <Users />
    </h1>
    <h3>
      Click
      <Link href="AnotherPage">
        <a> here </a>
      </Link>
      to goto AnotherPage
    </h3>
  </div>
);

export default App;
