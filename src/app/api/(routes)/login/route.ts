import { NextResponse as res, NextRequest as req } from "next/server";
import dbConnection from "../../db/db";
import User from "../../models/User.model";
import { ApiResponse } from "@/types/ApiResponse";
import { createUser, getUser } from "../../controllers/user.controller";

// To handle a POST request to /api
export async function POST(req: req): Promise<res<ApiResponse>> {

    const body = await req.json();
  
    dbConnection();

    
}
