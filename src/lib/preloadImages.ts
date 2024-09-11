export function preloadImages(
    imagePaths: string[],
    progressCallback: (loadedCount: number, totalCount: number) => void
  ) {
    let loadedCount = 0;
    const totalCount = imagePaths.length;
  
    imagePaths.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loadedCount++;
        progressCallback(loadedCount, totalCount);
      };
      img.src = src;
    });
  }