import { NextRequest, NextResponse } from 'next/server';
import { dataAccess } from '@/lib/data-access';

export async function POST(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const mediaId = parseInt(params.id);
        const body = await request.json();
        const { photographerId } = body;

        if (!photographerId) {
            return NextResponse.json(
                { error: 'Photographer ID is required' },
                { status: 400 }
            );
        }

        const updatedMedia = dataAccess.incrementMediaLikes(mediaId, photographerId);

        if (!updatedMedia) {
            return NextResponse.json(
                { error: `Media with ID ${mediaId} not found` },
                { status: 404 }
            );
        }

        return NextResponse.json(updatedMedia);
    } catch (error) {
        console.error(`Error incrementing likes for media with ID ${params.id}:`, error);
        return NextResponse.json(
            { error: 'Failed to update likes' },
            { status: 500 }
        );
    }
}
