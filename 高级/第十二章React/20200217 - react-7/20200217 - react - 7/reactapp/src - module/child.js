import React, { Fragment } from 'react';
import style from "./child.module.css";
function Child() {
  return (
     <Fragment>
         <h1 id={style.title}>标题</h1>
         <div className={style.app}>
            <div></div>
        </div>
        <div className="box"></div>
        <div className={style.app2}></div>
     </Fragment> 
   
  );
}

export default Child;
