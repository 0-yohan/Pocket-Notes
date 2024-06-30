import React from "react";
import styles from "./styles/HomePage.module.css";
import Bg from "./assets/landing-bg.png";
import { BiSolidLock } from "react-icons/bi";
function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.image}>
          <img src={Bg} alt="" width={365}/>
        </div>
        <div>Pocket Notes</div>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <p>
        <BiSolidLock />
        end-to-end encrypted
      </p>
    </div>
  );
}

export default HomePage;