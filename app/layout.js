export const metadata = {
  title: "ESA Agent",
  description: "Assistente schemi elettrici",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
