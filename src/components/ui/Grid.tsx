import React from 'react'
import { BentoGridItem ,BentoGrid} from './bento-grid';
import { items } from '../index';

const Grid = () => {
  return (
    <section >
        <BentoGrid> 
            {items.map((item, index) => (
                <BentoGridItem
                
                key={index} 
                title={item.title} 
                description={item.description} />
            ))}

            
        </BentoGrid>

    </section>
  )
}

export default Grid