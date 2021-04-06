import React from 'react';

import { ITeamMate } from '../../../types';

import styles from './index.module.scss';

interface Props {
    teamMate: ITeamMate
}

const TeamMatesSlide = ({
    teamMate
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <span className={styles.styledPosition}>{teamMate.position}</span>
                <span className={styles.styledName}>{teamMate.name}</span>
            </div>
        </div>
    )
}

export default TeamMatesSlide;