import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import { Element1 as App01_1, Element2 as App01_2 } from './01_render_elements';
import App02    from './02_components_props';
import App02_1  from './02_components_props_1';
import App02_2  from './02_components_props_2';
import App03    from './03_state_lifecycle';
import App04    from './04_handling_events';
import App05    from './05_conditional_rendering';
import App06    from './06_lists_keys';
import App07    from './07_forms';
import App08    from './08_lifting_state_up';
import App09    from './09_composition_vs_inheritance';
import App10_1  from './10_thinking1';
import App10_2  from './10_thinking2';
import App10_3  from './10_thinking3';
import App11    from './11_uncontrolled_components';
import App12    from './12_route_base';


function Home() {
  return (<div><h2>Welcome react-example</h2></div>);
}

var EXAMPLES = [
  {path: '/',         name: 'home',                       component: Home, exact:true},
  {path: '/App01_1',  name: 'hello world',                component: App01_1},
  {path: '/App01_2',  name: 'hello world 2',              component: App01_2},
  {path: '/App02',    name: 'components props',           component: App02},
  {path: '/App02_1',  name: 'components props 1',         component: App02_1},
  {path: '/App02_2',  name: 'components props 2',         component: App02_2},
  {path: '/App03',    name: 'state lifecycle',            component: App03},
  {path: '/App04',    name: 'handling events',            component: App04},
  {path: '/App05',    name: 'conditional rendering',      component: App05},
  {path: '/App06',    name: 'lists keys',                 component: App06},
  {path: '/App07',    name: 'forms',                      component: App07},
  {path: '/App08',    name: 'lifting state up',           component: App08},
  {path: '/App09',    name: 'compositionlvs inheritance', component: App09},
  {path: '/App10_1',  name: 'thinking1',                  component: App10_1},
  {path: '/App10_2',  name: 'thinking2',                  component: App10_2},
  {path: '/App10_3',  name: 'thinking3',                  component: App10_3},
  {path: '/App11',    name: 'uncontrolled components',    component: App11},
  {path: '/App12',    name: 'route base',                 component: App12}

];

class ExampleLink extends React.Component {
  render() {
    return (<li><Link to={this.props.to}>{this.props.name}</Link></li>);
  }
}

class Example extends React.Component {
  render(){
    var links = [];
    var routes = [];

    this.props.examples.forEach((e) => {
      links.push(<ExampleLink to={e.path} name={e.name} key={e.path}/>);
      routes.push(<Route exact={e.exact} path={e.path} component={e.component} key={e.path} />);
    });

    return (
      <Router>
        <div>
          <ul>
            {links}
          </ul>

          <hr />

          {routes}
        </div>
      </Router>
    );
  }
}
 


ReactDOM.render(
  <Example examples={EXAMPLES} />,
  document.getElementById('root')
);





