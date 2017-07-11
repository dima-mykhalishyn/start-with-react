import React from "react";
import ReactDOM from "react-dom"

import Layout from "./components/layout"

import { HashRouter} from 'react-router-dom'

const app = document.getElementById('app');

ReactDOM.render(
  <HashRouter>
    <Layout/>
  </HashRouter>
  , app);
