export interface ProjectItem {
  id: string;
  title: string;
  category: "acm" | "letra";
  categoryLabel: string;
  image: string;
}

export const ALL_PROJECTS: ProjectItem[] = [
  // Fachadas ACM (23 imagens)
  { id: "fac-1", title: "Fachada ACM Dalmonte Premium", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/011.webp" },
  { id: "fac-2", title: "Fachada Comercial ACM Azul", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/02(1).webp" },
  { id: "fac-3", title: "Projeto Revestimento ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/02.webp" },
  { id: "fac-4", title: "Fachada Corporativa em Alumínio Composto", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/03.webp" },
  { id: "fac-5", title: "Fachada Comercial Dalmonte", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/04.webp" },
  { id: "fac-6", title: "Revestimento Frontal ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/1 (2).webp" },
  { id: "fac-7", title: "Fachada Moderna em ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/1 (6).webp" },
  { id: "fac-8", title: "Projeto Corpus Fachada", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/1 corpus.webp" },
  { id: "fac-9", title: "Projeto Finalizado ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/1 final.webp" },
  { id: "fac-10", title: "Fachada Comercial Integrada", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/1(1).webp" },
  { id: "fac-11", title: "Painel ACM Comercial", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/1.webp" },
  { id: "fac-12", title: "Revestimento Metálico ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/2 (2).webp" },
  { id: "fac-13", title: "Fachada Corpus Alumínio", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/2 corpus.webp" },
  { id: "fac-14", title: "Execução Técnica ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/20240623_141139.webp" },
  { id: "fac-15", title: "Projeto Comercial Dalmonte", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/20251016_080602.webp" },
  { id: "fac-16", title: "Instalação Fachada ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/20260121_153759.webp" },
  { id: "fac-17", title: "Fachada de Alto Impacto", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/3 (6).webp" },
  { id: "fac-18", title: "Projeto Cloromatic ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/CLOROMATIC 4.webp" },
  { id: "fac-19", title: "Fachada Industrial Provoltruck", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/PROVOLTRUCK 1.webp" },
  { id: "fac-20", title: "Fachada Comercial Entregue", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/WhatsApp Image 2024-01-05 at 11.22.45.webp" },
  { id: "fac-21", title: "Revestimento Comercial Dalmonte", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/WhatsApp Image 2024-09-23 at 14.41.09 (3).webp" },
  { id: "fac-22", title: "Fachada de Loja em ACM", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/WhatsApp Image 2024-09-23 at 14.41.09 (5).webp" },
  { id: "fac-23", title: "Comunicação Visual Externa", category: "acm", categoryLabel: "Fachada ACM", image: "/Fachadas/Webp/WhatsApp Image 2025-09-22 at 15.08.22.webp" },

  // Letra Caixa (31 imagens)
  { id: "let-1", title: "Letra Caixa Iluminada Premium", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/1 (4).webp" },
  { id: "let-2", title: "Letras 3D em Aço e LED", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/1.webp" },
  { id: "let-3", title: "Letra Caixa com Iluminação Traseira", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/10.webp" },
  { id: "let-4", title: "Letra Caixa Galvanizada", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/2 (4).webp" },
  { id: "let-5", title: "Letras Tridimensionais Comercial", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/2.webp" },
  { id: "let-6", title: "Letra Caixa Frontlight LED", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/20250225_140530.webp" },
  { id: "let-7", title: "Logotipo 3D Iluminado", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/20250225_140729.webp" },
  { id: "let-8", title: "Letra Caixa com Backlight", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/20250225_140848.webp" },
  { id: "let-9", title: "Projeto Especial Letra Caixa", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/20250225_142524.webp" },
  { id: "let-10", title: "Letra Caixa Instalada Dalmonte", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/20260121_153457.webp" },
  { id: "let-11", title: "Comunicação 3D em Iluminação LED", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/20260121_153510.webp" },
  { id: "let-12", title: "Letras Bloco em Inox", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/2_1.webp" },
  { id: "let-13", title: "Letra Caixa de Alto Padrão", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/3 (3).webp" },
  { id: "let-14", title: "Letras Tridimensionais LED", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/3.webp" },
  { id: "let-15", title: "Letra Caixa para Entrada Comercial", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/6 (3).webp" },
  { id: "let-16", title: "Aplicação Letra Caixa Dalmonte", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/FOTO 01.webp" },
  { id: "let-17", title: "Letras Caixa em PVC Expandido", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/FOTO 1.webp" },
  { id: "let-18", title: "Letra Caixa com Corte de Precisão", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/FOTO 2.webp" },
  { id: "let-19", title: "Projeto Letra Caixa Noturna", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/FOTO 4.webp" },
  { id: "let-20", title: "Logotipo em Letra Caixa 3D", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/FOTO 5.webp" },
  { id: "let-21", title: "Letra Caixa Higa Supermercado 01", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/HIGA 4.webp" },
  { id: "let-22", title: "Letra Caixa Higa Supermercado 02", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/HIGA 7.webp" },
  { id: "let-23", title: "Letra Caixa Higa Supermercado 03", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/HIGA 8.webp" },
  { id: "let-24", title: "Letra Caixa Higa Supermercado 04", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/HIGA 9.webp" },
  { id: "let-25", title: "Letra Caixa Especial WhatsApp", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/Imagem do WhatsApp de 2024-10-09 à(s) 15.19.29_a28d025f.webp" },
  { id: "let-26", title: "Letra Caixa Rodeio Iluminada", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/RODEIO 7(1).webp" },
  { id: "let-27", title: "Letra Caixa Comercial 01", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/WhatsApp Image 2024-08-22 at 09.48.01.webp" },
  { id: "let-28", title: "Letra Caixa Comercial 02", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/WhatsApp Image 2024-08-22 at 09.48.02 (1).webp" },
  { id: "let-29", title: "Letra Caixa Comercial 03", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/WhatsApp Image 2024-08-22 at 09.48.02 (2).webp" },
  { id: "let-30", title: "Letra Caixa Comercial 04", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/WhatsApp Image 2024-08-22 at 09.48.04.webp" },
  { id: "let-31", title: "Letra Caixa Comercial 05", category: "letra", categoryLabel: "Letra Caixa", image: "/Letra Caixa/Webp/WhatsApp Image 2024-08-22 at 09.48.05.webp" },
];
