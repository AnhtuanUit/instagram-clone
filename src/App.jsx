import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isDetail, setIsDetail] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isShowPopup, setIsShowPopup] = useState(false);

  const handleClickPost = () => {
    setIsDetail(true);
  };

  useEffect(function () {
    if (window.location.href.includes("cfycvn")) {
      setIsDetail(true);
    }
  }, []);

  return (
    <div className='app'>
      {/* {isShowPopup && (
        <div className='fake-popup'>
          <img
            src='/images/instagram-clone-detail-item-fake-popup.png'
            alt='Instagram clone image detail fake popup 01'
          />
        </div>
      )} */}
      <menu>
        <img
          src='/images/instagram-clone-01.png'
          alt='Instagram clone image 01'
        />
      </menu>
      <div className='fake-menu'></div>
      <div className='content'>
        <div className='left-content'></div>
        {isDetail ? (
          <Detail setIsShowPopup={setIsShowPopup} />
        ) : (
          <div className='right-content'>
            <div className='fake-video'>
              <img
                src='/images/instagram-clone-02.png'
                alt='Instagram clone image 02'
              />
              <video
                src='/videos/instagram-clone-post-video-01.mp4'
                controls
                autoPlay
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <img
              src='/images/instagram-clone-03.png'
              alt='Instagram clone image 03'
            />
            <div className='fake-post'>
              <span onClick={handleClickPost}>cfycvn</span>
              <img
                src='/images/instagram-clone-04.png'
                alt='Instagram clone image 04'
              />
            </div>

            <img
              src='/images/instagram-clone-05.png'
              alt='Instagram clone image 05'
            />
            <img
              src='/images/instagram-clone-06.png'
              alt='Instagram clone image 06'
            />
            <img
              src='/images/instagram-clone-07.png'
              alt='Instagram clone image 07'
            />
            <img
              src='/images/instagram-clone-08.png'
              alt='Instagram clone image 08'
            />
          </div>
        )}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Detail({ setIsShowPopup }) {
  const [isHoverFakeItem, setIsHoverFakeItem] = useState(false);

  useEffect(function () {
    window.history.replaceState(null, "California Fitness & Yoga", "/cfycvn/");
  }, []);

  return (
    <div className='detail'>
      <div className='fake-item'>
        <img
          src='/images/instagram-clone-detail-01.png'
          alt='Instagram clone image detail 01'
        />

        <div
          className='fake-item-hover'
          onMouseEnter={() => setIsHoverFakeItem(true)}
          onMouseLeave={() => setIsHoverFakeItem(false)}
          onClick={() => setIsShowPopup(true)}
        >
          {isHoverFakeItem && (
            <img
              src='/images/instagram-clone-detail-item-fake-hover.png'
              alt='Instagram clone image detail fake hover'
            />
          )}
        </div>
      </div>

      <img
        src='/images/instagram-clone-detail-02.png'
        alt='Instagram clone image detail 02'
      />
      <img
        src='/images/instagram-clone-detail-03.png'
        alt='Instagram clone image detail 03'
      />
      <div className='detail-btn'>
        <img
          src='/images/instagram-clone-btn-01.png'
          alt='Instagram clone detail btn 01'
        />
      </div>
    </div>
  );
}

export default App;
