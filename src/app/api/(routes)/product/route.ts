import { NextResponse, NextRequest } from "next/server";
import dbConnection from "../../db/db";
import Product from "../../models/Product.model";



// To handle a GET request to /api
export async function GET(req: NextRequest) {
  // Do whatever you want
  dbConnection();
  try {
    const products = await Product.find();
    return NextResponse.json({ products }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
    
  }
}

// To handle a POST request to /api
export async function POST(req: NextRequest) {
  // Do whatever you want
  dbConnection()

  try {   
    const body = await req.json();
    const product = await Product.create(body)

    return NextResponse.json({ message: product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}