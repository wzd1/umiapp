import React, { Component,} from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import styles from './index.css';
import _ from 'lodash';

@connect(({ test_models, loading }) => ({
  test_models,
  loading: loading.effects['test_models/fetch'],
}))

class Index extends Component {
  constructor(props) {
      super(props);
      this.state={
        data:'',
      }
  }

  componentDidMount() {
    console.log(this.props)
    this.props.dispatch({
        type: 'test_models/fetch',
        payload: {
            page_size: 1,
        }
    });
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

export default Index;
