<template>
  <!-- Nav tabs buttons -->
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="limited_order-tab"
        data-bs-toggle="pill"
        data-bs-target="#limited_order"
        type="button"
        role="tab"
        aria-controls="limited_order"
        aria-selected="true"
      >
        Limited Order
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="market_order-tab"
        data-bs-toggle="pill"
        data-bs-target="#market_order"
        type="button"
        role="tab"
        aria-controls="market_order"
        aria-selected="false"
      >
        Market Order
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="training_stop-tab"
        data-bs-toggle="pill"
        data-bs-target="#training_stop"
        type="button"
        role="tab"
        aria-controls="training_stop"
        aria-selected="false"
      >
        Training Stop
      </button>
    </li>
  </ul>

  <!-- nav tab panes -->
  <div class="tab-content" id="">
    <div
      class="tab-pane fade show active"
      id="limited_order"
      role="tabpanel"
      aria-labelledby="limited_order-tab"
    >
      <div class="row">
        <div class="col-6">
          <form>
            <div class="form-group position-relative c-white mb-2">
              <input
                type="text"
                min="0"
                max="0"
                step="0.00000001"
                placeholder="0.00"
                v-model="buy_sell_data.amount"
                maxlength="18"
                class="dark-form-input c-white text-end text-sm w-100 px-paddding"
              />
              <span class="absolute-y-center right-1 text-sm">THB</span>
              <span class="absolute-y-center text-sm left-1">
                <!-- จำนวนเงินที่ต้องการซื้อ -->
                Amount to buy
              </span>
            </div>
            <div
              class="input-group-bottom-text c-white d-flex justify-content-between align-center"
            >
              <p class="text-sm">
                <!-- ยอดเงินที่ซื้อได้ -->
                purchase amount
              </p>
              <p class="text-sm">0 THB</p>
            </div>
            <div class="timeline-bar">
              <div
                class="progress"
                style="
                  height: 2px;
                  margin: auto;
                  background-color: rgb(86, 106, 118);
                "
              >
                <div
                  role="progressbar"
                  class="progress-bar"
                  style="width: 50%; margin-left: -2%"
                ></div>
              </div>
              <div class="spots">
                <div class="spot" style="cursor: pointer">
                  <span class="dot align-self-baseline active"></span
                  ><span class="font-12">0%</span>
                </div>
                <div class="spot" style="cursor: pointer">
                  <span class="dot align-self-baseline active"></span
                  ><span class="font-12">25%</span>
                </div>
                <div class="spot" style="cursor: pointer">
                  <span class="dot align-self-baseline active"></span
                  ><span class="font-12">50%</span>
                </div>
                <div class="spot" style="cursor: pointer">
                  <span class="dot"></span><span class="font-12">75%</span>
                </div>
                <div class="spot" style="cursor: pointer">
                  <span class="dot align-self-end"></span
                  ><span class="font-12">100%</span>
                </div>
              </div>
            </div>

            <div class="form-group position-relative c-white mb-3">
              <input
                type="text"
                min="0"
                max="0"
                step="0.00000001"
                placeholder="0.00"
                v-model="buy_sell_data.price"
                maxlength="18"
                class="dark-form-input c-white text-end text-sm w-100 px-paddding"
              />
              <span class="absolute-y-center right-1 text-sm">THB</span>
              <span class="absolute-y-center text-sm left-1">
                <!-- ราคาต่อ BTC -->
                price per BTC
              </span>
            </div>

            <div class="form-group position-relative c-white mb-3">
              <input
                type="text"
                min="0"
                max="0"
                step="0.00000001"
                placeholder="0.00"
                maxlength="18"
                class="dark-form-input c-white text-end text-sm w-100 px-paddding"
              />
              <span class="absolute-y-center right-1 text-sm">BTC</span>
              <span class="absolute-y-center text-sm left-1">
                BTC ที่จะได้รับ
              </span>
            </div>

            <div class="form-group form-check">
              <label class="mb-0"
                ><input
                  type="checkbox"
                  value="false"
                  class="form-check-input c-white bg-dark border-0 rounded-0"
                />
                <p class="c-white">Take Profit / Stop Loss</p></label
              >
            </div>

            <div class="form-group">
              <button
                type="submit"
                @click.prevent="sendData"
                class="btn btn-block btn-success rounded-0 w-100 mb-3"
              >
                <!-- ซื้อ -->
                buy
              </button>
              <p class="text-end c-white mb-0 text-sm">Fee 0.1%</p>
            </div>
          </form>
        </div>

        <div class="col-6">
          <form>
            <div class="form-group position-relative c-white mb-2">
              <input
                type="text"
                min="0"
                max="0"
                step="0.00000001"
                placeholder="0.00"
                maxlength="18"
                class="dark-form-input c-white text-end text-sm w-100 px-paddding"
              />
              <span class="absolute-y-center right-1 text-sm">THB</span>
              <span class="absolute-y-center text-sm left-1">
                <!-- จำนวนที่ต้องการขาย -->
                Quantity to sell
              </span>
            </div>
            <div
              class="input-group-bottom-text c-white d-flex justify-content-between align-center"
            >
              <p class="text-sm">
                <!-- มูลค่า BTC ที่มี -->
                value BTC with
              </p>
              <p class="text-sm">16,296.22 THB</p>
            </div>
            <div class="timeline-bar">
              <div
                class="progress"
                style="
                  height: 2px;
                  margin: auto;
                  background-color: rgb(86, 106, 118);
                "
              >
                <div
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="0"
                  class="progress-bar"
                  style="width: 0%"
                ></div>
              </div>
              <div class="spots">
                <div class="spot" style="cursor: pointer">
                  <span class="dot align-self-baseline active"></span
                  ><span class="font-12">0%</span>
                </div>
                <div class="spot" style="cursor: pointer">
                  <span class="dot"></span><span class="font-12">25%</span>
                </div>
                <div class="spot" style="cursor: pointer">
                  <span class="dot"></span><span class="font-12">50%</span>
                </div>
                <div class="spot" style="cursor: pointer">
                  <span class="dot"></span><span class="font-12">75%</span>
                </div>
                <div class="spot" style="cursor: pointer">
                  <span class="dot align-self-end"></span
                  ><span class="font-12">100%</span>
                </div>
              </div>
            </div>

            <div class="form-group position-relative c-white mb-3">
              <input
                type="text"
                min="0"
                max="0"
                step="0.00000001"
                placeholder="0.00"
                value="1,093,706"
                maxlength="18"
                class="dark-form-input c-white text-end text-sm w-100 px-paddding"
              />
              <span class="absolute-y-center right-1 text-sm">THB</span>
              <span class="absolute-y-center text-sm left-1">
                price per BTC
                <!-- ราคาต่อ BTC -->
              </span>
            </div>

            <div class="form-group position-relative c-white mb-3">
              <input
                type="text"
                min="0"
                max="0"
                step="0.00000001"
                placeholder="0.00"
                maxlength="18"
                class="dark-form-input c-white text-end text-sm w-100 px-paddding"
              />
              <span class="absolute-y-center right-1 text-sm">BTC</span>
              <span class="absolute-y-center text-sm left-1">
                <!-- จำนวน BTC ที่ขาย -->
                quantity BTC on sale
              </span>
            </div>

            <div class="form-group form-check">
              <label class="mb-0"
                ><input
                  type="checkbox"
                  value="false"
                  class="form-check-input c-white bg-dark border-0 rounded-0"
                />
                <p class="c-white">Take Profit / Stop Loss</p></label
              >
            </div>

            <div class="form-group">
              <button
                type="submit"
                class="btn btn-block btn-danger rounded-0 w-100 mb-3"
              >
                <!-- ขาย -->
                sell
              </button>
              <p class="text-end c-white mb-0 text-sm">Fee 0.1%</p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div
      class="tab-pane fade"
      id="market_order"
      role="tabpanel"
      aria-labelledby="market_order-tab"
    >
      <h1>second tab</h1>
    </div>

    <div
      class="tab-pane fade"
      id="training_stop"
      role="tabpanel"
      aria-labelledby="training_stop-tab"
    >
      <h1>Third tab</h1>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["sendBuySellCost"],
  data() {
    return {
      buy_sell_data: {
        symbol: "BTC/THB",
        price: "1,093,706",
        amount: undefined,
        direction: "BUY",
        type: "MARKET_PRICE",
      },
    };
  },

  methods: {
    sendData() {
      this.$emit("sendBuySellCost", this.buy_sell_data);
    },
  },
};
</script>
