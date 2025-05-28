import { useEffect, useState } from "react";

function useLocalStorage(
  key: string,
  initial: string
): [string, (value: string) => void] {
  let [data, setData] = useState(initial);

  useEffect(() => {
    let value = window.localStorage.getItem(key);
    // console.log("set from local")
    if (value) {
      setData(value);
    }
  }, []);
  function setValue(value: string) {
    // console.log(value)
    setData(value);
    window.localStorage.setItem(key, value);
  }

  return [data, setValue];
}

export default useLocalStorage;
