import { useState , useEffect } from "react";
export function useLocalStorageState( initialState , key) {
  const [val, setVal] = useState(function () {
    const storedVal = localStorage.getItem(key);
    return storedVal ? JSON.parse(storedVal) : initialState
  });

  useEffect(function(){
    localStorage.setItem(key , JSON.stringify(val))
  } , [val , key])
  return [ val , setVal ]
}
