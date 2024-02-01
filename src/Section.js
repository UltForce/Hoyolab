function Section() {
  const characterData = [
    {
      name: "Gallagher (Coming Soon)",
      fate: "The Abundance",
      stars: 4,
      element: "fire",
      imageSrc: "Gallagher.webp",
      stats: {
        hp: "--",
        defense: "--",
        attack: "--",
        speed: "--",
      },
    },
    {
      name: "Aventurine (Coming Soon)",
      fate: "The Preservation",
      stars: 5,
      element: "imaginary",
      imageSrc: "Aventurine.webp",
      stats: {
        hp: "--",
        defense: "--",
        attack: "--",
        speed: "--",
      },
    },
    {
      name: "Acheron (Coming Soon)",
      fate: "The Nihility",
      stars: 5,
      element: "lightning",
      imageSrc: "Acheron.webp",
      stats: {
        hp: "--",
        defense: "--",
        attack: "--",
        speed: "--",
      },
    },
    {
      name: "Misha (Coming Soon)",
      fate: "The Destruction",
      stars: 4,
      element: "ice",
      imageSrc: "Misha.webp",
      stats: {
        hp: "--",
        defense: "--",
        attack: "--",
        speed: "--",
      },
    },
    {
      name: "Sparkle (Coming Soon)",
      fate: "The Harmony",
      stars: 5,
      element: "quantum",
      imageSrc: "Sparkle.webp",
      stats: {
        hp: "--",
        defense: "--",
        attack: "--",
        speed: "--",
      },
    },
    {
      name: "Black Swan (Coming Soon)",
      fate: "The Nihility",
      stars: 5,
      element: "wind",
      imageSrc: "BlackSwan.webp",
      stats: {
        hp: "--",
        defense: "--",
        attack: "--",
        speed: "--",
      },
    },
  ];
  const gallagherData = characterData[0];
  const aventurineData = characterData[1];
  const acheronData = characterData[2];
  const mishaData = characterData[3];
  const sparkleData = characterData[4];
  const blackswanData = characterData[5];
  return (
    <section class="rpg-aggregate-page">
      <nav class="bread-crumb">
        <div class="bread-crumb-item">
          <span> Home </span>
        </div>
        <div class="bread-crumb-item">
          <i> / </i> <span> Characters </span>
        </div>
      </nav>
      <h1 class="rpg-aggregate-page-title">Characters</h1>
      <div class="filter-bar-pc">
        <div class="c-selector">
          <div title="" class="c-selector-btn rpg pc">
            <span class="c-selector-btn-name">Lv. 1</span>
            <span class="c-selector-btn-multi"></span>
            <span class="c-selector-btn-ic">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  d="M7 9.1L4.2 5.6h5.6L7 9.1z"
                  fill="#fff"
                  fill-opacity=".45"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="c-selector">
          <div title="Combat Type" class="c-selector-btn rpg pc">
            <span class="c-selector-btn-name">Combat Type</span>
            <span class="c-selector-btn-multi"> </span>
            <span class="c-selector-btn-ic">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  d="M7 9.1L4.2 5.6h5.6L7 9.1z"
                  fill="#fff"
                  fill-opacity=".45"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="c-selector">
          <div title="Path" class="c-selector-btn rpg pc">
            <span class="c-selector-btn-name">Path</span>
            <span class="c-selector-btn-multi"> </span>
            <span class="c-selector-btn-ic">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  d="M7 9.1L4.2 5.6h5.6L7 9.1z"
                  fill="#fff"
                  fill-opacity=".45"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="c-selector">
          <div title="Rarity" class="c-selector-btn rpg pc">
            <span class="c-selector-btn-name">Rarity</span>
            <span class="c-selector-btn-multi"> </span>
            <span class="c-selector-btn-ic">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  d="M7 9.1L4.2 5.6h5.6L7 9.1z"
                  fill="#fff"
                  fill-opacity=".45"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="c-selector">
          <div title="Faction" class="c-selector-btn rpg pc">
            <span class="c-selector-btn-name">Faction</span>
            <span class="c-selector-btn-multi"> </span>
            <span class="c-selector-btn-ic">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  d="M7 9.1L4.2 5.6h5.6L7 9.1z"
                  fill="#fff"
                  fill-opacity=".45"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div class="rpg-aggregate-page-split"></div>
      <div className="rpg-show-character rpg-aggregate-page-child">
        <div className="rpg-show-character-wrapper">
          <article className="rpg-show-character-item rpg-character-card pc">
            <div className="rpg-character-card-pc pc">
              <div className="d-img rpg d-img-level-4 rpg-character-card-avatar pc">
                <img
                  alt={gallagherData.name}
                  src={gallagherData.imageSrc}
                  decoding="async"
                  className="d-img-show"
                />
              </div>
              <div className="rpg-character-card-right pc">
                <div
                  className="rpg-character-card-name pc has-tooltip"
                  data-original-title={null}
                >
                  {gallagherData.name}
                </div>
                <div className="rpg-character-card-fate pc">
                  <img src="abundance1.png" class="" alt="" />
                  <span className="">{gallagherData.fate}</span>
                </div>
                <div className="rpg-character-card-filters pc">
                  <div className="rpg-character-card-star pc">
                    {/* Render stars dynamically based on the prop */}
                    {Array.from({ length: gallagherData.stars }, (_, index) => (
                      <img
                        key={index}
                        alt="star"
                        src="/level_star.7cc9f11.png"
                        className=""
                      />
                    ))}
                  </div>
                  <div className="rpg-character-card-elementals pc">
                    {/* Use the element prop to dynamically set the image source */}
                    <img
                      alt={gallagherData.element}
                      src={`${gallagherData.element}.png`}
                    />
                  </div>
                </div>
                <div className="rpg-character-card-num pc">
                  <div className="rpg-character-card-num-split pc"></div>
                  <div className="rpg-character-card-num-container pc">
                    {/* Map over stats prop to render dynamic stats */}
                    {Object.entries(gallagherData.stats).map(
                      ([stat, value]) => (
                        <div
                          key={stat}
                          className="rpg-character-card-num-item pc"
                        >
                          <img alt={stat} src={`/${stat}.png`} />
                          <span>{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <img
              src="abundance2.png"
              class="rpg-character-card-img pc"
              alt=""
            />
          </article>
          <article className="rpg-show-character-item rpg-character-card pc">
            <div className="rpg-character-card-pc pc">
              <div className="d-img rpg d-img-level-5 rpg-character-card-avatar pc">
                <img
                  alt={aventurineData.name}
                  src={aventurineData.imageSrc}
                  decoding="async"
                  className="d-img-show"
                />
              </div>
              <div className="rpg-character-card-right pc">
                <div
                  className="rpg-character-card-name pc has-tooltip"
                  data-original-title={null}
                >
                  {aventurineData.name}
                </div>
                <div className="rpg-character-card-fate pc">
                  <img src="preservation1.png" class="" alt="" />
                  <span className="">{aventurineData.fate}</span>
                </div>
                <div className="rpg-character-card-filters pc">
                  <div className="rpg-character-card-star pc">
                    {/* Render stars dynamically based on the prop */}
                    {Array.from(
                      { length: aventurineData.stars },
                      (_, index) => (
                        <img
                          key={index}
                          alt="star"
                          src="/level_star.7cc9f11.png"
                          className=""
                        />
                      )
                    )}
                  </div>
                  <div className="rpg-character-card-elementals pc">
                    {/* Use the element prop to dynamically set the image source */}
                    <img
                      alt={aventurineData.element}
                      src={`${aventurineData.element}.png`}
                    />
                  </div>
                </div>
                <div className="rpg-character-card-num pc">
                  <div className="rpg-character-card-num-split pc"></div>
                  <div className="rpg-character-card-num-container pc">
                    {/* Map over stats prop to render dynamic stats */}
                    {Object.entries(aventurineData.stats).map(
                      ([stat, value]) => (
                        <div
                          key={stat}
                          className="rpg-character-card-num-item pc"
                        >
                          <img alt={stat} src={`/${stat}.png`} />
                          <span>{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <img
              src="preservation2.png"
              class="rpg-character-card-img pc"
              alt=""
            />
          </article>
          <article className="rpg-show-character-item rpg-character-card pc">
            <div className="rpg-character-card-pc pc">
              <div className="d-img rpg d-img-level-5 rpg-character-card-avatar pc">
                <img
                  alt={acheronData.name}
                  src={acheronData.imageSrc}
                  decoding="async"
                  className="d-img-show"
                />
              </div>
              <div className="rpg-character-card-right pc">
                <div
                  className="rpg-character-card-name pc has-tooltip"
                  data-original-title={null}
                >
                  {acheronData.name}
                </div>
                <div className="rpg-character-card-fate pc">
                  <img src="nihility1.png" class="" alt="" />
                  <span className="">{acheronData.fate}</span>
                </div>
                <div className="rpg-character-card-filters pc">
                  <div className="rpg-character-card-star pc">
                    {/* Render stars dynamically based on the prop */}
                    {Array.from({ length: acheronData.stars }, (_, index) => (
                      <img
                        key={index}
                        alt="star"
                        src="/level_star.7cc9f11.png"
                        className=""
                      />
                    ))}
                  </div>
                  <div className="rpg-character-card-elementals pc">
                    {/* Use the element prop to dynamically set the image source */}
                    <img
                      alt={acheronData.element}
                      src={`${acheronData.element}.png`}
                    />
                  </div>
                </div>
                <div className="rpg-character-card-num pc">
                  <div className="rpg-character-card-num-split pc"></div>
                  <div className="rpg-character-card-num-container pc">
                    {/* Map over stats prop to render dynamic stats */}
                    {Object.entries(acheronData.stats).map(([stat, value]) => (
                      <div
                        key={stat}
                        className="rpg-character-card-num-item pc"
                      >
                        <img alt={stat} src={`/${stat}.png`} />
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img src="nihility2.png" class="rpg-character-card-img pc" alt="" />
          </article>
          <article className="rpg-show-character-item rpg-character-card pc">
            <div className="rpg-character-card-pc pc">
              <div className="d-img rpg d-img-level-4 rpg-character-card-avatar pc">
                <img
                  alt={mishaData.name}
                  src={mishaData.imageSrc}
                  decoding="async"
                  className="d-img-show"
                />
              </div>
              <div className="rpg-character-card-right pc">
                <div
                  className="rpg-character-card-name pc has-tooltip"
                  data-original-title={null}
                >
                  {mishaData.name}
                </div>
                <div className="rpg-character-card-fate pc">
                  <img src="destruction1.png" class="" alt="" />
                  <span className="">{mishaData.fate}</span>
                </div>
                <div className="rpg-character-card-filters pc">
                  <div className="rpg-character-card-star pc">
                    {/* Render stars dynamically based on the prop */}
                    {Array.from({ length: mishaData.stars }, (_, index) => (
                      <img
                        key={index}
                        alt="star"
                        src="/level_star.7cc9f11.png"
                        className=""
                      />
                    ))}
                  </div>
                  <div className="rpg-character-card-elementals pc">
                    {/* Use the element prop to dynamically set the image source */}
                    <img
                      alt={mishaData.element}
                      src={`${mishaData.element}.png`}
                    />
                  </div>
                </div>
                <div className="rpg-character-card-num pc">
                  <div className="rpg-character-card-num-split pc"></div>
                  <div className="rpg-character-card-num-container pc">
                    {/* Map over stats prop to render dynamic stats */}
                    {Object.entries(mishaData.stats).map(([stat, value]) => (
                      <div
                        key={stat}
                        className="rpg-character-card-num-item pc"
                      >
                        <img alt={stat} src={`/${stat}.png`} />
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img
              src="destruction2.png"
              class="rpg-character-card-img pc"
              alt=""
            />
          </article>
          <article className="rpg-show-character-item rpg-character-card pc">
            <div className="rpg-character-card-pc pc">
              <div className="d-img rpg d-img-level-5 rpg-character-card-avatar pc">
                <img
                  alt={sparkleData.name}
                  src={sparkleData.imageSrc}
                  decoding="async"
                  className="d-img-show"
                />
              </div>
              <div className="rpg-character-card-right pc">
                <div
                  className="rpg-character-card-name pc has-tooltip"
                  data-original-title={null}
                >
                  {sparkleData.name}
                </div>
                <div className="rpg-character-card-fate pc">
                  <img src="harmony1.png" class="" alt="" />
                  <span className="">{sparkleData.fate}</span>
                </div>
                <div className="rpg-character-card-filters pc">
                  <div className="rpg-character-card-star pc">
                    {/* Render stars dynamically based on the prop */}
                    {Array.from({ length: sparkleData.stars }, (_, index) => (
                      <img
                        key={index}
                        alt="star"
                        src="/level_star.7cc9f11.png"
                        className=""
                      />
                    ))}
                  </div>
                  <div className="rpg-character-card-elementals pc">
                    {/* Use the element prop to dynamically set the image source */}
                    <img
                      alt={sparkleData.element}
                      src={`${sparkleData.element}.png`}
                    />
                  </div>
                </div>
                <div className="rpg-character-card-num pc">
                  <div className="rpg-character-card-num-split pc"></div>
                  <div className="rpg-character-card-num-container pc">
                    {/* Map over stats prop to render dynamic stats */}
                    {Object.entries(sparkleData.stats).map(([stat, value]) => (
                      <div
                        key={stat}
                        className="rpg-character-card-num-item pc"
                      >
                        <img alt={stat} src={`/${stat}.png`} />
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img src="harmony2.png" class="rpg-character-card-img pc" alt="" />
          </article>
          <article className="rpg-show-character-item rpg-character-card pc">
            <div className="rpg-character-card-pc pc">
              <div className="d-img rpg d-img-level-5 rpg-character-card-avatar pc">
                <img
                  alt={blackswanData.name}
                  src={blackswanData.imageSrc}
                  decoding="async"
                  className="d-img-show"
                />
              </div>
              <div className="rpg-character-card-right pc">
                <div
                  className="rpg-character-card-name pc has-tooltip"
                  data-original-title={null}
                >
                  {blackswanData.name}
                </div>
                <div className="rpg-character-card-fate pc">
                  <img src="nihility1.png" class="" alt="" />
                  <span className="">{blackswanData.fate}</span>
                </div>
                <div className="rpg-character-card-filters pc">
                  <div className="rpg-character-card-star pc">
                    {/* Render stars dynamically based on the prop */}
                    {Array.from({ length: blackswanData.stars }, (_, index) => (
                      <img
                        key={index}
                        alt="star"
                        src="/level_star.7cc9f11.png"
                        className=""
                      />
                    ))}
                  </div>
                  <div className="rpg-character-card-elementals pc">
                    {/* Use the element prop to dynamically set the image source */}
                    <img
                      alt={blackswanData.element}
                      src={`${blackswanData.element}.png`}
                    />
                  </div>
                </div>
                <div className="rpg-character-card-num pc">
                  <div className="rpg-character-card-num-split pc"></div>
                  <div className="rpg-character-card-num-container pc">
                    {/* Map over stats prop to render dynamic stats */}
                    {Object.entries(blackswanData.stats).map(
                      ([stat, value]) => (
                        <div
                          key={stat}
                          className="rpg-character-card-num-item pc"
                        >
                          <img alt={stat} src={`/${stat}.png`} />
                          <span>{value}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <img src="nihility2.png" class="rpg-character-card-img pc" alt="" />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Section;
