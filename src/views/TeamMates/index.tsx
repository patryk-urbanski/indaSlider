import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import ErrorModal from '../../features/globalStates/ErrorModal';

import { clearError } from '../../redux/methods/generic';
import { getTeamMates } from '../../redux/methods/teamMates';
import { RootState } from '../../redux/store';

import { Spinner } from 'reactstrap';
import TeamMatesList from '../../components/TeamMatesList';

import styles from './index.module.scss';

const mapStateToProps = (state: RootState) => ({
    isLoading: state.global.isLoading,
    error: state.global.error,
    teamMates: state.teamMates.teamMates,
})

const mapDispatch = {
    getTeamMates,
    clearError,
};

const connector = connect(mapStateToProps, mapDispatch);

type ReduxProps = ConnectedProps<typeof connector>

const TeamMates = ({
    isLoading,
    error,
    teamMates,
    getTeamMates,
    clearError,
}: ReduxProps) => {
    const [ isSliderOpen, setIsSliderOpen ] = useState<boolean>(false);

    useEffect(() => {
        if(!teamMates || teamMates.length < 1) {
            getTeamMates()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamMates])

    return (
        <React.Fragment>
            <ErrorModal
                error={error}
                clearErrorHandler={clearError}
            />
            <div className={styles.container}>
                {
                    !isLoading && teamMates.length > 0
                        ? <TeamMatesList teamMates={teamMates} />
                        : <Spinner />
                }
            </div>
        </React.Fragment>
    );
};

export default connector(TeamMates);