import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShopNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-muted rounded-2xl p-6 mb-6">
        <Sparkles className="h-12 w-12 text-muted-foreground mx-auto" />
      </div>
      <h1 className="text-2xl font-bold mb-2">Salón de belleza no encontrado</h1>
      <p className="text-muted-foreground mb-8 max-w-sm">
        Este salón de belleza no existe o fue desactivado. Verifica el enlace e intenta nuevamente.
      </p>
      <Link href="/">
        <Button>Ir al inicio</Button>
      </Link>
    </div>
  );
}
