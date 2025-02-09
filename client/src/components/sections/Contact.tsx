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
              <Button asChild variant="secondary" className="flex-1">
                <a href="mailto:jagmohangautam7@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button asChild variant="secondary" className="flex-1">
                <a href="https://www.linkedin.com/in/jagmohan-gautam-2b5b64249/" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </a>
              </Button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="flex-1">
                <a href="https://github.com/gautamjag7" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
              <Button asChild variant="secondary" className="flex-1">
                <a href="https://www.linkedin.com/in/jagmohan-gautam-2b5b64249/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}