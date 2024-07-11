import { NextResponse as res, NextRequest as req } from "next/server";
import dbConnection from "../../../db/db";
import { ApiResponse } from "@/types/ApiResponse";
import { createUser, getUser } from "../../../controllers/user.controller";

export async function POST(req: req): Promise<res<ApiResponse>> {
    // Do whatever you want
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    try {   
        dbConnection();
      const response = await getUser(id);

      if(!response){
        return res.json({ message: "No response from controller get user", status: 500});
      }
  
      return res.json({ message: response.message, status: response.status, data: response.data });
  
    } catch (error) {
      return res.json({ message: "Error", status: 500, data: error });
    }
  }