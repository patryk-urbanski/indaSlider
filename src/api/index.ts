import { fetchFromApi } from './utils';

const apiCalls = () => {
    const getTeamMates = () => {
        return fetchFromApi({
            path: `/teamMates`,
            httpMethod: 'GET',
        })
    };

    return {
        getTeamMates
    }
};

export const api = apiCalls();