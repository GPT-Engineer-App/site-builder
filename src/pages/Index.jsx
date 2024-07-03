import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Circle, ArrowRight } from "lucide-react";

const tabData = [
  { value: "projetos", label: "Projetos", content: "Gerencie seus projetos de forma eficiente com ferramentas avançadas de planejamento e execução." },
  { value: "custos", label: "Composições de custos materiais e mão de obra", content: "Controle os custos de materiais e mão de obra com precisão e transparência." },
  { value: "orcamento", label: "Orçamento", content: "Elabore orçamentos detalhados e acompanhe as variações financeiras ao longo do projeto." },
  { value: "cronograma", label: "Cronograma", content: "Planeje e monitore o cronograma do projeto para garantir a entrega no prazo." },
  { value: "medicoes", label: "Medições", content: "Realize medições precisas e acompanhe o progresso físico da obra." },
  { value: "diario-obras", label: "Diário de obras", content: "Mantenha um registro diário das atividades e ocorrências no canteiro de obras." },
  { value: "requisicoes-compras", label: "Requisições de compras", content: "Gerencie as requisições de compras de materiais e serviços de forma integrada." },
  { value: "ordem-compras", label: "Ordem de compras", content: "Emita ordens de compra e acompanhe o recebimento de materiais." },
  { value: "estoque-epis", label: "Estoque de EPI’s", content: "Controle o estoque de Equipamentos de Proteção Individual (EPI’s) para garantir a segurança dos trabalhadores." },
  { value: "gerenciamento-ferramentas", label: "Gerenciamento de Ferramentas", content: "Gerencie o uso e a manutenção das ferramentas utilizadas na obra." },
  { value: "financeiro", label: "Financeiro", content: "Acompanhe as finanças do projeto, incluindo despesas, receitas e fluxo de caixa." },
  { value: "faturas-locacao", label: "Faturas de locação", content: "Gerencie as faturas de locação de equipamentos e serviços." },
  { value: "gerenciamento-funcionarios", label: "Gerenciamento de funcionários", content: "Gerencie a equipe de funcionários, incluindo alocação e desempenho." },
  { value: "gerenciamento-empreiteiros", label: "Gerenciamento de empreiteiros", content: "Gerencie os empreiteiros e subcontratados envolvidos no projeto." },
  { value: "relatorio-ponto", label: "Relatório ponto", content: "Registre e acompanhe a frequência e o ponto dos trabalhadores." },
  { value: "relatorio-obras", label: "Relatório de obras", content: "Gere relatórios detalhados sobre o andamento e a performance da obra." },
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
        <div className="flex justify-center mb-6">
          <TooltipProvider>
            <div className="flex items-center space-x-4">
              <Tooltip>
                <TooltipTrigger>
                  <Circle className="h-8 w-8 text-primary" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cronograma</p>
                </TooltipContent>
              </Tooltip>
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              <Tooltip>
                <TooltipTrigger>
                  <Circle className="h-8 w-8 text-primary" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Orçamento</p>
                </TooltipContent>
              </Tooltip>
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
              <Tooltip>
                <TooltipTrigger>
                  <Circle className="h-8 w-8 text-primary" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Financeiro</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
        <p className="text-center">A integração entre os módulos permite uma gestão mais eficiente e precisa.</p>
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