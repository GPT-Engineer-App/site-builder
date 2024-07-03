import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabData = [
  { value: "projetos", label: "Projetos", content: "Implementação de Tecnologia de Gestão de Projetos: Desenvolver e utilizar softwares avançados de gestão de projetos que permitam uma programação detalhada e monitoramento em tempo real, reduzindo assim erros e atrasos." },
  { value: "custos", label: "Composições de custos materiais e mão de obra", content: "Utilização de Realidade Virtual e Modelagem 3D: Incorporar tecnologias como realidade virtual e modelagem 3D para visualização antecipada de projetos, identificando potenciais problemas no cronograma antes de começarem." },
  { value: "orcamento", label: "Orçamento", content: "Treinamento Avançado em Gestão de Projetos: Investir em programas de treinamento contínuo para gerentes de projeto e equipes de campo, focados em técnicas avançadas de planejamento e execução de projetos." },
  { value: "cronograma", label: "Cronograma", content: "Análise de Dados Históricos e Machine Learning: Utilizar análise de dados históricos de projetos passados e algoritmos de machine learning para prever e mitigar possíveis desvios no cronograma." },
  { value: "medicoes", label: "Medições", content: "Parcerias Estratégicas com Fornecedores e Subempreiteiros: Estabelecer parcerias sólidas e de longo prazo com fornecedores e subempreiteiros confiáveis, garantindo a disponibilidade oportuna de materiais e mão de obra qualificada." },
  { value: "diario-obras", label: "Diário de obras", content: "Implementação de Tecnologia de Gestão de Projetos: Desenvolver e utilizar softwares avançados de gestão de projetos que permitam uma programação detalhada e monitoramento em tempo real, reduzindo assim erros e atrasos." },
  { value: "requisicoes-compras", label: "Requisições de compras", content: "Utilização de Realidade Virtual e Modelagem 3D: Incorporar tecnologias como realidade virtual e modelagem 3D para visualização antecipada de projetos, identificando potenciais problemas no cronograma antes de começarem." },
  { value: "ordem-compras", label: "Ordem de compras", content: "Treinamento Avançado em Gestão de Projetos: Investir em programas de treinamento contínuo para gerentes de projeto e equipes de campo, focados em técnicas avançadas de planejamento e execução de projetos." },
  { value: "estoque-epis", label: "Estoque de EPI’s", content: "Análise de Dados Históricos e Machine Learning: Utilizar análise de dados históricos de projetos passados e algoritmos de machine learning para prever e mitigar possíveis desvios no cronograma." },
  { value: "gerenciamento-ferramentas", label: "Gerenciamento de Ferramentas", content: "Parcerias Estratégicas com Fornecedores e Subempreiteiros: Estabelecer parcerias sólidas e de longo prazo com fornecedores e subempreiteiros confiáveis, garantindo a disponibilidade oportuna de materiais e mão de obra qualificada." },
  { value: "financeiro", label: "Financeiro", content: "Implementação de Tecnologia de Gestão de Projetos: Desenvolver e utilizar softwares avançados de gestão de projetos que permitam uma programação detalhada e monitoramento em tempo real, reduzindo assim erros e atrasos." },
  { value: "faturas-locacao", label: "Faturas de locação", content: "Utilização de Realidade Virtual e Modelagem 3D: Incorporar tecnologias como realidade virtual e modelagem 3D para visualização antecipada de projetos, identificando potenciais problemas no cronograma antes de começarem." },
  { value: "gerenciamento-funcionarios", label: "Gerenciamento de funcionários", content: "Treinamento Avançado em Gestão de Projetos: Investir em programas de treinamento contínuo para gerentes de projeto e equipes de campo, focados em técnicas avançadas de planejamento e execução de projetos." },
  { value: "gerenciamento-empreiteiros", label: "Gerenciamento de empreiteiros", content: "Análise de Dados Históricos e Machine Learning: Utilizar análise de dados históricos de projetos passados e algoritmos de machine learning para prever e mitigar possíveis desvios no cronograma." },
  { value: "relatorio-ponto", label: "Relatório ponto", content: "Parcerias Estratégicas com Fornecedores e Subempreiteiros: Estabelecer parcerias sólidas e de longo prazo com fornecedores e subempreiteiros confiáveis, garantindo a disponibilidade oportuna de materiais e mão de obra qualificada." },
  { value: "relatorio-obras", label: "Relatório de obras", content: "Implementação de Tecnologia de Gestão de Projetos: Desenvolver e utilizar softwares avançados de gestão de projetos que permitam uma programação detalhada e monitoramento em tempo real, reduzindo assim erros e atrasos." },
];

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Bem vindo ao SIGO</h1>
      <p className="text-xl mb-6">Sistema integrado em gestão de obras</p>
      <Tabs defaultValue="projetos" className="w-full max-w-4xl">
        <TabsList className="flex flex-wrap">
          {tabData.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="mr-2 mb-2">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <p>{tab.content}</p>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Index;