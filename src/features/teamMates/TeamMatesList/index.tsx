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
    const [ initialSlide, setInitialSlide ] = useState<number>(0);

    //TODO: Replace placeholder when bussines established needs
    const handleMessageClick = () => console.log('message clicked placeholder');

    const handleGeneralClick = (initialSlide: number) => () => {
        setInitialSlide(initialSlide);
        setIsSliderOpen(true);
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.headline}>Meet our team</h1>
            <div className={styles.listContainer}>
                {
                    teamMates.map((teamMate, index) => (
                        <TeamMateTile
                            key={`${teamMate.name}-${teamMate.position}-${index}`}
                            teamMate={teamMate}
                            onClickGeneral={handleGeneralClick(index)}
                            onClickMessage={handleMessageClick}
                        />
                    ))
                }
            </div>
            <TeamMatesSlider
                isOpen={isSliderOpen}
                setIsOpen={setIsSliderOpen}
                teamMates={teamMates}
                initialSlide={initialSlide}
            />
        </div>
    )
};

export default TeamMatesList;