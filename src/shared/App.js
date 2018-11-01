
/**
 * @author Martín Luz
 * @version 1.0.0
 * @description App
 * @package src/shared/App
 */

import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import routes from "../shared/routes/routes";

import SeachNavBar from "./ui/SearchNavBar";
import NotFound from "../shared/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {data} = this.props;
    return (
      <div>
        <SeachNavBar />
        <div className="site-wrapper">
          <Switch>
          {routes.map(({ path, exactPath, exact, component: C, ...rest }) => (
              <Route
                key={path}
                path={exactPath}
                exact={exact}
                render={(props) => (
                  <C {...props} {...rest} data={data}/>
                )}
              />
            ))}
            <Route render={(props) => <NotFound {...props} />} />
          </Switch>
        </div>
      </div>
    )
  }
} 

export default App;