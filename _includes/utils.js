// Borrowed from https://github.com/moment/moment-timezone/issues/167
// Adds support for time zones 'UTC-12'..'UTC+12'
function addUtcTimeZones() {
  // Moment.js uses the IANA timezone database, which supports generic time zones like 'Etc/GMT+1'.
  // However, the signs for these time zones are inverted compared to ISO 8601.
  // For more details, see https://github.com/moment/moment-timezone/issues/167
  for (let offset = -12; offset <= 12; offset++) {
    const posixSign = offset <= 0 ? "+" : "-";
    const isoSign = offset >= 0 ? "+" : "-";
    const link = `Etc/GMT${posixSign}${Math.abs(
      offset
    )}|UTC${isoSign}${Math.abs(offset)}`;
    moment.tz.link(link);
  }
}
function update_filtering(data) {
  store.set("{{site.domain}}-subs", data.subs);
  store.set("{{site.domain}}-rankings", data.rankings);

  $(".confItem").hide();
  for (const i in data.all_rankings) {
    const r = data.all_rankings[i];
    const ranking_active = data.rankings.includes(r);
    for (const j in data.all_subs) {
      const s = data.all_subs[j];
      const sub_active = data.subs.includes(s);

      const identifier = "." + s + "-conf." + r + "-ranking";
      if (ranking_active && sub_active) {
        $(identifier).show();
      }
    }
  }

  if (rankings.length == 0) {
    if (subs.length == 0) {
      window.history.pushState("", "", "{{site.baseurl}}");
    } else {
      window.history.pushState(
        "",
        "",
        "{{site.baseurl}}/?sub=" + data.subs.join()
      );
    }
  } else {
    if (subs.length == 0) {
      window.history.pushState(
        "",
        "",
        "{{site.baseurl}}/" + "?ranking=" + data.rankings.join()
      );
    } else {
      window.history.pushState(
        "",
        "",
        "{{site.baseurl}}/?sub=" +
          data.subs.join() +
          "&ranking=" +
          data.rankings.join()
      );
    }
  }
}

function createCalendarFromObject(data) {
  return createCalendar({
    options: {
      class: "calendar-obj",

      // You can pass an ID. If you don't, one will be generated for you
      id: data.id,
    },
    data: {
      // Event title
      title: data.title,

      // Event start date
      start: data.date,

      // Event duration
      duration: 60,
    },
  });
}
