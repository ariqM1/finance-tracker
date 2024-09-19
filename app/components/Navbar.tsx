import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import "./Navbar.scss";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/expenses", label: "Expenses" },
  { href: "/financial-goals", label: "Financial Goals" },
  { href: "/freeze", label: "Freeze" },
  { href: "/add-account", label: "Add Account" },
];

export function Navbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="menuButton">
          <Menu className="menuIcon" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sheetContent">
        <SheetHeader>
          <SheetTitle className="sheetTitle">Menu</SheetTitle>
        </SheetHeader>
        <nav className="nav">
          {NAV_ITEMS.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link href={item.href} className="navLink">
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
