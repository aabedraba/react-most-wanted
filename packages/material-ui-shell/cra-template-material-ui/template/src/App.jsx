import React, { Component } from 'react'
import App from '@ecronix/base-shell/containers/App'
import config from './config'

export default class Demo extends Component {
  render() {
    return <App config={config} />
  }
}
