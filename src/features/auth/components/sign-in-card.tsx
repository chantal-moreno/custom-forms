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

interface SignInCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
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
        <CardTitle>Sign In</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 px-0 pb-10">
        <form className="space-y-6">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              disabled={false}
              value=""
              onChange={() => {}}
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              disabled={false}
              value=""
              onChange={() => {}}
              placeholder="Enter your password"
              type="password"
              required
            />
          </div>
          <Button
            type="submit"
            variant="action"
            className="w-full"
            size="lg"
            disabled={false}
          >
            Sign In
          </Button>
        </form>
      </CardContent>
      <CardFooter className="space-y-5 px-0 pb-10">
        <div>
          <Label className="text-sm text-muted-foreground">
            Don&apos;t have an account?
          </Label>
          <Button
            variant="link"
            className=" text-violet-800"
            onClick={() => setState('signUp')}
          >
            Sign Up
          </Button>
        </div>
      </CardFooter>
      <Button variant="link" className="w-full text-violet-800">
        Continue without an account
      </Button>
    </Card>
  );
};
