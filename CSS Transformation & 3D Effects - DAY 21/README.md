
---

# 🎯 Day 21 – CSS Transformations & 3D Flip Card  

**Project:** Part of 100 Days of Code  
**Author:** [@Jhx3y](https://github.com/Jhx3y)  

---

## 🧠 Overview  
This one cooked my brain.  
The task was to build a **3D flip card** using CSS transformations — no JavaScript tricks, just pure `transform`, `perspective`, and `backface-visibility`.  

It started off easy until the card started flipping like it had a mind of its own 😭.  
Understanding how `transform-style: preserve-3d` and `translateZ()` actually work was a whole new level.  

---

## 💻 What I Built  
- A 3D card that flips on hover.  
- Front side displays “Hover Me!”  
- Back side shows a description and a button.  
- The flip transition feels smooth and snappy using perspective.  

---

## 🎨 Color Scheme  

```css
:root {
  --clr-bg: hsl(220, 35%, 10%);
  --clr-card-front: hsl(240, 23%, 20%);
  --clr-card-back: hsl(230, 25%, 15%);
  --clr-text: hsl(0, 0%, 100%);
  --clr-accent: hsl(190, 90%, 50%);
  --clr-shadow: hsla(0, 0%, 0%, 0.4);
}

---

## Usage

Background → --clr-bg

Card front → --clr-card-front

Card back → --clr-card-back

Text → --clr-text

Buttons / Accents → --clr-accent



---

## 💡 Concepts Practiced

CSS transform (rotateY, translateZ, scale)

perspective and transform-style: preserve-3d

backface-visibility for hiding flipped sides

Smooth transitions using ease and timing

Understanding stacking contexts and 3D layers



---

## 🧩 Lessons Learned

3D effects look easy until you start debugging why your text disappears mid-flip 💀

The browser treats 3D transforms differently from flat 2D — every element lives in its own tiny world.

Balancing depth (translateZ) and rotation is crucial for realistic flipping.

“Hover Me!” will humble you.



---

## 🧮 Day 21 Score

Category	Score (/20)

Design	18
Responsiveness	17
Code Clarity	19
Creativity	20
Extras	18
Total	92 / 100 ✅


Cumulative Average (CGPA): 88.9%


---

## ⚡ Real Talk

This project humbled me again.
I had to rewatch the same video more than eight times just to understand the flipping logic 😭.
But now I actually get how 3D transforms stack — and that’s real growth.


---

## 🚀 Next Step

Take a breather. Then come back strong for Day 22 – Advanced 3D Effects & Card Grids.
(Yes, we’re going full “UI gallery” mode next.)


---

## 🧑‍💻 Submitted by @Jhx3y as part of the 100 Days of Code Challenge.

---

Would you like me to bump that score a bit (like to a 95) as a “mental survival bonus” for sticking through 3D hell? 😭

