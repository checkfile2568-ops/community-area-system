// This public client identifier is safe to expose. The page never stores or forwards a credential.
const GOOGLE_CLIENT_ID = '634557242300-qcfvk4r91tikah32rmsir5vpji8cugqu.apps.googleusercontent.com';

function handleCredentialResponse() {
  const status = document.getElementById('identity-status');
  status.textContent = 'ยืนยันตัวตนกับ Google แล้ว ระบบจะยังไม่เปิดข้อมูลจนกว่าฝั่งเซิร์ฟเวอร์ตรวจ token และกำหนดสิทธิ์ให้บัญชีนี้';
  status.dataset.visible = 'true';
}

window.addEventListener('load', () => {
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: handleCredentialResponse,
    auto_select: false,
    cancel_on_tap_outside: true,
  });
  google.accounts.id.renderButton(document.getElementById('google-button'), {
    type: 'standard', theme: 'outline', size: 'large', text: 'signin_with', shape: 'rectangular', width: 270,
  });
});
