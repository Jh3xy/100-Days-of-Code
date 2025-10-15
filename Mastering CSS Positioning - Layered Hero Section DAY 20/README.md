# 🎯 Day 20 – The CSS Positioning War (Layered Hero Section)

**Project:** Part of 100 Days of Code  
**Author:** [@Jhx3y](https://github.com/Jhx3y)

---

## 🧠 Overview

This one was pain — pure and honest.  
The goal was to build a layered hero section using only **CSS positioning** — no flexbox, no grid, just raw `relative`, `absolute`, `fixed`, and `sticky`.

It sounds simple until you try to center text without your usual layout tools 💀.  
Still, the project taught me a ton about stacking contexts, z-index, and how browsers really render layers.

---

## 💻 What I Built

- A hero section with overlapping shapes (blobs), text, and button layers.  
- A sticky navbar that refuses to scroll away.  
- Absolute positioning for background blobs and text.  
- A floating button fixed to the bottom right.  
- Layout hell, but lessons learned 😂.

---

## 🎨 Color Scheme (HSL Variables)

```css
:root {
  --clr-bg: hsla(222, 47%, 10%, 1);          /* Deep navy background */
  --clr-accent: hsla(243, 75%, 58%, 1);      /* Indigo glow */
  --clr-accent-secondary: hsla(172, 70%, 38%, 1); /* Teal mix for highlights */
  --clr-text: hsla(210, 40%, 98%, 1);        /* Soft white */
  --clr-text-secondary: hsla(215, 14%, 63%, 1); /* Muted gray */
  --clr-btn: hsla(239, 84%, 68%, 1);         /* Indigo button */
  --clr-btn-hover: hsla(245, 60%, 52%, 1);   /* Deep indigo hover */
  --clr-float: hsla(172, 70%, 38%, 1);       /* Teal floating button */
}

## Color Usage:

Navbar & Hero BG: var(--clr-bg)

Decorative Blobs: var(--clr-accent) and var(--clr-accent-secondary)

Main Text: var(--clr-text)

Subtext: var(--clr-text-secondary)

Buttons: var(--clr-btn) → hover → var(--clr-btn-hover)

Floating Button: var(--clr-float)



---

## 💡 Concepts Practiced

position: relative / absolute / fixed / sticky

z-index layering

Using transform and translate() for manual centering

Building layouts without Flexbox or Grid (and suffering for it)

Managing overlapping elements with ::before / ::after



---

## 🧩 Lessons Learned

Positioning manually makes you respect Flexbox 💀

Every position: absolute needs a relative parent — or chaos follows

z-index only works within its stacking context

Sticky elements can break if you forget about overflow

Never underestimate the power of a well-placed translate(-50%, -50%)



## 🧮 Day 20 Score

Category	Score (/20)

Design	16
Responsiveness	17
Code Clarity	18
Creativity	19
Extras	15
Total	85 / 100 ✅


Cumulative Average (CGPA): 88.7%


---

## ⚡ Real Talk

This project humbled me. I realized how much I rely on Flexbox and Grid — and how weak my positioning game was.
It wasn’t pretty, but it worked. Sometimes that’s what counts.


---

## 🚀 Next Step

Take a short detour to Frontend Mentor for some clean design practice.
Then come back stronger for Day 21 – CSS Transformations & 3D Effects 😤


---

🧑‍💻 Submitted by @Jhx3y as part of the 100 Days of Code Challenge.





