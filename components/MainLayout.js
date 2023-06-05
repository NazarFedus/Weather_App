import Link from "next/link";
import Head from "next/head";

export const  MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | Next forecast</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="next, javascript, react"></meta>
        <meta name="description" content="weather forecast application"></meta>
      </Head>
      <nav className="w-[100%] h-[100px] bg-slate-700 flex justify-center items-center text-xl gap-[50px] text-white">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={'/weather'}>Weather</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
