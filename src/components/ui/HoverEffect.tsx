import {motion} from 'framer-motion'
import styled from 'styled-components'

type SideTextPropsType = {
    children: JSX.Element
}

export const HoverEffect = ({children}:SideTextPropsType)=>{
    return(
        <Wrapp>
            <motion.div
                whileHover={{scale: 1.1, borderBottom: "3px solid #666666"}}
                transition={{type:'spring', stiffness: 300}}
            >{children}
            </motion.div>
        </Wrapp>
    )
}


const Wrapp = styled.div`
    position: relative;
    width: fit-content;
`