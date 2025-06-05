import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useEffect, useState } from "react";

export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for reaching out! I'll get back to you soon.",
                duration: 3000,
                variant: "success",
            });
            setIsSubmitting(false);
        }, 1500);
    }

    return(
        <section id="contact" className="py-24 px-4 sm:px-6 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or just want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4> Email </h4>
                                    <a href= "mailto:chikkaliprathamesh3@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        chikkaliprathamesh3@gmail.com
                                    </a>
                                </div>
                            </div>

                             <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4> Phone </h4>
                                    <a href= "tel:+917972080461" className="text-muted-foreground hover:text-primary transition-colors">
                                        +91 7972080461
                                    </a>
                                </div>
                            </div>

                             <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        A/p-Shegaon, Solapur, Maharashtra, India
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect with me </h4>
                            <div className="flex space-x-4 justify-center">
                                <a target="_blank" href="https://www.linkedin.com/in/prathameshchikkali/">
                                   <Linkedin /> 
                                </a>
                                 <a target="_blank" href="https://x.com/Prathamesh_C33">
                                   <Twitter /> 
                                </a>
                                 <a target="_blank">
                                   <Instagram /> 
                                </a>
                                 <a target="_blank">
                                   <Twitch /> 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg p-8 shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="bolck text-sm font-medium mb-2"> Your Name </label>
                                <input type="text" id="name" name="name" required placeholder="   Prathamesh Chikkali..."
                                className="w-full py-3 rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="bolck text-sm font-medium mb-2"> Your Email </label>
                                <input type="email" id="email" name="email" required placeholder="   chikkaliprathamesh3@gmail.com..."
                                className="w-full py-3 rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="bolck text-sm font-medium mb-2"> Your Message </label>
                                <textarea type="text" id="message" name="message" required placeholder="  Hello, I would like to talk about..."
                                className="w-full py-3 rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"/>
                            </div>
                            <button type="submit"
                            disabled={isSubmitting}
                             className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}