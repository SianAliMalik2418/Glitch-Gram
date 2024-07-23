import { connectDB } from "@/lib/dbConnect";
import Image from "next/image";

export default async function Home() {
  await connectDB();
  return <div className="font-bold">Hello</div>;
}
