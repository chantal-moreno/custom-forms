import { useState } from 'react';
import { useAuthActions } from '@convex-dev/auth/react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import Logo from '@/assets/logoipsum-223.svg';
import Image from 'next/image';

import { SignInFlow } from '../types';
import { TriangleAlert } from 'lucide-react';

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const { signIn } = useAuthActions();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const role = 'user';
  const status = 'active';

  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);

  const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    signIn('password', { status, role, name, email, password, flow: 'signUp' })
      .then(() => {
        // Redirect / page after sign up
        router.push('/');
      })
      .catch(() => {
        setError('Something went wrong');
      })
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <Card className="w-full h-full p-8">
      <div className="flex justify-center items-center pb-10">
        <Image
          src={Logo}
          alt={`Forms logo`}
          className="object-cover"
          width={80}
          height={80}
        />
      </div>
      <CardHeader className="px-0 pt-0 text-center">
        <CardTitle>Sign Up</CardTitle>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-10">
        <form onSubmit={onPasswordSignUp} className="space-y-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              disabled={pending}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              type="text"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              disabled={pending}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              disabled={pending}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              type="password"
              required
            />
            <p className="text-xs text-muted-foreground">
              Min. 6 characters, 1 number, 1 capital letter, 1 special
              character.
            </p>
          </div>
          <Button
            type="submit"
            variant="action"
            className="w-full"
            size="lg"
            disabled={pending}
          >
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="space-y-5 px-0 pb-10">
        <div>
          <Label className="text-sm text-muted-foreground">
            Already have an account?
          </Label>
          <Button
            variant="link"
            className=" text-violet-800"
            onClick={() => setState('signIn')}
          >
            Sign In
          </Button>
        </div>
      </CardFooter>
      <Button variant="link" className="w-full text-violet-800">
        Continue without an account
      </Button>
    </Card>
  );
};
