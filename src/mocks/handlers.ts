import { rest } from 'msw';
import { teamMates } from './fixtures';

export const handlers = [
    rest.get('/teamMates', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(teamMates))
    })
];