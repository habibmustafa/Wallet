// src/serviceWorkerRegistration.ts

interface Config {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onError?: (error: Error) => void;
}

export function register(config?: Config): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration: ServiceWorkerRegistration) => {
        console.log('Service Worker registered with scope:', registration.scope);
        if (config && config.onSuccess) {
          config.onSuccess(registration);
        }
      })
      .catch((error: Error) => {
        console.error('Error during Service Worker registration:', error);
        if (config && config.onError) {
          config.onError(error);
        }
      });
  }
}

export function unregister(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration: ServiceWorkerRegistration) => {
        registration.unregister();
      })
      .catch((error: Error) => {
        console.error('Error during Service Worker unregistration:', error);
      });
  }
}
