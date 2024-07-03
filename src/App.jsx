import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import Start from "./pages/Start.jsx"; // Import Start page
import Projetos from "./pages/Projetos.jsx";
import Custos from "./pages/Custos.jsx";
import Orcamento from "./pages/Orcamento.jsx";
import Cronograma from "./pages/Cronograma.jsx";
import Medicoes from "./pages/Medicoes.jsx";
import DiarioObras from "./pages/DiarioObras.jsx";
import RequisicoesCompras from "./pages/RequisicoesCompras.jsx";
import OrdemCompras from "./pages/OrdemCompras.jsx";
import EstoqueEPIs from "./pages/EstoqueEPIs.jsx";
import GerenciamentoFerramentas from "./pages/GerenciamentoFerramentas.jsx";
import Financeiro from "./pages/Financeiro.jsx";
import FaturasLocacao from "./pages/FaturasLocacao.jsx";
import GerenciamentoFuncionarios from "./pages/GerenciamentoFuncionarios.jsx";
import GerenciamentoEmpreiteiros from "./pages/GerenciamentoEmpreiteiros.jsx";
import RelatorioPonto from "./pages/RelatorioPonto.jsx";
import RelatorioObras from "./pages/RelatorioObras.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Início",
    to: "/home",
    icon: <Home className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Start />} /> {/* Add Start route */}
            <Route path="/home" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="projetos" element={<Projetos />} />
              <Route path="custos" element={<Custos />} />
              <Route path="orcamento" element={<Orcamento />} />
              <Route path="cronograma" element={<Cronograma />} />
              <Route path="medicoes" element={<Medicoes />} />
              <Route path="diario-obras" element={<DiarioObras />} />
              <Route path="requisicoes-compras" element={<RequisicoesCompras />} />
              <Route path="ordem-compras" element={<OrdemCompras />} />
              <Route path="estoque-epis" element={<EstoqueEPIs />} />
              <Route path="gerenciamento-ferramentas" element={<GerenciamentoFerramentas />} />
              <Route path="financeiro" element={<Financeiro />} />
              <Route path="faturas-locacao" element={<FaturasLocacao />} />
              <Route path="gerenciamento-funcionarios" element={<GerenciamentoFuncionarios />} />
              <Route path="gerenciamento-empreiteiros" element={<GerenciamentoEmpreiteiros />} />
              <Route path="relatorio-ponto" element={<RelatorioPonto />} />
              <Route path="relatorio-obras" element={<RelatorioObras />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;