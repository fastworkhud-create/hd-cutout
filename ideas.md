# HD Cutout — ডিজাইন ব্রেইনস্টর্ম

## তিনটি সম্ভাব্য দিক

### Theme Name: Quiet Studio
Very Brief Intro: একটি শান্ত, অফ-হোয়াইট ক্রিয়েটর স্টুডিও—যেখানে ছবি কাটআউট করা একটি পরিষ্কার, আত্মবিশ্বাসী কাজের মতো অনুভূত হবে।
Probability: 0.03

### Theme Name: Signal Desk
Very Brief Intro: একটি এডিটোরিয়াল ইউটিলিটি ডেস্ক—কালো কালি, উজ্জ্বল লাইম-সবুজ সিগন্যাল এবং ধারালো তথ্য-স্তর। দ্রুত কাজ করা ক্রিয়েটরদের জন্য কার্যকর ও স্মরণীয়।
Probability: 0.07

### Theme Name: Soft Utility
Very Brief Intro: নরম নীল-ধূসর ক্যানভাস, পাতলা লাইন এবং হালকা কাগজের টেক্সচার—প্রযুক্তিকে মানবিক ও সহজ করে দেখাবে।
Probability: 0.02

## নির্বাচিত দিক: Signal Desk

### Design Movement
আধুনিক এডিটোরিয়াল ইউটিলিটারিয়ানিজম—প্রিন্ট-স্টুডিওর মাপজোক, টেকনিক্যাল ড্যাশবোর্ডের নির্ভুলতা এবং পোস্টার-গ্রিডের স্পষ্টতার সংমিশ্রণ।

### Core Principles
1. কাজের ক্যানভাস হবে প্রথম; অলংকার কখনো ছবির ফলাফলকে ঢেকে রাখবে না।
2. উচ্চ-কনট্রাস্ট কালো-অফ-হোয়াইট ভিত্তির উপর লাইম সিগন্যাল রঙ কেবল গুরুত্বপূর্ণ অ্যাকশন ও স্ট্যাটাসে থাকবে।
3. প্রতিটি কন্ট্রোল হবে পরিষ্কার, দৃশ্যমান এবং ব্যাখ্যাসহ—জটিল AI প্রক্রিয়াকে সহজ ভাষায় উপস্থাপন করা হবে।
4. ফলাফল অপরিবর্তিত রাখার প্রতিশ্রুতি UI-র প্রতিটি স্তরে পুনরাবৃত্ত হবে।

### Color Philosophy
কালো কালি মনোযোগ ও নির্ভুলতার প্রতীক, উষ্ণ কাগজ-সাদা কাজের জায়গাকে আরামদায়ক রাখে, আর acid-lime `#D7F94B` সফল অপারেশন ও ডাউনলোডের একমাত্র নিজস্ব সিগন্যাল। এটি সাজসজ্জার রঙ নয়; এটি ব্যবহারকারীর দৃষ্টি নির্দেশ করে।

### Layout Paradigm
একটি অসমমিত দুই-কলামের “workbench”: বাম পাশে ব্র্যান্ড, নির্দেশনা এবং প্রাইভেসি নোট; ডান পাশে বড় কাটআউট ক্যানভাস। মোবাইলে এটি উল্লম্ব workflow-এ রূপান্তরিত হবে। কেন্দ্রে সাধারণ hero card নয়—বরং কাজের টেবিলের মতো স্তরবিন্যাস থাকবে।

### Signature Elements
- Lime signal tab ও ছোট status dot, যা প্রতিটি সফল ধাপ চিহ্নিত করবে।
- Checkerboard transparency preview-এর উপর কালো technical crop marks।
- “No subject edits” প্রতিশ্রুতির জন্য stamped micro-label।

### Interaction Philosophy
ব্যবহারকারী যেন সবসময় জানেন: এখন কী করা যাবে, কী হচ্ছে, এবং ফলাফল কোথায় গেল। Drag-and-drop, click-to-upload ও keyboard-accessible file input একই কাজ করবে। Hover-এ শান্ত প্রতিক্রিয়া, processing-এ স্পষ্ট progress state, error-এ দোষারোপ নয়—পরবর্তী পদক্ষেপ।

### Animation
প্রথম লোডে side rail ও workbench 40ms stagger-এ opacity/translate দিয়ে প্রবেশ করবে। Dropzone hover-এ border-color ও background tint বদলাবে, layout নয়। Processing state-এ signal line ধীরে pulse করবে। Button press হবে 120ms scale feedback-এ। `prefers-reduced-motion` থাকলে সব decorative animation বন্ধ থাকবে।

### Typography System
Display: `Space Grotesk`, 600–700; ছোট uppercase labels ও metric-এ `IBM Plex Mono`, 500–600; body copy: `DM Sans`, 400–500। H1 হবে compact, sentence-case; technical metadata mono-তে; body line-height 1.6।

### Brand Essence
Positioning: যারা ছবির বিষয়বস্তু না বদলে দ্রুত, পরিষ্কার ও উচ্চ-রেজোলিউশনের transparent cutout চান, তাদের জন্য browser-first free background remover।
Personality: precise, candid, capable.

### Brand Voice
Headline হবে সংক্ষিপ্ত ও কাজ-কেন্দ্রিক; CTA হবে ক্রিয়াশীল; microcopy হবে স্বচ্ছ এবং অতিরঞ্জনহীন।
Example lines: “Background out. Subject intact.” / “Drop an image. Keep the details.”

### Wordmark & Logo
একটি bold “cut corner” প্রতীক: চারকোণা crop frame-এর এক কোণ acid-lime notch দিয়ে কাটা, ভেতরে negative-space transparent checker motif। Mark-টি text ছাড়াই app icon ও header-এ ব্যবহারযোগ্য।

### Signature Brand Color
`#D7F94B` — Signal Lime.

## Style Decisions

- Signal Lime `#D7F94B` is the only saturated color; the earlier blue accent has been removed from headlines, numerals, labels, and icons.
- Headlines and key claims use black/gray hierarchy; lime is reserved for action, status, success, and the cut-corner mark.
- The “No subject edits” promise is presented as a stamped technical trust mark tied to the crop-frame and checkerboard system.
