<template>
  <div
    ref="el"
    class="row"
  >
    <div class="col-md-12">
      <div class="landing-title">
        <h2 class="title">
          {{ title }}
        </h2>
      </div>
    </div>

    <div
      v-for="(theme, i) in themes"
      :key="i"
      class="col-xs-12 col-sm-6 col-md-4 col-lg-4"
    >
      <div class="card card-small">
        <div class="thumbnail">
          <img
            :src="theme.img"
            alt="No Image"
          >
          <a
            :href="theme.url"
            target="_blank"
            class="thumb-cover"
          />
          <b class="actions">
            <a
              :href="theme.url"
              target="_blank"
              class="btn btn-neutral btn-round btn-fill"
              title="More Details"
            >
              <i
                class="fa fa-align-left"
              />
            </a>
            <a
              :href="theme.demo"
              class="btn btn-neutral btn-fill btn-round"
              target="_blank"
              title="Live Preview"
            >
              <i class="fa fa-laptop" />
            </a>
          </b>
        </div>
        <div class="card-info">
          <a
            :href="theme.url"
            target="_blank"
          >
            <h3>
              {{ theme.name }}
              <div
                v-if="theme.price"
                class="time pull-right premium-product"
              >
                {{ theme.price }}
              </div>
              <div
                v-else
                class="time pull-right free"
              >
                FREE
              </div>
            </h3>
            <p>{{ theme.desc }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  themes: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
a {
  text-decoration: none;
}

.title {
  font-size: 28px;
  font-weight: 300;
  margin: 7px 0;
  font-weight: normal;
  color: #777;
  margin-bottom: 20px;
}

.free {
  color: #777;
  font-size: 15px;
}

.card {
  border-radius: 8px;
  position: relative;
  margin-bottom: 60px;
  border: 0;
}

.card .thumbnail {
  border: 0 none;
  padding: 0;
  margin: 0;
  min-height: 250px;
  position: relative;
  background: transparent
}

.card-small .thumbnail {
  min-height: 200px;
}

.card .thumbnail img {
  width: 100%;
  height: 100%;
}

.card .thumbnail>img {
  border-radius: 8px 8px;
  box-shadow: 0 25px 20px -21px rgba(0, 0, 0, 0.57)
}

.card .details {
  top: 0;
  display: block;
  height: 60px;
  padding: 10px 15px 0;
  position: absolute;
  width: 100%;
  border-radius: 8px 8px 0 0
}

.card .header,
.card .main,
.card .footer {
  display: block
}

.card .time {
  color: #777777;
  font-size: 15px;
  margin-top: 2px;
  text-transform: uppercase
}

.card .time.premium-product {
  color: #444444;
  font-size: 19px;
  margin: 1px
}

.card .numbers {
  color: #FFFFFF;
  float: right;
  margin-top: 6px;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.34)
}

.card .numbers .downloads,
.card .numbers .comments-icon {
  margin-left: 6px;
  font-size: 15px;
  font-weight: 500
}

.card .numbers .fa {
  font-size: 18px
}

.card .description {
  color: #FFFFFF;
  margin-top: 40px;
  height: 125px;
  font-size: 18px;
  opacity: 0.7
}

.card a:hover .description {
  opacity: 1
}

.card .actions .btn {
  margin-left: 5px;
  margin-right: 5px;
  top: 50%;
  position: relative;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%)
}

.card .actions .btn-round:not(.btn-radius) {
  font-size: 18px;
  padding: 14px 14px;
  line-height: 1;
  display: inline-block;
  width: 48px;
  height: 48px
}

.btn-neutral.btn-fill {
  color: #666666 !important;
  background-color: white;
  opacity: 1;
  filter: alpha(opacity=100);
}

.btn-round {
  border-width: 1px;
  border-radius: 30px !important;
  opacity: 0.79;
  padding: 9px 18px;
}

.card .thumb-cover {
  padding: 15px 20px;
  height: 100%;
  top: 0;
  position: absolute;
  opacity: 0;
  display: block;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 3;
  content: "";
  left: 0;
  border-radius: 8px
}

.card .actions {
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 0;
  text-align: center;
  width: 100%;
  height: 0;
  opacity: 0;
  transition: all .5s ease;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease
}

.card:hover .thumb-cover,
.card:hover .actions {
  opacity: 1
}

.card-small .actions {
  height: 55px;
  font-size: 14px
}

.card:hover .actions {
  opacity: 1
}

.card .title {
  margin-top: 45px;
  min-height: 115px
}

.card a .title h3 {
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 400;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.57)
}

.card .user {
  font-weight: 400;
  color: #FFFFFF;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.23);
  line-height: 20px;
  display: block
}

.card .user .name {
  line-height: 35px;
  margin-left: 10px;
  font-size: 16px;
  float: left
}

.card .user .user-photo {
  width: 35px;
  height: 35px;
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  overflow: hidden;
  float: left
}

.card .user-photo img {
  width: 33px
}

.card-info {
  padding: 15px;
  border-radius: 0 0 12px 12px
}

.card-info [class^='circle-'] {
  float: left;
  margin-right: 5px
}

.card-info a:not(.btn) {
  color: #434343
}

.card-info a:not(.btn):hover {
  color: #232323
}

.card-info .actions a {
  color: #777777
}

.card-info .actions a:hover {
  color: #555555
}

.card-info .actions .blue-text {
  color: #00bbff
}

.card-info .actions .blue-text:hover {
  color: #3883c4
}

.card-info h3 {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 18px
}

.card-small .card-info h3 {
  font-size: 18px
}

.card-info p {
  font-size: 14px;
  margin: 0;
  color: #666666;
  min-height: 50px
}

.card-info .label {
  background: transparent;
  border: 1px solid;
  border-radius: 14px;
  padding: 5px 10px;
  font-size: 10px;
  text-transform: uppercase;
  position: relative;
  top: -4px
}

.card-info .label.label-danger {
  background: transparent
}

.card-info .label .fa {
  font-size: 12px
}

@media (max-width: 800px) {
  .card.card-bundle .thumbnail {
    min-height: 150px
  }

  .card.card-bundle .details .framework-logo {
    padding-top: 20px
  }

  .card.card-bundle .details .framework-logo img {
    width: 40px;
    height: 40px
  }

  .card.card-bundle .details .framework-logo img.default,
  .card.card-bundle .details .framework-logo img.material {
    width: 30px;
    height: 30px
  }

  .card.card-bundle .details .framework-logo p {
    padding-top: 5px;
    font-size: 20px
  }
}

@media (max-width: 1100px) {
  .card.card-bundle .details .bundle-details {
    padding: 10px
  }

  .card.card-bundle .details .bundle-details i {
    font-size: 20px
  }

  .card.card-bundle .details .bundle-details span {
    font-size: 20px
  }
}

@media (min-width: 801px) and (max-width: 1100px) {
  .card.card-bundle .details .framework-logo {
    padding-top: 25px
  }

  .card.card-bundle .details .framework-logo img {
    width: 50px;
    height: 50px
  }

  .card.card-bundle .details .framework-logo img.default,
  .card.card-bundle .details .framework-logo img.material {
    width: 40px;
    height: 40px
  }
}

.card.card-bundle .details {
  text-align: center;
  height: auto;
  color: #FFF;
  height: 100%
}

.card.card-bundle .details .bundle-details {
  position: absolute;
  width: 100%;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px;
  margin-right: auto;
  margin-left: auto
}

.card.card-bundle .details .bundle-details i {
  font-size: 30px
}

.card.card-bundle .details .bundle-details span {
  display: block;
  font-size: 35px;
  font-weight: 300
}

.card.card-bundle .details .bundle-details p {
  font-size: 12px;
  font-weight: 500
}

.card.card-bundle .details .framework-logo {
  position: absolute;
  width: 100%;
  padding-bottom: 5px;
  padding-top: 40px;
  left: 0;
  right: 0;
  top: 0;
  margin-right: auto;
  margin-left: auto
}

.card.card-bundle .details .framework-logo img {
  width: 70px;
  height: 70px;
  border-radius: 50%
}

.card.card-bundle .details .framework-logo img.default,
.card.card-bundle .details .framework-logo img.material {
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px
}

.card.card-bundle .details .framework-logo p {
  padding-top: 20px;
  font-size: 30px;
  font-weight: 400
}

.card.card-bundle .mask {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: .8;
  border-radius: 8px
}

.card .authors-container {
  width: 38px
}

.card .authors-container[data-collaborators="2"] {
  width: 60px
}

.card .authors-container[data-collaborators="3"] {
  width: 80px
}

.card .authors-container[data-collaborators="4"] {
  width: 100px
}

.card .authors-container .author:nth-child(2) {
  margin-left: -14px
}

.card .authors-container .author:nth-child(3) {
  margin-left: -14px
}

.card .authors-container .author:nth-child(4) {
  margin-left: -14px
}

.card .authors-container {
  display: inline-block
}

.card .authors-container>.author>.account-photo {
  width: 36px;
  height: 36px
}

.card .author>.account-photo.account-product-owner {
  border-color: #ff9500
}
</style>
