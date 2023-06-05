import Link from "next/link";
import { useEffect } from "react";
import { getWeather } from "./api/weather";
import { MainLayout } from "../components/MainLayout";
import "tailwindcss/tailwind.css";
import axios from "axios";
function Index() {

  return (
    <MainLayout title={"Main page"}>
      <h1 className="text-red-600">Hello Index page</h1>
      <p>
        <Link href={"/about"}>About</Link>
      </p>
      <p>
        <Link href={"/posts"}>Posts</Link>
      </p>
      <p>
        <Link href={"/weather"}>Weather</Link>
      </p>

    </MainLayout>
  );
}

export default Index;
