import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  getLoginFailure,
  getLoginSuccess,
  getUserTokenAuth,
  getUserTokenAuthFailure,
} from "../redux/loginSlice";
const address = process.env.NEXT_PUBLIC_REMOTE_ID;
function* workGetLoginFetch({ payload }) {
  try {
    const login = yield call(() =>
      fetch(`${address}auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: payload.email,
          password: payload.password,
          expiresInMins: 60,
        }),
      })
    );

    if (!login.ok) {
      const errorResponse = yield login.json();
      const errorMessage = errorResponse.msg;
      yield put(getLoginFailure(errorMessage)); // Dispatch failure action
      throw new Error(errorMessage);
    }
    const loginData = yield login.json();
    yield put(getLoginSuccess(loginData)); // Dispatch success action
    localStorage.setItem("token", JSON.stringify(loginData.token));
    yield put(getUserTokenAuth(loginData.token)); // Dispatch action to get user token
  } catch (error) {
    yield put(getLoginFailure(error.message)); // Dispatch failure action in case of error
  }
}

function* loginSaga() {
  yield takeEvery("login/getLoginFetch", workGetLoginFetch);
}

function* workGetTokenAuth({ payload }) {
  console.log(payload);
  try {
    const Auth = yield call(() =>
      fetch(`${address}auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      })
    );

    if (!Auth.ok) {
      const errorResponse = yield Auth.json();
      const errorMessage = errorResponse.msg;

      yield put(getUserTokenAuthFailure(errorMessage));
      throw new Error(errorMessage);
    }
  } catch (error) {
    yield put(getUserTokenAuthFailure(error.message));
  }
}

function* AuthSaga() {
  yield takeEvery("login/getUserTokenAuth", workGetTokenAuth);
}

export default function* loginGetSaga() {
  yield all([loginSaga(), AuthSaga()]);
}
