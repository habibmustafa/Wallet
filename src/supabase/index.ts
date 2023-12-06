import { createClient } from "@supabase/supabase-js";

const options = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  // global: {
  //   headers: { 'x-my-custom-header': 'my-app-name' },
  // },
};
export const supabase = createClient(
  "https://yzlkrrfcpabevtqduurv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bGtycmZjcGFiZXZ0cWR1dXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAyMDI2MDMsImV4cCI6MjAxNTc3ODYwM30.5qrGZEm8MQKAexH6ip3xR-H5HXVB33VgP5UHYyGkIDU",
  options
);

