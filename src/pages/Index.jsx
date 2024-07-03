import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Bem vindo ao SIGO</h1>
      <p className="text-xl mb-6">Sistema integrado em gestão de obras</p>
      <Button variant="primary" size="lg" className="mb-6">Saiba mais</Button>
      <Table className="w-full max-w-4xl">
        <TableHeader>
          <TableRow>
            <TableHead>HMW: Como nós poderíamos minimizar os erros em cronogramas de obras</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1. Implementação de Tecnologia de Gestão de Projetos: Desenvolver e utilizar softwares avançados de gestão de projetos que permitam uma programação detalhada e monitoramento em tempo real, reduzindo assim erros e atrasos.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2. Utilização de Realidade Virtual e Modelagem 3D: Incorporar tecnologias como realidade virtual e modelagem 3D para visualização antecipada de projetos, identificando potenciais problemas no cronograma antes de começarem.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3. Treinamento Avançado em Gestão de Projetos: Investir em programas de treinamento contínuo para gerentes de projeto e equipes de campo, focados em técnicas avançadas de planejamento e execução de projetos.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4. Análise de Dados Históricos e Machine Learning: Utilizar análise de dados históricos de projetos passados e algoritmos de machine learning para prever e mitigar possíveis desvios no cronograma.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5. Parcerias Estratégicas com Fornecedores e Subempreiteiros: Estabelecer parcerias sólidas e de longo prazo com fornecedores e subempreiteiros confiáveis, garantindo a disponibilidade oportuna de materiais e mão de obra qualificada.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Index;