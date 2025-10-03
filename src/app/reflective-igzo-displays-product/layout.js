import Footer from "@/components/Footer";

export const metadata = {
  title: "Sharp Displays",
  description: "Sharp display modules and products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
