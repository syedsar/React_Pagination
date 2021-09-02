import React, { useEffect, useState } from "react";

const Pagination = ({ showPerPage, onPagination, totalUser }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    console.log(`Start Value : ${value - showPerPage}`);
    console.log(`end value : ${value}`);
    const start = value - showPerPage
    const end = value
    onPagination(start, end);
  }, [counter]);


  const onButtonClick = (type)=>{
    if(type === 'prev'){
        if(counter=== 1){
            setCounter(1)
        }else{
            setCounter(counter - 1)
        }
    }else if(type === 'next'){
        if(Math.ceil(totalUser/showPerPage)=== counter){
            setCounter(counter)
        }else{
            setCounter(counter + 1)
        }
    }
  }

  return (
    <div className="d-flex justify-content-between px-5">
      <button
        className="btn btn-primary"
        onClick={() => onButtonClick('prev')}
      >
        Previous
      </button>
      <button
        className="btn btn-primary"
        onClick={() => onButtonClick('next')}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
