import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        });

        // Clear the cookie
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
            path: "/", // ensure it's accessible throughout the site

        });

        return response;
    } catch (error: any) {
        // 🔴 MUST return this
        return NextResponse.json(
            {
                error: error.message || "Internal Server Error",
                success: false,
            },
            { status: 500 }
        );
    }
}
