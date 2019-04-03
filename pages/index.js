import React, { Component } from 'react';
import Users from './Users';
import Link from 'next/link';

class App extends Component {
  static async getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: 'Super App' });
      }, 1000);
    });
    return promise;
  }
  render() {
    return (
      <div>
        <h1>
          Hi <Users />. Welcome to {this.props.appName}
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
  }
}

export default App;
