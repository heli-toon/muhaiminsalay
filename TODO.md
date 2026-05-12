# TODO

- [x] Add two new pages:
  - [ ] `src/pages/Prompts.tsx` (public, no auth): list prompts, filter by model icon/category, copy prompt text.
  - [ ] `src/pages/PromptAdmin.tsx` (private, auth required): CRUD UI to add/edit prompts (title, prompt text, description, supported models).

- [ ] Add routes in `src/App.tsx` for `/prompts` and `/prompts/admin` using `PrivateRoute` for the admin page.


- [ ] Implement Firestore CRUD using existing `src/lib/firebase.ts` (collection: `prompts`).


- [ ] Add model icon mapping (All, ChatGPT, Claude, Deepseek, Gemini, Meta, Kimi, GLM, Zai, minimax, etc.).
- [ ] Ensure copy-to-clipboard works and prompts are rendered safely.
- [x] Test locally with `npm run dev` and ensure build passes (`npm run build`).


