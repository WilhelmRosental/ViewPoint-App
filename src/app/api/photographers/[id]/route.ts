import { NextRequest, NextResponse } from 'next/server';
import { dataAccess } from '@/lib/data-access';

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = params.id;
        const photographer = dataAccess.getPhotographerById(id);

        if (!photographer) {
            return NextResponse.json(
                { error: `Photographer with ID ${id} not found` },
                { status: 404 }
            );
        }

        return NextResponse.json(photographer);
    } catch (error) {
        console.error(`Error fetching photographer with ID ${params.id}:`, error);
        return NextResponse.json(
            { error: 'Failed to fetch photographer' },
            { status: 500 }
        );
    }
}
