const NOTE_NAMES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const SCALES = [
  {
    name: "Major",
    alt_names: ["Ionian"],
    intervals: [0, 2, 4, 5, 7, 9, 11, 12],
  },
  {
    name: "Natural Minor",
    alt_names: ["Minor", "Aeolian"],
    intervals: [0, 2, 3, 5, 7, 8, 10, 12],
  },
  { name: "Harmonic Minor", intervals: [0, 2, 3, 5, 7, 8, 11, 12] },
  { name: "Melodic Minor", intervals: [0, 2, 3, 5, 7, 9, 11, 12] },
  { name: "Dorian", intervals: [0, 2, 3, 5, 7, 9, 10, 12] },
  { name: "Phrygian", intervals: [0, 1, 3, 5, 7, 8, 10, 12] },
  { name: "Lydian", intervals: [0, 2, 4, 6, 7, 9, 11, 12] },
  { name: "Mixolydian", intervals: [0, 2, 4, 5, 7, 9, 10, 12] },
  { name: "Locrian", intervals: [0, 1, 3, 5, 6, 8, 10, 12] },
  { name: "Gypsy Minor", intervals: [0, 2, 3, 6, 7, 8, 11, 12] },
  { name: "Whole Tone", intervals: [0, 2, 4, 6, 8, 10, 12] },
  { name: "Major Pentatonic", intervals: [0, 2, 4, 7, 9, 12] },
  { name: "Minor Pentatonic", intervals: [0, 3, 5, 7, 10, 12] },
  { name: "Major Bebop", intervals: [0, 2, 4, 5, 7, 8, 9, 11, 12] },
  { name: "Altered Scale", intervals: [0, 1, 3, 4, 6, 8, 10, 12] },
  { name: "Dorian Bebop", intervals: [0, 2, 3, 4, 5, 7, 9, 10, 12] },
  { name: "Mixolydian Bebop", intervals: [0, 2, 4, 5, 7, 9, 10, 11, 12] },
  {
    name: "Blues Scale",
    alt_names: ["Blues"],
    intervals: [0, 3, 5, 6, 7, 10, 12],
  },
  { name: "Diminished Whole Half", intervals: [0, 2, 3, 5, 6, 8, 9, 11, 12] },
  { name: "Diminished Half Whole", intervals: [0, 1, 3, 4, 6, 7, 9, 10, 12] },
  { name: "Neapolitan Major", intervals: [0, 1, 3, 5, 7, 9, 11, 12] },
  { name: "Hungarian Major", intervals: [0, 3, 4, 6, 7, 9, 10, 12] },
  { name: "Harmonic Major", intervals: [0, 2, 4, 5, 7, 8, 11, 12] },
  { name: "Hungarian Minor", intervals: [0, 2, 3, 6, 7, 8, 11, 12] },
  { name: "Lydian Minor", intervals: [0, 2, 4, 6, 7, 8, 10, 12] },
  { name: "Neapolitan Minor", intervals: [0, 1, 3, 5, 7, 8, 11, 12] },
  { name: "Major Locrian", intervals: [0, 2, 4, 5, 6, 8, 10, 12] },
  { name: "Leading Whole Tone", intervals: [0, 2, 4, 6, 8, 10, 11, 12] },
  { name: "Six Tone Symmetrical", intervals: [0, 1, 4, 5, 8, 9, 11, 12] },
  { name: "Arabian", intervals: [0, 2, 4, 5, 6, 8, 10, 12] },
  { name: "Balinese", intervals: [0, 1, 3, 7, 8, 12] },
  { name: "Byzantine", intervals: [0, 1, 3, 5, 7, 8, 11, 12] },
  { name: "Hungarian Gypsy", intervals: [0, 2, 4, 6, 7, 8, 10, 12] },
  { name: "Persian", intervals: [0, 1, 4, 5, 6, 8, 11, 12] },
  { name: "East Indian Purvi", intervals: [0, 1, 4, 6, 7, 8, 11, 12] },
  { name: "Oriental", intervals: [0, 1, 4, 5, 6, 9, 10, 12] },
  { name: "Double Harmonic", intervals: [0, 1, 4, 5, 7, 8, 11, 12] },
  { name: "Enigmatic", intervals: [0, 1, 4, 6, 8, 10, 11, 12] },
  { name: "Overtone", intervals: [0, 2, 4, 6, 7, 9, 10, 12] },
  { name: "Eight Tone Spanish", intervals: [0, 1, 3, 4, 5, 6, 8, 10, 12] },
  { name: "Prometheus", intervals: [0, 2, 4, 6, 9, 10, 12] },
  { name: "Gagaku Ryo Sen Pou", intervals: [0, 2, 4, 7, 9, 12] },
  { name: "Zokugaku Yo Sen Pou", intervals: [0, 3, 5, 7, 10, 12] },
  { name: "In Sen Pou", intervals: [0, 1, 5, 2, 8, 12] },
  { name: "Okinawa", intervals: [0, 4, 5, 7, 11, 12] },
  { name: "Chromatic", intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
];
// Scale data from https://github.com/fredericcormier/WesternMusicElements

function lookup_scale(scale_type) {
  const scale_type_normalised = scale_type.toLowerCase();
  const scaleIndex = SCALES.findIndex((s) => {
    const found = s.name.toLowerCase() === scale_type_normalised;
    if (found) return true;
    return s.alt_names
      ? s.alt_names.some((n) => n.toLowerCase() === scale_type_normalised)
      : false;
  });
  if (scaleIndex === -1) {
    throw Error("No scale found");
  }
  return SCALES[scaleIndex];
}

function generate_scale_array(root_num, scale_data, length) {
  const out_array = [];
  const scale_len = scale_data.intervals.length;
  let i = 0;
  while (out_array.length < length) {
    if (i > 0 && i % scale_len == 0) {
      root_num = root_num + scale_data.intervals[scale_len - 1];
    } else {
      const note_num = root_num + scale_data.intervals[i % scale_len];
      if (note_num > 127) break;
      else out_array.push(note_num);
    }
    i = i + 1;
  }
  return out_array;
}

/* Generate scale from a root note.
   @param root_num MIDI note number (0-127) where scale will begin.
   @param scale_type String defining scale type (eg, "major", "aeolian" or "neapolitan major"), see class for full list.
   @param[opt] octaves Number of octaves to return, defaults to 1.
   @return Array of MIDI note number
*/

function generate_scale(root_num, scale_type = 1, octaves = 1) {
  if (typeof root_num !== "number" || root_num < 0 || root_num > 127) {
    return null;
  }

  const scale_data = lookup_scale(scale_type);
  if (!scale_data) {
    return null;
  }
  const length =
    octaves * scale_data.intervals.length - (Math.round(octaves) - 1);

  return generate_scale_array(root_num, scale_data, length);
}

/*
   Generate given number of notes of a scale from a root note.
   @param root_num MIDI note number (0-127) where scale will begin.
   @param scale_type String defining scale type (eg, "major", "aeolian" or "neapolitan major"), see class for full list.
   @param length Number of notes to return, defaults to 8.
   @return Array of MIDI note numbers.
*/

function generate_scale_of_length(root_num, scale_type, length) {
  length = length || 8;

  var scale_data = lookup_scale(scale_type);
  if (!scale_data) return null;

  return generate_scale_array(root_num, scale_data, length);
}

/*
   Snap a MIDI note number to the nearest note number in an array.
   @param note_num MIDI note number input (0-127).
   @param snap_array Array of MIDI note numbers to snap to, must be in low to high order.
   @return Adjusted note number.
*/
function snap_note_to_array(note_num, snap_array) {
  let closest = snap_array[0];
  for (let i = 0; i < snap_array.length; i++) {
    if (Math.abs(note_num - snap_array[i]) < Math.abs(note_num - closest)) {
      closest = snap_array[i];
    }
  }
  return closest;
}
/*
   Snap an array of MIDI note numbers to an array of note numbers.
   @param note_nums_array Array of input MIDI note numbers.
   @param snap_array Array of MIDI note numbers to snap to, must be in low to high order.
   @return Array of adjusted note numbers.
*/
function snap_notes_to_array(note_nums_array, snap_array) {
  return note_nums_array.map((n) => snap_note_to_array(n, snap_array));
}
/*
   Return a MIDI note number's note name.
   @param note_num MIDI note number (0-127).
   @param[opt] include_octave Include octave number in return string if set to true.
   @return Name string (eg, "C#3").
*/
function note_num_to_name(note_num, include_octave) {
  let name = NOTE_NAMES[note_num % 12];
  if (include_octave) {
    name = name + Math.floor(note_num / 12 - 2);
  }
  return name;
}
/*
   Return an array of MIDI note numbers' names.
   @param note_nums_array Array of MIDI note numbers.
   @param[opt] include_octave Include octave number in return strings if set to true.
   @return Array of name strings.
*/
function note_nums_to_names(note_nums_array, include_octave) {
  return note_nums_array.map((n) => note_num_to_name(n, include_octave));
}
/*
   Return a MIDI note number's frequency.
   @param note_num MIDI note number (0-127).
   @return Frequency number in Hz.
*/
function note_num_to_freq(note_num) {
  return 13.75 * Math.pow(2, (note_num - 9) / 12);
}
/*
   Return an array of MIDI note numbers' frequencies.
   @param note_nums_array Array of MIDI note numbers.
   @return Array of frequency numbers in Hz.
*/
function note_nums_to_freqs(note_nums_array) {
  return note_nums_array.map(note_num_to_freq);
}
/*
   Return a frequency's nearest MIDI note number.
   @param freq Frequency number in Hz.
   @return MIDI note number (0-127).
*/
function freq_to_note_num(freq) {
  return Math.min(
    Math.max(Math.floor((12 * Math.log(freq / 440.0)) / Math.log(2) + 69.5), 0),
    127
  );
}
/*
   Return an array of frequencies' nearest MIDI note numbers.
   @param freqs_array Array of frequency numbers in Hz.
   @return Array of MIDI note numbers.
*/
function freqs_to_note_nums(freqs_array) {
  return freqs_array.map(freq_to_note_num);
}
/*
   Return the ratio of an interval.
   @param interval Interval in semitones.
   @return Ratio number.
*/
function interval_to_ratio(interval) {
  return Math.pow(2, interval / 12);
}
/*
   Return an array of ratios of intervals.
   @param intervals_array Array of intervals in semitones.
   @return Array of ratio numbers.
*/
function intervals_to_ratios(intervals_array) {
  return intervals_array.map(interval_to_ratio);
}
/*
   Return the interval of a ratio.
   @param ratio Ratio number.
   @return Interval in semitones.
*/
function ratio_to_interval(ratio) {
  return (12 * Math.log(ratio)) / Math.log(2);
}

/*
   Return an array of intervals of ratios.
   @param ratios_array Array of ratio numbers.
   @return Array of intervals in semitones.
*/
function ratios_to_intervals(ratios_array) {
  return ratios_array.map(ratio_to_interval);
}

module.exports = {
  NOTE_NAMES,
  SCALES,
  lookup_scale,
  generate_scale_array,
  generate_scale,
  generate_scale_of_length,
  snap_note_to_array,
  snap_notes_to_array,
  note_num_to_name,
  note_nums_to_names,
  note_num_to_freq,
  note_nums_to_freqs,
  freq_to_note_num,
  freqs_to_note_nums,
  interval_to_ratio,
  intervals_to_ratios,
  ratio_to_interval,
  ratios_to_intervals,
};
