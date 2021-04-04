import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { getTeamMates } from '../../redux/methods/teamMates';
import { RootState } from '../../redux/store';

const mapStateToProps = (state: RootState) => ({
    isLoading: state.global.isLoading,
    error: state.global.error,
    teamMates: state.teamMates.teamMates,
})

const mapDispatch = {
    getTeamMates,
};

const connector = connect(mapStateToProps, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

const TeamMates = ({
    isLoading,
    error,
    teamMates,
    getTeamMates,
}: ReduxProps) => {
    const [ isSliderOpen, setIsSliderOpen ] = useState<boolean>(false);

    useEffect(() => {
        if(!teamMates || teamMates.length < 1) {
            getTeamMates()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamMates])

    return (
        <div className='p-2'>
            <h1>elo</h1>
        </div>
    );
};

export default connector(TeamMates);