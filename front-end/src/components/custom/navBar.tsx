import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavBar = () => {
  return (
    <NavigationMenu className="p-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/"
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              )}
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/users"
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              )}
            >
              Lista
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
