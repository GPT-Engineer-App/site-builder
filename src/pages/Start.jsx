import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold mb-4">Bem vindo ao SIGO</h1>
      <Button variant="primary" size="lg" onClick={handleStart}>
        Começar
      </Button>
    </div>
  );
};

export default Start;