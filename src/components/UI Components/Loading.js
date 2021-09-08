import React, { useEffect, useState } from "react";
import { Progress } from "rsuite";
const { Line } = Progress;

// ==================================================================

const Loading = (props) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => setValue(100), 500);
    return;
  }, []);
  return (
    <div className="main-loading z-1000 w-100">
      <Line percent={value} strokeColor="blue" showInfo={false} />
    </div>
  );
};
export { Loading };
