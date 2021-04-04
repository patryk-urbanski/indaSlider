import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import globalReducer, { initialState as globalInitialState } from '../features/globalStates/slice';
import teamMatesReducer, { initialState as teamMatesInitialState } from '../features/teamMates/slice';

const initialState = {
    global: globalInitialState,
    teamMates: teamMatesInitialState,
};

export const store = configureStore({
    reducer: {
        global: globalReducer,
        teamMates: teamMatesReducer,
    },
    preloadedState: initialState
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
