import {motion, useInView, useAnimation} from 'framer-motion'
import styled from 'styled-components'
import { useRef, useEffect } from 'react';

type SideTextPropsType = {
    children: JSX.Element
}

export const SlideUp = ({children}:SideTextPropsType)=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });

    const mainControls = useAnimation();
    
    useEffect(()=>{
        if (isInView) {
            mainControls.start("visible")
        }
        },[isInView])

    return(
        <Wrapp ref = {ref}>
            <motion.div
            variants={{
                hidden:{opacity: 0, height: 0},
                visible:{opacity: 1, height:"100%"}
            }}
            initial = "hidden"
            animate={mainControls}
            transition={{duration: 0.7, delay: 0.4}}
            >{children}
            </motion.div>
        </Wrapp>
    )
}


const Wrapp = styled.div`
    position: relative;
    width: fit-content;
    overflow: hidden;
`