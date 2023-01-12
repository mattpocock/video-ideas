interface Data {
  twitterFollowers: number;
  gitHubStars: number;
  youTubeSubscribers: number;
}

const today: Data = {
  gitHubStars: 1241,
  twitterFollowers: 904,
  youTubeSubscribers: 921,
};

const twoWeeksAgo: Data = {
  gitHubStars: 721,
  twitterFollowers: 662,
  youTubeSubscribers: 812,
};

const renderLine = (key: keyof Data) => {
  const todayValue = today[key];
  const twoWeeksAgoValue = twoWeeksAgo[key];
  return `${todayValue} (${todayValue - twoWeeksAgoValue})`;
};

const line = renderLine("twitterFollowers");

// --------------------------------------------------------------

const renderLineInverted = (getter: (data: Data) => number) => {
  const todayValue = getter(today);
  const twoWeeksAgoValue = getter(twoWeeksAgo);
  return `${todayValue} (${todayValue - twoWeeksAgoValue})`;
};

const lineInverted = renderLineInverted((data) => data.twitterFollowers);

// --------------------------------------------------------------

const renderLineInvertedMore = (
  getter: (data: Data) => number,
  render: (opts: { todayValue: number; diff: number }) => string,
) => {
  const todayValue = getter(today);
  const twoWeeksAgoValue = getter(twoWeeksAgo);
  return render({
    todayValue,
    diff: todayValue - twoWeeksAgoValue,
  });
};

const lineInvertedMore = renderLineInvertedMore(
  (data) => data.twitterFollowers,
  ({ todayValue, diff }) => `Twitter Followers: ${todayValue} (${diff})`,
);
