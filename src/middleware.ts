import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware( request: NextRequest) {
    const cookie = request.cookies.get('authToken');
    const priveteRoutes = ['/perfil'];
    const isPriveteRoutes = priveteRoutes.includes(request.nextUrl.pathname)
    if (isPriveteRoutes && !cookie) {
        return NextResponse.redirect( new URL('/login' , request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/perfil'],
};