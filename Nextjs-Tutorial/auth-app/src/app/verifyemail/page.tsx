"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      const res = await axios.post("/api/users/verifyEmail", { token });
      console.log("Verification response:", res.data);
      setVerified(true);
    } catch (error: any) {
      console.log("Verification error:", error.response?.data || error.message);

      const errorMessage = error.response?.data?.error;

      if (errorMessage === "Email already verified") {
        setVerified(true);
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Verify Email</h1>
      <h2 className="p-2 bg-orange-500 text-black">
        {token ? `${token}` : "No token"}
      </h2>

      {verified && (
        <div className="mt-4">
          <h2 className="text-2xl text-green-600">Email Verified</h2>
          <Link href="/login" className="text-blue-600 underline">
            Go to Login
          </Link>
        </div>
      )}

      {error && (
        <div className="mt-4">
          <h2 className="text-2xl bg-red-500 text-black p-2">Verification Failed</h2>
        </div>
      )}
    </div>
  );
}
