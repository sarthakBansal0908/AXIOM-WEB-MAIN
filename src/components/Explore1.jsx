import { useState } from 'react';

import styles, { layout } from '../style.js';
import { exploreWorlds } from '../constants/index.js';
import { ExploreCard } from './ExploreCard.jsx';

const Explore = () => {
    const [active, setActive] = useState('world-2');

    return (
        <section className={`${styles.paddings} mb-20`} id="explore">

            <h2 className="text-center font-bold md:text-[64px] text-[40px] text-gradient from-indigo-500 via-purple-500 to-pink-500">Events</h2>
            <div className="mt-[50px] flex lg:flex-row flex-col min-h-[60vh] gap-5">
                {exploreWorlds.map((world, index) => (
                    <ExploreCard
                        key={world.id}
                        imgUrl={world.imgUrl}
                        {...world}
                        index={index}
                        active={active}
                        handleClick={setActive}/>
                ))}
            </div>
        </section>
    );
};

export default Explore;