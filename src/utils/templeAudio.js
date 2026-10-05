// Web Audio API generator for authentic Kerala temple ambient soundscape
// (Tanpura drone, soft Mohanam raga pentatonic flute tones, and subtle temple bell chimes)
// 100% royalty-free, copyright-free, zero external audio dependency required.

class TempleSoundscape {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.droneGain = null;
    this.melodyTimer = null;
    this.bellTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.isPlaying = true;

    // Smoothly fade in master volume
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.35, this.ctx.currentTime + 2.5);

    // Start soothing drone (D2, A2, D3)
    this.startTanpuraDrone();

    // Start intermittent flute notes (Raga Mohanam: D, E, F#, A, B, D)
    this.startFluteMelody();

    // Start occasional sweet temple bell chime
    this.startBellChimes();
  }

  pause() {
    if (!this.ctx || !this.isPlaying) return;
    this.isPlaying = false;

    // Fade out smoothly
    if (this.masterGain) {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
    }

    if (this.melodyTimer) clearTimeout(this.melodyTimer);
    if (this.bellTimer) clearTimeout(this.bellTimer);
  }

  startTanpuraDrone() {
    if (!this.ctx || !this.isPlaying) return;

    const baseFreqs = [146.83, 220.00, 293.66]; // D3, A3, D4
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.droneGain.connect(this.masterGain);

    baseFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq + (idx * 0.4), this.ctx.currentTime);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);

      osc.connect(gain);
      gain.connect(this.droneGain);
      osc.start();
    });
  }

  playFluteTone(freq, duration = 3.5) {
    if (!this.ctx || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    // Warm low-pass filter to sound like soft bamboo flute (Pullankuzhal)
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(2, now);

    // Soft flute envelope: gentle attack, warm sustain, long release
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.06, now + duration * 0.7);
    gain.gain.linearRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.1);
  }

  playBellChime() {
    if (!this.ctx || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    const freqs = [1174.66, 1760.0, 2349.32]; // D6, A6, D7 high harmonics
    
    freqs.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.03 / (i + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 4.0);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 4.2);
    });
  }

  startFluteMelody() {
    if (!this.isPlaying) return;

    // Raga Mohanam notes (Sa, Ri, Ga, Pa, Dha) in Hz
    const scale = [293.66, 329.63, 369.99, 440.00, 493.88, 587.33, 659.25, 739.99];
    const note = scale[Math.floor(Math.random() * scale.length)];
    const duration = 2.5 + Math.random() * 2.0;

    this.playFluteTone(note, duration);

    const nextDelay = (duration * 1000) + (1000 + Math.random() * 2500);
    this.melodyTimer = setTimeout(() => {
      this.startFluteMelody();
    }, nextDelay);
  }

  startBellChimes() {
    if (!this.isPlaying) return;

    this.playBellChime();

    // Occasional gentle chime every 10-18 seconds
    const nextBell = 10000 + Math.random() * 8000;
    this.bellTimer = setTimeout(() => {
      this.startBellChimes();
    }, nextBell);
  }
}

export const templeSoundscape = new TempleSoundscape();
