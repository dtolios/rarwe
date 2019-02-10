import { click, fillIn } from "@ember/test-helpers";
import { authenticateSession } from "ember-simple-auth/test-support";

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

export async function loginAs(email) {
  return authenticateSession({ token: "a.signed.jwt", userEmail: email });
}
