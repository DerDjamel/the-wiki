"use client";
import { authClient } from "@/lib/auth/client";
import { Button } from "./ui/button";
import { NavigationMenuItem } from "./ui/navigation-menu";

export function LogoutButton() {
  return (
    <NavigationMenuItem>
      <Button
        variant="default"
        onClick={async () => {
          await authClient.signOut();
          window.location.href = "/";
        }}
      >
        Logout
      </Button>
    </NavigationMenuItem>
  );
}
