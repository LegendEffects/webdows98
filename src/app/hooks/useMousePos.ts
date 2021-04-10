import React, { useEffect } from "react";
import ILocation from "../interfaces/ILocation";

export default function useMousePos() {
  const [ mousePos, setMousePos ] = React.useState<ILocation>({ x: 0, y: 0});

  useEffect(() => {
    const handler = (e: any) => {
      setMousePos({ x: e.x, y: e.y });
    }

    window.addEventListener('mousemove', handler);
    return () => {
      window.removeEventListener('mousemove', handler);
    }
  }, []);

  return mousePos;
}