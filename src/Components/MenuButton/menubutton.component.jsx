import './menubutton.styles.css'
const MenuButtonComponent = ({onClickHandler}) => {
    return (
        <div className='menu-button-container' onClick={onClickHandler}>
            <i className="fa fa-3x fa-solid fa-bars"></i>
        </div>
    )
}
export default MenuButtonComponent