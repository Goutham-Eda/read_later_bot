# Landing page handoff

Scope: PLAN.md milestone 1 only. User approved the landing page and a Telegram placeholder that reveals "Bot coming soon." No bot, AI calls, signup, or data collection is implemented.

Files: index.html, style.css, main.js. `npm run build` copies only these public files into dist; private project documents are never uploaded by this build.

Hosting configuration follows Convex static-hosting's component-owned root setup. Existing project has no HTTP routes. App HTTP routes will use /api if added later.

## Verified evidence (2026-10-08, Claude Code session)

- Live page: https://impressive-warbler-613.convex.site returns 200. The live index.html, style.css and main.js are byte-identical to the local dist build.
- Private files are not served: AGENTS.md, PRODUCT.md and documents/user_info.md return 404. Unknown paths such as /.env.local fall back to the landing page itself, not the file.
- `npm run test` (1 simulated button test) and `npm run build` pass.
- Real Chrome via Playwright at 1366px desktop, 390px and 360px phone widths: the status message is hidden at first; tapping Open in Telegram shows "Bot coming soon. The Telegram link will be available here when it's ready."; the address does not change; a second tap keeps one message visible; nothing runs off either side; no script errors.
- Only console error: /favicon.ico returns 404 (the page has no tab icon). Cosmetic, not fixed.

## Still unchecked

- Builder's own phone on mobile data (real touch, real fonts, real network).
- No Git repository exists here; no commit or push was made. PROGRESS.md stays empty and PLAN.md stays on milestone 1 until the builder confirms.
- Bot specification approvals remain pending; landing-page approval does not approve the bot implementation.

## Phone check after successful deployment

Open the production .convex.site address printed by deploy in the phone browser on mobile data, without a product login. Confirm the headline and Open in Telegram button are readable, tap the button and see "Bot coming soon," then scroll through the sample digest and How it works section. Nothing should run off the side. The preview's Explain more label is illustrative, not an active bot button.

## Assumptions

- Blue and white design; local fonts, no external font or image services.
- Future product capabilities are described as planned; the page clearly says the bot is coming soon.
- Sample digest is illustrative, not a real fetched or generated article explanation.
- No email capture, analytics, payments, or working Telegram destination in this milestone.
