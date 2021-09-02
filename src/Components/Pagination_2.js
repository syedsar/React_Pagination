import React, { useEffect, useState } from "react";

const Pagination_2 = ({ showPerPage, onPagination, totalUser }) => {
  const [counter, setCounter] = useState(1);
  const [numOfButton, setNumOfButton] = useState(Math.ceil(totalUser / showPerPage))

  useEffect(() => {
    const value = showPerPage * counter;
    console.log(`Start Value : ${value - showPerPage}`);
    console.log(`end value : ${value}`);
    const start = value - showPerPage;
    const end = value;
    onPagination(start, end);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numOfButton === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center px-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" onClick={() => onButtonClick("prev")}>
              Previous
            </a>
          </li>

          {
              new Array(numOfButton).fill('').map((ele, index)=>(
                <li className= {`page-item ${ index+1=== counter ? 'active' : null}`}>
            <a class="page-link" href="#" onClick={()=>setCounter(index+1)}>
              {index + 1}
            </a>
          </li>
              ))
          }
         
          <li class="page-item">
            <a class="page-link" href="#" onClick={() => onButtonClick("next")}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination_2;
