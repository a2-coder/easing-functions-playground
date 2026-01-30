# Easing Functions

An interactive web application for visualizing and understanding easing functions in animations. Built with React, TypeScript, D3.js, and shadcn/ui.

## 🎯 Features

- **Interactive Configuration Panel**: Adjust animation properties in real-time
  - **Easing Function Selection**: Choose from 22 different easing functions including:
    - Linear
    - Polynomial (In, Out, InOut)
    - Quadratic (In, Out, InOut)
    - Cubic (In, Out, InOut)
    - Sinusoidal (In, Out, InOut)
    - Exponential (In, Out, InOut)
    - Circular (In, Out, InOut)
    - Elastic (In, Out, InOut)
    - Back (In, Out, InOut)
    - Bounce (In, Out, InOut)
  - **Duration Control**: Adjust animation duration from 500ms to 5000ms

- **Live Animation Preview**: Interactive visualization with:
  - Real-time graph showing the easing curve
  - Animated dot following the curve path
  - Grid background with time (x-axis) and value (y-axis) indicators
  - Side panel showing current value progression
  - Play button to trigger animations
  - Live time and value readouts during animation

- **Responsive Design**: Works seamlessly across desktop and mobile devices

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.17
- **Visualization**: D3.js 7.9.0 (for easing functions and SVG rendering)
- **UI Components**: shadcn/ui with Base UI React
- **State Management**: Zustand 5.0.10
- **Icons**: Tabler Icons React
- **Font**: JetBrains Mono (Variable)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/a2-coder/easing-functions-playground
cd easing-functions
```

2. Install dependencies (using bun, npm, or yarn):
```bash
bun install
# or
npm install
# or
yarn install
```

3. Start the development server:
```bash
bun dev
# or
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Usage

1. **Select an Easing Function**: Use the dropdown menu to choose from 22 different easing functions
2. **Adjust Duration**: Use the slider to set the animation duration (500ms - 5000ms)
3. **Play Animation**: Click the play button in the preview panel to see the easing function in action
4. **Observe**: Watch the animated dot move along the curve while monitoring the real-time time and value readouts

## 📁 Project Structure

```
src/
├── App.tsx                                    # Main application component
├── components/
│   ├── elements/
│   │   ├── configuration-card.tsx            # Configuration panel with easing/duration controls
│   │   └── preview-card.tsx                  # Preview panel with D3.js visualization
│   └── ui/                                   # shadcn/ui components
├── lib/
│   ├── common.ts                             # Easing function definitions and options
│   ├── hooks.ts                              # Custom React hooks
│   └── utils.ts                              # Utility functions
├── store.ts                                  # Global config store
└── ...
```

## 🎨 How Easing Functions Work

Easing functions define the rate of change of a parameter over time, making animations feel more natural and dynamic. They map a linear progression of time (0 to 1) to a non-linear progression of values.

**Common Easing Types:**
- **In**: Slow start, fast end
- **Out**: Fast start, slow end  
- **InOut**: Slow start and end, fast middle

This application uses D3.js's built-in easing functions, which are mathematically precise implementations used in data visualization and animation.

## 📝 License

Copyright © 2026 Arjun Palakkazhi. All rights reserved.

## 👨‍💻 Author

Created by [@a2coder](https://github.com/a2-coder)