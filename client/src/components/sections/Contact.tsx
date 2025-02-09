import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <Card className="max-w-2xl mx-auto border border-muted">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Feel free to reach out for collaborations or just a friendly chat
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="secondary" className="flex-1">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button variant="secondary" className="flex-1">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button variant="secondary" className="flex-1">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </Button>
              <Button variant="secondary" className="flex-1">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}