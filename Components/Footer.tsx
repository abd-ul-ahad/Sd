import Link from "next/link";
import Image from "react-bootstrap/Image";

export default function Footer() {
    
  let SocialMediaData = [
    {
      mediaLink: "https://instagram.com",
      imageSrc: "/images/home/instagram-footer.png",
      imageAlt: "instagram"
    },
    {
      mediaLink:"https://facebook.com",
      imageSrc: "/images/home/facebook-footer.png",
      imageAlt: "instagram"
    },
    {
      mediaLink: "https://twitter.com",
      imageSrc: "/images/home/twitter-footer.png",
      imageAlt: "instagram"
    },
    {
      mediaLink: "https://linkedin.com",
      imageSrc: "/images/home/linkedin-footer.png",
      imageAlt: "instagram"
    },
  ]
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">

          {SocialMediaData.map((e, i) => {
            return (
              <MediaIcons key={i} mediaLink={e.mediaLink} imageSrc={e.imageSrc} imageAlt={e.imageAlt} />
            )
          })}

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

const MediaIcons = ({ mediaLink, imageSrc, imageAlt }: {
    mediaLink: string,
    imageSrc: string,
    imageAlt: string
}  )  => {
  return (
    <a href={mediaLink} target="_blank" rel="noreferrer">
      <Image src={imageSrc}
        className="w-100 shadow-1-strong rounded mb-4 rounded-circle"
        alt={imageAlt}
      />
    </a>
  )
}
