import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // If you want direct delivery instead of mailto, set VITE_CONTACT_ENDPOINT in your environment
    const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        // Basic validation
        if (!name.trim() || !email.trim() || !message.trim()) {
            toast({ title: 'Validation', description: 'Please fill all fields.', variant: 'destructive' });
            setIsSubmitting(false);
            return;
        }

        if (CONTACT_ENDPOINT) {
            try {
                const res = await fetch(CONTACT_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, message }),
                });

                if (res.ok) {
                    toast({ title: 'Message Sent', description: "Thank you — I'll get back to you soon.", variant: 'success' });
                    setName(''); setEmail(''); setMessage('');
                } else {
                    const text = await res.text();
                    toast({ title: 'Send Failed', description: text || 'Server error', variant: 'destructive' });
                }
            } catch (err) {
                toast({ title: 'Network Error', description: err?.message || 'Unable to send message', variant: 'destructive' });
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Fallback: open user's mail client with prefilled fields
            const subject = encodeURIComponent(`Contact from portfolio: ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:chikkaliprathamesh3@gmail.com?subject=${subject}&body=${body}`;
            setIsSubmitting(false);
            toast({ title: 'Opened Mail App', description: 'Your default mail client should open to send the message.', variant: 'default' });
        }
    };

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
                                          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/prathameshchikkali/" aria-label="LinkedIn">
                                              <Linkedin /> 
                                          </a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://x.com/Prathamesh_C33" aria-label="X">
                                              <Twitter /> 
                                          </a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" aria-label="Instagram">
                                              <Instagram /> 
                                          </a>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/" aria-label="Twitch">
                                              <Twitch /> 
                                          </a>
                                     </div>
                                </div>
                    </div>

                    <div className="bg-card rounded-lg p-8 shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="   Prathamesh Chikkali..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full py-3 rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="   chikkaliprathamesh3@gmail.com..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-3 rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="  Hello, I would like to talk about..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full py-3 rounded-md bg-background border border-input focus:outline-hidden focus:ring-2 focus:ring-primary transition-colors"
                                />
                            </div>
                            <button type="submit"
                            disabled={isSubmitting}
                             className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16}/>
                            </button>
                            <p className="text-xs text-muted-foreground mt-2">{CONTACT_ENDPOINT ? 'Messages are sent directly via the configured endpoint.' : 'This will open your default mail client to send the message (no backend configured).'} </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}