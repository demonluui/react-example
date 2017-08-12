import React from 'react';

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}
/*
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
      <li key={number.toString()}>
          {number}
      </li>
    );
  return (
      <ul>{listItems}</ul>
    );
}
*/

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

function NumberList2(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const numbers = [1, 2, 3, 4, 5];


function App() {
  return (
  <div>
    <Blog posts={posts} />
    <NumberList numbers={numbers} />
    <NumberList2 numbers={numbers} />
  </div>
  );
}

export default App 
