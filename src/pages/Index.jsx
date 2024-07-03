import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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

const testimonials = [
  {
    name: "João Silva",
    role: "Engenheiro Civil",
    feedback: "O SIGO transformou a maneira como gerenciamos nossos projetos. A integração entre os diferentes módulos é perfeita!",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Maria Oliveira",
    role: "Gerente de Projetos",
    feedback: "A visibilidade e controle que o SIGO proporciona são incomparáveis. Recomendo a todos os profissionais da construção.",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Carlos Pereira",
    role: "Arquiteto",
    feedback: "Com o SIGO, conseguimos reduzir significativamente os atrasos e custos em nossos projetos. Ferramenta indispensável!",
    image: "/images/testimonial3.jpg",
  },
];

const Index = () => {
  const [currentTab, setCurrentTab] = useState("projetos");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Bem vindo ao SIGO</h1>
        <p className="text-xl mb-6">Sistema integrado em gestão de obras</p>
        <Button variant="primary" size="lg">Saiba Mais</Button>
      </section>

      {/* Features Overview */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Principais Funcionalidades</h2>
        <Tabs defaultValue="projetos" className="w-full">
          <TabsList className="flex flex-wrap gap-2 justify-center">
            {tabData.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} className="mr-2 mb-2" onClick={() => setCurrentTab(tab.value)}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className={currentTab === tab.value ? "block" : "hidden"}>
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>{tab.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{tab.content}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Integration Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Como os Componentes se Conectam</h2>
        <p className="text-center mb-6">O SIGO integra todos os aspectos da gestão de obras, desde o planejamento até a execução, garantindo eficiência e controle total.</p>
        <img src="/images/integration-diagram.jpg" alt="Diagrama de Integração" className="w-full h-auto" />
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">O que nossos clientes dizem</h2>
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="flex flex-col items-center p-6">
                  <Avatar className="mb-4">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center">{testimonial.feedback}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-6xl mt-12 border-t pt-6 text-center">
        <p>&copy; 2023 SIGO. Todos os direitos reservados.</p>
        <Separator className="my-4" />
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-muted-foreground hover:text-foreground">Sobre</a>
          <a href="/contact" className="text-muted-foreground hover:text-foreground">Contato</a>
          <a href="/privacy" className="text-muted-foreground hover:text-foreground">Privacidade</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;