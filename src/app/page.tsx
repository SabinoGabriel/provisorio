import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-screen items-center justify-center flex flex-col space-y-16 p-10">
      <Button>primary button</Button>
      <Button variant={"outline"}>
        secondary button <ArrowRight />
      </Button>
      <Button variant={"link"}>link button</Button>
      <Card>Card Example</Card>
      <Input></Input>
      <footer className="w-full absolute bottom-4 flex flex-col space-y-2 items-center">
        <hr className="w-64" />
        <p className="text-sm">
          © 2025{" "}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href="https://seedabit.org.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seed a Bit
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}
