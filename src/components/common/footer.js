import { TopButton } from "../ui/TopButton";

const Footer = () => {
  return (
    <>
      <footer className="footer">
          <p className="hide-mobile">We Design Your Thoughts.</p>
          <ul>
              <li><strong>© dndmobile.</strong> All rights reserved.</li>
          </ul>
      </footer>
      <TopButton />
    </>
  )
}

export default Footer;