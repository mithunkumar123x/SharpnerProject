import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items,descendingOrder} = props;

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return descendingOrder ? [...items].sort((a, b) => a - b): [...items].sort((a,b) => a - b);
  }, [descendingOrder, items]); 
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);