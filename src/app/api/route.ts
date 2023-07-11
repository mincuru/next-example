import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   // headers: {
  //   //   "Content-Type": "application/json",
  //   //   "API-Key": process.env.DATA_API_KEY,
  //   // },
  // });
  // const data = await res.json();
  console.log("request", request);
  const data = await Promise.resolve({ value: "Hello World" });
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log("body", body);
  return NextResponse.json({ body });
}
