import { NextResponse, NextRequest } from "next/server";
import dbConnection from "../../db/db";
import User from "../../models/User.model";

// To handle a GET request to /api
export async function GET(req: NextRequest) {
  // Do whatever you want
  dbConnection();
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(req: NextRequest) {
  // Do whatever you want
  
  dbConnection();

  try {   
    const body = await req.json();
    const user = await User.create(body)

    return NextResponse.json({ message: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}