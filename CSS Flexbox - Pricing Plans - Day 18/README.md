# 🌟 Day 18 | Pricing Plans Layout

### 👤 Author: [@Jhx3y](https://github.com/Jhx3y)

---

## 🎯 Goal
Create a responsive, modern **Pricing Plans section** with three cards — **Basic**, **Pro**, and **Premium** — using **HTML and CSS only**.  
The task focuses on **Flexbox layout**, **hover states**, and **hierarchy styling**.

---

## 🧱 Built With
- **HTML5** – structure  
- **CSS3** – Flexbox, transitions, nth-of-type selectors, pseudo-elements  
- **Font Awesome** – icons  
- **Google Fonts** – Poppins & Nunito  

---

## 🧩 Features
✅ Responsive Flexbox grid layout  
✅ Clean and centered card design  
✅ Hover scaling + smooth transitions  
✅ “Pro” plan highlighted as the **Best Offer**  
✅ Pseudo-element ribbon badge (`::before`)  
✅ Consistent color palette with CSS variables  

---

## 🧠 Concepts Practiced
- Flexbox alignment & wrapping  
- CSS variables for design consistency  
- Hover and active states  
- nth-of-type and sibling selectors  
- Card hierarchy & depth using shadows  
- Pseudo-elements for non-HTML decorations  

---

## 💻 Code Highlight
```css
.card:nth-of-type(1) + .card::before {
  content: 'Best Offer';
  position: absolute;
  background-color: var(--clr-accent);
  top: 0;
  left: 32%;
  width: 80px;
  height: 24px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  text-align: center;
  font-weight: 600;
}

> A clean way to add a “Best Offer” ribbon using only CSS.




---

📱 Responsiveness

Cards adjust neatly for small screens

Typography and spacing stay readable

The Flexbox layout gracefully stacks vertically