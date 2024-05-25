import { useEffect, useState } from "react";

export function GetOrientation() {
  const [orientation, setOrientation] = useState<"landscape" | "portrait" | "exact">("landscape");

  const handleResize = () => {
    if (window.innerHeight / window.innerWidth > 0.5625) {
      setOrientation("portrait");
    } else if (window.innerHeight / window.innerWidth === 0.5625) {
      setOrientation("exact");
    } else {
      setOrientation("landscape");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return orientation;
}
