import { pageFixture } from "../hooks/pageFixture";

export const pause = async () => {
  await pageFixture.page.pause();
};
