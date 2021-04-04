import { api } from '../../../api';
import { setIsLoading, setError } from '../../../features/globalStates/slice';
import { setTeamMates } from '../../../features/teamMates/slice';
import { ITeamMate } from '../../../types';

type IIsLoadingAndError = boolean | string | null;

interface IPayload {
    payload: IIsLoadingAndError | ITeamMate[];
}

export const getTeamMates = () => async (dispatch: (action: IPayload) => void) => {
    dispatch(setIsLoading(true));

    const result = await api.getTeamMates();
    const { error, httpError, unhandledError } = result;

    const errorToHandle = error || httpError || unhandledError;

    if(result) {
        if(errorToHandle) {
            dispatch(setError(errorToHandle));
            dispatch(setIsLoading(false));
        }
        else {
            dispatch(setTeamMates(result));
            dispatch(setIsLoading(false));
        }
    }
    else {
        dispatch(setIsLoading(false));
        dispatch(setError('lack of response error'));
    }
};


