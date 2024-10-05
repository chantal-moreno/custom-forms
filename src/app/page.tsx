'use client';

import { Button } from '@/components/ui/button';
import { useAuthActions } from '@convex-dev/auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { signOut } = useAuthActions();
  return (
    <div>
      Logged in!
      <Button
        onClick={() => {
          signOut().then(() => {
            router.push('/auth'); // Redirect Sign In page after signing out
          });
        }}
      >
        Sign out
      </Button>
    </div>
  );
}

