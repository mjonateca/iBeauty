import type { Shop, Barber, Service, Booking, Client } from "@/types/database";

export const IS_DEMO = !process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith("http");

export const demoShop: Shop = {
  id: "demo-shop-1",
  owner_id: "demo-user-1",
  name: "Glamour Beauty Studio",
  slug: "glamour-beauty",
  logo_url: null,
  banner_url: null,
  maps_url: null,
  address: "Av. Las Flores #12, Santiago, RD",
  lat: 19.4517,
  lng: -70.6970,
  phone: "+1 809-555-0100",
  whatsapp: "+1 809-555-0100",
  country_code: "DO",
  country_name: "República Dominicana",
  city: "Santiago",
  description: "Salón de belleza y estética. Peluquería, manicura, pedicura y coloración, estilistas y servicios.",
  is_active: true,
  reminder_channels: ["email", "whatsapp"],
  opening_hours: {
    lunes:     { open: "09:00", close: "19:00", closed: false },
    martes:    { open: "09:00", close: "19:00", closed: false },
    miercoles: { open: "09:00", close: "19:00", closed: false },
    jueves:    { open: "09:00", close: "19:00", closed: false },
    viernes:   { open: "09:00", close: "19:00", closed: false },
    sabado:    { open: "09:00", close: "17:00", closed: false },
    domingo:   { open: "09:00", close: "13:00", closed: true },
  },
  reminder_lead_minutes: 180,
  deposit_required: false,
  deposit_amount: 0,
  payments_enabled: true,
  online_payment_mode: "optional",
  currency: "DOP",
  currency_symbol: "RD$",
  created_at: new Date().toISOString(),
};

export const demoBarbers: Barber[] = [
  {
    id: "demo-barber-1",
    user_id: "demo-user-1",
    shop_id: "demo-shop-1",
    display_name: "Valentina Cruz",
    avatar_url: null,
    bio: "10 años de experiencia, especialista en coloración, peinados y tratamientos.",
    portfolio_urls: [],
    rating: 4.8,
    is_independent: false,
    specialty: "Coloración",
    is_active: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "demo-barber-2",
    user_id: "demo-user-2",
    shop_id: "demo-shop-1",
    display_name: "Sofía Morales",
    avatar_url: null,
    bio: "Especialista en manicura, pedicura y cuidado de manos.",
    portfolio_urls: [],
    rating: 4.6,
    is_independent: false,
    specialty: "Manicura",
    is_active: true,
    created_at: new Date().toISOString(),
  },
];

export const demoServices: Service[] = [
  { id: "svc-1", shop_id: "demo-shop-1", name: "Peinado y styling", duration_min: 30, price: 350, currency: "DOP", is_active: true, description: "Lavado, secado y acabado profesional.", category: "Cabello", is_visible: true, sort_order: 1, created_at: new Date().toISOString() },
  { id: "svc-2", shop_id: "demo-shop-1", name: "Manicura + pedicura", duration_min: 45, price: 550, currency: "DOP", is_active: true, description: "Cuidado completo de manos y pies.", category: "Uñas", is_visible: true, sort_order: 2, created_at: new Date().toISOString() },
  { id: "svc-3", shop_id: "demo-shop-1", name: "Tratamiento facial", duration_min: 20, price: 300, currency: "DOP", is_active: true, description: "Limpieza facial rápida y cuidado de piel.", category: "Facial", is_visible: true, sort_order: 3, created_at: new Date().toISOString() },
  { id: "svc-4", shop_id: "demo-shop-1", name: "Coloración", duration_min: 25, price: 300, currency: "DOP", is_active: true, description: "Retoque o coloración express.", category: "Cabello", is_visible: true, sort_order: 4, created_at: new Date().toISOString() },
];

export const demoClient: Client = {
  id: "demo-client-1",
  user_id: "demo-user-1",
  name: "Demo Cliente",
  phone: "+1 809-555-0200",
  whatsapp: "+1 809-555-0200",
  first_name: "Demo",
  last_name: "Usuario",
  country_code: "DO",
  country_name: "República Dominicana",
  city: "Santiago",
  created_at: new Date().toISOString(),
};

const today = new Date().toISOString().split("T")[0];

export const demoBookings: (Booking & {
  clients: { name: string; phone: string | null; whatsapp: string | null } | null;
  barbers: { display_name: string } | null;
  services: { name: string; duration_min: number; price: number } | null;
})[] = [
  {
    id: "bk-1", client_id: "demo-client-1", client_name: null, client_phone: null, notes: null, barber_id: "demo-barber-1",
    shop_id: "demo-shop-1", service_id: "svc-1",
    date: today, start_time: "09:00:00", end_time: "09:30:00",
    status: "confirmed", deposit_status: "none", deposit_amount: 0,
    payment_status: "pending", payment_required: false, payment_amount: 350, payment_currency: "DOP", paid_at: null, confirmed_at: null, confirmed_by_user_id: null,
    whatsapp_reminder_sent: false, created_at: new Date().toISOString(),
    clients: { name: "Ana García", phone: "+1 809-555-0300", whatsapp: null },
    barbers: { display_name: "Valentina Cruz" },
    services: { name: "Peinado y Styling", duration_min: 30, price: 350 },
  },
  {
    id: "bk-2", client_id: "demo-client-2", client_name: null, client_phone: null, notes: null, barber_id: "demo-barber-2",
    shop_id: "demo-shop-1", service_id: "svc-2",
    date: today, start_time: "10:00:00", end_time: "10:45:00",
    status: "confirmed", deposit_status: "none", deposit_amount: 0,
    payment_status: "paid", payment_required: false, payment_amount: 550, payment_currency: "DOP", paid_at: new Date().toISOString(), confirmed_at: null, confirmed_by_user_id: null,
    whatsapp_reminder_sent: false, created_at: new Date().toISOString(),
    clients: { name: "Carmen López", phone: "+1 809-555-0400", whatsapp: "+1 809-555-0400" },
    barbers: { display_name: "Sofía Morales" },
    services: { name: "Manicura + Pedicura", duration_min: 45, price: 550 },
  },
  {
    id: "bk-3", client_id: "demo-client-3", client_name: null, client_phone: null, notes: null, barber_id: "demo-barber-1",
    shop_id: "demo-shop-1", service_id: "svc-3",
    date: today, start_time: "11:30:00", end_time: "11:50:00",
    status: "completed", deposit_status: "none", deposit_amount: 0,
    payment_status: "paid", payment_required: false, payment_amount: 300, payment_currency: "DOP", paid_at: new Date().toISOString(), confirmed_at: null, confirmed_by_user_id: null,
    whatsapp_reminder_sent: true, created_at: new Date().toISOString(),
    clients: { name: "Lucía Mendoza", phone: null, whatsapp: null },
    barbers: { display_name: "Valentina Cruz" },
    services: { name: "Tratamiento Facial", duration_min: 20, price: 300 },
  },
  {
    id: "bk-4", client_id: "demo-client-4", client_name: null, client_phone: null, notes: null, barber_id: "demo-barber-2",
    shop_id: "demo-shop-1", service_id: "svc-4",
    date: today, start_time: "14:00:00", end_time: "14:25:00",
    status: "confirmed", deposit_status: "none", deposit_amount: 0,
    payment_status: "failed", payment_required: false, payment_amount: 300, payment_currency: "DOP", paid_at: null, confirmed_at: null, confirmed_by_user_id: null,
    whatsapp_reminder_sent: false, created_at: new Date().toISOString(),
    clients: { name: "Isabella Reyes", phone: "+1 809-555-0500", whatsapp: null },
    barbers: { display_name: "Sofía Morales" },
    services: { name: "Coloración", duration_min: 25, price: 300 },
  },
];
