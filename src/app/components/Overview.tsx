import React, { useEffect } from "react";

function Overview({ p }) {
  useEffect(() => {
    console.log(p);
  });
  return <div>{p?.groupName}</div>;
}

export default Overview;
