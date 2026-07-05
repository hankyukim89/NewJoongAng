/* =============================================
   Firebase 설정 — 아래 값을 본인 프로젝트 값으로 교체하세요.
   Firebase Console → 프로젝트 설정 → 일반 → 내 앱 → SDK 설정
   ============================================= */
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

/* 관리자 이메일 — 이 이메일로 가입/로그인하면 대시보드 접근 가능.
   firestore.rules 의 이메일 목록과 반드시 일치해야 합니다. */
window.ADMIN_EMAILS = ["hankyukim89@gmail.com"];
