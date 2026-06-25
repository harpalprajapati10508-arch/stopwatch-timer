(function () {
  'use strict';

  // ---- DOM references ----
  const displayEl = document.getElementById('display');
  const startBtn = document.getElementById('startBtn');
  const stopBtn = document.getElementById('stopBtn');
  const resetBtn = document.getElementById('resetBtn');
  const faceEl = document.getElementById('stopwatchFace');
  const statusLabelEl = document.getElementById('statusLabel');

  // ---- State ----
  let timerInterval = null;   // holds the setInterval reference
  let elapsedTime = 0;        // total milliseconds accumulated while paused
  let startTimestamp = 0;     // Date.now() value when the current run started
  let isRunning = false;      // guards against multiple intervals

  const STATUS_LABELS = {
    idle: 'Ready',
    running: 'Running',
    paused: 'Paused'
  };

  /**
   * Converts a millisecond duration into an "HH : MM : SS" string.
   * @param {number} ms - elapsed time in milliseconds
   * @returns {string}
   */
  function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, '0');

    return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
  }

  /**
   * Recalculates the current total elapsed time and writes it to the DOM.
   */
  function updateDisplay() {
    const currentElapsed = isRunning
      ? elapsedTime + (Date.now() - startTimestamp)
      : elapsedTime;

    displayEl.textContent = formatTime(currentElapsed);
  }

  /**
   * Updates the visual state of the dial and status label.
   * @param {'idle'|'running'|'paused'} state
   */
  function setState(state) {
    faceEl.dataset.state = state;
    statusLabelEl.textContent = STATUS_LABELS[state];
  }

  /**
   * Starts (or resumes) the stopwatch.
   * Guarded by isRunning so repeated clicks never create extra intervals.
   */
  function startTimer() {
    if (isRunning) return;

    isRunning = true;
    startTimestamp = Date.now();

    // Update every 250ms for a smooth, lag-free display, while the
    // underlying calculation still resolves to whole-second precision.
    timerInterval = setInterval(updateDisplay, 250);

    startBtn.disabled = true;
    stopBtn.disabled = false;
    setState('running');
  }

  /**
   * Pauses the stopwatch and preserves the elapsed time so far.
   */
  function stopTimer() {
    if (!isRunning) return;

    clearInterval(timerInterval);
    timerInterval = null;

    elapsedTime += Date.now() - startTimestamp;
    isRunning = false;

    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    setState('paused');
  }

  /**
   * Stops the stopwatch completely and resets the elapsed time to zero.
   */
  function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    elapsedTime = 0;
    startTimestamp = 0;

    updateDisplay();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    setState('idle');
  }

  // ---- Event listeners ----
  startBtn.addEventListener('click', startTimer);
  stopBtn.addEventListener('click', stopTimer);
  resetBtn.addEventListener('click', resetTimer);

  // ---- Initial render ----
  updateDisplay();
  setState('idle');
})();
