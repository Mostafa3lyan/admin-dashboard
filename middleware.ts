// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { getServerSession } from 'next-auth';
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export async function middleware(request: NextRequest) {

//     // please note that this middleware wont work corectly cuz we dont have token
//     const session = await getServerSession(authOptions);
//     if (session) {
//         if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') {
//             return NextResponse.redirect(new URL('/', request.url))
//         }
//         else {
//             return NextResponse.next()
//         }
//     }
//     else {
//         if (request.nextUrl.pathname === '/') {
//             return NextResponse.redirect(new URL('/login', request.url))
//         }
//         else {
//             return NextResponse.next()
//         }
//     }

// }

// export const config = {
//     matcher: ["/", "/login", "/signup"],
// }