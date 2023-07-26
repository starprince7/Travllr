import Banner from "@/components/banner";
import CreditCard from "@/components/credit-card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CreditCard />
      <Footer />
    </>
  );
}
