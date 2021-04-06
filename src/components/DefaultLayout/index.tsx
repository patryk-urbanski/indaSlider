import React from 'react';

import styles from './index.module.scss';

interface Props {
    children: React.ReactNode,
};

const DefaultLayout = ({
    children
}: Props) => {
    return (
        <div className={styles.globalContainer}>
            <main className={styles.globalContent}>
                {children}
            </main>
            
        </div>
    )
}

export default DefaultLayout;