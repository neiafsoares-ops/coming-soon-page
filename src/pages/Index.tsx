import { Construction } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="flex justify-center">
          <Construction className="h-16 w-16 text-primary animate-bounce" />
        </div>
        <h1 className="text-5xl font-bold text-foreground tracking-tight">
          Em Construção
        </h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Estamos trabalhando para trazer algo incrível. Volte em breve!
        </p>
        <div className="flex justify-center gap-2 pt-4">
          <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
          <span className="h-3 w-3 rounded-full bg-primary animate-pulse [animation-delay:0.2s]" />
          <span className="h-3 w-3 rounded-full bg-primary animate-pulse [animation-delay:0.4s]" />
        </div>
      </div>
    </div>
  );
};

export default Index;
