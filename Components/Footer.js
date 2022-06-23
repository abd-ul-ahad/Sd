import Link from "next/link";
import Image from "react-bootstrap/Image";

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="#">
            <Image src={'../images/home/instagram-footer.png'}
              className="w-100 shadow-1-strong rounded mb-4 rounded-circle"
              alt="insta-icon"
            />
          </a>
          <a href="#">
            <Image src={'../images/home/facebook-footer.png'}
              className="w-100 shadow-1-strong rounded mb-4 rounded-circle"
              alt="fb-icon"
            />
          </a>
          <a href="#">
            <Image src={'../images/home/twitter-footer.png'}
              className="w-100 shadow-1-strong rounded mb-4 rounded-circle"
              alt="twitter-icon"
            />
          </a>
          <a href="#">
            <Image src={'../images/home/linkedin-footer.png'}
              className="w-100 shadow-1-strong rounded mb-4 rounded-circle"
              alt="linkedIn-icon"
            />
          </a>
        </div>
        <ul className="list-inline">

          <li className="list-inline-item">
            <Link href='/'><a>Home</a></Link>
          </li>

          <li className="list-inline-item">
            <Link href='/services'><a>Services</a></Link>
          </li>
          <li className="list-inline-item">
            <Link href='/career'><a>Career</a></Link>
          </li>
        </ul>
        <p className="copyright">SayabiDevs © 2022</p>
      </footer>
    </div>
  )
}
