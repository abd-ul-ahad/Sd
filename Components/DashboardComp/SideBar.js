import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import styles from "../../styles/Dashboard.module.css";
import { GrClose } from "react-icons/gr";
import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      <div className={`position-fixed ${styles.sideBarWrap}`}>
        <div className="d-flex justify-content-between align-items-center py-2 px-2">
          <img
            src="/images/home/logo.png"
            style={{ height: "70px" }}
            alt="Logo"
          />
          <button
            className={`my-2 px-2 mx-2 h5 fw-bold  ${styles.buttonEffects}`}
          >
            <GrClose />
          </button>
        </div>

        <div className="my-2">

            
          <div>
            <p className="fw-lighter mx-3" style={{ opacity: "0.6" }}>
              DASHBOARD
            </p>
            <SideBarButton
              text={"Main"}
              reLink="/"
              icon={<AiOutlineHome className="h5" />}
            />
            <SideBarButton
              text={"Orders"}
              reLink="/"
              icon={<FiShoppingCart />}
            />
          </div>
          
          
        
        </div>
      </div>
    </div>
  );
}

const SideBarButton = ({ text, reLink, icon }) => {
  return (
    <div className="px-2">
      <button
        className={`${styles.buttonEffects} ${styles.buttonHover} my-2 py-2 px-4 w-100 d-flex justify-content-start align-items-center flex-row`}
      >
        {icon}
        <Link href={`${reLink}`}>
          <a className={styles.buttonText}>
            <p className="h5 mx-3">{text}</p>
          </a>
        </Link>
      </button>
    </div>
  );
};
