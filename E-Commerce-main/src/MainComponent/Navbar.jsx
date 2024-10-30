import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import { toast } from "react-toastify";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = ({ setAdmin }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAdmin = () => {
    setAdmin(true);
    Navigate("/admin");
  };

  const [cartCounts, setCartCount] = useState([]);
  const [input, setInput] = useState(" ");
  const Idee = localStorage.getItem("id");
  const admin = localStorage.getItem("Admin");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const Navigate = useNavigate();
  const [data, setData] = useState([]);

  const OnChange = async (e) => {
    const Value = e.target.value.toLowerCase();
    setInput(Value);
    const Response = await axios.get("http://localhost:4000/datas");
    setData(
      Response.data.filter((item) => item.name.toLowerCase().includes(Value))
    );
  };

  const SingOut = () => {
    localStorage.clear("id");
    Navigate("/signin");
  };

  const CartCount = async () => {
    const Res = await axios.get(`http://localhost:4000/users/${Idee}`);
    setCartCount(Res.data.cart);
  };

  useEffect(() => {
    CartCount();
  }, []);

  return (
    <>
      <nav className="sticky z-[1] w-[100%] top-0 flex items-center justify-between flex-wrap bg-white py-0 lg:px-6 shadow border-solid border-t-2 border-gray-200">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-3 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-900 mr-16 mb-9z">
            <img
              className="h-20"
              src="https://static.thenounproject.com/png/560147-200.png"
              alt="Shoes logo"
            />
            <button
              className="font-semibold text-xl tracking-tight cursor-pointer"
              onClick={() => Navigate("/")}
            >
              Converse
            </button>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-md font-bold text-neutral-500 lg:flex-grow">
            <button
              onClick={() => Navigate("/men")}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"
            >
              Men
            </button>
            <button
              onClick={() => Navigate("/women")}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"
            >
              Women
            </button>
            <button
              onClick={() => Navigate("/kids")}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"
            >
              Kids
            </button>
            <button
              onClick={() => Navigate("/product")}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"
            >
              Products
            </button>
          </div>
          {/* search */}
          <div className="relative mx-auto text-gray-300 lg:block hidden mr-3">
            <input
              className="bg-black border-2 border-gray-950 h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              onChange={OnChange}
              placeholder="Search"
            />
            {input.trim() && (
              <div className="left-0 overflow-auto h-[400px] absolute w-[100%] top-[70px] z-50 bg-white">
                {data.map((e) => (
                  <div
                    onClick={() => Navigate(`detail/${e.id}`)}
                    key={e.name}
                    className="flex justify-between border p-2"
                  >
                    <h1>{e.name}</h1>
                    <img src={e.img} alt="" className="w-20 h-14 object-fill" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative flex items-center">
            <IconButton aria-label="cart" onClick={() => Navigate("/cart")}>
              <StyledBadge badgeContent={cartCounts.length} color="secondary">
                <ShoppingCartIcon sx={{ color: "black" }} />
              </StyledBadge>
            </IconButton>
          </div>

          <div className="flex cursor-pointer">
            <Button
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={faUser}
                className="text-gray-500 text-3xl ml-4 hover:text-black"
              />
            </Button>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>
                {Idee ? (
                  <button
                    onClick={() => {
                      SingOut();
                      Navigate("/singin");
                    }}
                  >
                    SIGN OUT
                  </button>
                ) : (
                  <button onClick={() => Navigate("/singin")}>SIGN IN</button>
                )}
              </MenuItem>
              {admin && (
                <MenuItem
                  onClick={
                    handleAdmin
                    // Navigate("/admin");
                    // toast.success("Admin Login Successfully");
                  }
                >
                  Go to Admin Page
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
