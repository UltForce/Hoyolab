/* eslint-disable jsx-a11y/anchor-has-content */
function Header() {
  return (
    <nav class="nav-bar-pc">
      <div class="nav-bar-pc-fixed">
        <div class="nav-bar-pc-bg"></div>
        <ul class="nav-bar-pc-left">
          <li class="nav-bar-pc-nav-item">
            <a href="https://www.hoyolab.com" class="nav-bar-pc-logo-mimo"></a>
          </li>
          <li class="nav-bar-pc-nav-item">
            <a
              href="https://wiki.hoyolab.com/pc/hsr/home"
              class="nav-bar-pc-logo-wiki"
            ></a>
          </li>
          <li class="nav-bar-nav-pc-item">
            <div class="c-selector nav-game-selector">
              <div class="c-selector-btn rpg pc hasSelected">
                <div class="hsrlogo"></div>
                <span class="c-selector-btn-name"> Honkai: Star Rail</span>
                <span class="c-selector-btn-multi"></span>
                <span class="c-selector-btn-ic">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class=""
                  >
                    <path
                      d="M12.793 8H7.207a.5.5 0 00-.353.854l2.792 2.792a.5.5 0 00.708 0l2.792-2.792A.5.5 0 0012.793 8z"
                      fill="#fff"
                      opacity=".45"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div class="nav-search-container nav-bar-pc-search">
          <div class="nav-search">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="nav-search-ic-search"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.722 8.103a4.4 4.4 0 118.8 0 4.4 4.4 0 01-8.8 0zm4.4-6.8a6.8 6.8 0 103.885 12.382l2.466 2.466a1.2 1.2 0 001.697-1.697l-2.466-2.466A6.8 6.8 0 008.122 1.303z"
                fill="#fff"
                fill-opacity=".45"
              ></path>
            </svg>
            <input placeholder="Search" type="text"></input>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.636 16.667a1.2 1.2 0 101.697 1.697L12 13.697l4.667 4.667a1.2 1.2 0 001.697-1.697L13.697 12l4.667-4.667a1.2 1.2 0 10-1.697-1.697L12 10.303 7.333 5.636a1.2 1.2 0 00-1.697 1.697L10.303 12l-4.667 4.667z"
              fill="#fff"
            ></path>
          </div>
        </div>
        <div class="nav-bar-pc-right tw-shrink-0">
          <div class="c-selector language-selector">
            <div title="" class="c-selector-btn rpg pc">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 12.097V12a6.001 6.001 0 00-5.184-5.945l-.408 2.087a1 1 0 00.111.685l.492.867a3 3 0 01-.24 3.321l-1.278 1.646c-.876 1.129-2.685.509-2.685-.92v-.604a1 1 0 00-.548-.893l-1.099-.556a3 3 0 01-.926-.728l-.12-.14a6 6 0 008.659 6.5l-.533-2.561a2 2 0 011.697-2.391l2.061-.271zm-.403 2.07l-1.398.184.33 1.585a5.998 5.998 0 001.068-1.77zM6.965 8.735a6.006 6.006 0 013.799-2.607l-.32 1.63a3 3 0 00.336 2.056l.492.867a1 1 0 01-.08 1.107l-.475.612a3 3 0 00-1.554-1.94l-1.099-.556a1 1 0 01-.308-.243l-.79-.926zM12 20a8 8 0 100-16 8 8 0 000 16z"
                  fill="#fff"
                  fill-opacity=".45"
                ></path>
              </svg>
              <span class="c-selector-btn-name">EN</span>
              <span class="c-selector-btn-multi"></span>
              <span class="c-selector-btn-ic">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class=""
                >
                  <path
                    d="M12.793 8H7.207a.5.5 0 00-.353.854l2.792 2.792a.5.5 0 00.708 0l2.792-2.792A.5.5 0 0012.793 8z"
                    fill="#fff"
                    opacity=".45"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div class="notification">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="notification-icon"
            >
              <path
                d="M10.334 12A5.667 5.667 0 0116 6.333v-2A7.667 7.667 0 008.334 12h2zm0 2v-2h-2v2h2zm-2.667 4.667c0-.482.203-.915.53-1.22l-1.363-1.463a3.66 3.66 0 00-1.167 2.683h2zm1.667 1.666c-.92 0-1.667-.746-1.667-1.666h-2a3.667 3.667 0 003.667 3.666v-2zm13.333 0H9.334v2h13.333v-2zm1.667-1.666c0 .92-.747 1.666-1.667 1.666v2a3.667 3.667 0 003.667-3.666h-2zm-.531-1.22c.328.306.53.738.53 1.22h2a3.66 3.66 0 00-1.167-2.683l-1.363 1.463zM21.667 12v2h2v-2h-2zM16 6.333A5.667 5.667 0 0121.667 12h2A7.667 7.667 0 0016 4.333v2zm9.166 9.65c-.435-.405-.815-.743-1.109-1.114-.286-.361-.39-.636-.39-.87h-2c0 .872.4 1.579.822 2.11.413.523.941.99 1.314 1.338l1.363-1.463zM8.334 14c0 .233-.105.508-.39.869-.294.371-.675.71-1.11 1.115l1.364 1.463c.373-.348.901-.815 1.314-1.337.421-.532.822-1.239.822-2.11h-2zM13.333 24h5.333a2.667 2.667 0 11-5.333 0z"
                fill="#B2B2B2"
              ></path>
            </svg>
          </div>
          <div class="feedback">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class=""
            >
              <path
                d="M17.333 6.667H11a3 3 0 00-3 3v12.666a3 3 0 003 3h10a3 3 0 003-3v-9M13 13.667h2M13 19h6"
                stroke="#fff"
                stroke-opacity=".45"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
              <path
                stroke="#fff"
                stroke-opacity=".45"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M23.533 6.033l-4.971 7.099"
              ></path>
              <path fill="#fff" fill-opacity=".01" d="M0 0h32v32H0z"></path>
            </svg>
          </div>
          <div class="user-panel-avatar">
            <img src="m_hsr_login_icon.28de677.png" alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
