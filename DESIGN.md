---
name: Veriql Read landing page
description: A clear preview of a Telegram reading digest
colors:
  primary: "#1749b5"
  ink: "#172d50"
  muted: "#49617f"
  background: "#f7faff"
  pale: "#eaf1ff"
  paper: "#ffffff"
  line: "#cbd8ef"
rounded:
  button: "8px"
  preview: "16px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "17px 22px"
---

# Design System: Veriql Read landing page

## Overview

Development description extracted from style.css, not a visually verified or user-approved brand system. The page places the reading promise beside a labelled example digest. No images, external fonts, or decorative animation.

## Colors

Blue identifies the primary action and digest header. White carries the sample content; pale blue groups the source-access explanation. Ink and muted blue carry text.

## Typography

Current implementation uses local Georgia for the main headings and Trebuchet MS with Verdana fallback for body text. These are provisional local-font choices; they are not a settled display-font identity. Main heading is 40–62px, body introduction 18px, example text 14px.

## Layout

Maximum width 1180px. Two columns for the hero and process sections, changing to one column below 800px. Phone side spacing is 25px, reduced to 20px below 380px. Real mobile rendering remains unchecked because no browser is connected.

## Elevation & Depth

Only the digest preview has a soft offset shadow. Other sections use space, one divider, and a pale background.

## Shapes

The main button uses an 8px radius; the digest preview uses 16px. SVG marks are simple geometric icons, not illustrations.

## Components

Open in Telegram reveals an inline status message without navigation. Keyboard focus is visible. How it works jumps to the process section. Explain more inside the preview is an illustrative label, not an interactive control.

## Do's and Don'ts

- Label the sample as illustrative and the unavailable bot as coming soon.
- Describe future capabilities honestly; do not add testimonials, performance claims, or live-bot behavior.
- Keep the page free of personal tester data and secrets.
- Do not treat these source-derived notes as proof of appearance or accessibility in a real browser.
