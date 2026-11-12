# 💖 Romantic Birthday Surprise Website

A luxury, romantic, fully responsive birthday surprise website for your girlfriend built with **100% Pure HTML5, CSS3, and Vanilla JavaScript**.

- ❌ No React, Vue, Angular, or frameworks
- ❌ No npm or build step required to run
- ❌ No backend required
- ✅ Works directly in any browser by double-clicking `index.html`
- ✅ Host free on **GitHub Pages**, **Netlify**, or **Vercel** in 2 minutes!

---

## ✨ Features Included

1. **Opening Screen**:
   - Dreamy pink and deep purple animated gradient with glowing ambient orbs.
   - Canvas-driven floating hearts, rose petals, and twinkling stars with interactive touch/cursor sparkle trail.
   - "Hey Beautiful ❤️" glowing typography and personalized subtitle.
   - Animated 3D wobbling gift box with golden ribbon that pops open with sparkles.

2. **Birthday Celebration**:
   - "Happy Birthday, My Princess! 🎂" with sparkling headline and romantic badges.
   - Interactive 3D birthday cake with realistic flickering animated candles.
   - Candle blow-out feature: click the cake or button to blow out candles with realistic rising smoke puffs and a confetti storm!
   - Loving milestone cards ("Days Loving You: ∞", "10,000+ Smiles", etc.).

3. **Romantic Love Letter**:
   - Interactive 3D romantic envelope with folded flaps and wax heart seal.
   - Breaking the wax seal slides the parchment letter out smoothly.
   - Real-time typewriter animation typing your personalized love letter character by character.
   - "Read Instantly" and "Replay Typing" buttons.

4. **Memories Gallery**:
   - Elegant polaroid frames with golden pins, dates, captions, and interactive like hearts.
   - Pre-loaded with 6 romantic aesthetic vector illustrations out-of-the-box.
   - **Upload Your Own Photos**: Click "Add Your Own Photo" to select images directly from your phone or computer. Photos persist in `localStorage`!
   - Fullscreen Lightbox modal to view any photo in high resolution.

5. **Special Surprise & Love Coupons**:
   - Mystery jewel chest with rotating golden light rays.
   - Unwrapping reveals a heartfelt quote banner and **6 romantic love coupons** (Infinite Hugs, Dream Date Night, Win Any Debate pass, Spa Night, Midnight Drive, and Forever Loyalty).
   - Interactive "Redeem" button that marks vouchers as redeemed with celebratory chimes and hearts.

6. **Romantic Music Player**:
   - Top floating romantic music bar with visualizer equalizer bars.
   - **Zero-failure Web Audio API Synthesizer**: Generates a warm, emotional piano/music box melody in real-time right inside the browser. No external MP3 hosting needed, zero broken links, works completely offline!
   - Option to link any custom MP3 URL in the customizer settings.
   - Starts gracefully upon user interaction to respect modern browser autoplay policies.

7. **Final Screen**:
   - Giant glowing beating heart with pulsating particle aura.
   - "I Love You Forever ❤️" memorable closing proclamation.
   - "Replay Celebration", "Share Surprise Link", and "Customize" buttons.

8. **In-App Customizer & 1-Click Shareable Link**:
   - Click the ⚙️ gear icon in the top navigation or final screen.
   - Edit:
     - Girlfriend's Name (e.g., "Sarah", "Emma", "My Queen")
     - Your Name / Sign-off
     - Birthday Headline
     - Love Letter Message
     - Special Secret Quote
     - Custom Music MP3 URL
   - Click **"Copy Share Link 🔗"** to get a single URL with your message encoded that you can send directly to her on WhatsApp, iMessage, Instagram, or Telegram!

---

## 🛠️ How to Customize

### Option A: Use the In-App Customizer (Easiest)
1. Open `index.html` in your browser.
2. Click the **⚙️** icon in the top right.
3. Fill in her name and your love letter.
4. Click **"Copy Share Link 🔗"** or **"Save & Apply ❤️"**.

### Option B: Edit `script.js` Directly
Open `script.js` in any text editor and edit the `DEFAULT_CONFIG` object near lines 20–35:
```javascript
const DEFAULT_CONFIG = {
  recipientName: "My Princess", // Her name or nickname
  senderName: "Yours Forever",  // Your name
  greetingTitle: "Hey Beautiful ❤️",
  birthdayHeadline: "Happy Birthday, My Princess! 🎂",
  letterGreeting: "My Dearest Love,",
  letterBody: "Your personalized letter text here...",
  letterSignoff: "Forever & Always With All My Love,",
  specialSurpriseMessage: "My heart is, and will always be, entirely yours.",
  customMusicUrl: "" // Optional MP3 link
};
```

---

## 🚀 How to Host FREE

### 1. GitHub Pages (100% Free Forever)
1. Go to [GitHub.com](https://github.com) and create a new repository (e.g. `birthday-surprise`).
2. Upload the files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `README.md`
3. Go to **Settings** > **Pages**.
4. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
5. Click **Save**. Within 1 minute, GitHub will give you a live link like:
   `https://yourusername.github.io/birthday-surprise/`

### 2. Netlify (Drag & Drop in 30 Seconds)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the folder containing `index.html`, `style.css`, and `script.js`.
3. Netlify will instantly provide a live HTTPS URL you can text to her!

---

## 📁 File Structure

```text
├── index.html       # Clean semantic HTML5 layout & structure
├── style.css        # Luxury romantic styling, glassmorphism & CSS animations
├── script.js        # Particles, audio synth, cake & envelope interactions, photo gallery
└── README.md        # Customization & free hosting instructions
```

Made with pure ❤️ for the love of your life!
