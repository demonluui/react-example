import React from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

// eslint-disable-next-line
const element1 = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
);

/*
 * <h1 data-reactroot="" class="greeting">Hello, world!</h1>
 */
// eslint-disable-next-line
const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

function Element1() { return ( element1 ) }
function Element2() { return ( element2 ) }

export {Element1, Element2}



/*
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

*/

