---
title: When to useMemo and useCallback?
author: Danny Dwi Cahyono 
marp: true
paginate: true
theme: default
transition: fade
---

# When to use useMemo and useCallback 🖥

![Questioning_Memes](https://media.tenor.com/3qErfSDAKhYAAAAC/confused-jackie-chan.gif)

---
# Introduction: Unleashing the Power of Hooks

As developers, we're on a quest to craft highly performant and responsive applications. Enter `useMemo` and `useCallback` - the dynamic duo of React hooks that promise to optimize our components.

But hold on, are we wielding these hooks effectively? Or have we fallen into the trap of excessive optimization? Today, let's embark on a journey of discovery as we learn **when** and **how** to use these hooks, avoiding common pitfalls along the way.

---


# 🎥 Let's dive in!

![Dive_In_Memes](https://i.imgflip.com/2ia12b.jpg)


---

# The Boredom of Familiarity

🎭 Imagine a world of React components, a landscape known all too well. I find myself in the midst of the mundane, using JSX, `useState`, `useEffect`, `useReducer`. etc.

🎤 "Is there more to discover?" I wonder. Little do I know, the path to optimization awaits.
![Familiarity_Memes](https://media.tenor.com/s8hIm9KshIAAAAAd/theres-something-very-familiar-about-all-this-deja-vu.gif)

---

# The Excitement of Exploration

🎭 Eager for new horizons, I embark on a quest to optimize. `useMemo` and `useCallback` become my companions, and excitement brews as I witness the magic of memoization.

🎤 "Look at the efectivity! See how components are skipping re-rendering!" I exclaim.

![Mind_Blown](https://media.tenor.com/bD9vHNiR1rQAAAAd/boom-mind-blown.gif)

---

# The Challenge of Conundrums

🎭 And challenges await and arise. I encounter an infinite loop within `useEffect`. Frustration ensues, but a silver lining emerges: the importance of `useCallback` and `useMemo` for non-primitive values.

🔍 "Referential equality," I whisper, as light dawns upon me.

---

# A New Dawn of Understanding

🎭 As the fog of confusion clears, I see the truth about referential equality. No longer lost in the loop, I embrace the power of `useMemo` and `useCallback`.

🎤 "It's all about maintaining identity," I proclaim. With callbacks and memoization, my components stand strong.

---

# The Temptation of Excess

🎭 As days turn into nights, I find myself in the throes of temptation. `useMemo` and `useCallback` beckon, and the desire to optimize every corner grows.

🎤 "Optimization is power, maybe I should do it everywhere"

![Temptation_Memes](https://media.tenor.com/A0sln2WiUTwAAAAd/the-temptations.gif)

---

# The Awakening of Balance

🎭 Amidst complexity, I sense the app's decline in speed. As I code in React, I ponder: is it necessary to use `useMemo` and `useCallback` everywhere?

🤔 "Must every corner be optimized?" I wonder. The road to performance doesn't always require excess.

![Realization_Memes](https://media.tenor.com/nFmROc_Ptw0AAAAC/shook-muppet.gif)

---

# The Promise of Simplicity

🎭 It dawns on me that simplicity holds its own allure. My codebase need not be a maze of hooks. It's not about avoidance, but about thoughtful application.

🎤 "Optimization should enhance, not complicate," I affirm `useMemo` and `useCallback` find their place where they truly matter.

![Realization_Memes](https://media.tenor.com/nFmROc_Ptw0AAAAC/shook-muppet.gif)

---

# Live Demo: Exploring the App & Optimize it wisely.

🎬 Now, let's dive into a live demonstration of the concepts we've discussed!

1. Analyzing and Finding a performance issue
2. Optimizing an expensive calculation
3. Applying the Optimization to the App
4. Measuring the Performance

---

# The Wisdom of Optimization

🎭 As the journey continues, I unravel the profound truth: the philosophy of `useMemo` and `useCallback`.

🎤 "Optimization is not just about speed. It's about knowing when to let things be," I declare.

![Nod_Memes](https://media.tenor.com/n2n-ogXgUoUAAAAC/yes-nodding.gif)

---


# Conclusion: A Tale of Mastery

🎭 And so, my journey comes to an end. I've learned that the true power of `useMemo` and `useCallback` lies in their purposeful application.

🎤 "The beauty of optimization lies in understanding when not to optimize" 

🎤 Performance optimizations are not free. It's ALWAYS come with a cost but do NOT always come with a benefit to offset that cost. "Therefore, optimize responsibly."!


---

# Questions?

🎭 The stage is yours! Let's discuss, share insights, and continue our journey towards mastery.

🎤 Thank you for joining me on this adventure into the world of `useMemo` and `useCallback`!

🎥 **Show an image of a microphone, inviting questions from the audience.**
