import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata = {
  metadataBase: new URL("https://fltecnologia.com.br"),
  title: {
    default: "FL TECNOLOGIA | Workstations Extremas, Servidores GPU e IA Privada",
    template: "%s | FL TECNOLOGIA"
  },
  description:
    "Workstations de alto desempenho, servidores corporativos, soluções de IA privada, renderização, infraestrutura de TI e computação avançada para empresas e governo.",
  keywords: [
    "workstation Threadripper PRO",
    "servidor GPU",
    "IA privada",
    "render farm",
    "infraestrutura de TI",
    "RTX PRO",
    "workstation CAD",
    "computação avançada"
  ],
  authors: [{ name: "FL TECNOLOGIA" }],
  creator: "FL TECNOLOGIA",
  publisher: "FL TECNOLOGIA",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fltecnologia.com.br",
    siteName: "FL TECNOLOGIA",
    title: "Workstations Extremas para IA, Engenharia e Renderização Profissional",
    description:
      "Arquiteturas sob medida para cargas críticas, LLM privado, CAD, 3D, ciência de dados e ambientes corporativos de alta exigência.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Infraestrutura premium de tecnologia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "FL TECNOLOGIA | Workstations Extremas e IA Privada",
    description: "Soluções enterprise para IA, engenharia, renderização e infraestrutura crítica.",
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport = {
  themeColor: "#0B0F14",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-[#0B0F14] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
