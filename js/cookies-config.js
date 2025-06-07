window.addEventListener('load', function () {
  tarteaucitron.init({
    privacyUrl: "privacy-policy.html",
    orientation: "bottom", // Możesz zmienić na "top"
    showAlertSmall: true,
    cookieslist: true,
    AcceptAllCta: true,
    highPrivacy: true, // pełna zgodność z RODO
    useExternalCss: false,
    readmoreLink: "porfolio\privacy-policy.html",
    mandatory: true,
    mandatoryCta: true,
    lang: "pl"
  });

  // Google Analytics 4
  tarteaucitron.user.googleanalyticsUa = 'G-7DWB4PVXYC';
  tarteaucitron.services.googleanalytics = {
    key: "googleanalytics",
    type: "analytic",
    name: "Google Analytics",
    needConsent: true,
    cookies: ['_ga', '_gid', '_gat', '_ga_' + tarteaucitron.user.googleanalyticsUa],
    js: function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-7DWB4PVXYC');
    },
    fallback: function () {
      console.log("Google Analytics jest wyłączony");
    }
  };
  tarteaucitron.job = tarteaucitron.job || [];
  tarteaucitron.job.push('googleanalytics');

  // Microsoft Clarity
  tarteaucitron.services.clarity = {
    key: "clarity",
    type: "analytic",
    name: "Microsoft Clarity",
    needConsent: true,
    cookies: ['_clck', '_clsk'],
    js: function () {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", "fxuf891l8p");
    },
    fallback: function () {
      console.log("Microsoft Clarity jest wyłączony");
    }
  };
  tarteaucitron.job.push('clarity');
});
