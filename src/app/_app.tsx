import "src/app/globals.css";
import { Rubik as FontRubik } from "next/font/google";
import { AppProps } from "next/app";

// use Rubik as my font 
const Rubik = FontRubik({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  variable: "--Rubik-Regular"
});
   

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={Rubik.className}>
        <Component {...pageProps} />
    </main>
  );
}