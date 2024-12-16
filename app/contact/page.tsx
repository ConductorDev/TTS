"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have questions about upcoming events or want to learn more about
                  The Train Station? We'd love to hear from you!
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  4672 5th Street Road<br />
                  Corbin, KY 40701
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Contact Info</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:info@thetrainstationcorbin.com" className="hover:text-primary">
                    info@thetrainstationcorbin.com
                  </a>
                  <br />
                  <a href="tel:9107039264" className="hover:text-primary">
                    (910) 703-9264
                  </a>
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
                <Input placeholder="Subject" required />
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}