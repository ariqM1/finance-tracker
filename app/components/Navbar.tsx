import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Link href="/sign-in">Sign In</Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
