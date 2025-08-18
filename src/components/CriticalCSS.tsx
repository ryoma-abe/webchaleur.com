export default function CriticalCSS() {
  // ヒーローセクションのクリティカルCSS（ファーストビューで必要な最小限のスタイル）
  const criticalStyles = `
    /* Critical styles for initial render - prevent layout shift */
    body { 
      margin: 0;
      min-height: 100vh;
    }
    
    /* Font loading optimization */
    .font-klee { 
      font-family: var(--font-handwritten), "Klee One", serif;
    }
    
    .font-zen {
      font-family: var(--font-rounded), "Zen Maru Gothic", sans-serif;
    }
  `;

  return (
    <style 
      dangerouslySetInnerHTML={{ __html: criticalStyles }}
      data-critical="true"
    />
  );
}