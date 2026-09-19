"use client";
import { Button } from "./ui/button";
import { NavigationMenuItem } from "./ui/navigation-menu";
import { logout } from "@/app/auth/actions";
import { useTransition } from "react";

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
