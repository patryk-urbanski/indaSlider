import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import DefaultLayout from '../../components/DefaultLayout';

import { clearError } from '../../redux/methods/generic';
import { getTeamMates } from '../../redux/methods/teamMates';
import { RootState } from '../../redux/store';

import { Spinner } from 'reactstrap';
import TeamMatesList from '../../features/teamMates/TeamMatesList';
import ErrorModal from '../../features/globalStates/ErrorModal';

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
    useEffect(() => {
        if(!teamMates || teamMates.length < 1) {
            getTeamMates()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [teamMates])

    return (
        <DefaultLayout>
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
        </DefaultLayout>
    );
};

export default connector(TeamMates);