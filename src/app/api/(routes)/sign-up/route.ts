import { NextResponse as res, NextRequest as req } from "next/server";
import dbConnection from "../../db/db";
import User from "../../models/User.model";
import { ApiResponse } from "@/types/ApiResponse";
import { createUser, getUser } from "../../controllers/user.controller";

// To handle a POST request to /api
export async function POST(req: req): Promise<res<ApiResponse>> {
  // Do whatever you want
  const body = await req.json();

  dbConnection();

  try {   

    const response = await createUser(body);

    return res.json({ message: response.message, status: response.status, data: response.data });

  } catch (error) {
    return res.json({ message: "Error", status: 500, data: error });
  }
}
