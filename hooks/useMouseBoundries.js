import React, { useEffect } from "react";

export default function useMouseBoundries() {
  const [mousePosition, setMousePosition] = useState({
    clientX: 0,
    clientY: 0,
  });
  useEffect(() => {
    const updateMousePosition = (event) => {};

    return window.removeEventListener(movemouse, updateMousePosition);
  }, []);

  return <div>useMouseBoundries</div>;
}
