import React from 'react';
import { Link,withRouter } from 'react-router-dom';
function IndexPage(props) {
  console.log(props);
  return (
    <div>
        <h1>留言列表</h1>
        <nav>
          <Link to="/list/1">1</Link>
          <span> | </span>
          <Link to="/list/2">2</Link>
          <span> | </span>
          <Link to="/list/3">3</Link>
          <span> | </span>
          <Link to="/list/4">4</Link>
        </nav>
    </div>
  );
}

export default withRouter(IndexPage);
