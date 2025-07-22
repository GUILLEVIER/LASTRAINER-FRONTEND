export const loadInstagramEmbed = () => {
  if (typeof window !== 'undefined' && !window.instgrm) {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  } else if (window.instgrm) {
    window.instgrm.Embeds.process();
  }
};

declare global {
  interface Window {
    instgrm: any;
  }
}