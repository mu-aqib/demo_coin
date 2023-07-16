<template>
  <section>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="open_order-tab"
          data-bs-toggle="pill"
          data-bs-target="#open_order"
          type="button"
          role="tab"
          aria-controls="open_order"
          aria-selected="false"
        >
          Open Order
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="matched_order-tab"
          data-bs-toggle="pill"
          data-bs-target="#matched_order"
          type="button"
          role="tab"
          aria-controls="matched_order"
          aria-selected="false"
        >
          Matched
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="portfolio-tab"
          data-bs-toggle="pill"
          data-bs-target="#portfolio"
          type="button"
          role="tab"
          aria-controls="portfolio"
          aria-selected="false"
        >
          Portfolio
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="order_history-tab"
          data-bs-toggle="pill"
          data-bs-target="#order_history"
          type="button"
          role="tab"
          aria-controls="order_history"
          aria-selected="true"
        >
          Order History
        </button>
      </li>
    </ul>

    <!----------------------
       nav tab panes 
      ------------------------>
    <div class="tab-content" id="">
      <div
        class="tab-pane fade"
        id="open_order"
        role="tabpanel"
        aria-labelledby="open_order-tab"
      >
        <table class="table table-borderless text-start p-0 trailingTable">
          <thead>
            <tr>
              <th scope="col">
                <input
                  type="checkbox"
                  class="form-check-input c-white bg-dark rounded-0"
                  style="border: 1px solid #3c515d !important"
                />
              </th>
              <th scope="col">B/S</th>
              <th scope="col">Coin</th>
              <th scope="col">Type</th>
              <th scope="col" class="text-right">Price</th>
              <th scope="col" class="text-right">Volume</th>
              <th scope="col" class="text-right">Matched</th>
              <th scope="col" class="text-right">Unmatched</th>
              <th scope="col" class="text-right">Total(THB)</th>
              <th scope="col">Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="10">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="tab-pane fade"
        id="limited_order"
        role="tabpanel"
        aria-labelledby="limited_order-tab"
      >
        <h1 class="text-white">Tab 2</h1>
      </div>

      <div
        class="tab-pane fade"
        id="matched_order"
        role="tabpanel"
        aria-labelledby="matched_order-tab"
      >
        <h1 class="text-white">Tab 3</h1>
      </div>

      <div
        class="tab-pane fade"
        id="portfolio"
        role="tabpanel"
        aria-labelledby="portfolio-tab"
      >
        <h1 class="text-white">Tab 4</h1>
      </div>

      <!-----------  ORDER HISTORY  ------------>
      <div
        class="tab-pane fade show active"
        id="order_history"
        role="tabpanel"
        aria-labelledby="order_history-tab"
      >
        <div class="col-2 my-3">
          <select
            class="select-coin rounded-0 mb-3"
            style="width: 100%"
            @change="onChange($event)"
            v-model="type"
          >
            <option value="LIMIT_PRICE" selected>LIMIT_PRICE</option>
            <option value="MARKET_PRICE">MARKET_PRICE</option>
          </select>
        </div>
        <table class="table table-borderless text-start p-0 trailingTable">
          <thead>
            <tr>
              <th scope="col">Order Id</th>
              <th scope="col">Amount</th>
              <th scope="col">Base Symbol</th>
              <th scope="col">Coin Symbol</th>
              <th scope="col" class="text-right">Price</th>
              <th scope="col" class="text-right">Order Resource</th>
              <th scope="col" class="text-right">Total</th>
            </tr>
          </thead>
          <tbody v-if="!order_history">
            <tr>
              <td colspan="10" class="text-center"><h2>No record found</h2></td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr v-for="(order, i) in order_history" :key="i">
              <td>{{ order.orderId }}</td>
              <td>{{ order.amount }}</td>
              <td>{{ order.baseSymbol }}</td>
              <td>{{ order.coinSymbol }}</td>
              <td>{{ order.price }}</td>
              <td>{{ order.orderResource }}</td>
              <td>{{ order.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { useMyStore } from "@/store";
export default {
  data() {
    return {
      type: "LIMIT_PRICE",
      store: undefined,
      order_history: undefined,
    };
  },

  async mounted() {
    const store = useMyStore();
    await store.getOrderHistory(this.type);
    this.order_history = store.order_history;
  },

  methods: {
    async onChange(event) {
      const store = useMyStore();
      const result = await store.getOrderHistory(this.type);
      if (result) alert("data fetched");
    },
  },
};
</script>
