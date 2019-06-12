import React, { Component,} from 'react';
import Link from 'umi/link';
import styles from './index.css';

export default class Index extends Component {
  constructor(props) {
      super(props);
      this.state={
        data:'',
      }
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started
            </a>
          </li>
          <Link to="/users">go to /users</Link>
        </ul>
      </div>
    )
  }
}
