import { NextResponse } from "next/server";
import { getSession } from "./utils/getSession";



export  async function middleware(request){
    console.log("Middleware is running!");
    const session =await getSession();
    const userNavigationRoute = request.nextUrl.pathname;
    console.log({userNavigationRoute});

    if (session) {
        if(userNavigationRoute ==="/login" ||
            userNavigationRoute === "/register"){
                return NextResponse.redirect(new URL("/",request.URL));

        }
        if(userNavigationRoute.startsWith("/admin") &&
    session.role|| "admin"){
     return NextResponse.redirect(new URL("/not-found",request.url));
    }
    }
    else{
     if (userNavigationRoute.startsWith("/admin") ||userNavigationRoute.startsWith("/user")) {
        return NextResponse.redirect( new URL("/not-found",request.url));
        
     }
    }
    return NextResponse.next();
}

export const config ={
    matcher:["/order","/profile","/admin","/login","/register"]
}