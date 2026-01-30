import { ConfigurationCard } from "@/components/elements/configuration-card";
import PreviewCard from "@/components/elements/preview-card";
import { IconBrandGithub, IconEaseInControlPointFilled } from "@tabler/icons-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./components/ui/tooltip";

export function App() {

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <div className="container flex items-center justify-between flex-none lg:p-4 md:p-2 p-2">
                <div className="flex items-center gap-4">
                    <div className="text-primary flex items-center justify-center size-10 border-2 border-primary">
                        <IconEaseInControlPointFilled className="size-5" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Easing Functions</h1>
                        <p className="text-xs text-gray-500 font-light">by <span className="font-bold">@a2coder</span></p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <a href="https://github.com/a2-coder/easing-functions-playground" target="_blank" rel="noopener noreferrer">
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant="outline" size="icon">
                                    <IconBrandGithub />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                Open project on GitHub
                            </TooltipContent>
                        </Tooltip>
                    </a>
                </div>
            </div>
            <Separator className="flex-none" />
            <div className="container min-w-md flex flex-col lg:p-8 md:p-4 p-2 flex-1 lg:gap-8 md:gap-4 gap-2 max-w-2xl">
                <div className="flex flex-col justify-center lg:gap-8 md:gap-4 gap-2">
                    <ConfigurationCard />
                    <PreviewCard />
                </div>
            </div>
            <Separator className="flex-none" />
            <div className="flex items-center justify-center text-xs text-muted-foreground p-2">
                Copyright &copy; {new Date().getFullYear()} Arjun Palakkazhi. All rights reserved.
            </div>
        </div>
    )
}

export default App;