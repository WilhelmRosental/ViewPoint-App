import { NextRequest, NextResponse } from 'next/server';
import { dataAccess } from '@/lib/data-access';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id;
        const media = dataAccess.getMediaByPhotographerId(id);

        if (!media || media.length === 0) {
            return NextResponse.json(
                { error: `No media found for photographer with ID ${id}` },
                { status: 404 }
            );
        }

        return NextResponse.json(media);
    } catch (error) {
        console.error(`Error fetching media for photographer with ID ${params.id}:`, error);
        return NextResponse.json(
            { error: 'Failed to fetch media' },
            { status: 500 }
        );
    }
}
