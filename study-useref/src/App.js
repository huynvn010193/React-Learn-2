import { useEffect, useRef, useState } from "react";

// Lưu các giá trị

function App() {
  const [count, setCount] = useState(60);
  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    console.log(h1Ref.current);

    // Lấy toạ độ thẻ h
    const rect = h1Ref.current.getBoundingClientRect();
    console.log("rect", rect);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
      //setCount(count - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  // Ứng dụng kiểm tra state trước và sau.
  console.log(count, prevCount.current);

  return (
    <div style={{ padding: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
