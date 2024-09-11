import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
          <h1 className="app__title">WikiSearch</h1>
          <img 
            src="http://res.cloudinary.com/kharatpriyank/image/upload/v1513659146/search_ojyiyb.svg" 
            className="app__logo"
          />
        </header>
    )
}
export default AppHeader;