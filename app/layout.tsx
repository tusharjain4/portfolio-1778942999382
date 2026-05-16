import './globals.css';
import type { Metadata } from 'next';
import { DotGothic16, Manrope, Archivo, Archivo_Narrow, Source_Serif_4 } from 'next/font/google';

const dotGothic16 = DotGothic16({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dot-gothic-16',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const archivoNarrow = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-archivo-narrow',
  display: 'swap',
});

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pooja R. Sonar - Software Developer Portfolio',
  description: 'Pooja R. Sonar\'s portfolio featuring MERN stack and AI-driven solutions. Explore projects, skills, and professional journey.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=Manrope:wght@400;600;700&family=Archivo:wght@400;800&family=Archivo+Narrow:wght@500&family=Source+Serif+4:wght@600&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${dotGothic16.variable} ${manrope.variable} ${archivo.variable} ${archivoNarrow.variable} ${sourceSerif4.variable}`}
      >
        {children}
      </body>
    </html>
  );
}