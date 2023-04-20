import React, { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

export default function AnimatedRoutes({ children, lang ,active}) {
  const [load, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [lang]);

  return (
    load && (
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          background: "white",
          zIndex: "100000000000000000000000000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top:"0"
        }}
      >
        <BounceLoader color="#e85530" loading />
      </div>
    )

  )
}
