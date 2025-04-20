import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex items-center bg-slate-50 justify-center h-screen" >
      <Card className="w-[440px] h-[600px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader className="border-b-2">

          <div className="py-2">
            <CardTitle> Chat AI </CardTitle>
            <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
          </div>
          
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>JT</AvatarFallback>
              <AvatarImage src="https://github.com/Server-prog.png" />
            </Avatar>
            <p className="leanding-relaxed">
              <span className="block font-bold text-slate-800">
                Eu:
              </span>
              What's your opinion about javaScript ? What's your opinion about javaScript ?What's your opinion about javaScript ?What's your opinion about javaScript ?What's your opinion about javaScript ?What's your opinion about javaScript ?
            </p>
          </div>
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>AG</AvatarFallback>
              <AvatarImage src="https://github.com/Antonio-Gabriel.png" />
            </Avatar>
            <p className="leanding-relaxed">
              <span className="block font-bold text-slate-800">
                AI
              </span>
              What's your opinion about javaScript ? What's your opinion about javaScript ?What's your opinion about javaScript ?What's your opinion about javaScript ?What's your opinion about javaScript ?What's your opinion about javaScript ?
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          < Input placeholder="how can i help you ?" />
          <Button type="submit"> Send </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
