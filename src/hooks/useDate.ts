import React from "react";

export default function useDate() {
  const [ date, setDate ] = React.useState(new Date());
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return date;
}