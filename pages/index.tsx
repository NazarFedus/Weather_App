import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import "tailwindcss/tailwind.css";
import { useState } from "react";
function Index() {
  const [city, setCity] = useState('')

  return (
    <MainLayout title={"Main page"}>
      <div className="w-full flex items-center mt-[100px] flex-col gap-5">
        <label htmlFor="city" className="text-5xl">
          Enter the city:
        </label>
        <input
          type="text"
          placeholder="Enter the city..."
          className="w-[300px] px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          onChange={(e) => setCity(e.target.value)}
        />
        <Link href={`/weather/${city}`}>Get Weather</Link>
      </div>
    </MainLayout>
  );
}

export default Index;
