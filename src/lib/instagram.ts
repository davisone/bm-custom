// Types pour les posts Instagram
export type InstagramPost = {
  id: string;
  caption: string;
  mediaUrl: string;
  permalink: string;
};

// Type de la réponse brute de l'API Instagram Graph
type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

type InstagramApiPost = {
  id: string;
  caption?: string;
  media_type: InstagramMediaType;
  media_url?: string;
  permalink: string;
  thumbnail_url?: string;
};

type InstagramApiResponse = {
  data: InstagramApiPost[];
};

// Récupère les derniers posts Instagram via l'API Graph
export const fetchInstagramPosts = async (): Promise<InstagramPost[]> => {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return [];
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) return [];

    const data: InstagramApiResponse = await response.json();

    return data.data
      .filter(
        (post) =>
          post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
      )
      .slice(0, 8)
      .map((post) => ({
        id: post.id,
        caption: post.caption ?? "",
        mediaUrl: post.media_url ?? post.thumbnail_url ?? "",
        permalink: post.permalink,
      }));
  } catch {
    return [];
  }
};
