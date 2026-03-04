# That's Amore Italian Restaurant — Website

**96 High St, Lindfield, Haywards Heath RH16 2HP**

---

## 📁 File Structure

```
thats-amore/
├── index.html          ← Homepage
├── menu.html           ← Full menu (tabbed: Starters, Pasta, Pizza, etc.)
├── contact.html        ← Contact, map, reservations & FAQ
├── css/
│   └── style.css       ← All shared styles
├── js/
│   └── main.js         ← Shared JavaScript (tabs, nav, animations)
└── README.md           ← This file
```

---

## 🚀 How to Host

### Option 1 — Netlify (Recommended, Free)
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Drag and drop the entire `thats-amore` folder onto the Netlify dashboard
3. Your site will be live instantly at a URL like `yoursite.netlify.app`
4. To use your custom domain (e.g. `thatsamorelindfield.co.uk`): go to **Domain settings** in Netlify and follow the DNS instructions

### Option 2 — GitHub Pages (Free)
1. Create a free GitHub account at [github.com](https://github.com)
2. Create a new repository called `thats-amore`
3. Upload all files to the repository
4. Go to **Settings → Pages** → set source to `main` branch
5. Site will be live at `yourusername.github.io/thats-amore`

### Option 3 — cPanel / Web Host (e.g. GoDaddy, Krystal, 123-reg)
1. Log into your hosting control panel
2. Open **File Manager** → navigate to `public_html`
3. Upload all files and folders, maintaining the same structure
4. Your site will be live at your domain

---

## ✏️ How to Update Content

### Change the offer banner
In `index.html` and `menu.html`, find:
```html
<div class="offer-banner">
```
Update the text inside.

### Update opening hours
Search for "opening hours" across all three HTML files — the hours are hardcoded in each page's footer and the dedicated sections. Change the times there.

### Add your social media links
In the footer of each page, find:
```html
<div class="footer-social">
  <a href="#" aria-label="Facebook">f</a>
```
Replace `href="#"` with your actual Facebook/Instagram/TripAdvisor URLs.

### Update the phone number
The number `01444 484 824` appears in the nav and footer. Use Find & Replace to update all instances.

### Add menu items
In `menu.html`, each dish follows this pattern:
```html
<div class="menu-item">
  <div class="menu-item-top">
    <span class="menu-item-name">Dish Name</span>
    <span class="menu-item-price">£X.XX</span>
  </div>
  <p class="menu-item-desc">Description of the dish</p>
</div>
```

---

## 🎨 Brand Assets Used

- **Logo**: Loaded directly from the restaurant's CDN (leadconnectorhq.com)
- **Food & restaurant photos**: Loaded from the restaurant's existing CDN
- **Fonts**: Playfair Display, DM Sans, Cinzel — loaded from Google Fonts
- **Booking**: Links to OpenTable (rid=286152)
- **Menu PDF**: Links to the hosted PDF

---

## 📱 Features

- ✅ Fully mobile responsive
- ✅ Smooth scroll reveal animations
- ✅ Hero image slider (3 images, auto-advances)
- ✅ Tabbed menu (Starters, Pasta, Pizza, Risotto, Mains, Salads, Desserts, Cocktails)
- ✅ Active nav highlighting
- ✅ Mobile hamburger menu
- ✅ Google Maps embed on contact page
- ✅ OpenTable booking integration
- ✅ Real brand images from CDN
- ✅ Real menu items and prices
- ✅ Dietary badges (V, VG, GF)
- ✅ "20% off" offer banner
- ✅ Pizza Party enquiry link
- ✅ FAQ section
- ✅ No external dependencies other than Google Fonts

---

*Built with care. Questions? Reach out to your web developer.*
