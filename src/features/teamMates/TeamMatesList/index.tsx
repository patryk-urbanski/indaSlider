import React, { useState } from 'react';

import { ITeamMate } from '../../../types';

import TeamMateTile from '../../../components/TeamMateTile';

import styles from './index.module.scss';
import TeamMatesSlider from '../../../components/TeamMatesSlider';

interface Props {
    teamMates: ITeamMate[];
}

const TeamMatesList = ({
    teamMates
}: Props) => {
    const [ isSliderOpen, setIsSliderOpen ] = useState<boolean>(false);

    //TODO: Replace placeholder when bussines established needs
    const handleMessageClick = () => console.log('message clicked placeholder');

    const handleGeneralClick = () => setIsSliderOpen(true);
    return (
        <div className={styles.container}>
            <h1 className={styles.headline}>Meet our team</h1>
            <div className={styles.listContainer}>
                {
                    teamMates.map((teamMate, index) => (
                        <TeamMateTile
                            key={`${teamMate.name}-${teamMate.position}-${index}`}
                            teamMate={teamMate}
                            onClickGeneral={handleGeneralClick}
                            onClickMessage={handleMessageClick}
                        />
                    ))
                }
            </div>
            <TeamMatesSlider
                isOpen={isSliderOpen}
                setIsOpen={setIsSliderOpen}
                teamMates={teamMates}
            />
        </div>
    )
};

export default TeamMatesList;