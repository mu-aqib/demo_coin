<template>
  <div class="container-fluid buy-sell">
    <div class="row border-bottom-dark">
      <div class="col-9 border-right-dark" style="">
        <div class="row top-search-row py-3">
          <div
            class="col-11 col-md-4 col-lg-4 col-xl-3"
            style="padding-left: 23px"
          >
            <div class="position-relative search-container">
              <div>
                <span class="search-svg">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                      fill="#677F8E"
                    ></path>
                  </svg>
                </span>

                <span class="coin-image">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACv0lEQVR4AaxWA6xdQRB9URs7qW0rThvXiGvbdqPa/EZt27bNb9u83tOd4u733W16knc1u3Nmd2bOPp8scKpDLd2vUV/dr0GA7t/gPv9F6P71i+hHz/SNbDSGxvr+FxDQtC53Hqj71S/Q/OpD5kdjaQ7N/Xfiay1ra34N1nBnxcK52o/mkg/ypbxqPvG5BInUj3xJ74YR2LAzn5CkQCD1I5+GX8NOEitXIVcPgjiqz7nitluvdsBJfQ39cC9oIW2gBbWQSkeVNUHForoiJ+0NGHM4eVuYzzaCORaMi6NkglhTudUkqt2OvQkn+RnMF9s40QgihJP56bct4SEI2r4eUt1RLhXUszIrZsXpqAhWkgXr4z4wswROfpz07hGnUDhpkWkA4+ZsVAdm67C+neA10VNKrIjbR9KplPvwzigL885CWJ8Pg5XmiEDMUhhXxnv6Im4f6bdKAMb1aS6RkxcjbLwQ7fh7ro0C8uoK4qb831dqvU8HXBLry5HyDk8PBgQ8U0HcFECEUuvlRLgEpANaQFMR3NsAsQOODS20nVcAET46TuXz3wkCgsgpSAQzilEW1vswT3/ErRSAcX2qIC5K5cV3iJMnoCLM+8skW7F+oVIKrE/7IfJ/VDg6NZAL1HPXRruhH+8jowURoggV82/cnFXeHtAErCDJtZNqSgRw37MN9RN9eLvFwk56DAGS3O4Vx5IsixbN+OgZAHF7CpH9/VSVhUfiY95ZwFtvCIwLw0QHiBRJCZG3FId1hHFtCum9KDgPMNsgDZCSYqXDyHq1CwTrQzhXvbsoD6GAxs2ZUoeR8nHspL4CY4wLTHuYT9eBYD5cBf1kPxiXx4K6QQtupX4cS/0h8W8IJz8eTtZXend1X/u5+SbkNM2ayG+SzdSA1wl/n55Alye/SUb/RunAN8vp3zEZCl0z+ndOB7x7DgARoloEset8/QAAAABJRU5ErkJggg=="
                    alt="coin-image"
                    class="coin-img"
                  />
                </span>

                <div tabindex="0" class="td">
                  <input
                    type="text"
                    placeholder="ETC / THB"
                    maxlength="10"
                    class="ml-4 coins-search-input text-uppercase"
                  /><!---->
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-md-8 col-lg-8 col-xl-9 my-auto trading-scores text-start"
            style="padding-left: 14px"
          >
            <span class="live-amount-title red">1,093,706.00</span
            ><span class="live-amount-value red">(0%)</span
            ><span class="title">24h High:</span><span class="value">0</span
            ><span class="title">24h Low:</span><span class="value">0</span
            ><span class="title">24h Volume :</span><span class="value">0</span>
          </div>
        </div>

        <div class="row">
          <div class="col-4 py-3 border-right-dark">
            <select class="select-coin rounded-0 mb-3">
              <option value="Bid/Offer">Bid/Offer</option>
              <option value="Bid">Bid</option>
              <option value="Offer">Offer</option>
              <option value="All coin">All coin</option>
            </select>
            <div class="table-responsive table-774">
              <BTCLeftTicker />
            </div>
          </div>
          <div class="col-8">
            <img
              src="img/graph.png"
              alt=" graph img "
              class="table-h-350 w-100"
              style="object-fit: cover"
            />

            <!-- tab list of buy sell order -->
            <div class="border-top-dark pb-3 pt-2 mt-4">
              <OrderTabList @sendBuySellCost="sendBuySellCost" />
            </div>
          </div>
        </div>
      </div>

      <!-- right side  -->
      <div class="col-3 pt-3">
        <!-- select coind from dropdown  -->
        <select class="select-coin rounded-0 mb-3">
          <option value="Bid">Bid</option>
          <option value="Offer">Offer</option>
          <option value="All coin">All coin</option>
        </select>

        <div class="table-responsive table-h-350">
          <table class="table" style="background-color: unset">
            <thead>
              <tr class="sticky-top fixed">
                <th>Coin</th>
                <th style="padding-left: 60px">Price (THB)</th>
                <th style="text-align: right">
                  %Chg
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4623_9379)">
                      <path d="M0 8L3 11L6 8H0Z" fill="#677F8E"></path>
                      <path d="M6 4L3 1L0 4L6 4Z" fill="#677F8E"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_4623_9379">
                        <rect width="6" height="12" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style="cursor: pointer">
                <td class="d-flex">
                  <span class="d-block me-1" style="margin-top: -3px">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6663 5.7876L8.87301 5.37427L6.99967 0.960938L5.12634 5.38094L0.333008 5.7876L3.97301 8.94094L2.87967 13.6276L6.99967 11.1409L11.1197 13.6276L10.033 8.94094L13.6663 5.7876ZM6.99967 9.89427L4.49301 11.4076L5.15967 8.55427L2.94634 6.63427L5.86634 6.38094L6.99967 3.69427L8.13967 6.3876L11.0597 6.64094L8.84634 8.56094L9.51301 11.4143L6.99967 9.89427Z"
                        fill="#677F8E"
                      ></path>
                    </svg>
                  </span>
                  BTC/THB
                </td>
                <td style="padding-left: 60px">69,027.00</td>
                <td class="red" style="text-align: right">0%</td>
              </tr>

              <tr style="cursor: pointer">
                <td class="d-flex align-items-center">
                  <span class="d-block me-1" style="margin-top: -3px">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6663 5.7876L8.87301 5.37427L6.99967 0.960938L5.12634 5.38094L0.333008 5.7876L3.97301 8.94094L2.87967 13.6276L6.99967 11.1409L11.1197 13.6276L10.033 8.94094L13.6663 5.7876ZM6.99967 9.89427L4.49301 11.4076L5.15967 8.55427L2.94634 6.63427L5.86634 6.38094L6.99967 3.69427L8.13967 6.3876L11.0597 6.64094L8.84634 8.56094L9.51301 11.4143L6.99967 9.89427Z"
                        fill="#677F8E"
                      ></path>
                    </svg>
                  </span>
                  ETH/THB
                </td>
                <td style="padding-left: 60px">1,093,706.00</td>
                <td class="red" style="text-align: right">0%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- BTC Ticket -->
        <h4 class="mb-3 text-white">BTC Ticker</h4>

        <div class="table-responsive table-424">
          <BTCTicker />
        </div>
      </div>
    </div>

    <!-- data table wiht mutlitple tabs -->
    <div class="py-3 col-12">
      <OrderTable />
    </div>
  </div>
</template>
<script>
import BTCTicker from "./BTCTicker.vue";
import BTCLeftTicker from "./BTCLeftTicker.vue";
import OrderTabList from "./OrderTabList.vue";
import OrderTable from "./OrderTable.vue";
import { useMyStore } from "@/store";

export default {
  props: ["authToken"],
  data() {
    return {};
  },
  components: {
    BTCTicker,
    BTCLeftTicker,
    OrderTabList,
    OrderTable,
  },

  methods: {
    async sendBuySellCost(data) {
      if (data.price && data.amount) {
        // call action from store
        const store = useMyStore();
        await store.sendBuySellCost(data);
      } else alert("Insert amount and price");
    },
  },
};
</script>

<style scoped>
/* search box */
@import url("@/assets/css/home.css");
</style>
