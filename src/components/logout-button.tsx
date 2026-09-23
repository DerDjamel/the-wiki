"use client";
import { useTransition } from "react";
import { logout } from "@/app/auth/actions";
import { Button } from "./ui/button";
import { NavigationMenuItem } from "./ui/navigation-menu";

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();
  return (
    <NavigationMenuItem>
      <Button
        variant="default"
        onClick={async () => {
          startTransition(async () => {
            await logout();
          });
        }}
      >
        {isPending ? "Logging out..." : "Logout"}
      </Button>
    </NavigationMenuItem>
  );
}
