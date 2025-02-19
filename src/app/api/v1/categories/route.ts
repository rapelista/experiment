import { faker } from '@faker-js/faker';
import { NextRequest, NextResponse } from 'next/server';

const categories = Array.from({ length: 100 }).map((_, index) => ({
  id: index + 1,
  name: faker.word.noun(),
}));

export async function GET(req: NextRequest) {
  const page = Number(req.nextUrl.searchParams.get('page') || 1);
  const limit = Number(req.nextUrl.searchParams.get('limit') || 10);

  const data = categories.reverse();

  const start = (page - 1) * limit;
  const end = start + limit;

  return NextResponse.json({
    data: data.slice(start, end),
    meta: {
      page,
      totalPage: Math.ceil(data.length / limit),
      totalData: data.length,
    },
  });
}
