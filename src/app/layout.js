import { Poppins } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Stuvio | Next + GSAP",
  description: "Stuvi Task",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppinsSans.variable} antialiased`} cz-shortcut-listen="true"
            >
                {children}
            </body>
        </html>
    );
}
