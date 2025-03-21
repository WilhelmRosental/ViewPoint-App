import fs from 'fs';
import path from 'path';

// Types 
export type Photographer = {
    name: string;
    id: number;
    city: string;
    country: string;
    tagline: string;
    price: number;
    portrait: string;
};

export type Media = {
    id: number;
    photographerId: number;
    title: string;
    image?: string;
    video?: string;
    likes: number;
    date: string;
    price: number;
    url?: string; // Ajouté dynamiquement
};

// Base paths for data and assets
const DATA_BASE_PATH = path.join(process.cwd(), 'src', 'data');
const ASSETS_BASE_PATH = path.join(process.cwd(), 'public', 'assets');
const MEDIA_DIRECTORY = 'media';

// Fonctions d'accès aux données
export const dataAccess = {
    // Récupérer tous les photographes
    getPhotographers(): Photographer[] {
        try {
            const photographersPath = path.join(DATA_BASE_PATH, 'photographers.json');
            const data = fs.readFileSync(photographersPath, 'utf8');
            const photographers = JSON.parse(data);

            // Add the complete URL to the portrait
            return photographers.map((photographer: Photographer) => ({
                ...photographer,
                portrait: `/assets/photographers/${photographer.portrait}`
            }));
        } catch (error) {
            console.error('Error loading photographers:', error);
            return [];
        }
    },

    // Récupérer un photographe par son ID
    getPhotographerById(id: string | number): Photographer | null {
        try {
            const photographers = this.getPhotographers();
            const photographer = photographers.find(p => p.id === Number(id));
            return photographer || null;
        } catch (error) {
            console.error(`Error loading photographer with ID ${id}:`, error);
            return null;
        }
    },

    // Récupérer les médias d'un photographe
    getMediaByPhotographerId(photographerId: string | number): Media[] {
        try {
            const id = Number(photographerId);
            const mediaPath = path.join(DATA_BASE_PATH, MEDIA_DIRECTORY, String(id), 'media.json');

            if (!fs.existsSync(mediaPath)) {
                console.error(`No media found for photographer ${id}`);
                return [];
            }

            const data = fs.readFileSync(mediaPath, 'utf8');
            const media = JSON.parse(data);

            // Add URL for each media
            return media.map((item: Media) => {
                const mediaItem = { ...item };
                if (mediaItem.image) {
                    mediaItem.url = `/assets/media/${id}/${mediaItem.image}`;
                } else if (mediaItem.video) {
                    mediaItem.url = `/assets/media/${id}/${mediaItem.video}`;
                }
                return mediaItem;
            });
        } catch (error) {
            console.error(`Error loading media for photographer ${photographerId}:`, error);
            return [];
        }
    },

    // Incrémenter les likes d'un média
    incrementMediaLikes(mediaId: number, photographerId: number): Media | null {
        try {
            const mediaPath = path.join(DATA_BASE_PATH, MEDIA_DIRECTORY, String(photographerId), 'media.json');

            if (!fs.existsSync(mediaPath)) {
                return null;
            }

            const data = fs.readFileSync(mediaPath, 'utf8');
            const media = JSON.parse(data);

            const updatedMedia = media.map((item: Media) => {
                if (item.id === mediaId) {
                    return { ...item, likes: item.likes + 1 };
                }
                return item;
            });

            // In a real backend, we would save the updated data
            // For demo purposes, we're not actually writing to the file
            // fs.writeFileSync(mediaPath, JSON.stringify(updatedMedia, null, 2));

            const updatedItem = updatedMedia.find((item: Media) => item.id === mediaId);
            if (updatedItem) {
                if (updatedItem.image) {
                    updatedItem.url = `/assets/media/${photographerId}/${updatedItem.image}`;
                } else if (updatedItem.video) {
                    updatedItem.url = `/assets/media/${photographerId}/${updatedItem.video}`;
                }
            }

            return updatedItem || null;
        } catch (error) {
            console.error(`Error updating likes for media ${mediaId}:`, error);
            return null;
        }
    },

    // Calculer le total des likes pour un photographe
    getTotalLikesForPhotographer(photographerId: string | number): number {
        try {
            const media = this.getMediaByPhotographerId(photographerId);
            return media.reduce((total, item) => total + item.likes, 0);
        } catch (error) {
            console.error(`Error calculating total likes for photographer ${photographerId}:`, error);
            return 0;
        }
    }
};
