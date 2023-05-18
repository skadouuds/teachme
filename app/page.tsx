import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Howtouse from "@/components/Howtouse";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Howtouse />
    </>
  );
}
