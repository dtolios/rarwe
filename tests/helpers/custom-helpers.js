import { click, fillIn } from "@ember/test-helpers";

export async function createBand(name) {
  await click("[data-test-rr=new-band-label]");
  await fillIn("[data-test-rr=new-band-input]", name);
  return click("[data-test-rr=new-band-button]");
}

export async function createSong(title) {
  await click("[data-test-rr=new-song-label]");
  await fillIn("[data-test-rr=new-song-input]", title);
  return click("[data-test-rr=new-song-button");
}
