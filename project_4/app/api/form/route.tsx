import { NextResponse } from "next/server";
import {cookies} from "next/headers"

export async function POST(req: Request) {
    const data = await req.json();

    cookies().set("formData", data);
    return NextResponse.json(data);
}

export async function GET(req: Request) {
    const data = cookies().get("formData");
    console.log(data);
    return NextResponse.json(data);
}