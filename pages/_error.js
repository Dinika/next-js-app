import React from 'react';
import Link from 'next/link';

const ErrorPage = () => (
  <div>
    Something went wrong.{' '}
    <Link href="/">
      <a>Try going back</a>
    </Link>
  </div>
);

export default ErrorPage;
