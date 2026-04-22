import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: [
    // Temporarily disabled admin protection for debugging
    // '/admin/:path*',
    '/api/guides/:path*',
    '/api/templates/:path*',
    '/api/portals/:path*',
  ],
};
