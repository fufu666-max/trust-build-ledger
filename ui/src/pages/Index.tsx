import { Header } from "@/components/Header";
import { TradeCard } from "@/components/TradeCard";
import { CreateTradeDialog } from "@/components/CreateTradeDialog";
import { 
  Shield, Lock, CheckCircle, Globe, BarChart3, Users, Zap, 
  ShieldCheck, ArrowRight, MousePointer2, Mail, HelpCircle, 
  FileText, Network, Server, Fingerprint, Activity, Database,
  Cpu, Layers, MessageSquare, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const initialTrades = [
  {
    id: "1",
    buyer: "TechCorp Industries",
    seller: "Global Supplies Ltd",
    product: "Industrial Electronics",
    encryptedValue: "0x7f9a...c3d2",
    encryptedTerms: "0x4b2e...8f1a",
    encryptedSettlement: "0x9c3d...2a7b",
    status: "pending" as const,
    date: "Dec 15, 2024"
  },
  {
    id: "2",
    buyer: "Manufacturing Co",
    seller: "Raw Materials Inc",
    product: "Steel Alloy Components",
    encryptedValue: "0x2d8f...9e4c",
    encryptedTerms: "0x6a1b...5d3f",
    encryptedSettlement: "0x8e2c...1f6a",
    status: "confirmed" as const,
    date: "Dec 14, 2024"
  },
  {
    id: "3",
    buyer: "Pharma Solutions",
    seller: "BioTech Exports",
    product: "Medical Equipment",
    encryptedValue: "0x5c7a...3b9d",
    encryptedTerms: "0x9f4e...7c2a",
    encryptedSettlement: "0x1a6d...4e8b",
    status: "settled" as const,
    date: "Dec 10, 2024"
  }
];

const Index = () => {
  const [trades, setTrades] = useState(initialTrades);

  const handleCreateTrade = (newTrade: any) => {
    setTrades(prev => [newTrade, ...prev]);
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 scroll-smooth">
      <Header />
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-secondary/5 blur-[120px]" />
        
        {/* Floating Icons Decor */}
        <div className="absolute top-1/4 left-10 opacity-20 animate-bounce duration-[3000ms]">
          <Database className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-1/3 right-20 opacity-20 animate-bounce duration-[4000ms] delay-500">
          <Cpu className="w-16 h-16 text-accent" />
        </div>
        <div className="absolute bottom-1/4 left-20 opacity-20 animate-bounce duration-[3500ms] delay-1000">
          <Layers className="w-14 h-14 text-secondary" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] -z-10" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
              <Zap className="w-3 h-3" />
              <span>Next Generation Trade Privacy</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-[1.1]">
              Trade Globally, <br className="hidden sm:block" />
              Secure Every Number
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Field-level encryption for trade settlements. Only approved partners can decrypt protected values after mutual confirmation using Zama's fhEVM technology.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <CreateTradeDialog onCreateTrade={handleCreateTrade} />
              <Button size="lg" variant="outline" className="px-8 border-border hover:bg-muted transition-all group">
                View Documentation
                <ExternalLink className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
            
            <div className="mt-12 flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center gap-2"><Fingerprint className="w-5 h-5" /> FHE-Powered</div>
              <div className="flex items-center gap-2"><Network className="w-5 h-5" /> Layer 2 Ready</div>
              <div className="flex items-center gap-2"><Server className="w-5 h-5" /> Fully Decentralized</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Field-Level Encryption</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each trade value, term, and settlement figure is individually encrypted for maximum security using homomorphic encryption.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-success/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-success/5 rounded-full blur-2xl group-hover:bg-success/10 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mutual Confirmation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Both parties must confirm before encrypted details are revealed to approved partners, ensuring consensus.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Trade Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connect with verified trade partners worldwide with blockchain-verified credentials and instant settlements.
              </p>
            </div>
          </div>

          {/* Trusted By Section (Decorative) */}
          <div className="pt-20 border-t border-border animate-in fade-in duration-1000 delay-500">
            <p className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest">Trusted By Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-bold text-2xl hover:scale-105 transition-transform"><ShieldCheck className="w-8 h-8" /> TECHCORP</div>
              <div className="flex items-center gap-2 font-bold text-2xl hover:scale-105 transition-transform"><Globe className="w-8 h-8" /> GLOBEX</div>
              <div className="flex items-center gap-2 font-bold text-2xl hover:scale-105 transition-transform"><Zap className="w-8 h-8" /> POWERGRID</div>
              <div className="flex items-center gap-2 font-bold text-2xl hover:scale-105 transition-transform"><Shield className="w-8 h-8" /> SAFEHARBOR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section (New Decorative Content) */}
      <section id="workflow" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-accent/5 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">How TrustBuild Secures Your Trade</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A seamless, multi-layered security process designed for modern enterprise trade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 -z-10" />
            
            {[
              { icon: FileText, title: "1. Create Contract", desc: "Draft terms with automatic field encryption." },
              { icon: ShieldCheck, title: "2. Verify Partners", desc: "On-chain verification of all trading parties." },
              { icon: Activity, title: "3. Execute Trade", desc: "Values remain encrypted during settlement." },
              { icon: MessageSquare, title: "4. Mutual Release", desc: "Consensus-based decryption for partners." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-sm relative">
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-[10px] flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section (Decorative) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-colors group">
              <div className="text-4xl font-bold mb-2 text-primary group-hover:scale-110 transition-transform">$1.2B+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Volume Secured</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-colors group">
              <div className="text-4xl font-bold mb-2 text-accent group-hover:scale-110 transition-transform">50k+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Contracts Signed</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-colors group">
              <div className="text-4xl font-bold mb-2 text-success group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Privacy Rate</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-colors group">
              <div className="text-4xl font-bold mb-2 text-secondary group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trades Section */}
      <section id="trades" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-accent animate-in fade-in zoom-in duration-700" />
                <h2 className="text-4xl font-bold tracking-tight">Active Trade Contracts</h2>
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Manage and monitor your secure trade agreements. Each contract is protected by blockchain-native encryption.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-lg bg-background border border-border flex items-center gap-2 text-sm font-medium shadow-sm">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                Live Network Status
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trades.length > 0 ? (
              trades.map((trade, index) => (
                <div key={trade.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                  <TradeCard {...trade} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-24 bg-card/50 rounded-3xl border border-dashed border-border transition-all hover:bg-card/80">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground text-lg mb-6">No trade contracts yet</p>
                <CreateTradeDialog onCreateTrade={handleCreateTrade}>
                  <Button size="lg" className="bg-primary hover:opacity-90 transition-all hover:scale-105">Create Your First Trade</Button>
                </CreateTradeDialog>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-24 h-24 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-10 border border-accent/20 animate-in spin-in-12 duration-1000">
            <Shield className="w-12 h-12 text-accent" />
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Enterprise-Grade Security</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Your trade data is protected with military-grade encryption. Rainbow Wallet integration ensures only authorized parties can decrypt sensitive information through zero-knowledge proof verification.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-success/5 text-success border border-success/20 font-semibold shadow-sm hover:bg-success/10 transition-colors">
              <CheckCircle className="w-6 h-6" />
              <span>Zero-Knowledge Architecture</span>
            </div>
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary/5 text-primary border border-primary/20 font-semibold shadow-sm hover:bg-primary/10 transition-colors">
              <Lock className="w-6 h-6" />
              <span>fhEVM Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Network Section (New Decorative Content) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8 animate-in slide-in-from-left duration-1000">
              <h2 className="text-4xl font-bold tracking-tight">A Global Network of Trust</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our platform connects verified trade partners across every continent, 
                creating a seamless web of secure, private, and instant settlements.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Active Nodes", val: "1,240" },
                  { label: "Countries", val: "48+" },
                  { label: "Avg. Latency", val: "1.2s" },
                  { label: "Uptime", val: "99.99%" }
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-muted/50 border border-border/50">
                    <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                    <div className="text-xl font-bold text-primary">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative animate-in slide-in-from-right duration-1000">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative CSS Globe/Network */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border border-secondary/20 animate-[spin_25s_linear_infinite]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
                  <Globe className="w-24 h-24 text-primary relative z-10" />
                </div>
                
                {/* Random floating nodes */}
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-accent animate-ping"
                    style={{
                      top: `${Math.random() * 80 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (New Decorative Content) */}
      <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/20 relative">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about secure trade settlement.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How is field-level encryption different?", a: "Unlike standard encryption that hides an entire file, field-level encryption allows you to selectively encrypt specific data points (like price or quantity) while keeping others visible for routing or logging." },
              { q: "What role does Zama's fhEVM play?", a: "Zama's Fully Homomorphic Encryption EVM allows our smart contracts to perform computations on encrypted data without ever needing to decrypt it first, ensuring maximum privacy." },
              { q: "Who can see my trade details?", a: "Only parties explicitly granted access through the mutual confirmation process can view decrypted trade details. Not even the platform operators can see your sensitive numbers." },
              { q: "Is this compliant with international trade laws?", a: "Yes, our platform is designed to maintain a private, yet verifiable audit trail that can be selectively shared with regulators when required." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section (New Decorative Content) */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-[3rem] bg-gradient-to-br from-primary via-primary/90 to-accent p-12 md:p-24 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Secure Your Trades?</h2>
              <p className="text-white/80 text-xl mb-10 leading-relaxed">
                Join hundreds of enterprise partners who trust our platform for privacy-preserving trade settlements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="w-full sm:w-80 relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-white transition-colors" />
                  <Input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="pl-12 py-6 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 transition-all rounded-xl"
                  />
                </div>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg">
                  Get Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <p className="mt-6 text-white/60 text-sm">
                * No credit card required. Experience enterprise-grade security today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
