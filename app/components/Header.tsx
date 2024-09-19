"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="sign-in">
      <Button variant="outline" asChild>
        <Link href="/sign-in">Sign In</Link>
      </Button>
    </div>
  );
}

export default Header;
