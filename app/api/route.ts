import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, res: NextResponse) {
    console.log("request", request);
  return NextResponse.json({ name: "John Doe" });
}
