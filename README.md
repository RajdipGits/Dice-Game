# Dice Game (React + Vite)

A browser-based dice guessing game built with React and Vite. Players select a number (1-6) and roll a dice. If the dice result matches the selected number, points are awarded; if not, points are deducted.

---

## 🚀 Live Demo

Open `index.html` through Vite dev server and click "Play now" on the landing page.

---

## 🧩 Project Structure

- `src/App.jsx` - root app, handles landing page vs game screen toggle
- `src/components/Index.jsx` - welcome screen with "Play now" button
- `src/components/Game.jsx` - core game logic and state
- `src/components/SelectNum.jsx` - number selector UI (1-6)
- `src/components/Dice.jsx` - dice image, current face, click-to-roll
- `src/components/Score.jsx` - current score display
- `src/components/Refresh.jsx` - reset button and rules panel
- `public/img/` - dice face images: `dice_1.png` ... `dice_6.png` and intro image

---

## 🎮 Gameplay Rules

1. Start on the landing page and click **Play now**.
2. Choose a number from 1 to 6 using the number buttons.
3. Click the dice image to roll.
4. Scoring:
   - if selected number equals current dice value: add the selected number to total score.
   - otherwise: subtract 2 points from total score.
   - When no number is selected, a warning shows and roll is blocked.
5. Click **Reset Score** to return score to 0.
6. Click **Show Rules** to see instructions at any time.

---

## 🧠 State and Logic

### `App.jsx`
- `Openpage` (bool): toggle between `Index` and `Game`
- `ToChangePage()` toggles page state

### `Game.jsx`
- `Value` (Number|undefined): selected number
- `Genrate` (Number): current dice face. Starts at `1`.
- `TotalScore` (Number): accumulated score
- `Warn` (String): message shown on missing selection
- `NumGenrate(min, max)` returns random integer in [min, max-1]
- `rolldice()`:
  - if `Value` not set: set warning and return
  - generate dice face 1..6 (via `NumGenrate(1,7)`)
  - if match: `TotalScore += Value`
  - else: `TotalScore -= 2`
  - reset `Value` to undefined after roll

### `SelectNum.jsx`
- maps 1..6 into buttons
- highlights chosen number
- displays warning text from `Warn`

### `Dice.jsx`
- renders `img` from `/img/dice_${Genrate}.png`
- on click => `rolldice()`

### `Score.jsx`
- displays `TotalScore`

### `Refresh.jsx`
- `btn` toggles rules visibility
- `Resetbtn()` calls `setTotalScore(0)`
- rules text explains gameplay

---

## 📦 Tech Stack

- React (JSX)
- Vite
- Tailwind/utility classes (CSS in `index.css`)
- Vanilla JS for random number generation and state handling

---

## 🧪 Enhancements (future)

- add score history / streaks
- persist score in `localStorage`
- better mobile touch behavior, animations for dice roll
- disable dice click while animation is running
- prevent negative score or min cap

---

## ✅ Notes

- `NumGenrate(1, 7)` is inclusive 1-6, uses `Math.floor(Math.random() * 6 + 1)`.
- UI uses conditional classes to highlight selected number.
- `Warn` is shown if user tries to roll without selection.

---

## 📜 License

MIT (or choose your preferred license)

