import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";

function NavbarApp() {
    return (
        <Navbar fluid rounded className="bg-slate-200 dark:bg-slate-800" style={{ borderBottom: "1px solid #333" }}>
            <Navbar.Brand>
                <Link to="/">
                    <img
                        src="../images/website-logo-sample.png"
                        className="mr-3 h-6 sm:h-9"
                        alt="Sample website logo"
                    />
                </Link>
            </Navbar.Brand>

            <div className="flex md:order-2">
                <DarkThemeToggle />
                <Button className="mx-2">
                    <Link to="/contact">Contact</Link>
                </Button>
                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link className="mx-2">
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link className="mx-2">
                    <Link to="/portfolio">Portfolio</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarApp;
