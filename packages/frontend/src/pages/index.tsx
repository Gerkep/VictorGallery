import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useDeployments } from '@shared/useDeployments'
import { ethers } from 'ethers'
import type { NextPage } from 'next'
import { Lock } from 'src/types/typechain'
import 'twin.macro'
import Link from 'next/link'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const HomePage: NextPage = () => {
  return (
    <div>
      <Navbar />
      <div className="welcome-container">
        <div className="main-img" id="colorful-img"></div>
        <div className="main-img" id="red-img"></div>
        <div className="vl desktop" id="main-vl"></div>
        <h1 className="slogan">
          Cooking <b>Art</b>
          <br />
          in <b>Gen Z</b> Style
        </h1>
        <h3 className="main-description">
          Mixing conventional art with latest technology advancements and favorite Gen Z’s artists
          <span> 🧪 </span>
        </h3>
        <Link href="/events">
          <button className="button main-btn">CHECK OUT EVENTS!</button>
        </Link>
      </div>
      <div className="about-container">
        <div className="vl"></div>
        <h2 className="about-header mobile">Living Art.</h2>
        <h2 className="about-header desktop">
          Art X<br></br>Modern Music.
        </h2>
        <p className="about-description">
          Your favorite artists concerts in amazing atmosphere of animated art and{' '}
          <b>sick visual effects</b> prepared by our gallery.
        </p>
        <Link href="/collection">
          <button className="button collection-btn">See upcoming events</button>
        </Link>
        <div className="iphone-mockup mockup-appear"></div>
      </div>
      <div className="benefits-conatiner">
        <div className="hl"></div>
        <h2 className="benefits-header">What you get?</h2>
        <div className="benefits">
          <div className="benefit">
            <div className="benefit-illustration " id="vip-illustration"></div>
            <p className="benefit-description">Opportunity to meet your favorite artist.</p>
          </div>
          <div className="benefit">
            <div className="benefit-illustration" id="tokens-illustration"></div>
            <p className="benefit-description">Gift Tokens for which you can buy NFTs cheaper!</p>
          </div>
          <div className="benefit">
            <div className="benefit-illustration" id="community-illustration"></div>
            <p className="benefit-description">Access to newest singles before everyone else.</p>
          </div>
        </div>
      </div>
      <div className="cta-btn-container">
        <Link href="/events">
          <button className="button cta-btn">JOIN OUR UPCOMING EVENTS!</button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
