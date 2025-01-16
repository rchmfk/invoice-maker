// import { auth } from '@/services/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { NextRequest, NextResponse } from 'next/server';

// export async function middleware(req: NextRequest) {
//     const { pathname } = req.nextUrl;
  
//     const protectedPaths = ['/protected', '/admin'];
  
//     if (protectedPaths.includes(pathname)) {
//         return new Promise<NextResponse>((resolve) => {
//           onAuthStateChanged(auth, (user) => {
//             if (!user) {
//               return resolve(NextResponse.redirect(new URL('/login', req.url)));
//             }
//             return resolve(NextResponse.next());
//           });
//         });
//       }
  
//     return NextResponse.next();
//   }
  
//   export const config = {
//     matcher: ['/protected/:path*', '/admin/:path*'],
//   };