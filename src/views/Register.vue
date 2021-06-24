<template>
  <div>
    <form class="mt-3" @submit.prevent="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-light">
              <div class="card-body">
                <h3 class="font-weight-light mb-3">Register</h3>
                <div class="form-row">
                  <div v-if="error" class="col-12 alert alert-danger px-3">
                    {{ error }}
                  </div>
                  <section class="col-sm-12 form-group">
                    <label class="form-control-label sr-only" for="displayName">Display Name</label>
                    <input
                        class="form-control mb-3"
                        type="text"
                        id="displayName"
                        placeholder="Display Name"
                        name="displayName"
                        required
                        v-model="displayName"
                    />
                    <div class="invalid-feedback">
                      Пожалуйста, выберите имя пользователя.
                    </div>
                    <div class="valid-feedback">
                      Все хорошо!
                    </div>
                  </section>
                </div>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="email">Email</label>
                  <input
                      class="form-control mb-3"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      required
                      name="email"
                      v-model="email"
                  />
                  <div class="invalid-feedback">
                    Пожалуйста, правильный емаил.
                  </div>
                  <div class="valid-feedback">
                    Все хорошо!
                  </div>
                </section>
                <div class="row">
                  <section class="form-group col col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                        class="form-control mb-3"
                        type="password"
                        placeholder="Password"
                        v-model="passOne"
                    />
                  </section>
                  <section class="form-group col col-12 col-md-6 col-lg-6 col-xl-6">
                    <input
                        class="form-control mb-3"
                        type="password"
                        required
                        placeholder="Repeat Password"
                        v-model="passTwo"
                    />
                  </section>
                </div>
                <div class="col-12 mb-3 mt-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">
                      Примите условия и соглашения
                    </label>
                    <div class="invalid-feedback">
                      Вы должны принять перед отправкой.
                    </div>
                  </div>
                </div>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit" @click="valid">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <p class="text-center mt-2">
      or
      <router-link to="/login">login</router-link>
    </p>
  </div>
</template>
<script>
// import firebase from 'firebase'
import Firebase from "firebase";

export default {
  data: function() {
    return {
      displayName: null,
      email: null,
      passOne: null,
      passTwo: null,
      error: null
    }
  },
  methods: {
    register: function () {
      const info = {
        email: this.email,
        password: this.passTwo,
        displayName: this.displayName
      }

      if (!this.error) {
        Firebase.auth()
        .createUserWithEmailAndPassword(info.email, info.password)
        .then(
            userCredentials => {
              return userCredentials.user.updateProfile({
                displayName: info.displayName
              })
              .then(() => {
                this.$router.replace('/')
              })
            },
            error => {
              this.error = error.message
            }
        )
      }
    },
    valid: function () {
      'use strict'

      // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
      var forms = document.querySelectorAll('.needs-validation')

      // Зацикливайтесь на них и предотвращайте отправку
      Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }

              form.classList.add('was-validated')
            }, false)
          })
    },
  },
  watch: {
    passTwo: function () {
      if(this.passOne !=='' && this.passTwo !=='' && this.passTwo !== this.passOne) {
        this.error = 'passwords must match'
      } else {
        this.error = null
      }
    }
  }
}
</script>