class Stopwatch {
  constructor(displayMain, displayMs, startBtn, clearBtn) {
    this.displayMain = displayMain;
    this.displayMs = displayMs;
    this.startBtn = startBtn;
    this.clearBtn = clearBtn;

    this.startTime = 0;
    this.elapsed = 0;
    this.running = false;
    this.timerId = null;

    this.bindEvents();
    this.render(0);
  }

  bindEvents() {
    this.startBtn.addEventListener("click", () => this.toggle());
    this.clearBtn.addEventListener("click", () => this.reset());
  }

  toggle() {
    if (this.running) {
      this.pause();
    } else {
      this.start();
    }
  }

  start() {
    this.running = true;
    this.startBtn.textContent = "Pause";
    this.startBtn.setAttribute("aria-label", "Pause stopwatch");

    this.startTime = performance.now() - this.elapsed;

    this.timerId = setInterval(() => {
      this.elapsed = performance.now() - this.startTime;
      this.render(this.elapsed);
    }, 10);
  }

  pause() {
    this.running = false;
    this.startBtn.textContent = "Resume";
    this.startBtn.setAttribute("aria-label", "Resume stopwatch");

    clearInterval(this.timerId);
  }

  reset() {
    this.running = false;
    clearInterval(this.timerId);

    this.elapsed = 0;
    this.startBtn.textContent = "Start";
    this.startBtn.setAttribute("aria-label", "Start stopwatch");

    this.render(0);
  }

  render(ms) {
    const totalMilliseconds = Math.floor(ms);

    const hours = Math.floor(totalMilliseconds / 3600000);
    const minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = totalMilliseconds % 1000;

    this.displayMain.textContent =
      `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;

    this.displayMs.textContent =
      milliseconds.toString().padStart(3, "0");
  }

  pad(value) {
    return value.toString().padStart(2, "0");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const stopwatch = new Stopwatch(
    document.getElementById("timeMain"),
    document.getElementById("timeMs"),
    document.getElementById("startBtn"),
    document.getElementById("clearBtn")
  );
});
