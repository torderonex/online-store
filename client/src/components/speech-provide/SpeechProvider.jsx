import { useEffect, useContext, useRef } from "react";
import { speakText } from "../../utils/speakText";
import { Context } from "../..";
import { observer } from "mobx-react-lite";

function SpeechProvider({ children }) {
  const { store } = useContext(Context);
  const tagsRef = useRef([]);

  useEffect(() => {
    const handleMouseEnter = (elem) => {
      let hoverTimeout = setTimeout(() => {
        speakText(elem.innerHTML);
      }, 1000);

      elem.addEventListener("mouseleave", () => {
        clearTimeout(hoverTimeout);
      });
    };

    const attachEventListeners = () => {
      tagsRef.current.forEach((elem) => {
        elem.addEventListener("mouseenter", () => handleMouseEnter(elem));
      });
    };

    const detachEventListeners = () => {
      tagsRef.current.forEach((elem) => {
        elem.removeEventListener("mouseenter", () => handleMouseEnter(elem));
      });
    };

    detachEventListeners();
    tagsRef.current = Array.from(
      document.querySelectorAll(
        store.isBlind
          ? "h1, h2, h3, h4, h5, p, input, li"
          : "[data-speech-disabled]"
      )
    );

    attachEventListeners();

    return () => {
      detachEventListeners();
    };
  }, [store.isBlind]);

  return <>{children}</>;
}

export default observer(SpeechProvider);
