import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

library.add(fas);

export default function ArrowToTop() {
  useEffect(() => {
    const mybutton = document.querySelector("#arrowContainer");

    function scrollFunction() {
      const pxDelta = document.querySelector("nav").offsetHeight - 1;
      if (
        document.body.scrollTop > pxDelta ||
        document.documentElement.scrollTop > pxDelta
      ) {
        mybutton.style.bottom = "40px";
      } else {
        mybutton.style.bottom = "-120px";
      }
    }

    window.onscroll = () => {
      scrollFunction();
    };

    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    mybutton.addEventListener("click", topFunction);
  }, []);

  return (
    <div id="arrowContainer">
      <FontAwesomeIcon icon="fa-solid fa-arrow-up" size="3x" />
    </div>
  );
}
