// next-auth.config.js or wherever you configure NextAuth.js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    // your authentication providers (e.g., Google, GitHub, etc.)
  ],
  secret: '', // Set your secret here
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      // Customize JWT token if needed
      if (user) {
        token.id = user.id;
        token.username = user.username || null;
      }
      return token;
    },
    async session(session, token) {
      // Customize session object if needed
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin', // Customize sign-in page URL
  },
  // other configurations...
});
