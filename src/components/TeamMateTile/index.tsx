import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { randomPhotoSource } from '../../config';

import { ITeamMate } from '../../types';

import styles from './index.module.scss';

interface Props {
    teamMate: ITeamMate;
    onClickGeneral: () => void;
    onClickMessage: () => void;
}

const TeamMateTile = ({
    teamMate,
    onClickGeneral,
    onClickMessage,
}: Props) => {
    return (
        <div
            onClick={onClickGeneral}
            className={styles.tile}
        >
            <div className={styles.imageContainer}>
                <div className={styles.shade} />
                <img className={styles.image} alt={`${teamMate.name}-altText`} src={`${randomPhotoSource}?${teamMate.name}`} />
            </div>
            <button
                className={styles.iconContainer}
                onClick={onClickMessage}
            >
                <FontAwesomeIcon icon={faEnvelope} color='#fff' />
            </button>

            <div className={styles.infoContainer}>
                <span className={styles.name}>{teamMate.name}</span>
                <span className={styles.position}>{teamMate.position}</span>
                <span className={styles.location}>{teamMate.location}</span>  
            </div>
            

            
        </div>
    )
};

export default TeamMateTile;