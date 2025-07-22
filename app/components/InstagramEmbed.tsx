import { useState, useEffect } from 'react';

interface InstagramEmbedProps {
  url: string;
  className?: string;
}

export function InstagramEmbed({ url, className }: InstagramEmbedProps) {
  const [embedHtml, setEmbedHtml] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmbed = async () => {
      try {
        const response = await fetch(
          `https://graph.facebook.com/v18.0/instagram_oembed?url=${encodeURIComponent(url)}&access_token=YOUR_ACCESS_TOKEN`
        );
        const data = await response.json();
        setEmbedHtml(data.html);
      } catch (error) {
        console.error('Error fetching Instagram embed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmbed();
  }, [url]);

  if (loading) {
    return <div className="flex items-center justify-center h-full">Cargando...</div>;
  }

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}