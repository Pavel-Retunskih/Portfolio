import {motion, useInView, useAnimation} from 'framer-motion'
import styled from 'styled-components'
import { useRef, useEffect } from 'react';

type SideTextPropsType = {
    children: JSX.Element
}

export const SideText = ({children}:SideTextPropsType)=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
        if (isInView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
        },[isInView])

    return(
        <Wrapp ref = {ref}>
            <motion.div
            variants={{
                hidden:{opacity: 0, y: 75},
                visible:{opacity: 1, y: 0}
            }}
            initial = "hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.25, ease:"easeIn"}}
            >{children}
            </motion.div>
            <motion.div
            variants={{
                visible:{left:"100%"},
                hidden: {left: 0}
            }}
            initial = "hidden"
            animate = {slideControls}
            transition={{delay: 0.15, duration: 0.5, ease:"easeIn"}}
            style = {{
                position: "absolute",
                top: 4,
                bottom: 4,
                right: 0,
                left: 0,
                background: "linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170))"
            }}
            >
            </motion.div>
        </Wrapp>
    )
}


const Wrapp = styled.div`
    position: relative;
    width: fit-content;
    overflow: hidden;
`