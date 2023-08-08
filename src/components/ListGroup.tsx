import { Fragment, useState } from "react";
// import { MouseEvent } from "react";

// { items:[], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // Hook: allows us to tap into features in React
  // useState this means this can have data that can change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // eventHandler
  //const handleClick = (event: MouseEvent) => console.log(event);

  // map the array elements to display them
  return (
    // Can not return more than one element so must wrap
    // empty angles tells react to wrap it in a fragment
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
