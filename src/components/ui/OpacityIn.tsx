import {motion, useInView, useAnimation} from 'framer-motion'
import styled from 'styled-components'
import { useRef, useEffect } from 'react';

type SideTextPropsType = {
    children: JSX.Element
}

export const OpacityIn = ({children}:SideTextPropsType)=>{
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
                hidden:{opacity: 0, x: 70, rotate:"360deg"},
                visible:{opacity: 1, x: 0, rotate:"0deg"}
            }}
            initial = "hidden"
            animate={mainControls}
            transition={{duration: 0.7, delay: 0.4, ease:"easeIn"}}
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