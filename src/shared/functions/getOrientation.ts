import { useEffect, useState } from "react";

export function GetOrientation() {
  const [orientation, setOrientation] = useState<"landscape" | "portrait">("landscape");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight / window.innerWidth > 0.5625) {
        setOrientation("landscape");
      } else {
        setOrientation("portrait");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return orientation;
}
