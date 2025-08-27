import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModels";

connect();

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();
    console.log("Verifying token:", token);

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      // Check if already verified
      const alreadyVerifiedUser = await User.findOne({ verifyToken: token });
      if (alreadyVerifiedUser?.isVerified) {
        return NextResponse.json({
          message: "Email already verified",
          success: true,
        });
      }

      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    await user.save();

    return NextResponse.json({
      message: "Email verified successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
