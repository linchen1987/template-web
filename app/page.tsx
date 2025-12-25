import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <main className="flex flex-col items-center gap-8 px-4 text-center sm:px-8 md:max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Build Faster with <span className="text-primary">Shadcn UI</span>
          </h1>
          <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            This is a template pre-configured with Shadcn UI and Tailwind CSS v4.
            Start building your next idea with a modern stack.
          </p>
        </div>

        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="#">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </main>

      <footer className="absolute bottom-4 text-sm text-muted-foreground">
        <p>Built with Next.js & Tailwind v4</p>
      </footer>
    </div>
  );
}
