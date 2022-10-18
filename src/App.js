import React, { useEffect } from "react";
import logo from "./assets/eden.png";

function App() {
  useEffect(() => {
    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress = document.getElementById("progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");

    let formStepsNum = 0;

    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
      });
    });

    prevBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
      });
    });

    function updateFormSteps() {
      formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
          formStep.classList.remove("form-step-active");
      });

      formSteps[formStepsNum].classList.add("form-step-active");
    }

    function updateProgressbar() {
      progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
          progressStep.classList.add("progress-step-active");
        } else {
          progressStep.classList.remove("progress-step-active");
        }
      });

      const progressActive = document.querySelectorAll(".progress-step-active");

      progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
    }
  }, []);

  return (
    <div className=" p-5 ">
      <form action="#">
        <div className="items-center justify-center flex">
          <img src={logo} alt="logo-eden" />
        </div>
        <div class="progressbar ">
          <div class="progress" id="progress"></div>

          <div class="progress-step progress-step-active" data-title=""></div>
          <div class="progress-step" data-title=""></div>
          <div class="progress-step" data-title=""></div>
          <div class="progress-step" data-title=""></div>
        </div>

        {/* <!-- Steps --> */}
        <div class="form-step form-step-active">
          <div className="flex flex-col ">
            <h1 className="text-center font-bold text-2xl ">
              Welcome! First things first...
            </h1>

            <span className="text-center ">
              You can always change them later.
            </span>
          </div>
          <div class="input-group">
            <label for="username">Full Name</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Steve Jobs"
            />
          </div>
          <div class="input-group">
            <label for="position">Display Name</label>
            <input
              type="text"
              name="position"
              id="position"
              placeholder="Steve"
            />
          </div>
          <div class="">
            <a href="#" class="btn btn-next width-50 ml-auto">
              Next
            </a>
          </div>
        </div>

        <div class="form-step phone">
          <div class="input-group">
            <label for="phone">Phone</label>
            <input type="text" name="phone" id="phone" />
          </div>
          <div class="input-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div class="btns-group">
            <a href="#" class="btn btn-prev">
              Previous
            </a>
            <a href="#" class="btn btn-next">
              Next
            </a>
          </div>
        </div>
        <div class="form-step">
          <div class="input-group">
            <label for="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
          </div>
          <div class="input-group">
            <label for="ID">National ID</label>
            <input type="number" name="ID" id="ID" />
          </div>
          <div class="btns-group">
            <a href="#" class="btn btn-prev">
              Previous
            </a>
            <a href="#" class="btn btn-next">
              Next
            </a>
          </div>
        </div>
        <div class="form-step">
          {/* <div class="input-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div> */}
          {/* <div class="input-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
          </div> */}
          <div className="flex flex-col ">
            <h1 className="text-center font-bold text-2xl ">
              Welcome! First things first...
            </h1>

            <span className="text-center ">
              You can always change them later.
            </span>
          </div>
          <div class="btns-group">
            <a href="#" class="btn btn-prev">
              Previous
            </a>
            <input type="submit" value="Submit" class="btn" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
