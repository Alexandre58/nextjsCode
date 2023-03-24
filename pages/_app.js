import Footer from "@/components/Footer";
import MyLayout from "@/components/MyLayout";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />;
    </MyLayout>
  );
}
