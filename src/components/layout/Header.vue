<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 col-lg-1 my-auto main-header-logo">
          <span>
            <a href="/" target="_self">
              <img
                src="data:image/png;base64,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"
                alt="FINANSIA Project || Website"
                class="img-fluid" /></a
          ></span>
        </div>

        <!-- middle navigation section -->
        <div class="col-md-11 col-lg-9 px-0 my-auto Navs1">
          <div class="">
            <ul class="navbar-nav flex-row ps-5">
              <li class="listmenu">
                <a href="https://www.fnsyrus.com/" target="_blank"> Home</a>
              </li>
              <li class="listmenu">
                <div class="dropbtn border-dp">
                  <a href="/market/favorite" class="hovername" target="_self">
                    Market
                  </a>
                </div>
              </li>
              <li class="listmenu">
                <div class="dropbtn border-dp">
                  <a href="/scan" class="hovername" target="_self">Scan</a>
                </div>
              </li>

              <li class="listmenu">
                <div class="dropbtn border-dp">
                  <a
                    href="#"
                    class="router-link-active active d-flex align-items-center"
                    target="_self"
                    >Buy/Sell
                    <span class="d-block ms-2">
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.175 0.158447L5 3.97511L8.825 0.158447L10 1.33345L5 6.33345L0 1.33345L1.175 0.158447Z"
                          fill="#677F8E"
                        ></path>
                      </svg> </span
                  ></a>
                </div>
              </li>

              <li class="listmenu">
                <div class="dropbtn border-dp">
                  <a href="#" class="hovername" target="_self">Chart</a>
                </div>
              </li>

              <li class="listmenu">
                <div class="dropbtn border-dp">
                  <a href="#" class="d-flex align-items-center" target="_self">
                    Portfolio
                    <span class="d-block ms-2">
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.175 0.158447L5 3.97511L8.825 0.158447L10 1.33345L5 6.33345L0 1.33345L1.175 0.158447Z"
                          fill="#677F8E"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </li>

              <li class="listmenu">
                <div class="dropbtn border-dp">
                  <a href="#" class="d-flex align-items-center" target="_self">
                    Deposit/Withdraw
                    <span class="d-block ms-2">
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.175 0.158447L5 3.97511L8.825 0.158447L10 1.33345L5 6.33345L0 1.33345L1.175 0.158447Z"
                          fill="#677F8E"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </li>

              <li class="listmenu">
                <div class="dropbtn border-dp">
                  <a href="#" class="hovername" target="_self">Download</a>
                </div>
              </li>

              <li class="listmenu">
                <div class="dropbtn border-dp">
                  <a href="#" class="hovername" target="_self"
                    >Copper Balance</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-1 col-lg-2 icon-navbar_right my-auto">
          <!---->
          <div style="position: relative; top: -3px; text-align: right">
            <a
              href="/login"
              @click.prevent="userLogin"
              class="btn-link me-3"
              target="_self"
              >Login</a
            >
            <a href="/" class="btn-link router-btn-active" target="_self"
              >Open Account</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { useMyStore } from "@/store";
export default {
  data() {
    return {};
  },
  methods: {
    userLogin() {
      const store = useMyStore();
      store.userLoggedIn();
    },
  },
};
</script>

<style scoped>
header {
  padding: 0.75rem 27px 0px;
  background-color: #000;
}
.btn-link {
  display: inline-block;
  padding: 0.35rem 0.5rem;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: white;
  background: #222b2f;
  border-radius: 5px;
  text-decoration: none;
}
.router-btn-active {
  background: #f38220;
}

/* navbar links */
.listmenu {
  margin: 0 15px;
}
.listmenu a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 0 0.85rem 0;
  transition: border 100ms linear;
}
.listmenu a:hover {
  border-bottom: 2px solid #f38220;
}

.listmenu a.router-link-active {
  border-bottom: 2px solid #f38220;
}
</style>
