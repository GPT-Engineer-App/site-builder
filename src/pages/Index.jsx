import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Bem vindo ao SIGO</h1>
      <p className="text-xl mb-6">Sistema integrado em gestão de obras</p>
      <Button variant="primary" size="lg">Saiba mais</Button>
    </div>
  );
};

export default Index;