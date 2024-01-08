import { useUserContext } from "@/context/AuthContext";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Topbar = () => {
  // const navigate = useNavigate();
  const { user } = useUserContext();
  // const {mu}
  useEffect(() => {
    // if (isSuccess) navigate(0);
  });
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Link to={`/profile/userId`} className="flex-center gap-3">
            <Button
              variant={"ghost"}
              className="shad-button_ghost"
              // onClick={() => signOut()}
            >
              <img src="/assets/icons/logout.svg" alt="logout" />
            </Button>
            <img
              src={user.imageUrl || "assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;