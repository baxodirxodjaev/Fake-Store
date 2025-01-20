import  './style/loader.css'





const Loader = () => {
  return (
    <div className="loader-container">
        <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p className="loader-text">Loading...</p>
    </div>

  )
}

export default Loader