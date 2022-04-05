import React from "react";

function DashboardComponent({clients,events}) {
  return (
    <>
      <div class="row">
        <div class="col-md-6 col-lg-3 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-md-center">
                <i class="mdi mdi-basket icon-lg text-success"></i>
                <div class="ml-3">
                  <p class="mb-0">Number of events</p>
                  <h6>{events.length}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-md-center">
                <i class="mdi mdi-rocket icon-lg text-warning"></i>
                <div class="ml-3">
                  <p class="mb-0">Number of clients</p>
                  <h6>{clients.length}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-md-center">
                <i class="mdi mdi-diamond icon-lg text-info"></i>
                <div class="ml-3">
                  <p class="mb-0">Active Events</p>
                  <h6>896546</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-md-center">
                <i class="mdi mdi-chart-line-stacked icon-lg text-danger"></i>
                <div class="ml-3">
                  <p class="mb-0">Completed Events</p>
                  <h6>56000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="row grid-margin">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title">Order status</h6>
              <div class="d-flex table-responsive">
                <div class="btn-group mr-2">
                  <button class="btn btn-sm btn-info">
                    <i class="mdi mdi-plus-circle-outline"></i> Add
                  </button>
                </div>
                <div class="btn-group mr-2">
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-alert-circle-outline"></i>
                  </button>
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-delete-empty"></i>
                  </button>
                </div>
                <div class="btn-group mr-2">
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-printer"></i>
                  </button>
                </div>
                <div class="btn-group ml-auto mr-2 border-0">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Here"
                  />
                </div>
                <div class="btn-group">
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-cloud"></i>
                  </button>
                  <button type="button" class="btn btn-light">
                    <i class="mdi mdi-dots-vertical"></i>
                  </button>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table mt-3 border-top">
                  <thead>
                    <tr>
                      <th>Invoice</th>
                      <th>Customer</th>
                      <th>Ship</th>
                      <th>Best Price</th>
                      <th>Purchsed Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>50014</td>
                      <td>David Grey</td>
                      <td>Italy</td>
                      <td>$6300</td>
                      <td>$2100</td>
                      <td>
                        <div class="badge badge-success badge-fw">Progress</div>
                      </td>
                    </tr>
                    <tr>
                      <td>50015</td>
                      <td>Stella Johnson</td>
                      <td>Brazil</td>
                      <td>$4500</td>
                      <td>$4300</td>
                      <td>
                        <div class="badge badge-warning badge-fw">Open</div>
                      </td>
                    </tr>
                    <tr>
                      <td>50016</td>
                      <td>Marina Michel</td>
                      <td>Japan</td>
                      <td>$4300</td>
                      <td>$6440</td>
                      <td>
                        <div class="badge badge-danger badge-fw">On hold</div>
                      </td>
                    </tr>
                    <tr>
                      <td>50017</td>
                      <td>John Doe</td>
                      <td>India</td>
                      <td>$6400</td>
                      <td>$2200</td>
                      <td>
                        <div class="badge badge-success badge-fw">Progress</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="d-flex align-items-center justify-content-between flex-column flex-sm-row mt-4">
                <p class="mb-3 mb-sm-0">Showing 1 to 20 of 20 entries</p>
                <nav>
                  <ul class="pagination pagination-info mb-0">
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        <i class="mdi mdi-chevron-left"></i>
                      </a>
                    </li>
                    <li class="page-item active">
                      <a href="!#" class="page-link">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        4
                      </a>
                    </li>
                    <li class="page-item">
                      <a href="!#" class="page-link">
                        <i class="mdi mdi-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default DashboardComponent;
