import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Check } from "lucide-react";

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setIsInstalled(true);
      setIsInstallable(false);
    }

    setDeferredPrompt(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                <Smartphone className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-card-foreground mb-2">
                Install TEC REC Club
              </h1>
              <p className="text-muted-foreground">
                Get the best experience with our mobile app
              </p>
            </div>

            {isInstalled ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Already Installed!</h2>
                <p className="text-muted-foreground mb-6">
                  You're using the installed version of TEC REC Club.
                </p>
              </div>
            ) : isInstallable ? (
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Download className="w-5 h-5 text-primary" />
                    Why Install?
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Instant access from your home screen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Works offline - access projects anytime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Faster loading and smoother experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>No app store needed - install right now!</span>
                    </li>
                  </ul>
                </div>

                <Button
                  size="lg"
                  onClick={handleInstall}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Install App Now
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3">Manual Installation</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium mb-2">📱 On iPhone/iPad:</p>
                      <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-2">
                        <li>Tap the Share button (box with arrow)</li>
                        <li>Scroll down and tap "Add to Home Screen"</li>
                        <li>Tap "Add" in the top right</li>
                      </ol>
                    </div>

                    <div>
                      <p className="font-medium mb-2">🤖 On Android:</p>
                      <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-2">
                        <li>Tap the menu (three dots)</li>
                        <li>Tap "Install app" or "Add to Home screen"</li>
                        <li>Tap "Install"</li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-sm">
                  <p className="text-accent-foreground">
                    <strong>Note:</strong> The automatic install button works in most browsers. 
                    If you don't see it, follow the manual instructions above.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Install;
