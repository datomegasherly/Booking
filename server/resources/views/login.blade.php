@include('static.header')
@include('static.footer')

@yield('login.header')
@yield('login.header.box')

    <!-- Page content -->
    <div class="container mt--8 pb-5">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary border-0 mb-0">
              <div class="card-header bg-transparent pb-5">
                <div class="text-muted text-center mt-2 mb-3"><small>{{ trans('home.login.signinwith') }}</small></div>
                <div class="btn-wrapper text-center">
                  <a href="#" class="btn btn-neutral btn-icon">
                    <span class="btn-inner--icon"><img src="/assets/img/icons/common/github.svg"></span>
                    <span class="btn-inner--text">{{ trans('home.login.github') }}</span>
                  </a>
                  <a href="#" class="btn btn-neutral btn-icon">
                    <span class="btn-inner--icon"><img src="/assets/img/icons/common/google.svg"></span>
                    <span class="btn-inner--text">{{ trans('home.login.google') }}</span>
                  </a>
                </div>
              </div>
              <div class="card-body px-lg-5 py-lg-5">
                <div class="text-center text-muted mb-4">
                  <small>{{ trans('home.login.orsigninwith') }}</small>
                </div>
                <form role="form">
                  <div class="form-group mb-3">
                    <div class="input-group input-group-merge input-group-alternative">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-circle-08"></i></span>
                      </div>
                      <input class="form-control" placeholder="{{ trans('home.login.username') }}" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group input-group-merge input-group-alternative">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                      </div>
                      <input class="form-control" placeholder="{{ trans('home.login.password') }}" type="password">
                    </div>
                  </div>
                  <div class="custom-control custom-control-alternative custom-checkbox">
                    <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
                    <label class="custom-control-label" for=" customCheckLogin">
                      <span class="text-muted">{{ trans('home.login.remember') }}</span>
                    </label>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn btn-primary my-4">{{ trans('home.login.signin') }}</button>
                  </div>
                </form>
                <div class="col-6">
                    <a href="/forgot" class="text-light"><small>{{ trans('home.login.forgot') }}</small></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

@yield('login.footer.box')
@yield('login.footer')