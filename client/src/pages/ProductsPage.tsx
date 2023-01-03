import React, {FC} from 'react';

const ProductsPage: FC = () => {
  return (
    <main className="flex-grow-1 container my-3 my-lg-4 text-light">
      <div className="row g-2 g-lg-3">
        <nav className="col-12 col-lg-9 col-xl-9 order-0">
          <ol className="breadcrumb p-2 mb-0">
            <li className="breadcrumb-item"><a href="/" className="link-primary text-decoration-none">
              <i className="bi-house-door"></i> Home</a>
            </li>
            <li className="breadcrumb-item text-light">Apple iPhone</li>
          </ol>
        </nav>
        <form className="col-12 col-lg-3 order-lg-2" method="get" id="filter">
          <div className="accordion collapse show" id="filter-accordion">
            <div className="accordion-item bg-dark mb-2 mb-lg-3 bg-dark">
              <h2 className="accordion-header">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#model-panel"
                        className="accordion-button text-light fw-bold"> Model
                </button>
              </h2>
              <div id="model-panel" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="13ProMax" id="iphone-13ProMax"
                           className="form-check-input rounded-1 me-3"/>
                    <label className="form-check-label" htmlFor="iphone-13ProMax">iPhone 13 Pro
                      Max</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="13Pro" id="iphone-13Pro"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-13Pro">iPhone 13 Pro</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="13" id="iphone-13"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-13">iPhone 13</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="13Mini" id="iphone-13Mini"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-13Mini">iPhone 13
                      Mini</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="12ProMax" id="iphone-12ProMax"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-12ProMax">iPhone 12 Pro
                      Max</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="12Pro" id="iphone-12Pro"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-12Pro">iPhone 12 Pro</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="12" id="iphone-12"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-12">iPhone 12</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="12Mini" id="iphone-12Mini"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-12Mini">iPhone 12
                      Mini</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="11" id="iphone-11"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-11">iPhone 11</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="xr" id="iphone-xr"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-xr">iPhone XR</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="se2022" id="iphone-se2022"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-se2022">iPhone SE
                      2022</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="model" value="se2020" id="iphone-se2020"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="iphone-se2020">iPhone SE
                      2020</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark mb-2 mb-lg-3 bg-dark">
              <h2 className="accordion-header">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#memory-panel"
                        className="accordion-button collapsed text-light fw-bold"> Memory
                </button>
              </h2>
              <div id="memory-panel" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <div className="form-check mb-1">
                    <input type="checkbox" name="memories" value="1024" id="1024gb"
                           className="form-check-input rounded-1 me-3"/>
                    <label className="form-check-label" htmlFor="1024gb">1 TB</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="memories" value="512" id="512gb"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="512gb">512 GB</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="memories" value="256" id="256gb"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="256gb">256 GB</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="memories" value="128" id="128gb"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="128gb">128 GB</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="memories" value="64" id="64gb"
                           className="form-check-input rounded-1 me-3"
                    />
                    <label className="form-check-label" htmlFor="64gb">64 GB</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark mb-2 mb-lg-3 bg-dark">
              <h2 className="accordion-header">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#color-panel"
                        className="accordion-button collapsed text-light fw-bold"> Color
                </button>
              </h2>
              <div id="color-panel" className="accordion-collapse collapse ">
                <div className="accordion-body">
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="alpineGreen" id="alpineGreen"
                           className="form-check-input rounded-1 me-3 border alpineGreen-color"
                    />
                    <label className="form-check-label" htmlFor="alpineGreen">Alpine Green</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="black" id="black"
                           className="form-check-input rounded-1 me-3 border black-color"
                    />
                    <label className="form-check-label" htmlFor="black">Black</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="blue" id="blue"
                           className="form-check-input rounded-1 me-3 border blue-color"
                    />
                    <label className="form-check-label" htmlFor="blue">Blue</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="gold" id="gold"
                           className="form-check-input rounded-1 me-3 border-secondary check-invert gold-color"
                    />
                    <label className="form-check-label" htmlFor="gold">Gold</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="graphite" id="graphite"
                           className="form-check-input rounded-1 me-3 border graphite-color"
                    />
                    <label className="form-check-label" htmlFor="graphite">Graphite</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="green" id="green"
                           className="form-check-input rounded-1 me-3 border green-color"
                    />
                    <label className="form-check-label" htmlFor="green">Green</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="midnight" id="midnight"
                           className="form-check-input rounded-1 me-3 border midnight-color"
                    />
                    <label className="form-check-label" htmlFor="midnight">Midnight</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="pacificBlue" id="pacificBlue"
                           className="form-check-input rounded-1 me-3 border pacificBlue-color"
                    />
                    <label className="form-check-label" htmlFor="pacificBlue">Pacific Blue</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="pink" id="pink"
                           className="form-check-input rounded-1 me-3 border pink-color"
                    />
                    <label className="form-check-label" htmlFor="pink">Pink</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="purple" id="purple"
                           className="form-check-input rounded-1 me-3 border-secondary check-invert purple-color"
                    />
                    <label className="form-check-label" htmlFor="purple">Purple</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="red" id="red"
                           className="form-check-input rounded-1 me-3 border red-color"
                    />
                    <label className="form-check-label" htmlFor="red">Red</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="sierraBlue" id="sierraBlue"
                           className="form-check-input rounded-1 me-3 border sierraBlue-color"
                    />
                    <label className="form-check-label" htmlFor="sierraBlue">Sierra Blue</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="silver" id="silver"
                           className="form-check-input rounded-1 me-3 border-secondary check-invert silver-color"
                    />
                    <label className="form-check-label" htmlFor="silver">Silver</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="starlight" id="starlight"
                           className="form-check-input rounded-1 me-3 border-secondary check-invert starlight-color"
                    />
                    <label className="form-check-label" htmlFor="starlight">Starlight</label>
                  </div>
                  <div className="form-check mb-1">
                    <input type="checkbox" name="color" value="white" id="white"
                           className="form-check-input rounded-1 me-3 border-secondary check-invert white-color"
                    />
                    <label className="form-check-label" htmlFor="white">White</label>
                  </div>
                </div>
              </div>
            </div>
            <a href="/iphones/" type="button" className="btn btn-dark rounded-1 w-100 bi-x-lg">
              Clear Filter
            </a>
          </div>
          <input type="submit" hidden/>
        </form>
        <div className="col-12 col-lg-3 col-xl-3 order-lg-1">
          <div className="dropdown">
            <button
              className="btn bg-dark rounded-1 text-light w-100 dropdown-toggle bi-arrow-down-up shadow-none p-2 border-0 text-lg-end pe-lg-0"
              type="button" data-bs-toggle="dropdown" id="sort-btn"> Sort by:
              <span className="text-primary">

                    </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end rounded-1">
              <li><a className="btn dropdown-item px-4 bi-calendar-range"
                     href="/iphones/newest/?"> Newest</a></li>
              <li><a className="btn dropdown-item px-4 bi-star-fill"
                     href="/iphones/top/?"> Top Rating</a></li>
              <li><a className="btn dropdown-item px-4 bi-arrow-up-right"
                     href="/iphones/asc/?"> Price: Low - High</a></li>
              <li><a className="btn dropdown-item px-4 bi-arrow-down-right"
                     href="/iphones/desc/?"> Price: High - Low</a></li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-9 order-lg-3">
          <div className="row g-2 g-lg-3 d-flex flex-wrap">

            <div className="col-6 col-sm-4 col-xl-3">
              <div className="card border-0 bg-dark position-relative card-transition h-100">
                <img src="/img/products/" className="card-img-top" alt=""/>
                <div className="card-body p-2 d-flex flex-column justify-content-between">
                  <h6 className="card-title text-center mb-2"></h6>
                  <div className="d-flex justify-content-center align-items-center">
                    <span className="fs-5 text-center w-50">$ </span>
                    <a href="`/iphone- - -`"
                       className="btn btn-primary d-block w-50 fw-bold stretched-link">Buy</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="row mt-2 mt-lg-3">
            <nav>
              <ul className="pagination bg-dark rounded-1 justify-content-center mb-0">
                <li className="page-item">
                  <a className="page-link"
                     href="/iphones">Previous</a>
                </li>

                <li className="page-item ">
                  <a className="page-link rounded-1"
                     href="/iphones"></a>
                </li>

                <li className="page-item">
                  <a className="page-link rounded-1"
                     href="/iphones">Next</a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
