// Font preloading optimization
export const preloadFonts = () => {
  // Preload critical font files
  const fontUrls = [
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
    'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFiD-vYSZviVYUb_rj3ij__anPXBYf9lWwdpQ.woff2'
  ];

  fontUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Font loading status check
export const checkFontLoading = () => {
  if ('fonts' in document) {
    return Promise.all([
      document.fonts.load('400 1rem Inter'),
      document.fonts.load('600 1rem "Playfair Display"')
    ]).then(() => {
      document.body.classList.add('fonts-loaded');
      return true;
    }).catch(() => {
      console.warn('Font loading failed, falling back to system fonts');
      return false;
    });
  }
  return Promise.resolve(false);
};

export default { preloadFonts, checkFontLoading };
