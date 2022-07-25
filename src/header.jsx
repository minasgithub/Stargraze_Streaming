import React from "react";

const Header = (props) => {
  const { inBag, itemsCount, onCloseModal, onShowBag, openModal } = props;

  return (
    <>
      <div className="banner">
        <h1>Stargraze Streaming</h1>
        <p className="slogan">graze and stream</p>
      </div>
      <div className="main">
        <span>{itemsCount} movies available / 48 hour rentals</span>
        <div className="bag-wrapper">
          <img
            alt="shopping-bag"
            className="shopping-bag"
            onClick={() => onShowBag()}
            src="https://images.unsplash.com/photo-1581067721837-e4809b29692d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <div className="bag-count">{inBag.length}</div>
        </div>
        {openModal && (
          <div className="bag-modal">
            <div className="modal-banner">
              <h2>Items in your bag</h2>
            </div>
            {inBag.map((movieArray) =>
              movieArray.map((movie) => (
                <p className="modal-item">{movie.title}</p>
              ))
            )}
            <div className="modal-buttons">
              <button className="got-it" onClick={() => onCloseModal()}>
                Got it
              </button>
              <button className="checkout-btn" onClick={() => onCloseModal()}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
