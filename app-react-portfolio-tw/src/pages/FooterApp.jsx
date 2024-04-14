import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
      <Footer style={{ backgroundColor: "#333", paddingTop: "20px" }} className="text-center flex flex-col justify-center">
        <div>
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand>
              <Link to="/">
                <img
                    src="../public/images/website-logo-sample.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="Sample website logo"
                />
              </Link>
            </Footer.Brand>
            <Footer.LinkGroup>
              <Footer.Link href="#" style={{ color: "#fff" }}>
                About
              </Footer.Link>
              <Footer.Link href="#" style={{ color: "#fff" }}>
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#" style={{ color: "#fff" }}>
                Licensing
              </Footer.Link>
              <Footer.Link href="#" style={{ color: "#fff" }}>
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
              href="#"
              by="Victor Agahi™"
              year={2024}
              style={{ color: "#fff" }}
          />
        </div>
      </Footer>
  );
};

export default FooterApp;
