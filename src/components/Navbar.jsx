import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";

export default function Nav() {
const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className="font-sand p-3 w-screen fixed"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-1xl text-blue-900 text-shadow px-5">
            The Wilies{" "}
            <span className="text-white bg-blue-900 px-5 py-1 rounded-lg">
              Shoes
            </span>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden md:flex sm:hidden gap-4 font-bold"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className="hover:text-blue-900 hover:drop-shadow-md"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/about"
            aria-current="page"
            className="hover:text-blue-900 hover:drop-shadow-md"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/product"
            className="hover:text-blue-900 hover:drop-shadow-md"
          >
            Product
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            className="hover:text-blue-900 hover:drop-shadow-md "
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Tooltip
            content="Step in Style with The Wilies Shoes!"
            className="bg-blue-900 px-5 text-white font-bold border-2 border-blue-900 rounded-lg drop-shadow-md flex text-sm"
          >
            <Button
              as={Link}
              className="bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md smxxl:hidden sm:flex"
              href="/about"
              variant="flat"
            >
              Lets Get Started
            </Button>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {/* Collapse Menu */}
        <NavbarMenuItem>
          <NavbarContent
            className="flex flex-col gap-4 font-bold smxxl:mt-5 items-center h-96 w-full"
            justify="center"
          >
            <NavbarItem>
              <Link
                color="foreground"
                href="/"
                className="hover:bg-blue-900 py-1 px-3 hover:text-white hover:drop-shadow-md rounded-lg"
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/about"
                aria-current="page"
                className="hover:bg-blue-900 py-1 px-3 hover:text-white hover:drop-shadow-md rounded-lg"
              >
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="/product"
                className="hover:bg-blue-900 py-1 px-3 hover:text-white hover:drop-shadow-md rounded-lg"
              >
                Product
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link
                color="foreground"
                href="/contact"
                className="hover:bg-blue-900 py-1 px-3 hover:text-white hover:drop-shadow-md rounded-lg"
              >
                Contact
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Tooltip
                content="Step in Style with The Wilies Shoes!"
                className="bg-blue-900 px-5 text-white font-bold border-2 border-blue-900 rounded-lg drop-shadow-md smxxl:hidden sm:flex text-sm"
              >
                <Button
                  as={Link}
                  className="bg-blue-900 px-5 text-white font-bold hover:bg-white hover:text-blue-900 border-2 border-blue-900 rounded-lg hover:border-blue-900 hover:drop-shadow-md smxxl:flex sm:flex"
                  href="/about"
                  variant="flat"
                >
                  Lets Get Started
                </Button>
              </Tooltip>
            </NavbarItem>
          </NavbarContent>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
