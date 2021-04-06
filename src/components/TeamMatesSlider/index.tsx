import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './index.module.scss';
import { ITeamMate } from '../../types';
import TeamMatesSlide from './TeamMatesSlide';

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void;
    teamMates: ITeamMate[];

}

SwiperCore.use([Navigation]);

const TeamMatesSlider = ({
    isOpen,
    setIsOpen,
    teamMates
}: Props) => {
    const toggleModal = () => setIsOpen(!isOpen);

    return isOpen ? (
        <div className={styles.container}>
            <button className={styles.toggler} onClick={toggleModal}>
                <FontAwesomeIcon icon={faTimes} color='#fff' size='5x' />
            </button>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                className={styles.slider}
            >
                {
                    teamMates.map((mate, index) => (
                        <SwiperSlide key={`${mate.name}-${mate.position}-${index}-slide`}>
                            <TeamMatesSlide teamMate={mate} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    ) : null
};

export default TeamMatesSlider;