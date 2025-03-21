import { NextRequest, NextResponse } from 'next/server';
import { dataAccess } from '@/lib/data-access';

export async function GET(request: NextRequest) {
    try {
        const photographers = dataAccess.getPhotographers();
        return NextResponse.json(photographers);
    } catch (error) {
        console.error('Error fetching photographers:', error);
        return NextResponse.json(
            { error: 'Failed to fetch photographers' },
            { status: 500 }
        );
    }
}
