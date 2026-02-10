import Footer from "./Footer";
import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <Navigation />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
