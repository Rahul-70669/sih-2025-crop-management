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

### Complete Molecule Components Inventory

| Component | Combines | Purpose | Key Props | Accessibility |
|-----------|----------|---------|-----------|---------------|
| **WeatherCard** | Icon + Text + Badge | Display weather info | temp, condition, humidity, icon | Semantic structure, live region updates |
| **CropCard** | Image + Title + Button | Crop selection | title, imageUrl, description, status, onAction | Focus management, alt text required |
| **PriceCard** | Text + Trend Icon + Chart | Market price display | title, price, period, description, features, onButtonClick | Color + icon + text redundancy, ARIA labels |
| **DiseaseCard** | Image + Title + Confidence + Badge | Disease detection result | diseaseName, confidence, severity, imageUrl, symptoms | Status role, confidence as percentage |
| **AdvisorySection** | Icon + Heading + Content + Expand | Collapsible advisory info | title, content, icon, defaultExpanded | Button role, ARIA expanded state |
| **LocationSelector** | Icon + Text + Dropdown | Location selection | currentLocation, onLocationChange, options | Combobox pattern, keyboard searchable |
| **NotificationCard** | Icon + Message + Action + Close | Alert/notification | type, message, action, onDismiss | Alert role, focus management |
| **StatCard** | Icon + Number + Label + Trend | Display metrics | value, label, trend, icon, unit | Semantic structure, live region |
| **FormField** | Label + Input + Helper + Error | Form input with validation | label, name, value, error, helperText | Label association, error ID linkage |
| **ProgressStep** | Number + Title + Line | Wizard step indicator | stepNumber, title, status, onClick | Navigation landmark, ARIA current |
| **ShareButton** | Icon + Text + Menu | Share options | onShare, platforms | Menu button pattern, keyboard nav |
| **LanguageSwitcher** | Flag + Label + Toggle | Language selection | currentLang, onChange | Button role, announces change |
| **EmptyState** | Illustration + Heading + Text + CTA | No data state | icon, title, description, actionLabel | Semantic headings, clear CTA |
| **LoadingCard** | Skeleton + Spinner | Loading placeholder | variant, lines | ARIA live, busy state |
| **ToastNotification** | Icon + Message + Progress | Temporary notification | type, message, duration, onClose | Alert role, auto-dismiss announcement |
| **ImageUpload** | Button + Preview + Progress + Camera | Image upload/capture | onUpload, preview, loading, allowCamera | File input accessible, status updates |
| **TrendIndicator** | Arrow + Percentage + Text | Price/data trends | direction, percentage, value | Color + icon + text redundancy |
| **SearchBar** | Input + Icon + Clear + Voice | Search interface | value, onChange, onClear, placeholder, voiceEnabled | Search landmark, voice button |
| **SelectField** | Label + Select + Error + Helper | Dropdown with validation | label, options, value, onChange, error | Label association, error announcement |
| **SoilTypeSelector** | Icons + Labels + Radio Group | Soil type selection | soilTypes, selected, onChange | Radio group semantics, clear labels |
| **GrowthStageIndicator** | Timeline + Icons + Labels | Show crop growth stage | stages, currentStage, cropType | Progress indicator, stage announcements |
| **FertilizerCard** | Icon + NPK Values + Instructions | Fertilizer recommendation | npk, quantity, timing, method | Structured data, clear instructions |
| **IrrigationSchedule** | Calendar + Water Icons + Times | Irrigation timing | frequency, quantity, bestTime, weatherBased | Table semantics, clear timing |
| **PestAlertBanner** | Icon + Message + Severity + Action | Pest warning | pestName, severity, action, onDismiss | Alert role, severity in text |
| **TreatmentStep** | Number + Description + Image | Treatment instructions | stepNumber, description, image, products | Ordered list, step-by-step clarity |
| **MarketComparison** | Table + Charts + Highlight | Compare prices across mandis | mandis, prices, distance, bestPrice | Table with headers, highlight accessible |
| **VoiceButton** | Mic Icon + Animation + Status | Voice input trigger | isListening, onStart, onStop, language | Button role, listening state announced |
| **OfflineIndicator** | Icon + Text + Sync Status | Offline mode indicator | isOffline, lastSync, pendingItems | Status role, live updates |
| **CropSeasonBadge** | Icon + Season Name + Status | Show crop season | season, isActive, cropName | Badge with semantic meaning |
| **MetricCard** | Icon + Value + Label + Compare | Display key metrics | value, label, icon, unit, previousValue | Semantic structure, comparison clear |
| **FilterChip** | Icon + Text + Close | Filter tags | label, onRemove, active, count | Button role, keyboard dismiss |
| **DateRangePicker** | 2 Inputs + Calendar + Presets | Date range selection | startDate, endDate, onChange, presets | Date inputs accessible, clear labels |

---

### Detailed Molecule Component Examples

**1. PriceCard Component:**

```tsx
// components/molecules/PriceCard/PriceCard.tsx
import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';

export interface PriceCardProps {
  cropName: string;
  cropNameHi: string;
  price: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  mandiName: string;
  lastUpdated: Date;
  onClick?: () => void;
}

export const PriceCard: React.FC<PriceCardProps> = ({
  cropName,
  cropNameHi,
  price,
  unit,
  trend,
  changePercent,
  mandiName,
  lastUpdated,
  onClick
}) => {
  const { t, i18n } = useTranslation();
  
  const trendConfig = {
    up: { icon: 'trending_up', color: 'text-success', bg: 'bg-success/10' },
    down: { icon: 'trending_down', color: 'text-error', bg: 'bg-error/10' },
    stable: { icon: 'trending_flat', color: 'text-base-content', bg: 'bg-base-300' }
  };
  
  return (
    <div 
      className="card bg-base-100 shadow hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
      aria-label={`${i18n.language === 'hi' ? cropNameHi : cropName} price details`}
    >
      <div className="card-body p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">
              {i18n.language === 'hi' ? cropNameHi : cropName}
            </h3>
            <p className="text-sm text-base-content/60 flex items-center gap-1">
              <Icon name="store" size="sm" />
              {mandiName}
            </p>
          </div>
          
          <div className={`flex items-center gap-1 px-2 py-1 rounded ${trendConfig[trend].bg}`}>
            <Icon 
              name={trendConfig[trend].icon} 
              size="sm" 
              className={trendConfig[trend].color}
            />
            <span className={`text-sm font-semibold ${trendConfig[trend].color}`}>
              {changePercent > 0 ? '+' : ''}{changePercent}%
            </span>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-2xl font-bold text-primary">
            ₹{price.toLocaleString('en-IN')}
            <span className="text-sm font-normal text-base-content/60">/{unit}</span>
          </p>
          <p className="text-xs text-base-content/50 mt-1">
            {t('updated')} {formatDistanceToNow(lastUpdated, { addSuffix: true })}
          </p>
        </div>
      </div>
    </div>
  );
};
```

**2. DiseaseCard Component:**

```tsx
// components/molecules/DiseaseCard/DiseaseCard.tsx
import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { Badge } from '@/components/atoms/Badge';
import { useTranslation } from 'react-i18next';

export interface DiseaseCardProps {
  diseaseName: string;
  diseaseNameHi: string;
  confidence: number; // 0-100
  severity: 'mild' | 'moderate' | 'severe';
  imageUrl: string;
  symptoms: string[];
  onClick?: () => void;
}

export const DiseaseCard: React.FC<DiseaseCardProps> = ({
  diseaseName,
  diseaseNameHi,
  confidence,
  severity,
  imageUrl,
  symptoms,
  onClick
}) => {
  const { t, i18n } = useTranslation();
  
  const severityConfig = {
    mild: { color: 'success', icon: 'check_circle' },
    moderate: { color: 'warning', icon: 'warning' },
    severe: { color: 'error', icon: 'error' }
  };
  
  return (
    <div 
      className="card bg-base-100 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
      role="article"
      aria-label={`${i18n.language === 'hi' ? diseaseNameHi : diseaseName} detection result`}
    >
      <figure className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={i18n.language === 'hi' ? diseaseNameHi : diseaseName}
          className="w-full h-full object-cover"
        />
      </figure>
      
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h3 className="card-title text-lg">
            {i18n.language === 'hi' ? diseaseNameHi : diseaseName}
          </h3>
          <Badge 
            variant={severityConfig[severity].color}
            size="sm"
          >
            <Icon name={severityConfig[severity].icon} size="sm" />
            {t(`severity.${severity}`)}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2 my-2">
          <span className="text-sm text-base-content/60">{t('confidence')}:</span>
          <progress 
            className="progress progress-primary w-24" 
            value={confidence} 
            max="100"
            aria-label={`${confidence}% ${t('confidence')}`}
          />
          <span className="text-sm font-semibold">{confidence}%</span>
        </div>
        
        <div className="mt-2">
          <p className="text-sm font-medium mb-1">{t('symptoms')}:</p>
          <ul className="text-sm text-base-content/70 list-disc list-inside space-y-1">
            {symptoms.slice(0, 3).map((symptom, idx) => (
              <li key={idx}>{symptom}</li>
            ))}
          </ul>
        </div>
        
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary btn-sm gap-2">
            {t('viewTreatment')}
            <Icon name="arrow_forward" size="sm" />
          </button>
        </div>
      </div>
    </div>
  );
};
```

**3. AdvisorySection Component:**

```tsx
// components/molecules/AdvisorySection/AdvisorySection.tsx
import React, { useState } from 'react';
import { Icon } from '@/components/atoms/Icon';

export interface AdvisorySectionProps {
  title: string;
  icon: string;
  content: React.ReactNode;
  severity?: 'info' | 'success' | 'warning' | 'error';
  defaultExpanded?: boolean;
}

export const AdvisorySection: React.FC<AdvisorySectionProps> = ({
  title,
  icon,
  content,
  severity = 'info',
  defaultExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  const severityStyles = {
    info: 'border-info bg-info/5',
    success: 'border-success bg-success/5',
    warning: 'border-warning bg-warning/5',
    error: 'border-error bg-error/5'
  };
  
  return (
    <div className={`border-l-4 rounded-lg p-4 ${severityStyles[severity]}`}>
      <button
        className="w-full flex items-center justify-between text-left group"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-controls={`advisory-content-${title}`}
      >
        <div className="flex items-center gap-3">
          <Icon name={icon} size="md" className="text-primary" />
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        <Icon 
          name={isExpanded ? 'expand_less' : 'expand_more'} 
          size="md"
          className="text-base-content/60"
        />
      </button>
      
      {isExpanded && (
        <div 
          id={`advisory-content-${title}`}
          className="mt-4 pl-10 text-base-content/80 space-y-2"
        >
          {content}
        </div>
      )}
    </div>
  );
};
```

**4. SoilTypeSelector Component:**

```tsx
// components/molecules/SoilTypeSelector/SoilTypeSelector.tsx
import React from 'react';
import { Icon } from '@/components/atoms/Icon';
import { useTranslation } from 'react-i18next';

export type SoilType = 'sandy' | 'clay' | 'loamy' | 'black' | 'red';

export interface SoilTypeSelectorProps {
  selected: SoilType | null;
  onChange: (soilType: SoilType) => void;
}

export const SoilTypeSelector: React.FC<SoilTypeSelectorProps> = ({
  selected,
  onChange
}) => {
  const { t } = useTranslation();
  
  const soilTypes: { type: SoilType; icon: string; color: string }[] = [
    { type: 'sandy', icon: 'filter_drama', color: 'text-yellow-600' },
    { type: 'clay', icon: 'layers', color: 'text-orange-700' },
    { type: 'loamy', icon: 'eco', color: 'text-amber-800' },
    { type: 'black', icon: 'dark_mode', color: 'text-neutral' },
    { type: 'red', icon: 'tonality', color: 'text-red-700' }
  ];
  
  return (
    <div role="radiogroup" aria-label={t('selectSoilType')}>
      <label className="label">
        <span className="label-text font-medium text-base">{t('soilType')}</span>
      </label>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {soilTypes.map(({ type, icon, color }) => (
          <button
            key={type}
            role="radio"
            aria-checked={selected === type}
            onClick={() => onChange(type)}
            className={`btn btn-lg flex-col h-auto py-4 ${
              selected === type 
                ? 'btn-primary' 
                : 'btn-outline hover:btn-primary'
            }`}
          >
            <Icon 
              name={icon} 
              size="lg" 
              className={selected === type ? '' : color} 
            />
            <span className="mt-2 text-sm font-medium">
              {t(`soilTypes.${type}`)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
```

**5. VoiceButton Component:**

```tsx
// components/molecules/VoiceButton/VoiceButton.tsx
import React, { useState, useRef } from 'react';
import { Icon } from '@/components/atoms/Icon';
import { useTranslation } from 'react-i18next';

export interface VoiceButtonProps {
  onTranscript: (text: string) => void;
  language?: 'en-IN' | 'hi-IN';
}

export const VoiceButton: React.FC<VoiceButtonProps> = ({
  onTranscript,
  language = 'hi-IN'
}) => {
  const { t } = useTranslation();
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  
  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert(t('voiceNotSupported'));
      return;
    }
    
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = language;
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onstart = () => {
      setIsListening(true);
    };
    
    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
    };
    
    recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
      alert(t('voiceError'));
    };
    
    recognitionRef.current = recognition;
    recognition.start();
  };
  
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };
  
  return (
    <button
      onClick={isListening ? stopListening : startListening}
      className={`btn btn-circle ${isListening ? 'btn-error animate-pulse' : 'btn-primary'}`}
      aria-label={isListening ? t('stopListening') : t('startVoiceInput')}
      aria-pressed={isListening}
    >
      <Icon 
        name={isListening ? 'mic' : 'mic_none'} 
        size="md"
      />
    </button>
  );
};
```

**6. OfflineIndicator Component:**

```tsx
// components/molecules/OfflineIndicator/OfflineIndicator.tsx
import React, { useEffect, useState } from 'react';
import { Icon } from '@/components/atoms/Icon';
import { useTranslation } from 'react-i18next';
import { formatDistanceToNow } from 'date-fns';

export interface OfflineIndicatorProps {
  lastSync?: Date;
  pendingItems?: number;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({
  lastSync,
  pendingItems = 0
}) => {
  const { t } = useTranslation();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  if (isOnline && pendingItems === 0) return null;
  
  return (
    <div 
      role="status" 
      aria-live="polite"
      aria-atomic="true"
      className={`alert ${isOnline ? 'alert-info' : 'alert-warning'} shadow-lg mb-4`}
    >
      <Icon 
        name={isOnline ? 'cloud_sync' : 'cloud_off'} 
        size="md"
      />
      <div className="flex-1">
        <h3 className="font-bold">
          {isOnline ? t('syncingData') : t('offlineMode')}
        </h3>
        <div className="text-xs space-y-1">
          {!isOnline && lastSync && (
            <p>{t('lastSync')}: {formatDistanceToNow(lastSync, { addSuffix: true })}</p>
          )}
          {pendingItems > 0 && (
            <p>{t('pendingUploads', { count: pendingItems })}</p>
          )}
        </div>
      </div>
    </div>
  );
};
```

**7. ImageUpload Component:**

```tsx
// components/molecules/ImageUpload/ImageUpload.tsx
import React, { useCallback, useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/atoms/Icon';

export interface ImageUploadProps {
  onUpload: (file: File) => Promise<void>;
  maxSize?: number; // in MB
  allowCamera?: boolean;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ 
  onUpload, 
  maxSize = 5,
  allowCamera = true
}) => {
  const { t } = useTranslation();
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
    
    // Upload
    setUploading(true);
    try {
      await onUpload(file);
    } catch (error) {
      console.error('Upload failed:', error);
      alert(t('uploadFailed'));
    } finally {
      setUploading(false);
    }
  }, [onUpload, t]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png'] },
    maxSize: maxSize * 1024 * 1024,
    multiple: false
  });
  
  const handleCameraClick = () => {
    cameraInputRef.current?.click();
  };
  
  const handleCameraCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onDrop([file]);
    }
  };
  
  const clearPreview = () => {
    setPreview(null);
    if (cameraInputRef.current) {
      cameraInputRef.current.value = '';
    }
  };
  
  return (
    <div className="w-full">
      {!preview ? (
        <div className="space-y-3">
          {/* Drag & Drop Area */}
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all
              ${isDragActive 
                ? 'border-primary bg-primary/10 scale-[1.02]' 
                : 'border-base-300 hover:border-primary hover:bg-base-200'
              }`}
          >
            <input {...getInputProps()} aria-label={t('uploadImage')} />
            <Icon name="upload" size="xl" className="text-primary mx-auto mb-4" />
            <p className="text-lg font-medium mb-2">
              {isDragActive ? t('dropImageHere') : t('clickOrDragImage')}
            </p>
            <p className="text-sm text-base-content/60">
              {t('supportedFormats')}: JPEG, PNG
            </p>
            <p className="text-xs text-base-content/50 mt-1">
              {t('maxSize')}: {maxSize}MB
            </p>
          </div>
          
          {/* Camera Button (Mobile) */}
          {allowCamera && (
            <>
              <div className="divider text-sm text-base-content/60">{t('or')}</div>
              <button
                type="button"
                onClick={handleCameraClick}
                className="btn btn-primary btn-block btn-lg gap-2"
              >
                <Icon name="photo_camera" size="md" />
                {t('takePhoto')}
              </button>
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleCameraCapture}
                className="hidden"
                aria-label={t('capturePhoto')}
              />
            </>
          )}
        </div>
      ) : (
        <div className="relative">
          <img 
            src={preview} 
            alt={t('uploadedImage')} 
            className="w-full h-64 object-cover rounded-lg"
          />
          
          {uploading && (
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-lg">
              <span className="loading loading-spinner loading-lg text-white mb-2" />
              <p className="text-white text-sm">{t('analyzing')}</p>
            </div>
          )}
          
          {!uploading && (
            <button
              onClick={clearPreview}
              className="absolute top-2 right-2 btn btn-sm btn-circle btn-error"
              aria-label={t('removeImage')}
            >
              <Icon name="close" size="sm" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
```

---

### Organism Components Inventory

| Component | Purpose | Complexity | Key Features | Accessibility |
|-----------|---------|------------|--------------|---------------|
| **Header** | Top navigation | Medium | Logo, language toggle, user menu, location | Skip link, landmark, keyboard nav |
| **BottomNav** | Mobile navigation | Medium | 5 main actions, active state, badges | ARIA current, navigation landmark |
| **WeatherWidget** | Weather display | High | Current + forecast, location, refresh, alerts | Live region updates, semantic structure |
| **CropSelector** | Crop selection flow | High | Search, filter, categories, images | Combobox pattern, keyboard searchable |
| **PestDetector** | Image analysis UI | High | Camera, upload, processing, results, history | Status updates, error handling |
| **PriceList** | Market prices | Medium | Search, filter, sort, trends, details | Table semantics, sortable headers |
| **AdvisoryPanel** | Recommendations | High | Weather + soil + crop logic, sections | Expandable sections, clear structure |
| **ProfileCard** | User profile display | Low | Avatar, name, farm info, edit | Semantic structure, action buttons |
| **FarmForm** | Farm details form | Medium | Land, crops, soil, validation | Form semantics, error handling |
| **HistoryList** | Past advisories/detections | Medium | Timeline, filter, search, details | List semantics, chronological order |

---

## Google Stitch Wireframe Structure

### Wireframe Pages Overview

**1. Onboarding Flow (First Launch)**
**2. Home Dashboard**
**3. Crop Advisory Page**
**4. Pest Detection Page**
**5. Market Prices Page**
**6. Profile & Settings**

---

### 1. Onboarding Flow Wireframe

**Route:** `/onboarding`

**Purpose:** Guide new users through initial setup (language, location, farm profile)

**Layout Type:** Fullscreen, centered content, step indicator

---

**Step 1: Language Selection**

**Block 1 - Header:**
- Component: Logo + Welcome text
- Elements:
    - FarmMitra logo (centered, 80px)
    - "Welcome to FarmMitra" / "फार्म मित्र में आपका स्वागत है"
    - Tagline: "Your Smart Farming Companion" / "आपका स्मार्ट कृषि साथी"

**Block 2 - Language Cards:**
- Component: 2-column grid (stacked on mobile)
- Elements:
    - Card 1: "English" with 🇬🇧 flag, large touch target (200px height)
    - Card 2: "हिन्दी" with 🇮🇳 flag, large touch target
    - Visual feedback on selection
- Interaction: Tap to select, auto-advance to next step
- Visual: Selected card has primary green border (3px)

**Block 3 - Progress:**
- Component: Step indicator
- Elements: "Step 1 of 3" with dots (○○○)
- Responsive: Centered at bottom

---

**Step 2: Location Permission**

**Block 1 - Illustration:**
- Component: Large icon with explanatory text
- Elements:
    - Location pin icon (72px, primary color)
    - Heading: "Enable Location" / "स्थान सक्षम करें"
    - Description: "We need your location to provide personalized crop recommendations and local weather updates."
    - Why needed: List 3 benefits

**Block 2 - Permission Buttons:**
- Component: Stacked button group
- Elements:
    - Primary button: "Allow Location Access" (full-width)
    - Secondary button: "Enter Location Manually" (full-width)
    - Link: "Why do we need this?"

**Block 3 - Trust Message:**
- Component: Info alert
- Elements:
    - Lock icon
    - "Your location data is secure and used only for weather and market information"
    - Link to privacy policy

---

**Step 3: Farm Profile**

**Block 1 - Form:**
- Component: Multi-field form with large inputs
- Elements:
    - Input: "Your Name" (optional, placeholder: "e.g., Ramesh Kumar")
    - Select: "Land Size"
        - Options: Less than 1 acre, 1-2 acres, 2-5 acres, 5+ acres
    - SoilTypeSelector: Visual grid selection
    - Multi-select chips: "Crops You Grow"
        - Options: Wheat, Rice, Cotton, Sugarcane, Maize, etc.
        - Search to add more

**Block 2 - Action:**
- Primary button: "Get Started" / "शुरू करें" (full-width, large)
- Helper text: "You can update this information anytime in settings"

**Block 3 - Skip Option:**
- Link: "Skip for now" (centered, small)

---

### 2. Home Dashboard Wireframe

**Route:** `/`

**Purpose:** Main landing page with quick access to all features and overview

**Layout Type:** MainLayout (Header + ScrollableContent + BottomNav)

---

**Block 1 - Welcome Header:**
- Component: User greeting card
- Elements:
    - "नमस्ते, Ramesh!" / "Hello, Ramesh!"
    - Subtitle: "Let's grow better today"
    - Current date & time
    - Location: "Ludhiana, Punjab" (changeable)
- Background: Gradient from base-100 to base-200
- Height: 120px

**Block 2 - Weather Widget:**
- Component: Prominent weather card
- Elements:
    - Current conditions:
        - Large temperature: "32°C"
        - Weather icon (animated)
        - Condition: "Partly Cloudy"
        - Humidity: 65%, Wind: 12 km/h
    - 3-day mini forecast (horizontal scroll)
        - Day, icon, high/low temp
    - Weather alert banner (if applicable):
        - "Heavy rain expected tomorrow"
        - Icon + severity color
    - "View 7-Day Forecast" button
- Visual: Card with subtle shadow, primary accent on left edge

**Block 3 - Quick Actions Grid:**
- Component: 2×2 grid (1×4 on mobile <400px)
- Elements:
    - Card 1: **Get Crop Advisory**
        - Icon: eco (48px)
        - Label: "Crop Advisory"
        - Sublabel: "Personalized recommendations"
        - Arrow icon

    - Card 2: **Detect Pest/Disease**
        - Icon: bug_report (48px)
        - Label: "Pest Detection"
        - Sublabel: "AI-powered diagnosis"
        - Arrow icon

    - Card 3: **Check Market Prices**
        - Icon: trending_up (48px)
        - Label: "Market Prices"
        - Sublabel: "Live mandi rates"
        - Badge: "Updated today"
        - Arrow icon

    - Card 4: **Weather Alerts**
        - Icon: notifications (48px)
        - Label: "Alerts"
        - Sublabel: "Weather & pest warnings"
        - Badge: Red dot (if active alerts)
        - Arrow icon
- Visual: Cards with hover lift effect, icons in primary color
- Spacing: 16px gap

**Block 4 - Recent Activity:**
- Component: Scrollable list with timeline
- Elements:
    - Section heading: "Your Recent Activity" / "आपकी हाल की गतिविधि"
    - Timeline items (max 5):
        - Icon + Title + Timestamp + Arrow
        - Example:
            - "Wheat Advisory" - 2 days ago
            - "Cotton Pest Detected" - 5 days ago
            - "Market Price Checked" - 1 week ago
    - "View All History" button (outline)
- Visual: Vertical timeline with connecting lines

**Block 5 - Farming Tip (Optional):**
- Component: Info card with rotation
- Elements:
    - Icon: lightbulb
    - Badge: "Tip of the Day"
    - Tip text: Short, actionable advice
    - "Next Tip" button (swipe or tap)
- Background: Accent color (light yellow)

**Navigation:**
- Entry: App launch, bottom nav "Home" button
- Exit: Bottom nav to other sections
- Responsive: Stack vertically on mobile

---

### 3. Crop Advisory Page Wireframe

**Route:** `/advisory`

**Purpose:** Generate personalized crop recommendations based on weather, soil, and crop selection

**Layout Type:** MainLayout with step-by-step wizard

---

**Block 1 - Page Header:**
- Component: Header with back navigation
- Elements:
    - Back arrow icon (← left)
    - Title: "Crop Advisory" / "फसल सलाह"
    - Info icon (help tooltip) (→ right)
- Sticky: Fixed at top

**Block 2 - Input Wizard (Step 1):**
- Component: Crop selection interface
- Elements:
    - Step indicator: "Step 1 of 3"
    - Label: "Select Your Crop" / "अपनी फसल चुनें"
    - Search bar: "Search crops..." with voice button
    - Filter chips: "All", "Grains", "Vegetables", "Fruits", "Cash Crops"
    - Grid of crop cards (2 columns mobile, 4 desktop):
        - Wheat, Rice, Cotton, Sugarcane, Maize, etc.
        - Each card: Image, name (Hi/En), season badge
        - Selection: Green border + checkmark
    - "Next" button (disabled until selection)

**Block 3 - Input Wizard (Step 2):**
- Component: Soil & growth stage selection
- Elements:
    - Step indicator: "Step 2 of 3"
    - SoilTypeSelector component (visual grid)
    - Growth stage selector:
        - Label: "Current Growth Stage"
        - Radio buttons (large):
            - 🌱 Sowing
            - 🌿 Vegetative
            - 🌸 Flowering
            - 🌾 Harvesting
    - Buttons: "Back" (outline), "Next" (primary)

**Block 3 - Input Wizard (Step 3):**
- Component: Weather context & confirmation
- Elements:
    - Step indicator: "Step 3 of 3"
    - Weather summary card:
        - "Based on current weather in Ludhiana, Punjab"
        - Mini forecast (next 5 days)
        - Auto-refreshing
    - Confirmation summary:
        - "Crop: Wheat"
        - "Soil: Loamy"
        - "Stage: Vegetative"
        - "Edit" links for each
    - Generate button: "Get Advisory" (large, primary, full-width)
    - Loading state: Spinner + "Generating recommendations..."

---

**Block 4 - Advisory Results (After Generation):**
- Component: Scrollable collapsible sections
- Appears with smooth scroll animation

**Section 1: Weather Recommendations**
- Icon: wb_sunny (large)
- Heading: "Weather Outlook"
- Content:
    - Status badge: "Good Conditions" (green) / "Caution" (yellow)
    - Summary: "Favorable weather for next 5 days"
    - Specific advice:
        - "Ideal time for irrigation: Next 2 days"
        - "Moderate rainfall expected in 4 days"
        - "Temperature range: 20-32°C"
    - Chart: 7-day weather trend
- Expandable: Collapsed by default

**Section 2: Fertilizer Recommendations**
- Icon: science
- Heading: "Fertilizer Guidance"
- Content:
    - NPK ratio recommendation: "10-26-26"
    - Quantity: "50 kg per acre"
    - Timing: "Apply during vegetative stage"
    - Instructions:
        1. Mix with water
        2. Apply in morning or evening
        3. Water immediately after
    - Organic alternatives:
        - Compost, vermicompost options
    - Product suggestions (optional)
- Expandable: Collapsed by default

**Section 3: Irrigation Advice**
- Icon: water_drop
- Heading: "Watering Schedule"
- Content:
    - Frequency: "Every 3-4 days"
    - Quantity: "30-40mm per watering"
    - Best time: "Early morning (5-7 AM) or evening (5-7 PM)"
    - Weather-based adjustments:
        - "Skip watering on rainy days"
        - "Increase frequency during hot spells"
    - Soil moisture indicators
- Expandable: Collapsed by default

**Section 4: Pest Alert**
- Icon: bug_report
- Heading: "Pest & Disease Watch"
- Badge: Alert level (Low/Medium/High)
- Content:
    - "Common pests in your area right now"
    - List of potential threats:
        - Aphids (medium risk)
        - Stem borer (low risk)
    - Preventive measures:
        - Crop rotation tips
        - Natural pest control
        - Chemical treatments (as last resort)
    - "Detect Disease" button → Camera
- Expandable: Expanded if high alert

**Section 5: Market Timing**
- Icon: trending_up
- Heading: "Market Insights"
- Content:
    - Expected harvest date: "Mid-March 2026"
    - Current market price: "₹2,500/quintal"
    - Price trend: Chart (up/down/stable)
    - Historical comparison
    - Best time to sell: Recommendation
    - "View Live Prices" button → Market page
- Expandable: Collapsed by default

---

**Block 5 - Action Bar (Sticky Bottom):**
- Component: Fixed action buttons
- Elements:
    - Icon buttons:
        - Save/Bookmark (star icon)
        - Share (share icon) → WhatsApp, SMS
        - Speak (volume icon) → Read aloud
    - Primary button: "Save Advisory" (if not saved)
    - Link: "View Past Advisories"
- Background: Base-100 with shadow

**Navigation:**
- Entry: Home quick action, bottom nav
- Exit: Bottom nav, back button
- Share: WhatsApp integration

**Responsive:**
- Mobile: Stack all sections vertically, sticky generate button
- Tablet: 1 column, larger cards
- Desktop: 2-column layout (inputs left, preview/results right)

---

### 4. Pest Detection Page Wireframe

**Route:** `/pest-detection`

**Purpose:** Upload/capture plant images to detect diseases using AI

**Layout Type:** FullscreenLayout for camera, MainLayout for results

---

**Block 1 - Landing Screen:**
- Component: Feature explanation + action cards
- Elements:
    - Heading: "Detect Pest & Disease" / "कीट और रोग का पता लगाएं"
    - Subheading: "Take a photo of affected leaves for instant AI diagnosis"
    - Info cards (stacked):

      Card 1: "Take Photo"
        - Icon: photo_camera (64px)
        - Description: "Use camera to capture leaf"
        - Button: "Open Camera"

      Card 2: "Upload from Gallery"
        - Icon: upload (64px)
        - Description: "Select existing photo"
        - Button: "Choose Photo"

      Card 3: "View History"
        - Icon: history (64px)
        - Description: "Past detections"
        - Badge: Count of saved detections
        - Button: "View All"

    - Tips section:
        - "📸 Take clear photo in good lighting"
        - "🍃 Focus on affected area"
        - "📏 Keep leaf in frame"

---

**Camera Mode (After "Take Photo"):**

**Full-screen Camera Interface:**
- Component: Live camera feed with overlay
- Elements:
    - Camera viewfinder (full screen)
    - Circular guide overlay (centered, 70% width)
        - Dashed circle outline
        - Text inside: "Center leaf here"
    - Top bar (overlayed):
        - Close button (✕ left)
        - Flash toggle (⚡ right)
        - Switch camera (🔄 right)
    - Bottom controls:
        - Capture button (large circle, center)
        - Gallery button (thumbnail, left)
        - Info button (right)
    - Help text (bottom): "Center the affected leaf in the circle"
- Background: Black with semi-transparent overlays
- Interaction:
    - Tap capture button
    - Volume button as capture (optional)

**Capture Review Screen:**
- Component: Preview with actions
- Elements:
    - Captured image (full screen)
    - Top bar:
        - Close/Cancel (✕ left)
    - Bottom actions (overlayed):
        - "Retake" button (outline, left)
        - "Use Photo" button (primary, right, large)
    - Pinch to zoom enabled

---

**Processing State:**

**Block 1 - Loading Screen:**
- Component: Full-screen loader with animation
- Elements:
    - Animated plant/leaf illustration
    - Spinner / progress indicator
    - Status text:
        - "Analyzing image..." (0-3s)
        - "Detecting disease..." (3-6s)
        - "Almost done..." (6-8s)
    - Progress bar (0-100%)
    - Tip text: Random farming tip while waiting
- Duration: 5-8 seconds (simulate AI processing)

---

**Detection Results Screen:**

**Block 1 - Results Header:**
- Component: Status card
- Elements:
    - Icon: check_circle (success) or warning (low confidence)
    - Heading: "Detection Complete" / "पहचान पूर्ण"
    - Timestamp: "Analyzed just now"
    - Confidence indicator: Progress bar + percentage

**Block 2 - Disease Information Card:**
- Component: Large detailed card
- Elements:
    - Image preview (thumbnail, 120px)
    - Disease name:
        - English: "Late Blight"
        - Hindi: "लेट ब्लाइट"
        - Scientific name: "(Phytophthora infestans)"
    - Confidence score: "92% match"
        - Visual: Green progress bar
        - Text: "High confidence"
    - Severity badge:
        - "Moderate" (yellow) / "Severe" (red) / "Mild" (green)
        - Icon indicating urgency

**Block 3 - Tabbed Information:**
- Component: Tab navigation
- Tabs:
    1. Symptoms
    2. Causes
    3. Treatment
    4. Prevention

**Tab 1: Symptoms**
- Icon: visibility
- Content:
    - "What to look for:"
    - Bulleted list:
        - "Dark brown spots on leaves"
        - "White fungal growth on underside"
        - "Yellowing of leaf edges"
    - Reference images (carousel):
        - Example photos of disease stages
    - Comparison: Healthy vs Diseased

**Tab 2: Causes**
- Icon: help_outline
- Content:
    - "What causes this disease:"
    - Factors:
        - High humidity (>80%)
        - Cool temperatures (15-25°C)
        - Poor air circulation
    - Environmental conditions:
        - "Common during monsoon season"
        - "Spreads rapidly in wet conditions"
    - Risk factors for your area

**Tab 3: Treatment** (Active by default)
- Icon: healing
- Content:
    - "How to treat:"

  **Organic/Natural Methods (Priority):**
    - Neem oil spray (recipe)
    - Copper-based fungicides
    - Remove affected leaves
    - Improve drainage

  **Chemical Treatments (If needed):**
    - Fungicide names (generic)
    - Application instructions:
        1. Timing (morning/evening)
        2. Dosage
        3. Safety precautions
    - Warning: "Use as last resort"

  **Products (Optional):**
    - Suggested brands (unbiased)
    - Where to buy

  **Action buttons:**
    - "Set Reminder" (for reapplication)
    - "Share with Expert" (consultant feature)

**Tab 4: Prevention**
- Icon: shield
- Content:
    - "Prevent recurrence:"
    - Best practices:
        - Crop rotation schedule
        - Proper spacing (air flow)
        - Avoid overhead watering
        - Resistant varieties
    - Soil management tips
    - Monitoring schedule
    - "Early signs to watch"

---

**Block 4 - Confidence & Alternatives:**
- Component: Additional suggestions
- Elements:
    - Heading: "Other Possible Diseases"
    - Horizontal scroll cards:
        - Disease name
        - Confidence percentage
        - Thumbnail
        - "View Details" button
    - Note: "Not sure? Try these"
    - "Report Incorrect" button

**Block 5 - Action Buttons:**
- Component: Fixed bottom bar
- Elements:
    - Primary button: "Save to History"
    - Secondary button: "Share Results"
        - Options: WhatsApp, SMS, Download PDF
    - Icon button: "Speak Results" (text-to-speech)
    - Link: "Consult Expert" (future feature)

---

**Block 6 - Related Actions:**
- Component: Quick action cards
- Elements:
    - "Check Market Price" → Link to market page
    - "Get Advisory" → Link to crop advisory
    - "Detect Another" → Return to camera

**Navigation:**
- Entry: Home, bottom nav, crop advisory
- Exit: Bottom nav, back button
- Camera: Permission request on first use

**Offline Support:**
- Cached ML model for basic detection
- Queue images for detailed analysis when online
- Banner: "Offline Mode - Basic detection available"
- Sync when reconnected

**Accessibility:**
- Camera viewfinder has audio cues
- Results read aloud (optional)
- High contrast mode support
- Large text throughout

---

### 5. Market Prices Page Wireframe

**Route:** `/market-prices`

**Purpose:** Display current crop prices, trends, and nearby mandi information

**Layout Type:** MainLayout

---

**Block 1 - Page Header:**
- Component: Header with location & update info
- Elements:
    - Title: "Market Prices" / "बाज़ार मूल्य"
    - Location selector (dropdown):
        - "Prices near Ludhiana, Punjab"
        - Change location icon
        - Radius: "Within 50 km"
    - Update timestamp:
        - "Updated today at 10:00 AM"
        - Refresh button (manual)
        - Auto-refresh: Every 6 hours
- Background: Base-200
- Sticky: Yes

**Block 2 - Search & Filters:**
- Component: Search bar with filter chips
- Elements:
    - Search input:
        - Placeholder: "Search crops... (e.g., Wheat)"
        - Icon: search
        - Voice search button
        - Clear button (×)

    - Filter chips (horizontal scroll):
        - "All Crops" (default, selected)
        - "Grains"
        - "Vegetables"
        - "Fruits"
        - "Cash Crops"
        - Custom filter button (+)

    - Sort dropdown (right):
        - "Price: High to Low"
        - "Price: Low to High"
        - "Trending Up"
        - "Trending Down"
        - "Recently Updated"
        - "Alphabetical"

    - View toggle:
        - List view (active)
        - Card view

**Block 3 - Featured/Trending:**
- Component: Horizontal scroll banner
- Elements:
    - Badge: "📈 Trending This Week"
    - Cards (horizontal scroll):
        - Crop image
        - Name
        - Price
        - Trend indicator
        - "View Details" arrow
    - Max 5 items

---

**Block 4 - Price List (Main Content):**
- Component: Scrollable list/grid of price cards
- Elements per card:

  **Visual Structure:**
    - Left section (60%):
        - Crop thumbnail (80px, rounded)
        - Crop name:
            - English: "Wheat"
            - Hindi: "गेहूं" (smaller text)
        - Mandi name:
            - Icon: store
            - "Ludhiana Mandi"
            - Distance: "12 km away"

    - Right section (40%):
        - Current price (large):
            - "₹2,500"
            - "/quintal" (small)
        - Trend indicator:
            - Up arrow: ↑ +5.2% (green)
            - Down arrow: ↓ -3.1% (red)
            - Stable: — 0% (neutral)
        - Mini chart:
            - 7-day trend line
            - Sparkline graph
        - "View Details" icon: arrow_forward

  **Interactions:**
    - Tap anywhere: Open details modal
    - Swipe left: Quick actions
        - Set alert
        - Share
        - Compare

  **States:**
    - Default: White background
    - Hover (desktop): Subtle shadow lift
    - Selected: Green border

**Pagination/Infinite Scroll:**
- Load 20 items initially
- Infinite scroll: Load more on reach bottom
- Loading indicator: Skeleton cards
- "Back to Top" button (after 50 items)

---

**Block 5 - Price Details Modal/Panel:**
- Component: Bottom sheet (mobile) / Side panel (desktop)
- Triggered: Tap on any price card

**Modal Structure:**

**Header:**
- Crop image (large, 200px)
- Crop name (En + Hi)
- Close button (×)

**Section 1: Current Price Info**
- Icon: attach_money
- Large price display: "₹2,500/quintal"
- Mandi details:
    - Name: "Ludhiana Mandi"
    - Address: "Focal Point, Ludhiana"
    - Distance: "12 km from you"
    - "Get Directions" button → Google Maps
- Update timestamp: "Updated 2 hours ago"
- Source: "Government Mandi Board"

**Section 2: Price Trend Chart**
- Icon: analytics
- Time period selector:
    - Tabs: "7 Days" | "30 Days" | "3 Months"
- Line chart:
    - X-axis: Dates
    - Y-axis: Price (₹)
    - Markers on data points
    - Hover: Show exact price & date
- Key insights:
    - Highest: "₹2,800 on Feb 10"
    - Lowest: "₹2,200 on Jan 15"
    - Average: "₹2,450"
    - Trend: "Increasing"

**Section 3: Price Comparison Table**
- Icon: compare
- Heading: "Nearby Mandis"
- Table:
  | Mandi Name | Price | Change | Distance |
  |------------|-------|--------|----------|
  | Ludhiana | ₹2,500 | +5% | 12 km |
  | Jagraon | ₹2,450 | +3% | 25 km |
  | Khanna | ₹2,600 | +7% | 35 km |

- Highlight: Highest price in green
- Sort: By price or distance

**Section 4: Price Alert**
- Icon: notifications
- Heading: "Set Price Alert"
- Input: "Notify me when price reaches"
    - Text input: "₹____"
    - Toggle: Above / Below
- Button: "Set Alert"
- Active alerts shown:
    - "Alert active: ₹2,600" (with delete option)

**Section 5: Market Insights (Optional)**
- Icon: lightbulb
- AI-generated summary:
    - "Prices are trending upward due to..."
    - "Best time to sell: Next week"
    - "Demand is high in..."
- Sources: News, government reports

**Action Buttons (Bottom):**
- "Share Price" → WhatsApp, SMS
- "Download Report" → PDF
- "Compare with Others" → Multi-select mode
- "Close"

---

**Block 6 - Quick Stats Banner:**
- Component: Info cards (horizontal scroll)
- Position: Above list or sticky bottom
- Cards:
    - "Highest Price Today": Crop name + price
    - "Lowest Price Today": Crop name + price
    - "Most Traded": Crop name + volume
    - "Trending Up": Crop name + %

**Block 7 - Additional Features:**

**Empty State:**
- When no results from search/filter
- Elements:
    - Illustration: Empty basket
    - Heading: "No crops found"
    - Subtext: "Try different search terms"
    - Button: "Clear Filters"

**Error State:**
- When API fails
- Elements:
    - Illustration: Disconnected
    - Heading: "Unable to load prices"
    - Subtext: "Check your connection"
    - Button: "Retry"
    - Link: "View cached prices"

**Offline Indicator:**
- Banner at top (dismissible)
- Elements:
    - Icon: cloud_off
    - Text: "Showing cached prices from [time]"
    - "Prices will update when online"

---

**Navigation:**
- Entry: Home quick action, bottom nav
- Exit: Bottom nav, back button
- Deep link: From crop advisory, pest detection

**Responsive:**
- Mobile: Single column list, bottom sheet modals
- Tablet: 2-column grid, side panel modals
- Desktop: 3-column grid, split-screen details

**Accessibility:**
- Table semantics for price list
- Sortable headers announced
- Price changes with both color and icon
- Alert button with clear labels
- Chart data available in table format

**Offline Strategy:**
- Cache last fetched prices (with timestamp)
- Show "Offline Mode" banner
- Queue alert requests for when online
- Auto-refresh when connection restored

---

### 6. Profile & Settings Wireframe

**Route:** `/profile`

**Purpose:** User profile, farm details, app settings, help, and account management

**Layout Type:** MainLayout

---

**Block 1 - Profile Header Card:**
- Component: Hero card with user info
- Elements:
    - Background: Gradient (primary color)
    - Avatar:
        - Circular, 100px
        - Upload button (camera icon overlay)
        - Placeholder: User initials
    - User name: "Ramesh Kumar"
        - Font: Large, bold
    - User info:
        - Location: "📍 Ludhiana, Punjab"
        - Member since: "Joined December 2024"
    - "Edit Profile" button (outline, white)
- Responsive: Center-aligned on mobile

---

**Block 2 - Farm Information Card:**
- Component: Info card with edit option
- Elements:
    - Section heading: "Farm Details" / "खेत की जानकारी"
    - Icon: agriculture

    - Details grid (2 columns):
        - Land size:
            - Label: "Land Area"
            - Value: "2 acres" / "2 एकड़"
            - Icon: landscape

        - Soil type:
            - Label: "Soil Type"
            - Value: "Loamy" / "दोमट"
            - Icon: layers

        - Crops grown:
            - Label: "Current Crops"
            - Values: Chips/badges
                - "Wheat" / "गेहूं"
                - "Rice" / "चावल"
                - "Cotton" / "कपास"
            - Icon: eco

        - Farming experience:
            - Label: "Experience"
            - Value: "10 years"
            - Icon: timeline

    - "Edit Details" button (primary, small)
    - Last updated: "Updated 2 days ago"

---

**Block 3 - App Settings:**
- Component: List of setting items
- Heading: "App Settings" / "ऐप सेटिंग्स"

**Settings List:**

1. **Language / भाषा**
    - Icon: language
    - Current: "हिन्दी" (Hindi)
    - Action: Tap to change → Modal
    - Options: English | हिन्दी
    - Apply immediately

2. **Location Services**
    - Icon: location_on
    - Current: "Auto-detect" / "GPS से"
    - Toggle: ON/OFF
    - Manual entry option
    - "Change Location" button

3. **Notifications**
    - Icon: notifications
    - Submenu:
        - Weather alerts: Toggle ON/OFF
        - Price alerts: Toggle ON/OFF
        - Pest alerts: Toggle ON/OFF
        - App updates: Toggle ON/OFF
    - "Notification Settings" → Detail page

4. **Offline Mode**
    - Icon: cloud_download
    - Submenu:
        - Auto-sync: Toggle
        - Download weather data: Button
        - Download crop database: Button
        - Cache size: "125 MB"
    - "Clear Cache" button

5. **Voice Features**
    - Icon: record_voice_over
    - Submenu:
        - Voice input: Toggle ON/OFF
        - Voice output (TTS): Toggle ON/OFF
        - Language: Hindi | English
        - Speed: Slider (0.5x - 2x)

6. **Data & Privacy**
    - Icon: privacy_tip
    - Submenu:
        - Share usage data: Toggle
        - Location tracking: Toggle
        - "Privacy Policy" link
        - "Terms of Service" link

7. **Display**
    - Icon: display_settings
    - Submenu:
        - Text size: Small | Medium | Large
        - High contrast: Toggle
        - Reduce motion: Toggle

---

**Block 4 - Advisory History:**
- Component: Expandable list
- Heading: "Your Activity" / "आपकी गतिविधि"
- Icon: history

**Tabs:**
1. Advisories (active)
2. Pest Detections
3. Price Checks

**List Items (Advisories):**
- Format: Card with timeline
- Elements per item:
    - Date: "2 days ago"
    - Crop icon
    - Title: "Wheat Advisory"
    - Snippet: "Fertilizer recommendations..."
    - Arrow: "View Full Advisory"
- Show 5 recent, "View All" button

**Empty State:**
- Icon: inbox
- Text: "No advisory history yet"
- Button: "Get Your First Advisory"

---

**Block 5 - Help & Support:**
- Component: Link list
- Heading: "Help & Support" / "सहायता"

**Links:**

1. **How to Use FarmMitra**
    - Icon: help_outline
    - Action: Opens tutorial/walkthrough
    - Video guides for each feature
    - Step-by-step instructions

2. **Frequently Asked Questions (FAQ)**
    - Icon: question_answer
    - Categories:
        - Using the app
        - Understanding advisories
        - Pest detection
        - Market prices
        - Technical issues
    - Search within FAQs

3. **Contact Support**
    - Icon: support_agent
    - Options:
        - Email: support@farmmitra.in
        - Phone: 1800-XXX-XXXX (toll-free)
        - WhatsApp: +91-XXXXX-XXXXX
        - Live chat (if available)

4. **Send Feedback**
    - Icon: feedback
    - Opens form:
        - Rating (1-5 stars)
        - Comment box
        - Screenshot attachment (optional)
        - Submit button

5. **About FarmMitra**
    - Icon: info
    - Content:
        - App version: "1.0.0"
        - Build number
        - Last updated
        - Credits & team
        - Open source licenses

6. **Report a Problem**
    - Icon: bug_report
    - Opens form with:
        - Problem category dropdown
        - Description
        - Screenshot
        - Auto-includes device info

---

**Block 6 - Account Management:**
- Component: Danger zone section
- Heading: "Account" / "खाता"
- Background: Subtle red tint

**Options:**

1. **Export My Data**
    - Icon: download
    - Description: "Download all your data"
    - Button: "Export Data" → Generates ZIP

2. **Delete Account**
    - Icon: delete_forever
    - Description: "Permanently delete your account and data"
    - Button: "Delete Account" (red)
    - Confirmation modal:
        - Warning text
        - "Are you sure?"
        - Input: "Type DELETE to confirm"
        - Final confirmation

3. **Logout**
    - Icon: logout
    - Button: "Logout" (secondary, full-width)
    - Confirmation: "Are you sure you want to logout?"

---

**Navigation:**
- Entry: Bottom nav "Profile" button
- Exit: Bottom nav, logout
- Responsive: Single column on mobile, 2-column on tablet/desktop

**Accessibility:**
- All settings have clear labels
- Toggle switches with ARIA states
- Form inputs properly labeled
- Confirmation dialogs for destructive actions

---

### Bottom Navigation (Global Component)

**Fixed Component on All Pages (Except Onboarding, Camera)**

**Position:** Fixed at bottom, above content

**Elements (5 tabs):**

1. **Home**
    - Icon: home
    - Label: "Home" / "होम"
    - Route: `/`

2. **Advisory**
    - Icon: eco
    - Label: "Advisory" / "सलाह"
    - Route: `/advisory`

3. **Detect** (Center, Elevated)
    - Icon: photo_camera (or bug_report)
    - Label: "Detect" / "पहचान"
    - Route: `/pest-detection`
    - Visual: Larger circle button, primary color, shadow
    - Stands out as primary action

4. **Prices**
    - Icon: trending_up
    - Label: "Prices" / "मूल्य"
    - Route: `/market-prices`
    - Badge: "NEW" (if new data available)

5. **Profile**
    - Icon: person
    - Label: "Profile" / "प्रोफ़ाइल"
    - Route: `/profile`

**Visual States:**

- **Active tab:**
    - Icon: Filled variant
    - Color: Primary green
    - Label: Bold font
    - Underline or indicator line

- **Inactive tabs:**
    - Icon: Outlined variant
    - Color: Neutral gray
    - Label: Regular font

**Behavior:**
- Smooth transition animations
- Haptic feedback on tap (mobile)
- Persists scroll position when switching tabs
- Desktop: Converts to sidebar navigation

**Accessibility:**
- Navigation landmark role
- ARIA current for active tab
- Keyboard navigation (Tab + Enter)
- Clear focus indicators

---

### Responsive Layout Summary

**Mobile (<768px):**
- Single column layouts
- Bottom navigation (fixed)
- Full-width cards and buttons
- Collapsible sections
- Simplified headers
- Touch-optimized (48px+ targets)
- Swipe gestures enabled

**Tablet (768px-1023px):**
- 2-column layouts where applicable
- Top navigation bar + bottom nav
- Cards in grid (2 columns)
- Side panels for modals
- More spacing and padding

**Desktop (≥1024px):**
- 3-column grids
- Left sidebar navigation (replaces bottom nav)
- Split-screen layouts (list + detail)
- Hover effects and tooltips
- Larger images and charts
- Multi-step forms side-by-side

---

## Development Implementation Details

### File Structure

```
farmmitra/
├── client/                      # Frontend Application
│   ├── public/
│   │   ├── icons/
│   │   │   ├── icon-72x72.png
│   │   │   ├── icon-96x96.png
│   │   │   ├── icon-128x128.png
│   │   │   ├── icon-144x144.png
│   │   │   ├── icon-152x152.png
│   │   │   ├── icon-192x192.png
│   │   │   ├── icon-384x384.png
│   │   │   └── icon-512x512.png
│   │   ├── images/
│   │   │   ├── crops/           # Crop images
│   │   │   ├── diseases/        # Disease reference images
│   │   │   └── illustrations/   # UI illustrations
│   │   ├── models/              # TensorFlow.js models
│   │   │   └── plant-disease/
│   │   │       ├── model.json
│   │   │       └── weights.bin
│   │   ├── manifest.json        # PWA manifest
│   │   ├── sw.js               # Service Worker
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── fonts/
│   │   │
│   │   ├── components/
│   │   │   ├── atoms/
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.test.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Input/
│   │   │   │   ├── Badge/
│   │   │   │   ├── Icon/
│   │   │   │   ├── Card/
│   │   │   │   ├── Select/
│   │   │   │   ├── Toggle/
│   │   │   │   └── Avatar/
│   │   │   │
│   │   │   ├── molecules/
│   │   │   │   ├── WeatherCard/
│   │   │   │   ├── CropCard/
│   │   │   │   ├── PriceCard/
│   │   │   │   ├── DiseaseCard/
│   │   │   │   ├── ImageUpload/
│   │   │   │   ├── AdvisorySection/
│   │   │   │   ├── SoilTypeSelector/
│   │   │   │   ├── VoiceButton/
│   │   │   │   ├── OfflineIndicator/
│   │   │   │   └── FormField/
│   │   │   │
│   │   │   ├── organisms/
│   │   │   │   ├── Header/
│   │   │   │   ├── BottomNav/
│   │   │   │   ├── WeatherWidget/
│   │   │   │   ├── CropSelector/
│   │   │   │   ├── PestDetector/
│   │   │   │   ├── PriceList/
│   │   │   │   ├── AdvisoryPanel/
│   │   │   │   └── ProfileCard/
│   │   │   │
│   │   │   ├── templates/
│   │   │   │   ├── MainLayout/
│   │   │   │   ├── OnboardingLayout/
│   │   │   │   └── FullscreenLayout/
│   │   │   │
│   │   │   └── pages/
│   │   │       ├── Home/
│   │   │       ├── Onboarding/
│   │   │       ├── CropAdvisory/
│   │   │       ├── PestDetection/
│   │   │       ├── MarketPrices/
│   │   │       └── Profile/
│   │   │
│   │   ├── hooks/
│   │   │   ├── useOnline.ts
│   │   │   ├── useGeolocation.ts
│   │   │   ├── useVoiceRecognition.ts
│   │   │   ├── useImageCapture.ts
│   │   │   └── useLocalStorage.ts
│   │   │
│   │   ├── services/
│   │   │   ├── api/
│   │   │   │   ├── auth.api.ts
│   │   │   │   ├── weather.api.ts
│   │   │   │   ├── advisory.api.ts
│   │   │   │   ├── pest.api.ts
│   │   │   │   ├── price.api.ts
│   │   │   │   └── user.api.ts
│   │   │   ├── ml/
│   │   │   │   └── diseaseDetection.ts
│   │   │   ├── storage/
│   │   │   │   ├── indexedDB.ts
│   │   │   │   └── cache.ts
│   │   │   └── pwa/
│   │   │       └── serviceWorkerRegistration.ts
│   │   │
│   │   ├── store/
│   │   │   ├── authStore.ts
│   │   │   ├── userStore.ts
│   │   │   ├── weatherStore.ts
│   │   │   └── offlineStore.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── constants.ts
│   │   │   ├── helpers.ts
│   │   │   ├── formatters.ts
│   │   │   └── validators.ts
│   │   │
│   │   ├── types/
│   │   │   ├── index.ts
│   │   │   ├── user.types.ts
│   │   │   ├── crop.types.ts
│   │   │   ├── weather.types.ts
│   │   │   ├── disease.types.ts
│   │   │   └── price.types.ts
│   │   │
│   │   ├── locales/
│   │   │   ├── en/
│   │   │   │   ├── common.json
│   │   │   │   ├── advisory.json
│   │   │   │   ├── pest.json
│   │   │   │   └── prices.json
│   │   │   └── hi/
│   │   │       ├── common.json
│   │   │       ├── advisory.json
│   │   │       ├── pest.json
│   │   │       └── prices.json
│   │   │
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   └── tailwind.config.js
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── .env.example
│
├── server/                      # Backend Application
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── environment.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── models/
│   │   │   ├── User.model.ts
│   │   │   ├── Crop.model.ts
│   │   │   ├── Advisory.model.ts
│   │   │   ├── Detection.model.ts
│   │   │   ├── Price.model.ts
│   │   │   └── Disease.model.ts
│   │   │
│   │   ├── controllers/
│   │   │   ├── auth.controller.ts
│   │   │   ├── weather.controller.ts
│   │   │   ├── advisory.controller.ts
│   │   │   ├── pest.controller.ts
│   │   │   ├── price.controller.ts
│   │   │   └── user.controller.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── auth.routes.ts
│   │   │   ├── weather.routes.ts
│   │   │   ├── advisory.routes.ts
│   │   │   ├── pest.routes.ts
│   │   │   ├── price.routes.ts
│   │   │   └── user.routes.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts
│   │   │   ├── validation.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   ├── upload.middleware.ts
│   │   │   └── rateLimiter.middleware.ts
│   │   │
│   │   ├── services/
│   │   │   ├── weather.service.ts
│   │   │   ├── advisory.service.ts
│   │   │   ├── ml.service.ts
│   │   │   ├── price.service.ts
│   │   │   └── notification.service.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── logger.ts
│   │   │   ├── validators.ts
│   │   │   └── helpers.ts
│   │   │
│   │   └── server.ts
│   │
│   ├── uploads/                 # Temporary image storage
│   ├── models/                  # ML models for server-side
│   │   └── plant-disease/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── docs/                        # Documentation
│   ├── API.md
│   ├── SETUP.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
│
├── .gitignore
├── README.md
└── LICENSE
```

---

### API Endpoints Documentation

**Base URL:** `https://api.farmmitra.in/v1` (or `http://localhost:5000/api` for development)

#### Authentication Endpoints

**1. Register User**
```
POST /auth/register

Request Body:
{
  "name": "Ramesh Kumar",
  "phone": "+919876543210",
  "password": "securePassword123",
  "language": "hi"
}

Response (201):
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "Ramesh Kumar",
      "phone": "+919876543210",
      "language": "hi"
    },
    "token": "jwt_token_here"
  }
}
```

**2. Login**
```
POST /auth/login

Request Body:
{
  "phone": "+919876543210",
  "password": "securePassword123"
}

Response (200):
{
  "success": true,
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

**3. Get Current User**
```
GET /auth/me

Headers:
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "Ramesh Kumar",
      "phone": "+919876543210",
      "language": "hi",
      "farm": {
        "landSize": "2-5",
        "soilType": "loamy",
        "crops": ["wheat", "rice", "cotton"]
      }
    }
  }
}
```

---

#### Weather Endpoints

**1. Get Current Weather**
```
GET /weather/current?lat=30.9010&lon=75.8573

Response (200):
{
  "success": true,
  "data": {
    "location": {
      "name": "Ludhiana",
      "state": "Punjab",
      "country": "IN",
      "lat": 30.9010,
      "lon": 75.8573
    },
    "current": {
      "temp": 32,
      "feelsLike": 35,
      "humidity": 65,
      "windSpeed": 12,
      "condition": "Partly Cloudy",
      "icon": "partly_cloudy_day",
      "timestamp": "2024-12-25T10:00:00Z"
    }
  }
}
```

**2. Get 7-Day Forecast**
```
GET /weather/forecast?lat=30.9010&lon=75.8573

Response (200):
{
  "success": true,
  "data": {
    "location": { ... },
    "forecast": [
      {
        "date": "2024-12-26",
        "tempMax": 34,
        "tempMin": 18,
        "condition": "Sunny",
        "icon": "wb_sunny",
        "humidity": 60,
        "precipitation": 0,
        "windSpeed": 10
      },
      // ... 6 more days
    ]
  }
}
```

---

#### Crop Advisory Endpoints

**1. Generate Advisory**
```
POST /advisory/generate

Headers:
Authorization: Bearer {token}

Request Body:
{
  "cropId": "wheat",
  "soilType": "loamy",
  "growthStage": "vegetative",
  "location": {
    "lat": 30.9010,
    "lon": 75.8573
  }
}

Response (201):
{
  "success": true,
  "data": {
    "advisory": {
      "id": "adv_123",
      "crop": {
        "id": "wheat",
        "nameEn": "Wheat",
        "nameHi": "गेहूं"
      },
      "weatherAdvice": {
        "outlook": "Favorable conditions for next 5 days",
        "recommendations": [
          "Ideal time for irrigation in next 2 days",
          "Moderate rainfall expected in 4 days"
        ],
        "alerts": []
      },
      "fertilizerAdvice": {
        "npk": "10-26-26",
        "quantity": "50 kg per acre",
        "timing": "Apply during vegetative stage",
        "instructions": [
          "Mix with water",
          "Apply in morning or evening",
          "Water immediately after"
        ],
        "organicAlternatives": ["Compost", "Vermicompost"]
      },
      "irrigationAdvice": {
        "frequency": "Every 3-4 days",
        "quantity": "30-40mm per watering",
        "bestTime": "Early morning (5-7 AM) or evening (5-7 PM)",
        "adjustments": [
          "Skip watering on rainy days",
          "Increase frequency during hot spells"
        ]
      },
      "pestAlert": {
        "level": "medium",
        "commonPests": [
          {
            "name": "Aphids",
            "nameHi": "माहू",
            "risk": "medium"
          }
        ],
        "preventiveMeasures": [...]
      },
      "marketInsights": {
        "currentPrice": 2500,
        "trend": "up",
        "recommendation": "Prices trending upward, consider holding for better rates"
      },
      "generatedAt": "2024-12-25T10:00:00Z"
    }
  }
}
```

**2. Get Advisory History**
```
GET /advisory/history?page=1&limit=10

Headers:
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "advisories": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 45,
      "pages": 5
    }
  }
}
```

**3. Get Single Advisory**
```
GET /advisory/:id

Headers:
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "advisory": { ... }
  }
}
```

---

#### Pest Detection Endpoints

**1. Detect Disease**
```
POST /pest/detect

Headers:
Authorization: Bearer {token}
Content-Type: multipart/form-data

Request Body:
{
  "image": <file>,
  "cropType": "wheat" (optional)
}

Response (201):
{
  "success": true,
  "data": {
    "detection": {
      "id": "det_123",
      "disease": {
        "id": "late_blight",
        "nameEn": "Late Blight",
        "nameHi": "लेट ब्लाइट",
        "scientificName": "Phytophthora infestans"
      },
      "confidence": 92,
      "severity": "moderate",
      "imageUrl": "/uploads/det_123.jpg",
      "symptoms": [
        "Dark brown spots on leaves",
        "White fungal growth on underside",
        "Yellowing of leaf edges"
      ],
      "causes": [
        "High humidity (>80%)",
        "Cool temperatures (15-25°C)",
        "Poor air circulation"
      ],
      "treatment": {
        "organic": [
          {
            "method": "Neem oil spray",
            "instructions": "Mix 5ml neem oil in 1L water, spray in evening"
          }
        ],
        "chemical": [
          {
            "type": "Copper-based fungicide",
            "dosage": "2-3 grams per liter",
            "frequency": "Every 7-10 days"
          }
        ]
      },
      "prevention": [
        "Crop rotation",
        "Proper spacing for air circulation",
        "Avoid overhead watering"
      ],
      "alternativeDiseases": [
        {
          "disease": { ... },
          "confidence": 15
        }
      ],
      "detectedAt": "2024-12-25T10:00:00Z"
    }
  }
}
```

**2. Get Detection History**
```
GET /pest/history?page=1&limit=10

Headers:
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "detections": [...],
    "pagination": { ... }
  }
}
```

**3. Get Disease Details**
```
GET /pest/diseases/:diseaseId

Response (200):
{
  "success": true,
  "data": {
    "disease": {
      "id": "late_blight",
      "nameEn": "Late Blight",
      "nameHi": "लेट ब्लाइट",
      "scientificName": "Phytophthora infestans",
      "description": "...",
      "symptoms": [...],
      "causes": [...],
      "treatment": {...},
      "prevention": [...],
      "affectedCrops": ["potato", "tomato"],
      "referenceImages": [...]
    }
  }
}
```

---

#### Market Price Endpoints

**1. Get Prices**
```
GET /prices?location=ludhiana&crop=wheat&radius=50

Response (200):
{
  "success": true,
  "data": {
    "prices": [
      {
        "id": "price_123",
        "crop": {
          "id": "wheat",
          "nameEn": "Wheat",
          "nameHi": "गेहूं"
        },
        "price": 2500,
        "unit": "quintal",
        "mandi": {
          "name": "Ludhiana Mandi",
          "address": "Focal Point, Ludhiana",
          "distance": 12
        },
        "trend": "up",
        "changePercent": 5.2,
        "history": [
          { "date": "2024-12-24", "price": 2450 },
          { "date": "2024-12-23", "price": 2400 }
        ],
        "updatedAt": "2024-12-25T10:00:00Z"
      }
    ],
    "summary": {
      "highest": {
        "mandi": "Khanna Mandi",
        "price": 2600
      },
      "lowest": {
        "mandi": "Jagraon Mandi",
        "price": 2450
      },
      "average": 2516
    }
  }
}
```

**2. Get Price Trends**
```
GET /prices/trends/:cropId?period=30

Response (200):
{
  "success": true,
  "data": {
    "crop": { ... },
    "trends": [
      { "date": "2024-11-26", "avgPrice": 2300 },
      { "date": "2024-11-27", "avgPrice": 2320 },
      // ... more data points
    ],
    "insights": {
      "trend": "increasing",
      "highestPrice": { "date": "2024-12-20", "price": 2600 },
      "lowestPrice": { "date": "2024-11-28", "price": 2200 },
      "averagePrice": 2450
    }
  }
}
```

**3. Get Trending Crops**
```
GET /prices/trending

Response (200):
{
  "success": true,
  "data": {
    "trending": [
      {
        "crop": { ... },
        "changePercent": 12.5,
        "currentPrice": 3200,
        "reason": "High demand, limited supply"
      }
    ]
  }
}
```

**4. Set Price Alert (Admin/Future)**
```
POST /prices/alert

Headers:
Authorization: Bearer {token}

Request Body:
{
  "cropId": "wheat",
  "targetPrice": 2600,
  "condition": "above" | "below",
  "location": "ludhiana"
}

Response (201):
{
  "success": true,
  "data": {
    "alert": {
      "id": "alert_123",
      "active": true,
      "createdAt": "2024-12-25T10:00:00Z"
    }
  }
}
```

---

#### User Profile Endpoints

**1. Get Profile**
```
GET /user/profile

Headers:
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "Ramesh Kumar",
      "phone": "+919876543210",
      "email": null,
      "language": "hi",
      "avatar": "/uploads/avatars/user_123.jpg",
      "createdAt": "2024-12-01T10:00:00Z"
    }
  }
}
```

**2. Update Profile**
```
PUT /user/profile

Headers:
Authorization: Bearer {token}

Request Body:
{
  "name": "Ramesh Kumar",
  "email": "ramesh@example.com",
  "language": "en"
}

Response (200):
{
  "success": true,
  "data": {
    "user": { ... }
  }
}
```

**3. Get Farm Details**
```
GET /user/farm

Headers:
Authorization: Bearer {token}

Response (200):
{
  "success": true,
  "data": {
    "farm": {
      "landSize": "2-5",
      "soilType": "loamy",
      "crops": ["wheat", "rice", "cotton"],
      "location": {
        "lat": 30.9010,
        "lon": 75.8573,
        "address": "Ludhiana, Punjab"
      },
      "updatedAt": "2024-12-20T10:00:00Z"
    }
  }
}
```

**4. Update Farm Details**
```
PUT /user/farm

Headers:
Authorization: Bearer {token}

Request Body:
{
  "landSize": "2-5",
  "soilType": "loamy",
  "crops": ["wheat", "rice"],
  "location": {
    "lat": 30.9010,
    "lon": 75.8573
  }
}

Response (200):
{
  "success": true,
  "data": {
    "farm": { ... }
  }
}
```

---

#### Crops Endpoints

**1. Get All Crops**
```
GET /crops?category=grain&season=rabi

Response (200):
{
  "success": true,
  "data": {
    "crops": [
      {
        "id": "wheat",
        "nameEn": "Wheat",
        "nameHi": "गेहूं",
        "scientificName": "Triticum aestivum",
        "category": "grain",
        "seasons": ["rabi"],
        "soilTypes": ["loamy", "clay", "sandy"],
        "imageUrl": "/images/crops/wheat.jpg"
      }
    ]
  }
}
```

---

### Database Schemas

#### User Model

```typescript
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  language: {
    type: String,
    enum: ['en', 'hi'],
    default: 'hi'
  },
  avatar: String,
  farm: {
    landSize: {
      type: String,
      enum: ['<1', '1-2', '2-5', '5+']
    },
    soilType: {
      type: String,
      enum: ['sandy', 'clay', 'loamy', 'black', 'red']
    },
    crops: [{
      type: String
    }],
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point'
      },
      coordinates: {
        type: [Number],
        index: '2dsphere'
      },
      address: String
    }
  },
  preferences: {
    notifications: {
      weather: { type: Boolean, default: true },
      pest: { type: Boolean, default: true },
      price: { type: Boolean, default: true }
    },
    offlineMode: { type: Boolean, default: true }
  }
}, {
  timestamps: true
});

export default mongoose.model('User', UserSchema);
```

#### Crop Model

```typescript
const CropSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  nameEn: {
    type: String,
    required: true
  },
  nameHi: {
    type: String,
    required: true
  },
  scientificName: String,
  category: {
    type: String,
    enum: ['grain', 'vegetable', 'fruit', 'cash'],
    required: true
  },
  seasons: [{
    type: String,
    enum: ['kharif', 'rabi', 'zaid']
  }],
  soilTypes: [{
    type: String,
    enum: ['sandy', 'clay', 'loamy', 'black', 'red']
  }],
  growthStages: [{
    name: String,
    nameHi: String,
    durationDays: Number,
    requirements: {
      water: String,
      fertilizer: String,
      temperature: {
        min: Number,
        max: Number
      }
    }
  }],
  commonPests: [String],
  imageUrl: String,
  description: String,
  descriptionHi: String
}, {
  timestamps: true
});

export default mongoose.model('Crop', CropSchema);
```

#### Advisory Model

```typescript
const AdvisorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  crop: {
    type: String,
    required: true
  },
  soilType: {
    type: String,
    required: true
  },
  growthStage: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: [Number]
  },
  weatherAdvice: {
    outlook: String,
    recommendations: [String],
    alerts: [{
      type: String,
      severity: String
    }]
  },
  fertilizerAdvice: {
    npk: String,
    quantity: String,
    timing: String,
    instructions: [String],
    organicAlternatives: [String]
  },
  irrigationAdvice: {
    frequency: String,
    quantity: String,
    bestTime: String,
    adjustments: [String]
  },
  pestAlert: {
    level: String,
    commonPests: [{
      name: String,
      nameHi: String,
      risk: String
    }],
    preventiveMeasures: [String]
  },
  marketInsights: {
    currentPrice: Number,
    trend: String,
    recommendation: String
  },
  saved: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Advisory', AdvisorySchema);
```

#### Detection Model

```typescript
const DetectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  cropType: String,
  disease: {
    id: String,
    nameEn: String,
    nameHi: String,
    scientificName: String
  },
  confidence: {
    type: Number,
    min: 0,
    max: 100
  },
  severity: {
    type: String,
    enum: ['mild', 'moderate', 'severe']
  },
  symptoms: [String],
  causes: [String],
  treatment: {
    organic: [{
      method: String,
      instructions: String
    }],
    chemical: [{
      type: String,
      dosage: String,
      frequency: String
    }]
  },
  prevention: [String],
  alternativeDiseases: [{
    disease: {
      id: String,
      nameEn: String,
      nameHi: String
    },
    confidence: Number
  }],
  saved: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Detection', DetectionSchema);
```

#### Price Model

```typescript
const PriceSchema = new mongoose.Schema({
  crop: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    default: 'quintal'
  },
  mandi: {
    name: {
      type: String,
      required: true
    },
    address: String,
    location: {
      type: {
        type: String,
        enum: ['Point']
      },
      coordinates: [Number]
    }
  },
  trend: {
    type: String,
    enum: ['up', 'down', 'stable']
  },
  changePercent: Number,
  source: String
}, {
  timestamps: true
});

// Index for efficient location-based queries
PriceSchema.index({ 'mandi.location': '2dsphere' });
PriceSchema.index({ crop: 1, createdAt: -1 });

export default mongoose.model('Price', PriceSchema);
```

---

### Progressive Web App (PWA) Implementation

#### manifest.json

```json
{
  "name": "FarmMitra - Smart Crop Advisory",
  "short_name": "FarmMitra",
  "description": "AI-powered crop advisory system for farmers",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#F9F8F6",
  "theme_color": "#4A7C59",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "screenshots": [
    {
      "src": "/screenshots/home.png",
      "sizes": "540x720",
      "type": "image/png"
    },
    {
      "src": "/screenshots/advisory.png",
      "sizes": "540x720",
      "type": "image/png"
    }
  ],
  "categories": ["productivity", "utilities"],
  "lang": "hi",
  "dir": "ltr"
}
```

#### Service Worker (sw.js)

```javascript
const CACHE_NAME = 'farmmitra-v1';
const RUNTIME_CACHE = 'farmmitra-runtime';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  // Add all critical assets
];

const API_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - network-first strategy with fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // API requests - network first, cache fallback
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirstStrategy(request));
    return;
  }

  // Static assets - cache first
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(cacheFirstStrategy(request));
    return;
  }

  // Images - cache with expiry
  if (request.destination === 'image') {
    event.respondWith(cacheWithExpiryStrategy(request));
    return;
  }

  // Default - network first
  event.respondWith(networkFirstStrategy(request));
});

// Network-first strategy
async function networkFirstStrategy(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    return cached || caches.match('/offline.html');
  }
}

// Cache-first strategy
async function cacheFirstStrategy(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return new Response('Offline', { status: 503 });
  }
}

// Cache with expiry
async function cacheWithExpiryStrategy(request) {
  const cached = await caches.match(request);
  
  if (cached) {
    const cacheDate = new Date(cached.headers.get('date'));
    const now = new Date();
    if (now - cacheDate < API_CACHE_DURATION) {
      return cached;
    }
  }

  try {
    const response = await fetch(request);
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return cached || new Response('Offline', { status: 503 });
  }
}

// Background sync for queued requests
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-detections') {
    event.waitUntil(syncDetections());
  }
});

async function syncDetections() {
  // Sync queued pest detections when online
  const queue = await getDetectionQueue();
  
  for (const detection of queue) {
    try {
      await fetch('/api/pest/detect', {
        method: 'POST',
        body: detection.data
      });
      await removeFromQueue(detection.id);
    } catch (error) {
      console.error('Sync failed:', error);
    }
  }
}

// Helper functions for IndexedDB operations
async function getDetectionQueue() {
  // Implementation using IndexedDB
  return [];
}

async function removeFromQueue(id) {
  // Implementation using IndexedDB
}
```

---

### Internationalization (i18n) Setup

#### i18n Configuration

```typescript
// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enAdvisory from './locales/en/advisory.json';
import enPest from './locales/en/pest.json';
import enPrices from './locales/en/prices.json';

import hiCommon from './locales/hi/common.json';
import hiAdvisory from './locales/hi/advisory.json';
import hiPest from './locales/hi/pest.json';
import hiPrices from './locales/hi/prices.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        advisory: enAdvisory,
        pest: enPest,
        prices: enPrices
      },
      hi: {
        common: hiCommon,
        advisory: hiAdvisory,
        pest: hiPest,
        prices: hiPrices
      }
    },
    lng: 'hi', // default language
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
```

#### Translation Files Examples

**locales/en/common.json:**
```json
{
  "app": {
    "name": "FarmMitra",
    "tagline": "Your Smart Farming Companion"
  },
  "navigation": {
    "home": "Home",
    "advisory": "Advisory",
    "detect": "Detect",
    "prices": "Prices",
    "profile": "Profile"
  },
  "common": {
    "loading": "Loading...",
    "error": "Error",
    "success": "Success",
    "save": "Save",
    "cancel": "Cancel",
    "edit": "Edit",
    "delete": "Delete",
    "confirm": "Confirm",
    "back": "Back",
    "next": "Next",
    "skip": "Skip",
    "done": "Done",
    "close": "Close",
    "search": "Search",
    "filter": "Filter",
    "sort": "Sort",
    "refresh": "Refresh"
  },
  "time": {
    "today": "Today",
    "yesterday": "Yesterday",
    "tomorrow": "Tomorrow",
    "daysAgo": "{{count}} days ago",
    "hoursAgo": "{{count}} hours ago",
    "justNow": "Just now"
  },
  "errors": {
    "generic": "Something went wrong",
    "network": "Network error. Please check your connection",
    "notFound": "Not found",
    "unauthorized": "Please login to continue",
    "serverError": "Server error. Please try again later"
  }
}
```

**locales/hi/common.json:**
```json
{
  "app": {
    "name": "फार्म मित्र",
    "tagline": "आपका स्मार्ट कृषि साथी"
  },
  "navigation": {
    "home": "होम",
    "advisory": "सलाह",
    "detect": "पहचान",
    "prices": "मूल्य",
    "profile": "प्रोफ़ाइल"
  },
  "common": {
    "loading": "लोड हो रहा है...",
    "error": "त्रुटि",
    "success": "सफल",
    "save": "सहेजें",
    "cancel": "रद्द करें",
    "edit": "संपादित करें",
    "delete": "हटाएं",
    "confirm": "पुष्टि करें",
    "back": "पीछे",
    "next": "आगे",
    "skip": "छोड़ें",
    "done": "पूर्ण",
    "close": "बंद करें",
    "search": "खोजें",
    "filter": "फ़िल्टर",
    "sort": "क्रमबद्ध करें",
    "refresh": "रीफ़्रेश करें"
  },
  "time": {
    "today": "आज",
    "yesterday": "कल",
    "tomorrow": "कल",
    "daysAgo": "{{count}} दिन पहले",
    "hoursAgo": "{{count}} घंटे पहले",
    "justNow": "अभी-अभी"
  },
  "errors": {
    "generic": "कुछ गलत हो गया",
    "network": "नेटवर्क त्रुटि। कृपया अपना कनेक्शन जांचें",
    "notFound": "नहीं मिला",
    "unauthorized": "जारी रखने के लिए कृपया लॉगिन करें",
    "serverError": "सर्वर त्रुटि। कृपया बाद में पुनः प्रयास करें"
  }
}
```

---

## 2-Week Development Timeline (Detailed)

### Week 1: Foundation & Core Features

**Day 1-2: Project Setup & Infrastructure**

**Day 1 Morning (4 hours):**
- ✅ Initialize Git repository
- ✅ Set up Vite + React + TypeScript project
- ✅ Configure ESLint, Prettier
- ✅ Install dependencies (TailwindCSS, DaisyUI, React Router, etc.)
- ✅ Configure Tailwind + DaisyUI with custom theme
- ✅ Set up folder structure (components, pages, services, etc.)

**Day 1 Afternoon (4 hours):**
- ✅ Initialize Express + TypeScript backend
- ✅ Set up MongoDB connection
- ✅ Create basic server structure (routes, controllers, middleware)
- ✅ Implement JWT authentication
- ✅ Test auth endpoints (register, login)

**Day 2 Morning (4 hours):**
- ✅ Configure i18n (react-i18next)
- ✅ Create translation files (en, hi)
- ✅ Build atom components:
    - Button, Input, Select, Badge, Icon, Card, Toggle
- ✅ Test components in Storybook or dev environment

**Day 2 Afternoon (4 hours):**
- ✅ Build onboarding flow:
    - Language selection
    - Location permission
    - Farm profile form
- ✅ Implement user registration with farm details
- ✅ Test complete onboarding → registration flow

---

**Day 3-4: Weather Integration & Crop Advisory**

**Day 3 Morning (4 hours):**
- ✅ Integrate OpenWeatherMap API
- ✅ Create weather service (current + forecast)
- ✅ Build WeatherCard component
- ✅ Build WeatherWidget organism
- ✅ Test weather data fetching and display

**Day 3 Afternoon (4 hours):**
- ✅ Create Crop model and seed database
- ✅ Build CropSelector organism:
    - Search, filter, grid layout
    - Crop cards with images
- ✅ Test crop selection flow

**Day 4 Morning (4 hours):**
- ✅ Implement advisory generation logic:
    - Weather analysis
    - Fertilizer recommendations
    - Irrigation schedule
    - Pest alerts
    - Market insights
- ✅ Create Advisory model

**Day 4 Afternoon (4 hours):**
- ✅ Build AdvisoryPanel organism:
    - Collapsible sections
    - Weather, fertilizer, irrigation, pest, market
- ✅ Build CropAdvisory page
- ✅ Test end-to-end advisory generation
- ✅ Implement save advisory feature

---

**Day 5-7: Pest Detection (AI/ML)**

**Day 5 Morning (4 hours):**
- ✅ Research and download pre-trained plant disease model
    - Options: PlantVillage dataset model
    - Convert to TensorFlow.js format if needed
- ✅ Set up TensorFlow.js in project
- ✅ Test model loading and basic inference

**Day 5 Afternoon (4 hours):**
- ✅ Build ImageUpload molecule:
    - Drag & drop
    - Camera capture
    - Gallery upload
    - Preview with crop/rotate
- ✅ Test image capture on mobile and desktop

**Day 6 Morning (4 hours):**
- ✅ Implement disease detection service:
    - Image preprocessing (resize, normalize)
    - Model inference
    - Result parsing (disease, confidence)
- ✅ Create Detection model
- ✅ Seed disease database (symptoms, treatment, prevention)

**Day 6 Afternoon (4 hours):**
- ✅ Build PestDetector organism:
    - Camera interface
    - Processing state
    - Results display
- ✅ Build DiseaseCard component
- ✅ Test detection flow on sample images

**Day 7 Morning (4 hours):**
- ✅ Build PestDetection page:
    - Landing screen with options
    - Camera mode
    - Results screen with tabs
- ✅ Implement detection history
- ✅ Add treatment recommendations UI

**Day 7 Afternoon (4 hours):**
- ✅ Optimize model for offline use
- ✅ Cache model files for PWA
- ✅ Test offline detection
- ✅ Handle low confidence results
- ✅ Add "report incorrect" feature

---

### Week 2: Market Prices, PWA, Polish & Testing

**Day 8-9: Market Prices Feature**

**Day 8 Morning (4 hours):**
- ✅ Create Price model
- ✅ Seed price data (manual entry for demo):
    - 20+ crops
    - 5+ mandis
    - 30 days of historical data
- ✅ Implement price API endpoints

**Day 8 Afternoon (4 hours):**
- ✅ Build PriceCard component
- ✅ Build PriceList organism:
    - Search, filter, sort
    - Grid/list view toggle
- ✅ Build trending crops section

**Day 9 Morning (4 hours):**
- ✅ Build MarketPrices page:
    - Header with location
    - Search & filters
    - Price list
    - Details modal
- ✅ Implement price trend charts (Recharts)

**Day 9 Afternoon (4 hours):**
- ✅ Build price comparison table
- ✅ Implement price alert feature (basic)
- ✅ Add market insights section
- ✅ Test price data display and interactions

---

**Day 10-11: PWA & Offline Functionality**

**Day 10 Morning (4 hours):**
- ✅ Create PWA manifest.json
- ✅ Generate app icons (all sizes)
- ✅ Implement service worker:
    - Cache static assets
    - Network-first for APIs
    - Cache-first for images

**Day 10 Afternoon (4 hours):**
- ✅ Set up IndexedDB for offline storage:
    - Weather data (24-hour cache)
    - Advisory history
    - Detection history
    - User preferences
- ✅ Test offline data access

**Day 11 Morning (4 hours):**
- ✅ Implement background sync:
    - Queue failed uploads
    - Sync when online
    - Show pending items indicator
- ✅ Build OfflineIndicator component
- ✅ Add sync status UI

**Day 11 Afternoon (4 hours):**
- ✅ Test offline functionality:
    - Browse cached advisories
    - View detection history
    - Offline pest detection
    - Queue uploads
- ✅ Optimize cache size
- ✅ Implement cache clearing

---

**Day 12-13: UI/UX Polish & Testing**

**Day 12 Morning (4 hours):**
- ✅ Complete all responsive breakpoints:
    - Mobile (<768px)
    - Tablet (768-1023px)
    - Desktop (≥1024px)
- ✅ Test on different devices
- ✅ Fix layout issues

**Day 12 Afternoon (4 hours):**
- ✅ Add loading states for all async operations
- ✅ Add skeleton loaders
- ✅ Implement error handling:
    - Toast notifications
    - Error boundaries
    - Retry mechanisms
- ✅ Add success feedback

**Day 13 Morning (4 hours):**
- ✅ Implement voice features:
    - Voice input (Web Speech API)
    - Text-to-speech for advisories
- ✅ Build VoiceButton component
- ✅ Test voice features in Hindi and English

**Day 13 Afternoon (4 hours):**
- ✅ Build Home dashboard page:
    - Welcome header
    - Weather widget
    - Quick actions
    - Recent activity
- ✅ Build Profile page:
    - Profile card
    - Farm details
    - Settings
    - Help & support
- ✅ Polish all UI elements

---

**Day 14: Final Testing, Deployment & Demo Prep**

**Day 14 Morning (4 hours):**
- ✅ Comprehensive testing:
    - User flows (onboarding → advisory → detection → prices)
    - Hindi language testing
    - Offline mode testing
    - Cross-browser testing
- ✅ Fix critical bugs
- ✅ Performance optimization:
    - Code splitting
    - Lazy loading
    - Image optimization

**Day 14 Afternoon (4 hours):**
- ✅ Deploy to hosting platform:
    - Frontend: Vercel/Netlify
    - Backend: Railway/Render/Heroku
    - Database: MongoDB Atlas
- ✅ Configure environment variables
- ✅ Test production build
- ✅ Prepare demo scenarios:
    - User onboarding
    - Generate advisory
    - Detect disease
    - Check prices
- ✅ Create demo video (3-5 min)
- ✅ Write README.md with setup instructions
- ✅ Prepare pitch presentation

---

## Success Metrics & KPIs

### Technical Performance Metrics

**Page Load & Performance:**
- Lighthouse Performance Score: **≥85**
- Lighthouse Accessibility Score: **≥90**
- First Contentful Paint (FCP): **<2 seconds**
- Time to Interactive (TTI): **<3 seconds**
- Largest Contentful Paint (LCP): **<2.5 seconds**
- Cumulative Layout Shift (CLS): **<0.1**

**API Response Times:**
- Weather API: **<1 second**
- Advisory generation: **<5 seconds**
- Pest detection: **<3 seconds** (offline), **<8 seconds** (online)
- Price data fetch: **<2 seconds**

**Offline Capability:**
- Offline functionality: **70%+ of features available**
- Cache hit rate: **≥80%**
- Background sync success rate: **≥95%**

### User Experience Metrics

**Usability:**
- Onboarding completion rate: **≥80%**
- Average time to first advisory: **<3 minutes**
- User task success rate: **≥90%**
- Error rate: **<5%**

**Engagement:**
- Daily active users (DAU): Target after launch
- Average session duration: **5-10 minutes**
- Feature usage:
    - Advisory: **≥70%** of users
    - Pest detection: **≥50%** of users
    - Market prices: **≥60%** of users

### Functional Metrics

**Accuracy:**
- Weather data accuracy: **95%+**
- Pest detection accuracy: **≥75%** (with basic model)
- Price data freshness: **Updated daily**

**Reliability:**
- Uptime: **≥99%**
- API error rate: **<2%**
- Successful request rate: **≥98%**

---

## Risk Mitigation & Contingency Plans

### Technical Risks

| Risk | Probability | Impact | Mitigation Strategy | Contingency Plan |
|------|-------------|--------|---------------------|------------------|
| ML model accuracy too low | High | High | Use pre-trained PlantVillage dataset model; focus on 5-10 common diseases | Simplify to symptom-based matching; add "Consult Expert" option |
| Weather API rate limits exceeded | Medium | Medium | Implement aggressive caching (6-12 hours); use exponential backoff | Have fallback static weather data; use alternative free API (WeatherAPI.com) |
| Offline sync failures | Medium | Medium | Queue all operations with retry logic; show clear pending status | Manual sync button; export/import data feature |
| Browser compatibility issues | Low | Medium | Test early on target browsers (Chrome, Firefox, Safari); use polyfills | Progressive enhancement; basic features work without JS |
| TensorFlow.js performance issues | Medium | High | Optimize model size; use Web Workers; implement lazy loading | Server-side detection as fallback; reduce image resolution |
| MongoDB connection issues | Low | High | Use MongoDB Atlas (99.95% uptime SLA); implement connection retry | Use local MongoDB; have database migration script |

### User Experience Risks

| Risk | Probability | Impact | Mitigation Strategy | Contingency Plan |
|------|-------------|--------|---------------------|------------------|
| Poor Hindi translation quality | Medium | High | Get native speaker to review all text; use context-aware translations | Use professional translation service; community feedback |
| Low-literacy users struggle with UI | High | High | Extensive user testing; add video tutorials; simplify UI based on feedback | Add more visual guides; voice-first interface; pictorial instructions |
| Farmers don't trust AI recommendations | Medium | High | Show confidence scores; provide sources; add "Why this recommendation?" explanations | Add "Verified by Expert" badges; consultation feature |
| Internet connectivity too poor | High | High | Offline-first architecture; cache aggressively; clear offline indicators | SMS-based service; feature phone version |
| Device storage limitations | Medium | Medium | Optimize cache size; allow users to clear cache; lazy load images | Reduce cache duration; use lower resolution images |

### Project Management Risks

| Risk | Probability | Impact | Mitigation Strategy | Contingency Plan |
|------|-------------|--------|---------------------|------------------|
| Time constraint (2 weeks) | High | High | Ruthlessly prioritize P0 features; use pre-built components; skip nice-to-haves | Cut P2 features; simplify UI; use mock data |
| Feature creep | Medium | High | Lock scope after Day 1; strict "No" to new features; track time per feature | Remove lowest-priority P1 features; extend timeline if allowed |
| Team member unavailability | Medium | Medium | Clear documentation; modular architecture; Git branches per feature | Reallocate tasks; pair programming; reduce scope |
| Deployment issues | Low | Medium | Test deployment early (Day 10); use reliable platforms; have backup plan | Use simpler hosting; local deployment for demo |
| Demo environment failures | Low | High | Have offline demo version; backup devices; pre-record video demo | Use recorded demo; present from local environment |

---

## Post-Hackathon Roadmap

### Phase 2: Enhanced Features (2-4 weeks)

**User & Community:**
- User authentication with OTP
- Farmer community forum
- Expert consultation booking
- Share advisories on social media
- Referral program

**Data & Intelligence:**
- Historical data analysis
- Crop yield prediction
- Personalized recommendations based on farm history
- Weather alert push notifications
- SMS service for feature phones

**Integration:**
- Government scheme recommendations
- Subsidies and credit access info
- Integration with local agricultural universities
- Mandi integration for real-time prices
- Payment gateway for premium features

### Phase 3: Advanced Features (3-6 months)

**AI/ML Enhancements:**
- Improved disease detection model (90%+ accuracy)
- Soil health analysis via image
- Satellite imagery integration
- Crop recommendation system
- Yield forecasting models

**IoT Integration:**
- Smart irrigation system integration
- Soil moisture sensor data
- Weather station integration
- Automated alerts and actions

**Business Features:**
- Direct buyer-farmer marketplace
- Input supplier connections
- Crop insurance recommendations
- Blockchain-based supply chain tracking
- Contract farming facilitation

**Multi-Language:**
- Add more regional languages (Punjabi, Tamil, Telugu, Bengali, etc.)
- Voice-only interface for complete accessibility
- Dialect support

### Phase 4: Scale & Sustainability (6-12 months)

**Geographic Expansion:**
- Multi-state support with localized data
- International expansion (South Asia, Africa)
- Partnerships with agricultural cooperatives
- Government collaborations

**Monetization:**
- Freemium model (advanced features paid)
- B2B services for agri-businesses
- Data analytics for policy makers
- Sponsored content from input suppliers

**Social Impact:**
- Measure and report impact (yield improvements, income increase)
- Partner with NGOs for farmer training
- Digital literacy programs
- Environmental impact tracking

---

## Conclusion & Next Steps

### Summary

This PRD provides a comprehensive blueprint for building **FarmMitra**, a farmer-friendly crop advisory system within a **2-week hackathon timeline**. The design emphasizes:

✅ **Simplicity & Trust:** Clean, earthy UI with Hindi support
✅ **Core Value Delivery:** Real-time advisory, pest detection, market prices
✅ **Accessibility:** Offline-first PWA, voice support, low-literacy design
✅ **Technical Feasibility:** Realistic scope using modern web technologies
✅ **Social Impact:** Empowering 86% of Indian farmers (small & marginal)

### Key Differentiators

1. **Offline-First:** Works in areas with poor connectivity
2. **Bilingual from Day 1:** Hindi and English with voice support
3. **AI-Powered:** Pest detection using TensorFlow.js
4. **Farmer-Centric:** Designed for low-literacy users
5. **Free & Open:** No cost barriers for farmers

### Expected Outcomes

**For Farmers:**
- 20-30% increase in crop yield (as per ICT studies)
- Reduced input costs through optimized fertilizer use
- Better market prices through timing recommendations
- Early disease detection and prevention
- Reduced dependency on biased middlemen

**For Agriculture:**
- Promotes sustainable farming practices
- Reduces chemical overuse
- Improves food security
- Data-driven policy making
- Bridges digital divide in rural areas

### Next Steps for Development Team

**Immediate Actions (Before Day 1):**
1. ✅ Review and confirm PRD with team
2. ✅ Set up project repository (GitHub)
3. ✅ Create project board (Trello/Jira)
4. ✅ Assign roles and responsibilities
5. ✅ Set up development environment
6. ✅ Schedule daily standups (15 min)

**Development Workflow:**
1. Follow the 2-week timeline strictly
2. Daily git commits with meaningful messages
3. Code reviews before merging to main
4. Test on mobile devices frequently
5. Keep demo-ready build at all times

**Communication:**
1. Daily standup: 9:00 AM (15 min)
2. End-of-day sync: 6:00 PM (10 min)
3. Slack/Discord for quick questions
4. Document decisions and blockers

### Final Checklist

**Before Submission:**
- [ ] All P0 features working
- [ ] Tested on mobile and desktop
- [ ] Hindi translations complete and reviewed
- [ ] Offline mode tested
- [ ] No critical bugs
- [ ] README.md complete
- [ ] Demo video recorded (3-5 min)
- [ ] Pitch presentation ready
- [ ] Code commented and clean
- [ ] Deployed and accessible online

---

## Appendix

### Useful Resources

**Design:**
- [DaisyUI Documentation](https://daisyui.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Google Material Symbols](https://fonts.google.com/icons)
- [Figma Community - Agriculture UI Kits](https://www.figma.com/community)

**Development:**
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TensorFlow.js Guide](https://www.tensorflow.org/js)
- [PWA Builder](https://www.pwabuilder.com/)
- [MongoDB University](https://university.mongodb.com/)

**APIs:**
- [OpenWeatherMap API](https://openweathermap.org/api)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

**ML Models:**
- [PlantVillage Dataset](https://www.kaggle.com/datasets/abdallahalidev/plantvillage-dataset)
- [TensorFlow Hub](https://tfhub.dev/)
- [PlantDisease GitHub](https://github.com/topics/plant-disease-detection)

**Testing:**
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [BrowserStack](https://www.browserstack.com/) (for device testing)

### Glossary

- **Mandi:** Agricultural market/wholesale market in India
- **Kharif:** Monsoon crop season (June-October)
- **Rabi:** Winter crop season (November-April)
- **Zaid:** Summer crop season (March-June)
- **Quintal:** Unit of mass equal to 100 kg
- **NPK:** Nitrogen, Phosphorus, Potassium (fertilizer ratio)
- **PWA:** Progressive Web App
- **TTS:** Text-to-Speech
- **i18n:** Internationalization
- **WCAG:** Web Content Accessibility Guidelines

---

🌾 **Good luck with your hackathon! May FarmMitra help millions of farmers grow better crops and improve their livelihoods.** 🚜

---

**End of Product Requirements Document**