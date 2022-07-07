import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import contactInfo from "../data/contact/contactInfo.json";

library.add(fab, fas);

const contactoData = contactInfo;

export default function Footer() {
  return (
    <footer>
      <ul className="links">
        {contactoData.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.link} target="_blank">
                <FontAwesomeIcon
                  icon={item.icon}
                  size="2x"
                  style={{ color: "#bfbfbf" }}
                />
              </a>
            </li>
          );
        })}
      </ul>
      <p>
        2022{" "}
        <a className="link" href="./">
          Yago Pajariño
        </a>
      </p>
    </footer>
  );
}
