import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Box,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { useAuth } from "../context/useAuth";
import "./Navbar.css";
import Search from "../routes/Search";

const Navbar = () => {
  const { user, googleSignIn, logout } = useAuth();
  const toast = useToast();

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      toast({
        title: "Success",
        description: "Welcome!",
        status: "success",
        duration: 4000,
        position: "top",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Link to={"/"}>
      <div>
        <div className="navbar">
          <FaCoins className="icon" />
          <h1>
            Crypto <span className="aqua"> Info</span>
          </h1>

          {user && (
            <Menu>
              <MenuButton borderRadius={"8px"} bg="#333">
                <Avatar
                  h={"1.8rem"}
                  w={"2.3rem"}
                  borderRadius={"8px"}
                  bg="#333"
                  color={"aqua"}
                  fontWeight={"600"}
                  fontSize={".9rem"}
                  name={user?.displayName || user?.email}
                />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={logout}
                  borderRadius={"8px"}
                  p={".4rem"}
                  bg="#333"
                  color={"aqua"}
                  fontWeight={"500"}
                  fontSize={".7rem"}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          )}
          {!user && (
            <Box
              onClick={handleGoogleLogin}
              cursor={"pointer"}
              padding={"0.3rem"}
              border={"1px solid aqua"}
              borderRadius={"8px"}
              fontWeight={"600"}
              p={".4rem"}
              bg="#333"
              color={"aqua"}
              fontSize={"1rem"}
            >
              Login
            </Box>
          )}
        </div>
        
      </div>
    </Link>

    
    
  );
};

export default Navbar;
