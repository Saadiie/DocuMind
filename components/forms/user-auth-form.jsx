import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import Image from "next/image"

export default function UserAuthForm() {
  return (
    <>
      <div className="w-full space-y-2" width={24}
              height={24}
              >
        <Button  className="bg-primary hover:bg-opacity-90 text-custom-white font-bold py-2 px-4 rounded-full w-full max-w-xs transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center" onClick={() => signIn('google')}>
        {/* <svg xmlns="http://www.w3.org/2000/svg"  width="48" height="48">
  <path fill="#4285F4" d="M23.49 12.28c0-.72-.06-1.41-.18-2.07H12v4.08h6.26c-0.26-1.37-1.03-2.53-2.3-3.01z"></path>
  <path fill="#34A853" d="M12 7.28c1.44 0 2.66-.48 3.56-1.29l-3.56-2.65c-1.04.69-2.39 1.09-3.88 1.09-2.98 0-5.5-2.01-6.42-4.75H0v3.01C5.56 5.52 8.97 7.28 12 7.28z"></path>
  <path fill="#FBBC05" d="M5.58 2.24C6.5.88 8.02 0 9.82 0c1.38 0 2.62.46 3.58 1.29L15.75.72C14.19-.17 12.12-.57 10.17.12 8.91.49 7.85 1.19 7.11 2.24H5.58z"></path>
  <path fill="#EA4335" d="M0 1.8C.98 3.78 3.4 5.26 5.58 4.01l3.5-2.59c-.83-1.62-2.44-2.74-4.37-2.74-3.45 0-6.42 2.36-7.33 5.54H0v3.01z"></path>
</svg> */}

              
           
          Continue With Google
        </Button>
      </div>

    </>
  );
}
