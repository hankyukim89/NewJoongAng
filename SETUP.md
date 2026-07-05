# 밴쿠버 중앙일보 — Launch Setup (Firebase + GitHub Pages)

Do these in order. Takes ~15 minutes.

## 1. Create the Firebase project

1. Go to https://console.firebase.google.com → **Add project** → name it (e.g. `vancouver-joongang`) → Analytics off is fine → Create.
2. In the project, click the **</> (Web)** icon → app nickname anything → **Register app**. Do NOT check hosting.
3. It shows a `firebaseConfig` code block. Copy the values into **`js/firebase-config.js`** in this folder (replace the PASTE_ placeholders).

## 2. Enable Authentication

1. Left menu → **Build → Authentication** → **Get started**.
2. **Sign-in method** tab → enable **Email/Password** → Save.
3. **Settings** tab → **Authorized domains** → **Add domain** → add:
   `hankyukim89.github.io`

## 3. Create Firestore

1. Left menu → **Build → Firestore Database** → **Create database** → Production mode → region `us-west1` (closest to Vancouver) → Enable.
2. **Rules** tab → delete everything → paste the entire contents of **`firestore.rules`** (in this folder) → **Publish**.

## 4. Push to GitHub & enable Pages

In Terminal:

```bash
cd ~/Documents/Claude/Projects/JoongAng
git add -A
git commit -m "Firebase backend, admin via login, launch fixes"
git push origin main
```

Then on github.com/hankyukim89/NewJoongAng:
**Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save.**

Site goes live in ~1 minute at:
**https://hankyukim89.github.io/NewJoongAng/**

## 5. Become admin & load articles

1. Open the live site → **회원가입** → sign up with **hankyukim89@gmail.com** (any password, 8+ chars).
2. After login, a **대시보드** button appears in the header (only for you).
3. In the dashboard, click **샘플 기사 업로드** once to load the 25 sample articles into Firestore — or just start publishing your own.

## Notes

- Admin = the email in `js/firebase-config.js` (`ADMIN_EMAILS`) **and** `firestore.rules`. To add another admin, add the email in BOTH files, re-publish rules, and push.
- There is no admin URL/button for visitors. Even if someone finds `admin/dashboard.html`, Firestore rules block all writes unless logged in as your email.
- Comments require login. Votes (좋아요) are per-browser only.
- Until `js/firebase-config.js` is filled in, the site runs in read-only demo mode with sample articles.
