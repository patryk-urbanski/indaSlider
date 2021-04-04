import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITeamMate} from '../../types';

interface TeamMates {
    teamMates: ITeamMate[] | [];
};

export const initialState: TeamMates = {
    teamMates: []
};

const projects = createSlice({
    name: 'teamMates',
    initialState,
    reducers: {
        setTeamMates(state, action: PayloadAction<ITeamMate[]>) {

            state.teamMates = action.payload;
        },
    },
});

export const {
    setTeamMates,
} = projects.actions;

export default projects.reducer;