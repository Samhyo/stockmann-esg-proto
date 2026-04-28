export const metadata = {
  title: "Stockmann ESG Prototype",
  description: "AI-powered sustainability dashboard"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}