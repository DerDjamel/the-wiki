import db from "@/database/index";
import { usersSync } from "@/database/schema";

type NeonUser = {
  id: string;
  displayName: string | null;
  primaryEmail: string | null;
};

export async function ensureUserExists(neonUser: NeonUser): Promise<void> {
  await db
    .insert(usersSync)
    .values({
      id: neonUser.id,
      name: neonUser.displayName,
      email: neonUser.primaryEmail,
    })
    .onConflictDoUpdate({
      target: usersSync.id,
      set: {
        name: neonUser.displayName,
        email: neonUser.primaryEmail,
      },
    });
}
