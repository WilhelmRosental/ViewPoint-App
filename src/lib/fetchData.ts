import fs from 'fs';
import path from 'path';

type Photographer = {
  name: string;
  id: number;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
};

type Media = {
  name: string;
  type: string;
  url: string;
};

export async function fetchPhotographerData(id: string): Promise<Photographer | null> {
  // Assurez-vous que le chemin du fichier JSON est correct
  try {
    const photographers = require('@/app/data/photographers.json').photographers;
    const photographer = photographers.find((p: Photographer) => p.id === parseInt(id)) || null;

    // Ajout d'une vérification de debug
    console.log(`Photographer found:`, photographer);

    return photographer;
  } catch (error) {
    console.error("Error loading photographers data:", error);
    return null;
  }
}

export async function fetchMediaData(id: string): Promise<Media[]> {
  // Correction: Next.js accède aux fichiers statiques depuis le dossier public
  const mediaPath = path.join(process.cwd(), 'public', 'medias', id);

  try {
    // Check if directory exists before trying to read it
    if (!fs.existsSync(mediaPath)) {
      console.log(`No media directory found for photographer ${id}. Looking in: ${mediaPath}`);
      return [];
    }

    const files = fs.readdirSync(mediaPath);
    return files.map((file) => ({
      name: file,
      type: file.endsWith('.mp4') ? 'video' : 'image',
      // Correction: URL relative depuis la racine du domaine (public folder)
      url: `/medias/${id}/${file}`,
    }));
  } catch (error) {
    console.error(`Error reading media files for photographer ${id}:`, error);
    return [];
  }
}
