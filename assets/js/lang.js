// 中英双语切换 / Bilingual language toggle
// 持久化到 localStorage，默认跟随 _config.yml 的 default_lang
(function () {
  var STORAGE = 'site-lang';
  var body = document.body;
  var btn = document.querySelector('.lang-toggle');

  function setLang(lang) {
    body.classList.remove('lang-zh', 'lang-en');
    body.classList.add('lang-' + lang);
    if (btn) {
      // 按钮显示「另一门语言」的名字
      btn.textContent = lang === 'zh' ? 'EN' : '中';
      btn.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    }
    try { localStorage.setItem(STORAGE, lang); } catch (e) {}
  }

  // 初始化：localStorage > 默认
  var saved = null;
  try { saved = localStorage.getItem(STORAGE); } catch (e) {}
  setLang(saved || body.dataset.defaultLang || 'zh');

  if (btn) {
    btn.addEventListener('click', function () {
      var next = body.classList.contains('lang-zh') ? 'en' : 'zh';
      setLang(next);
    });
  }
})();