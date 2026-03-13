# React State Comparison

This repository compares multiple ways to manage state in React by building the
same app with different tools and patterns.

Most of the folders are parallel implementations of the same TodoMVC-style app,
which makes it easier to compare state ownership, update flows, and component
dependencies side by side.

## What is in this repo?

### TodoMVC implementations

- `useState/` - local component state with React's `useState`
- `useReducer/` - reducer-based state updates with `useReducer`
- `useContext/` - shared state through React context
- `jotai/` - atom-based state with Jotai
- `rtk/` - centralized state with Redux Toolkit
- `zustand/` - store-based state with Zustand
- `signals/` - reactive state with Preact Signals for React

### Other playgrounds

- `calc-you-later/` - a small demo app used to experiment with reactivity and
  rendering behavior

### Shared code

- `lib/` - shared Todo helpers, types, and utilities used across
  implementations

## Why this repo exists

This repo is meant for learning and comparison, not as a starter template.

Use it to:

- compare how the same UI is wired with different state solutions
- inspect tradeoffs in data flow and component coupling
- trace how updates propagate through each implementation
- use `useState` as a baseline before moving to more abstract approaches

## Getting started

Install dependencies:

```bash
bun install
```

Run a specific example:

```bash
bun run useState
bun run useReducer
bun run useContext
bun run jotai
bun run rtk
bun run zustand
bun run signals
bun run calc
```

Each example is served independently, so you can focus on one implementation at
a time.

## Suggested starting points

- Start with `useState/` for the simplest baseline
- Compare it with `useReducer/` and `useContext/` for built-in React patterns
- Then inspect `jotai/`, `zustand/`, `rtk/`, and `signals/` for library-based
  approaches

## Tech stack

- Bun for running and serving the apps
- React 19
- Shared TodoMVC styling via `todomvc-app-css`
