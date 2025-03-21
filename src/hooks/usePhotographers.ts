import { useEffect, useState } from 'react';
import { Photographer, Media } from '@/lib/data-access';

export function usePhotographerDetails(id: string | undefined) {
    const [photographer, setPhotographer] = useState<Photographer | null>(null);
    const [medias, setMedias] = useState<Media[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [totalLikes, setTotalLikes] = useState<number>(0);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            setError('No photographer ID provided');
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch photographer details
                const photographerResponse = await fetch(`/api/photographers/${id}`);
                if (!photographerResponse.ok) {
                    throw new Error(`Failed to fetch photographer: ${photographerResponse.statusText}`);
                }
                const photographerData = await photographerResponse.json();
                setPhotographer(photographerData);

                // Fetch photographer's media
                const mediaResponse = await fetch(`/api/photographers/${id}/media`);
                if (!mediaResponse.ok) {
                    throw new Error(`Failed to fetch media: ${mediaResponse.statusText}`);
                }
                const mediaData = await mediaResponse.json();
                setMedias(mediaData);

                // Calculate total likes
                const likes = mediaData.reduce((total: number, item: Media) => total + item.likes, 0);
                setTotalLikes(likes);

                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                console.error('Error fetching photographer details:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    // Function to like a media item
    const likeMedia = async (mediaId: number) => {
        if (!photographer) return;

        try {
            const response = await fetch(`/api/media/${mediaId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ photographerId: photographer.id }),
            });

            if (!response.ok) {
                throw new Error(`Failed to like media: ${response.statusText}`);
            }

            // Update the media in the local state
            setMedias(prev =>
                prev.map(media =>
                    media.id === mediaId ? { ...media, likes: media.likes + 1 } : media
                )
            );

            // Update total likes
            setTotalLikes(prev => prev + 1);

        } catch (err) {
            console.error('Error liking media:', err);
        }
    };

    return {
        photographer,
        medias,
        loading,
        error,
        totalLikes,
        likeMedia
    };
}

export function usePhotographers() {
    const [photographers, setPhotographers] = useState<Photographer[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPhotographers = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/photographers');

                if (!response.ok) {
                    throw new Error(`Failed to fetch photographers: ${response.statusText}`);
                }

                const data = await response.json();
                setPhotographers(data);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                console.error('Error fetching photographers:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotographers();
    }, []);

    return { photographers, loading, error };
}
