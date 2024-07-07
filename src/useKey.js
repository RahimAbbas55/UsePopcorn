import { useEffect } from "react";
export function useKey( key , callback) {
  useEffect(
    function () {
      function escape(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          callback();
        }
      }
      document.addEventListener("keydown", escape);
      return function () {
        document.removeEventListener("keydown", escape);
      };
    },
    [key , callback]
  );
}
