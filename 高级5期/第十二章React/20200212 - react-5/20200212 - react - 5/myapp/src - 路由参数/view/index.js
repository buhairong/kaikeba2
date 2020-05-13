import React from 'react';
function IndexPage(props) {
  //console.log(props);
  let {location,history,match} = props;
  console.log(match);
  return (
    <div>
        <h1>首页</h1>
        <button
          onClick={()=>{
            history.push("/about","hehe"); // 在JS中跳转
          }}
        >返回</button>
    </div>
  );
}

export default IndexPage;
