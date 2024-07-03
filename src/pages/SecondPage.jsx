import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Monitor, Bell } from "lucide-react";

const SecondPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Gerenciamento de Projetos de Construção</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="flex flex-col items-center p-6">
          <Calendar className="h-12 w-12 mb-4" />
          <CardHeader>
            <CardTitle>Agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Planeje e agende tarefas de forma eficiente.</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center p-6">
          <Monitor className="h-12 w-12 mb-4" />
          <CardHeader>
            <CardTitle>Monitoramento em Tempo Real</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Monitore o progresso em tempo real.</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center p-6">
          <Bell className="h-12 w-12 mb-4" />
          <CardHeader>
            <CardTitle>Notificações</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Receba atualizações e alertas.</p>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Benefícios</h2>
        <ul className="list-disc list-inside">
          <li>Reduzir erros</li>
          <li>Minimizar atrasos</li>
          <li>Melhorar a eficiência</li>
        </ul>
      </div>
      <Button variant="primary" size="lg">Para mais detalhes, entre em contato conosco</Button>
    </div>
  );
};

export default SecondPage;