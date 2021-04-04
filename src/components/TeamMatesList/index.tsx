import React from 'react';

import { ITeamMate } from '../../types';

import TeamMateTile from '../TeamMateTile';

import styles from './index.module.scss';

interface Props {
    teamMates: ITeamMate[];
}

const TeamMatesList = ({
    teamMates
}: Props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.headline}>Meet our team</h1>
            <div className={styles.listContainer}>
                {
                    teamMates.map((teamMate, index) => (
                        <TeamMateTile
                            key={`${teamMate.name}-${teamMate.position}-${index}`}
                            teamMate={teamMate}
                            onClickGeneral={() => console.log('elo')}
                            onClickMessage={() => console.log('messgae')}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default TeamMatesList;