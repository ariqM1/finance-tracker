import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function Navbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription>This is a simple navigation menu.</SheetDescription>
        <ul>
          <li className="sign-in">
            <Link href="/sign-in">Sign In</Link>
          </li>
          <li className="dashboard">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="expenses">
            <Link href="/expenses">Expenses</Link>
          </li>
          <li className="financial-goals">
            <Link href="/financial-goals">Financial Goals</Link>
          </li>
          <li className="freeze">
            <Link href="/freeze">Freeze</Link>
          </li>
          <li className="add-accounts">
            <Link href="/add-accounts">Add Acounts</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
