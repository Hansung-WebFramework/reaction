import { rest } from 'msw';
import { articles } from '../data/articles';

export const handlers = [
    rest.get('/api/articles', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(articles));
    }),
];
