export interface Dealer {
  id: string;
  name: string;
  city: string;
  state: string;
  zip: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  distance: string;
  inventoryCount: number;
  lat: number;
  lng: number;
  mCertified: boolean;
  iCertified: boolean;
}

export const DEALERS: Dealer[] = [
  {
    id: "bmw-manhattan",
    name: "BMW of Manhattan Flagship",
    city: "New York",
    state: "NY",
    zip: "10019",
    address: "555 W 57th St, New York, NY 10019",
    phone: "(212) 586-2269",
    email: "concierge@bmwofmanhattan.com",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM | Sun: Closed",
    distance: "1.2 miles",
    inventoryCount: 148,
    lat: 40.7702,
    lng: -73.9904,
    mCertified: true,
    iCertified: true,
  },
  {
    id: "bmw-beverly-hills",
    name: "BMW of Beverly Hills Experience Center",
    city: "Beverly Hills",
    state: "CA",
    zip: "90211",
    address: "5070 Wilshire Blvd, Los Angeles, CA 90036",
    phone: "(323) 656-9269",
    email: "vip@bmwbeverlyhills.com",
    hours: "Mon-Sat: 8:30 AM - 8:00 PM | Sun: 10:00 AM - 6:00 PM",
    distance: "3.4 miles",
    inventoryCount: 192,
    lat: 34.0628,
    lng: -118.3429,
    mCertified: true,
    iCertified: true,
  },
  {
    id: "bmw-downtown-chicago",
    name: "Perillo BMW Downtown Chicago",
    city: "Chicago",
    state: "IL",
    zip: "60654",
    address: "1111 N Clark St, Chicago, IL 60610",
    phone: "(312) 981-0000",
    email: "sales@perillobmw.com",
    hours: "Mon-Fri: 9:00 AM - 7:00 PM | Sat: 9:00 AM - 6:00 PM",
    distance: "2.1 miles",
    inventoryCount: 116,
    lat: 41.9028,
    lng: -87.6318,
    mCertified: true,
    iCertified: true,
  },
  {
    id: "bmw-dallas",
    name: "Classic BMW Plano & Dallas Metro",
    city: "Dallas",
    state: "TX",
    zip: "75024",
    address: "6800 Dallas Pkwy, Plano, TX 75024",
    phone: "(214) 778-2600",
    email: "clientrelations@classicbmw.com",
    hours: "Mon-Sat: 8:30 AM - 8:00 PM",
    distance: "5.8 miles",
    inventoryCount: 220,
    lat: 33.0722,
    lng: -96.8291,
    mCertified: true,
    iCertified: true,
  },
  {
    id: "bmw-bramancenter-miami",
    name: "Braman BMW Miami Luxury Gallery",
    city: "Miami",
    state: "FL",
    zip: "33137",
    address: "2060 Biscayne Blvd, Miami, FL 33137",
    phone: "(305) 571-1200",
    email: "clientcare@bramanbmw.com",
    hours: "Mon-Sat: 9:00 AM - 8:00 PM | Sun: 11:00 AM - 5:00 PM",
    distance: "4.0 miles",
    inventoryCount: 174,
    lat: 25.7963,
    lng: -80.1895,
    mCertified: true,
    iCertified: true,
  },
  {
    id: "bmw-san-francisco",
    name: "BMW of San Francisco South of Market",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    address: "1675 Howard St, San Francisco, CA 94103",
    phone: "(415) 626-7000",
    email: "concierge@bmwsf.com",
    hours: "Mon-Sat: 9:00 AM - 6:30 PM",
    distance: "1.9 miles",
    inventoryCount: 105,
    lat: 37.7715,
    lng: -122.4184,
    mCertified: true,
    iCertified: true,
  },
];
