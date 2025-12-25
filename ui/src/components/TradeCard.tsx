import { Lock, Check, Clock, ShieldCheck, Unlock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSignMessage, useAccount } from "wagmi";
import { toast } from "sonner";

interface TradeCardProps {
  id: string;
  buyer: string;
  seller: string;
  product: string;
  encryptedValue: string;
  encryptedTerms: string;
  encryptedSettlement: string;
  status: "pending" | "confirmed" | "settled";
  date: string;
}

export const TradeCard = ({ 
  buyer, 
  seller, 
  product, 
  encryptedValue, 
  encryptedTerms,
  encryptedSettlement,
  status,
  date 
}: TradeCardProps) => {
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [decrypted, setDecrypted] = useState(false);
  const { isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const statusConfig = {
    pending: { color: "bg-amber-500/10 text-amber-700 dark:text-amber-400", icon: Clock },
    confirmed: { color: "bg-blue-500/10 text-blue-700 dark:text-blue-400", icon: Check },
    settled: { color: "bg-success/10 text-success", icon: Check }
  };

  const StatusIcon = statusConfig[status].icon;

  const handleDecrypt = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    try {
      setIsDecrypting(true);
      
      // Real wallet request: Request signature for FHE decryption
      await signMessageAsync({
        message: `Decrypting trade contract ${product} (ID: ${date}). This request verifies your permission to access homomorphic encryption keys for this specific record.`,
      });

      // Simulate a decryption process after signature
      setTimeout(() => {
        setIsDecrypting(false);
        setDecrypted(true);
        toast.success("fhEVM Decryption Successful");
      }, 1000);
    } catch (error) {
      console.error("Decryption failed:", error);
      setIsDecrypting(false);
      toast.error("Decryption request cancelled or failed");
    }
  };

  return (
    <Card className="group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-card to-card/50 border-border/50 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-1 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {isDecrypting && (
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm z-20 flex flex-col items-center justify-center animate-in fade-in duration-300">
          <div className="relative">
            <Unlock className="w-12 h-12 text-primary animate-bounce" />
            <div className="absolute inset-0 w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="mt-4 text-sm font-bold text-primary animate-pulse uppercase tracking-widest">Decrypting fhEVM...</p>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">{product}</CardTitle>
          <Badge className={cn("transition-all duration-300", statusConfig[status].color)}>
            <StatusIcon className="w-3 h-3 mr-1" />
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{date}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="group/item">
            <p className="text-muted-foreground mb-1 group-hover/item:text-foreground transition-colors">Buyer</p>
            <p className="font-medium">{buyer}</p>
          </div>
          <div className="group/item">
            <p className="text-muted-foreground mb-1 group-hover/item:text-foreground transition-colors">Seller</p>
            <p className="font-medium">{seller}</p>
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t border-border">
          {[
            { label: "Trade Value", encrypted: encryptedValue, real: "$2,450,000" },
            { label: "Contract Terms", encrypted: encryptedTerms, real: "Net 60 Days" },
            { label: "Settlement", encrypted: encryptedSettlement, real: "Wire Transfer" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 group/row hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                {decrypted ? (
                  <ShieldCheck className="w-4 h-4 text-success animate-in zoom-in duration-300" />
                ) : (
                  <Lock className="w-4 h-4 text-accent" />
                )}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span className={cn(
                "font-mono text-xs transition-all duration-500",
                decrypted ? "text-success font-bold text-sm" : "text-muted-foreground"
              )}>
                {decrypted ? item.real : item.encrypted}
              </span>
            </div>
          ))}
        </div>

        {!decrypted && (
          <Button 
            onClick={handleDecrypt}
            disabled={isDecrypting}
            className="w-full bg-gradient-to-r from-accent to-secondary hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20"
          >
            <Lock className="w-4 h-4 mr-2" />
            Decrypt with Wallet
          </Button>
        )}

        {decrypted && status === "pending" && (
          <Button 
            className="w-full bg-success hover:bg-success/90 animate-in slide-in-from-top-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-success/20"
          >
            <Check className="w-4 h-4 mr-2" />
            Confirm Trade
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
