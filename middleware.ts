import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token, req }) => {
      if (req.nextUrl.pathname === '/admin/login') {
        return true;
      }

      return !!token;
    },
  },
});

export const config = {
  matcher: [
    '/admin',
    '/admin/guides/:path*',
    '/admin/templates/:path*',
    '/admin/portals/:path*',
    '/api/guides/:path*',
    '/api/templates/:path*',
    '/api/portals/:path*',
  ],
};
