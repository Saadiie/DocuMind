import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === 'google') {
        try {
          const { name, email } = user;
          const token = account.access_token; // Extract token from account object
    
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, token }),
          });
    
          if (res.ok) {
            return true; // Allow sign-in
          } else {
            console.error('Failed to save user:', res.statusText);
            return false; // Deny sign-in on failure
          }
        } catch (error) {
          console.error('Error during sign-in:', error);
          return false; // Deny sign-in on error
        }
      }
      return true;
    },
    
    async redirect({ baseUrl }) {
      return baseUrl + '/dashboard'; // Redirect to dashboard after successful sign-in
    },
  },
  // secret: process.env.NEXTAUTH_SECRET, // Ensure you have this in your environment variables
};

export default NextAuth(authOptions);
