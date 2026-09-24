# ระบบข้อมูลพื้นที่ชุมชน

หน้าเว็บสำหรับผู้ประสานงานพื้นที่ ใช้ Google Identity/OIDC เป็นการยืนยันตัวตน และไม่เก็บข้อมูลพิกัดหรือข้อมูลประชาชนไว้ใน GitHub

## สถานะ

หน้า GitHub Pages ถูกจัดเตรียมไว้เพื่อใช้เป็น origin ที่อนุญาตของ Google OAuth Client เท่านั้น

ก่อนเปิดรับข้อมูลจริง ต้องทำให้ครบ:

1. สร้าง Google OAuth Web Client และเพิ่ม origin ของ GitHub Pages
2. ใช้ backend verifier ที่ตรวจลายเซ็น ID token, issuer, audience และ expiry ด้วยไลบรารีมาตรฐาน
3. ให้ Apps Script รับคำขอจาก backend ที่เชื่อถือได้เท่านั้น และตรวจ role, active และพื้นที่ทุกครั้ง
4. ทดสอบบัญชีที่อนุญาต, บัญชีที่ถูกระงับ และผู้ใช้ต่างพื้นที่

ห้ามใส่ Script ID, API key, token, รหัสผ่าน หรือข้อมูลพื้นที่จริงใน repository นี้

