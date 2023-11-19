import { useEffect, useState } from 'react';

function Download() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      // Etkinliği durdur
      event.preventDefault();

      // Etkinlik nesnesini sakla
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      // Kullanıcıya yükleme isteği göster
      deferredPrompt.prompt();

      // Kullanıcının yanıtını bekleyin
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Kullanıcı uygulamayı yükledi.');
        } else {
          console.log('Kullanıcı uygulamayı yüklemedi.');
        }

        // Etkinlik nesnesini sıfırla
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      {/* Kullanıcı etkileşimli eleman */}
      <button onClick={handleInstallClick}>Uygulamayı İndir</button>

      {/* Diğer component içeriği */}
    </div>
  );
}

export default Download;
