import React from 'react';
function IndexPage(props) {
  //console.log(props);
  let {history} = props;
  console.log(history);
  return (
    <div>
        <h1>首页</h1>
        <button
          onClick={()=>{
            //history.go(-1);
            // **goBack 返回上一步
            // goForward 前进一步
            // **push 修改当前的 url
            // replace 修改当前的 url
            //history.replace("/about");
            history.push("/about"); // 在JS中跳转
          }}
        >返回</button>
    </div>
  );
}

export default IndexPage;
