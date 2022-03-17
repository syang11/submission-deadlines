// Get subjects and rankings from URL/Cache
var url = new URL(window.location);
subs = url.searchParams.get('sub');
if (subs == undefined) {
    subs = store.get('{{site.domain}}-subs');
} else {
    subs = subs.toUpperCase().split(',');
}
rankings = url.searchParams.get('ranking');
if (rankings == undefined) {
    rankings = store.get('{{site.domain}}-rankings');
} else {
    rankings = rankings.toUpperCase().split(',');
}

// Apply selections
if (subs == undefined) {
    subs = all_subs;
} 
$("#subject-select").multiselect('select', subs);
if (rankings == undefined) {
    rankings = all_rankings;
}
$("#ranking-select").multiselect('select', rankings);
update_filtering({ subs: subs, all_subs: all_subs, rankings: rankings, all_rankings: all_rankings });
