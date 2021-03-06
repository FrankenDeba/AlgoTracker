import React from 'react'
import './menu.css'
import { makeStyles } from '@material-ui/core'
import NewModal from '../Modal/AppModal'
import { useState } from 'react'
import plus from '../../Images/plus-square.svg'
const useStyles = makeStyles((theme) => ({
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(20),
        right: theme.spacing(14.8),
        width: '170px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}))

const Menubar = ({ showMenu, setShowMenu }) => {

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
      setShowModal(!showModal)
    }

    const classes = useStyles()
      
    return (
        <>
            <NewModal showModal={showModal} setShowModal={setShowModal}/>
            {showMenu ? (                               
                <div className={classes.absolute}>
                    <div className="heading">
                        <h5>Add Question</h5><br />
                        <h5>Add Category</h5>
                    </div>
                    <div>
                        {/* <i className="fas fa-plus-square" onClick={openModal}></i><br/><br /> */}
                        {showModal ? <img style={{backgroundColor: 'rgb(145, 155, 223)'}}src={plus} onClick={openModal} /> : <img src={plus} onClick={openModal} />}<br /><br />
                        {/* <i className="fas fa-plus-square"></i>   */}
                        <img src={plus} />
                    </div>
                </div>
                ) : null}
        </>
    )
}

export default Menubar
