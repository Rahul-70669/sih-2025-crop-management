# Smart Crop Advisory System - Product Requirements Document

---

## Project Information

### Project Title

**FarmMitra (Smart Crop Advisory System)**

---

### Project Description

**Short Description:**
FarmMitra is a multilingual AI-powered mobile and web application that provides real-time, personalized crop advisory services to small and marginal farmers in India, helping them make informed decisions about crop selection, pest management, and market pricing.

**Long Description:**

**Problem Context:**
A majority of small and marginal farmers in India (86% according to NABARD 2022) rely on traditional knowledge, local shopkeepers, or guesswork for critical farming decisions. This leads to poor yields, excessive input costs, and environmental degradation due to improper use of fertilizers and pesticides. Language barriers and low digital literacy further restrict access to modern agricultural technology.

**Our Solution:**
FarmMitra bridges this gap by providing a simple, trustworthy platform that delivers:
- Real-time crop advisory based on weather and soil conditions
- AI-powered pest and disease detection through image uploads
- Live market price tracking to help farmers get fair value
- Support for Hindi and English languages
- Offline functionality for areas with poor connectivity

**Key Differentiators:**
- Farmer-first design with minimal complexity
- Works offline with sync capabilities
- Voice-enabled interface for low-literate users
- Localized recommendations based on geographic location
- Free and accessible to all farmers

**Expected Impact:**
Studies show ICT-based advisories can increase crop yield by 20-30%. FarmMitra aims to empower farmers with scientific insights, reduce dependency on middlemen, improve livelihoods, and promote sustainable farming practices.

**Target Audience:**
Small and marginal farmers across India, with initial focus on Punjab region, agricultural extension officers, and NGOs working in rural development.

---

### Learning Objectives

**Primary Learning Outcomes:**

- **Full-Stack Development:** Build end-to-end web and mobile applications with modern frameworks
- **AI/ML Integration:** Implement image classification for pest detection using TensorFlow.js
- **Progressive Web Apps (PWA):** Create offline-first applications with service workers
- **Responsive Design:** Design farmer-friendly interfaces that work across devices
- **API Integration:** Work with weather APIs and implement custom backend services

**Secondary Learning Outcomes:**

- **Internationalization (i18n):** Implement multi-language support (Hindi/English)
- **Geolocation Services:** Use location-based features for localized recommendations
- **Local Storage & IndexedDB:** Manage offline data persistence
- **Accessibility Best Practices:** Design for users with varying literacy levels

---

### Technology Stack

**Frontend:**

- **Build Tool:** Vite 6.x
- **Framework:** React 19 with TypeScript 5
- **Routing:** React Router v7
- **State Management:** Zustand 5.x (for global state), React Query (for server state)
- **Styling:** TailwindCSS v4 + DaisyUI v5.5
- **Icons:** Google Material Symbols (Rounded variant for friendly feel)
- **PWA:** Vite PWA Plugin for offline support
- **Internationalization:** react-i18next
- **Image Upload:** react-dropzone
- **Additional Libraries:**
    - TensorFlow.js (for ML model inference)
    - Recharts (for data visualization)
    - date-fns (for date formatting)

**Backend:**

- **Runtime:** Node.js v22 LTS
- **Language:** TypeScript 5
- **Framework:** Express.js v5
- **Database:** MongoDB with Mongoose v9 (for scalability and flexible schema)
- **Authentication:** JWT-based auth
- **File Storage:** Local file system (for hackathon), can scale to cloud storage
- **API Integration:** Axios for external API calls

**External APIs (Free tiers for hackathon):**

- **Weather Data:** OpenWeatherMap API (free tier: 1000 calls/day)
- **Geolocation:** Browser Geolocation API + IP-based fallback
- **ML Model:** Pre-trained TensorFlow.js model for plant disease detection

---

### MVP Scope

**Phase 1: Core Platform (Days 1-10)**
**Priority: P0 (Must Have)**

1. **Real-Time Crop Advisory**
    - Location-based weather integration (current + 7-day forecast)
    - Soil type selection (from predefined list)
    - Crop selection with seasonal recommendations
    - Automated advisory generation based on weather + soil + crop
    - Fertilizer and irrigation recommendations
    - Language toggle (Hindi/English)

2. **Pest/Disease Detection**
    - Image upload interface (camera or gallery)
    - AI-powered image analysis using TensorFlow.js
    - Disease identification with confidence score
    - Treatment recommendations
    - Offline processing capability
    - History of detected issues

3. **Market Price Tracking**
    - Mandi (market) price display for major crops
    - Location-based price filtering
    - Price trend visualization (7-day, 30-day)
    - Crop price comparison
    - Manual data entry by admin (for hackathon)

**Phase 2: Enhanced Features (Days 11-13)**
**Priority: P1 (Should Have)**

4. **User Features**
    - User registration and profile
    - Farm profile (land size, crops grown, soil type)
    - Advisory history and bookmarks
    - Notification system for weather alerts
    - Voice input for search (Web Speech API)

5. **Offline Functionality**
    - Service Worker implementation
    - Cache weather data for 24 hours
    - Store advisory history locally
    - Background sync for image uploads
    - Offline-first architecture

**Phase 3: Polish & Testing (Day 14)**
**Priority: P1 (Should Have)**

6. **Final Enhancements**
    - Admin dashboard for content management
    - Analytics and usage tracking
    - Performance optimization
    - Cross-browser testing
    - Deployment and demo preparation

---

### Target Users / Personas

**Primary Persona: Ramesh Kumar (Small Farmer)**

- **Demographics:**
    - Age: 35-55
    - Location: Rural Punjab (Ludhiana district)
    - Occupation: Small-scale farmer (2-3 acres)
    - Tech Savviness: Low to Medium (uses smartphone for calls, WhatsApp)
    - Languages: Hindi (primary), limited English
    - Education: 8th-10th grade

- **Goals & Motivations:**
    - Increase crop yield and reduce losses
    - Make informed decisions about when to plant and harvest
    - Identify and treat crop diseases early
    - Get fair prices for produce
    - Reduce dependency on middlemen and local shopkeepers

- **Pain Points:**
    - Cannot afford expensive agri-consultants
    - Unreliable advice from local shops (biased toward selling products)
    - Lacks scientific knowledge about modern farming techniques
    - Struggles with English-only agricultural apps
    - Limited internet connectivity in village
    - Low confidence with complex technology

- **User Needs:**
    - Simple, easy-to-understand interface with visual guides
    - Information in Hindi language
    - Works without internet when needed
    - Free to use
    - Quick answers without lengthy registration
    - Voice support for reading content aloud

**Secondary Persona: Priya Sharma (Agricultural Extension Officer)**

- **Demographics:**
    - Age: 28-40
    - Location: District agriculture office, Punjab
    - Occupation: Government agricultural extension officer
    - Tech Savviness: High
    - Languages: Hindi, English, Punjabi

- **Goals & Motivations:**
    - Help multiple farmers efficiently
    - Provide accurate, science-based recommendations
    - Track adoption of modern farming practices
    - Reduce farmer distress and improve outcomes

- **Pain Points:**
    - Cannot reach all farmers personally
    - Farmers ask repetitive questions
    - Difficult to track impact of recommendations
    - Need to provide localized, real-time advice

- **User Needs:**
    - Dashboard to manage content and recommendations
    - Analytics to track farmer engagement
    - Ability to push alerts and notifications
    - Tools to verify and moderate user-submitted data

---

## Branding, Theming & Visual Identity

### Brand Identity

**Brand Name:** FarmMitra (फार्म मित्र)

**Brand Personality:**
- **Tone:** Trustworthy, Friendly, Simple, Supportive
- **Voice:** Educational but not condescending, Conversational, Encouraging
- **Mood:** Calm, Reliable, Earthy, Approachable, Hopeful

**Brand Values:**
- **Accessibility** - Technology should empower everyone, regardless of literacy or location
- **Trust** - Provide honest, science-based recommendations without commercial bias
- **Sustainability** - Promote environmentally responsible farming practices

**Brand Story:**
FarmMitra means "Farm Friend" in Hindi. Like a trusted friend, we stand beside farmers in their journey toward better yields and sustainable practices. Born from the understanding that small farmers need simple, reliable guidance, FarmMitra combines traditional farming wisdom with modern technology to help every farmer succeed.

---

### Logo & Visual Assets

**Logo Specifications:**
- **Primary Logo:** Text "FarmMitra" with a leaf icon integrated into the 'M'
- **Logo Variations:**
    - Full logo (text + icon)
    - Icon only (for mobile app)
    - Horizontal and stacked versions
- **Safe Space:** Minimum 16px clear space around logo
- **Minimum Size:** 120px width for full logo, 32px for icon only
- **File Formats:** SVG (primary), PNG (fallback)

**Imagery Style:**
- **Photography:** Authentic, respectful images of real farmers and crops
- **Illustrations:** Simple, flat icons representing crops, weather, and farming tools
- **Icons:** Google Material Symbols - Rounded variant (friendly, approachable)
- **Patterns/Textures:** Subtle crop field patterns, seed textures for backgrounds

---

### Color System (OKLCH)

**Understanding OKLCH:**
OKLCH is a perceptual color space that provides:
- **L (Lightness):** 0-100% (0 = black, 100 = white)
- **C (Chroma):** 0-0.4 (0 = grayscale, higher = more vibrant)
- **H (Hue):** 0-360 degrees (color wheel position)

**Color Palette Definition:**

#### Primary Brand Color (Crop Green)
```css
--color-primary: oklch(55% 0.18 145);
--color-primary-content: oklch(98% 0.01 145);
```

**Visual:** Rich, earthy green - like healthy crop leaves
- **Usage:** Primary CTAs, navigation active states, success indicators, brand moments
- **Meaning:** Growth, health, nature, agriculture - represents thriving crops
- **Accessibility:** Contrast ratio with base-100: 4.8:1 (AA compliant)

**Color Variations:**
- Lighter: `oklch(70% 0.15 145)` - Hover states, light backgrounds
- Darker: `oklch(40% 0.20 145)` - Active states, emphasis

---

#### Secondary Brand Color (Soil Brown)
```css
--color-secondary: oklch(50% 0.08 60);
--color-secondary-content: oklch(98% 0.01 60);
```

**Visual:** Warm, rich brown - like fertile soil
- **Usage:** Secondary actions, grounding elements, cards, panels
- **Meaning:** Earth, stability, foundation - represents the soil farmers work with
- **Accessibility:** Contrast ratio with base-100: 5.2:1 (AA compliant)

---

#### Accent Color (Sunshine Yellow)
```css
--color-accent: oklch(75% 0.15 85);
--color-accent-content: oklch(25% 0.05 85);
```

**Visual:** Warm, golden yellow - like sunlight or ripe wheat
- **Usage:** Highlights, important notifications, weather alerts, price highlights
- **Meaning:** Energy, optimism, harvest - represents sunshine and abundance
- **Accessibility:** Contrast ratio with base-100: 1.8:1 (Use with caution, pair with darker text)

---

#### Neutral Colors
```css
--color-neutral: oklch(35% 0.02 145);
--color-neutral-content: oklch(95% 0.01 145);
```

**Visual:** Dark gray-green
- **Usage:** Text, borders, subtle UI elements, footer
- **Meaning:** Professional, readable foundation for content

---

#### Base Colors (Backgrounds & Surfaces)
```css
--color-base-100: oklch(98% 0.005 120); /* Soft cream white */
--color-base-200: oklch(94% 0.008 120); /* Light beige */
--color-base-300: oklch(88% 0.012 120); /* Subtle borders */
--color-base-content: oklch(25% 0.015 145); /* Dark green-gray text */
```

**Rationale:** Soft, warm whites avoid harsh pure white while maintaining readability. The slight green tint connects to agricultural theme.

---

#### Semantic Colors

**Info:**
```css
--color-info: oklch(60% 0.18 240); /* Sky blue */
--color-info-content: oklch(98% 0.01 240);
```
- **Usage:** Weather information, general tips, help messages

**Success:**
```css
--color-success: oklch(60% 0.20 145); /* Vibrant green */
--color-success-content: oklch(98% 0.01 145);
```
- **Usage:** Successful detection, positive growth indicators, confirmations

**Warning:**
```css
--color-warning: oklch(70% 0.18 75); /* Amber orange */
--color-warning-content: oklch(25% 0.05 75);
```
- **Usage:** Weather warnings, moderate pest alerts, cautions

**Error:**
```css
--color-error: oklch(55% 0.22 25); /* Alert red */
--color-error-content: oklch(98% 0.01 25);
```
- **Usage:** Severe pest/disease alerts, critical weather warnings, errors

---

### Color Usage Guidelines

**Do's:**
- ✅ Use primary green for main actions and navigation
- ✅ Use secondary brown for grounding elements and cards
- ✅ Use accent yellow sparingly for important highlights
- ✅ Maintain warm, earthy tones throughout
- ✅ Use semantic colors consistently (green = healthy, red = problem)
- ✅ Ensure text contrast meets WCAG 2.1 AA (4.5:1 for normal text)

**Don'ts:**
- ❌ Don't use pure black or pure white
- ❌ Don't use more than 3 colors in a single component
- ❌ Don't use color alone to convey meaning (add icons/text)
- ❌ Don't use bright, neon colors that feel "tech-heavy"
- ❌ Don't overwhelm with too much accent color

---

### Color Accessibility Matrix

| Text Color | Background | Contrast Ratio | WCAG Level | Use Case |
|------------|------------|----------------|------------|----------|
| base-content | base-100 | 10.2:1 | AAA | Body text |
| primary-content | primary | 7.8:1 | AAA | Primary buttons |
| secondary-content | secondary | 6.5:1 | AA | Secondary buttons |
| accent-content | accent | 4.6:1 | AA | Accent elements (large text only) |
| error-content | error | 8.2:1 | AAA | Error messages |
| success-content | success | 7.5:1 | AAA | Success messages |

**Testing Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools Lighthouse Accessibility Audit

---

### Dark Mode Considerations

**Strategy:** Not included in MVP (2-week timeline)
- Farmers primarily use apps during daylight hours
- Can be added in Phase 2 based on user feedback

---

### Visual Hierarchy & Emphasis

**Color-Based Hierarchy:**
1. **Primary Actions:** Primary green (Get Advisory, Detect Disease)
2. **Secondary Actions:** Secondary brown or neutral outline (View History, Settings)
3. **Tertiary Actions:** Ghost or link style (Cancel, Learn More)
4. **Text Hierarchy:**
    - base-content (headings, primary text)
    - base-content/80 (body text)
    - base-content/60 (secondary info, timestamps)

**Example Color Application:**
```tsx
{/* Primary CTA */}
<button className="btn btn-primary">Get Crop Advisory</button>

{/* Secondary action */}
<button className="btn btn-secondary">View Market Prices</button>

{/* Tertiary action */}
<button className="btn btn-ghost">Skip</button>

{/* Weather alert */}
<div className="alert alert-warning">
  <Icon name="warning" />
  <span>Heavy rain expected tomorrow</span>
</div>

{/* Success message */}
<div className="alert alert-success">
  <Icon name="check_circle" />
  <span>Disease detected successfully!</span>
</div>
```

---

## UI/UX Design System

### Design Principles

- **Simplicity First:** Every screen should have one clear purpose. Avoid overwhelming farmers with too many options.
- **Visual Communication:** Use icons and images liberally. Many users have low literacy levels.
- **Accessibility for All:** Large touch targets (min 48px), high contrast, voice support, and Hindi language option.
- **Offline-Ready:** Core features must work without internet. Sync when connection is available.
- **Trust Through Transparency:** Always explain why we're asking for information (location, camera access, etc.)
- **Mobile-First:** Design for smartphones first, then adapt to web/tablet.

---

### DaisyUI 5 Theme Configuration

**Complete Theme Definition:**

```css
@plugin "daisyui/theme" {
  name: "farmmitra-light";
  default: true;
  prefersdark: false;
  color-scheme: "light";
  
  /* Base Colors - Warm, Earthy Backgrounds */
  --color-base-100: oklch(98% 0.005 120);  /* Soft cream white */
  --color-base-200: oklch(94% 0.008 120);  /* Light beige */
  --color-base-300: oklch(88% 0.012 120);  /* Subtle borders */
  --color-base-content: oklch(25% 0.015 145); /* Dark green-gray text */
  
  /* Primary - Crop Green */
  --color-primary: oklch(55% 0.18 145);
  --color-primary-content: oklch(98% 0.01 145);
  
  /* Secondary - Soil Brown */
  --color-secondary: oklch(50% 0.08 60);
  --color-secondary-content: oklch(98% 0.01 60);
  
  /* Accent - Sunshine Yellow */
  --color-accent: oklch(75% 0.15 85);
  --color-accent-content: oklch(25% 0.05 85);
  
  /* Neutral - Dark Gray-Green */
  --color-neutral: oklch(35% 0.02 145);
  --color-neutral-content: oklch(95% 0.01 145);
  
  /* Semantic Colors */
  --color-info: oklch(60% 0.18 240);
  --color-info-content: oklch(98% 0.01 240);
  
  --color-success: oklch(60% 0.20 145);
  --color-success-content: oklch(98% 0.01 145);
  
  --color-warning: oklch(70% 0.18 75);
  --color-warning-content: oklch(25% 0.05 75);
  
  --color-error: oklch(55% 0.22 25);
  --color-error-content: oklch(98% 0.01 25);
  
  /* Border Radius - Friendly, Rounded */
  --radius-selector: 0.5rem;  /* Radio buttons, checkboxes */
  --radius-field: 0.75rem;    /* Input fields */
  --radius-box: 1rem;         /* Cards, containers */
  
  /* Sizing - Large for Touch Targets */
  --size-selector: 1.5rem;
  --size-field: 3rem;  /* Larger inputs for easier interaction */
  
  /* Effects */
  --border: 1px;
  --depth: 3;     /* Moderate shadow depth */
  --noise: 0;     /* No noise texture (keep it clean) */
}
```

**Theme Application:**

```tsx
// In index.html
<html lang="hi" data-theme="farmmitra-light">

// Language toggle
const toggleLanguage = (lang: 'en' | 'hi') => {
  document.documentElement.lang = lang;
  i18n.changeLanguage(lang);
};
```

---

### Typography

**Google Fonts Integration:**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Font System:**

**Primary Font (Headings & UI):**
- **Font Family:** Noto Sans (Latin), Noto Sans Devanagari (Hindi)
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Usage:** Headings, buttons, navigation, labels
- **Characteristics:** Highly readable, excellent Hindi support, neutral and professional

**Typography Scale:**

```css
/* Heading Styles */
H1: 32px / 40px - font-weight: 700
H2: 24px / 32px - font-weight: 600
H3: 20px / 28px - font-weight: 600
H4: 18px / 26px - font-weight: 600
H5: 16px / 24px - font-weight: 600
H6: 14px / 20px - font-weight: 600

/* Body Styles */
Body Large: 18px / 28px - font-weight: 400
Body Regular: 16px / 24px - font-weight: 400
Body Small: 14px / 20px - font-weight: 400

/* UI Elements */
Button Text: 16px / 24px - font-weight: 600
Label: 14px / 20px - font-weight: 500
Caption: 12px / 16px - font-weight: 400
```

**Responsive Typography:**
- Mobile (<768px): Base font size 16px, H1: 28px
- Tablet (768px-1023px): Base font size 16px, H1: 30px
- Desktop (≥1024px): Base font size 16px, H1: 32px

**Hindi Typography Considerations:**
- Devanagari script requires slightly larger line height (+2px) for readability
- Use medium weight (500) as default for Hindi text for better clarity
- Ensure proper Unicode support for Hindi characters

---

### Icons - Google Material Symbols

**Integration:**

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
```

**Icon Variant:** Rounded (friendly, approachable feel)

**Icon Usage:**

| Category | Icon Names | Purpose |
|----------|-----------|---------|
| **Weather** | wb_sunny, wb_cloudy, thunderstorm, water_drop, air, ac_unit | Weather conditions |
| **Crops** | eco, grass, agriculture, local_florist, yard, spa | Crop types, plants |
| **Pest/Disease** | bug_report, coronavirus, sick, healing, emergency | Disease detection |
| **Market** | store, trending_up, trending_down, attach_money, analytics | Market prices |
| **Actions** | photo_camera, upload, search, refresh, check_circle, close | User actions |
| **Navigation** | home, menu, arrow_back, arrow_forward, more_vert | Navigation |
| **User** | person, account_circle, notifications, settings, language | User profile |
| **Location** | location_on, my_location, map, near_me | Geolocation |
| **Information** | info, help, lightbulb, tips_and_updates, description | Help & tips |

**Icon Sizes:**
- Small: 20px (inline with text, labels)
- Medium: 24px (buttons, list items)
- Large: 32px (feature cards, empty states)
- XL: 48px (hero sections, major features)

**Icon Component:**

```tsx
interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  ariaLabel?: string;
}

const Icon = ({ name, size = 'md', className = '', ariaLabel }: IconProps) => {
  const sizes = {
    sm: 'text-xl',      // 20px
    md: 'text-2xl',     // 24px
    lg: 'text-4xl',     // 32px
    xl: 'text-6xl',     // 48px
  };
  
  return (
    <span
      className={`material-symbols-rounded ${sizes[size]} ${className}`}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      {name}
    </span>
  );
};
```

---

### Responsive Design

**Breakpoint System:**

```tsx
const breakpoints = {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
};
```

**Layout Patterns:**

**Desktop (≥1024px):**
- Two-column layouts (sidebar + main content)
- Full navigation bar with all options
- Card grid: 3 columns
- Images: Large, full resolution

**Tablet (768px - 1023px):**
- Two-column layouts for some sections
- Full navigation with some items in dropdown
- Card grid: 2 columns
- Touch targets: 44px minimum

**Mobile (<768px):**
- Single column layout
- Bottom navigation bar (5 main items)
- Card grid: 1 column (stacked)
- Full-width buttons
- Larger text (18px base for better readability)
- Collapsible sections with accordions

**Responsive Utilities:**

```tsx
/* Grid Layout */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

/* Typography */
<h1 className="text-3xl md:text-4xl lg:text-5xl">

/* Spacing */
<section className="py-6 md:py-8 lg:py-12 px-4 md:px-6 lg:px-8">

/* Navigation */
<nav className="hidden lg:flex">Desktop Nav</nav>
<nav className="lg:hidden">Mobile Bottom Nav</nav>
```

---

### Accessibility Requirements

**WCAG 2.1 AA Compliance Checklist:**

**Perceivable:**
- [x] All images have descriptive alt text (in both Hindi and English)
- [x] Color contrast ratio ≥ 4.5:1 for normal text
- [x] Color contrast ratio ≥ 3:1 for large text
- [x] Icons paired with text labels (not icon-only buttons)
- [x] Text resizable up to 200% without loss of content
- [x] Hindi text properly rendered with Devanagari font

**Operable:**
- [x] All functionality available via keyboard
- [x] No keyboard traps
- [x] Focus indicator visible (3px outline)
- [x] Skip to main content link
- [x] Touch targets minimum 48px × 48px
- [x] Swipe gestures have alternatives

**Understandable:**
- [x] Language declared in HTML (`<html lang="hi">` or `lang="en"`)
- [x] Consistent navigation across pages
- [x] Form labels and instructions in user's language
- [x] Error messages clear and actionable
- [x] Simple language (avoid jargon)

**Robust:**
- [x] Valid HTML (pass W3C validator)
- [x] ARIA used correctly (roles, labels, live regions)
- [x] Progressive enhancement (works without JS for basic features)
- [x] Screen reader tested (NVDA on Windows, TalkBack on Android)

**Low-Literacy Considerations:**
- [x] Heavy use of icons and visuals
- [x] Voice output for reading content aloud (Web Speech API)
- [x] Video tutorials for key features
- [x] Step-by-step wizards instead of complex forms

---

## Component Design System

### Component Organization Structure

```
src/
├── components/
│   ├── atoms/              
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Badge/
│   │   ├── Icon/
│   │   ├── Card/
│   │   ├── Select/
│   │   └── LanguageToggle/
│   │
│   ├── molecules/          
│   │   ├── WeatherCard/
│   │   ├── CropCard/
│   │   ├── PriceCard/
│   │   ├── ImageUpload/
│   │   ├── AdvisoryItem/
│   │   └── NavItem/
│   │
│   ├── organisms/          
│   │   ├── Header/
│   │   ├── BottomNav/
│   │   ├── WeatherWidget/
│   │   ├── CropSelector/
│   │   ├── PestDetector/
│   │   ├── PriceList/
│   │   └── AdvisoryPanel/
│   │
│   ├── templates/          
│   │   ├── MainLayout/
│   │   ├── OnboardingLayout/
│   │   └── FullscreenLayout/
│   │
│   └── pages/              
│       ├── Home/
│       ├── CropAdvisory/
│       ├── PestDetection/
│       ├── MarketPrices/
│       ├── Profile/
│       └── Onboarding/
```

---

### Atom Components Inventory

| Component | Purpose | Key Props | States | Accessibility |
|-----------|---------|-----------|--------|---------------|
| **Button** | Primary actions | variant, size, loading, icon, fullWidth | default, hover, active, loading, disabled | ARIA labels, keyboard accessible |
| **Input** | Text entry | type, value, error, disabled, label | default, focus, error, disabled | Label association, error announcement |
| **Select** | Dropdown selection | options, value, onChange, label, placeholder | default, open, disabled | Native select with custom styling |
| **Badge** | Status indicators | variant, size, text | default | ARIA live for dynamic badges |
| **Icon** | Visual symbols | name, size, color, ariaLabel | default | ARIA hidden or labeled |
| **Card** | Content containers | children, hoverable, bordered | default, hover | Semantic structure |
| **Avatar** | User images | src, alt, size, fallback | default, loading, error | Alt text required |
| **Toggle** | Binary switches | checked, disabled, label | off, on | ARIA switch role |
| **LanguageToggle** | Language switcher | currentLang, onChange | en, hi | Clearly labeled |

---

### Molecule Components Inventory

| Component | Combines | Purpose | Key Props | Accessibility |
|-----------|----------|---------|-----------|---------------|
| **WeatherCard** | Icon + Text + Badge | Display weather info | temp, condition, humidity, icon | Semantic structure |
| **CropCard** | Image + Title + Button | Crop selection | name, image, season, onClick | Focus management |
| **Price