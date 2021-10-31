
var rankings = [];
var subs = [];
var _all_subs = [];
var _all_rankings = [];
    // Get all subs
    var conf_type_data = {{ site.data.types | jsonify}};
var sub2name = {}; var name2sub = {};
for (var i = 0; i < conf_type_data.length; i++) {
    _all_subs[i] = conf_type_data[i]['sub'];
    sub2name[conf_type_data[i]['sub']] = conf_type_data[i]['name'];
    name2sub[conf_type_data[i]['name']] = conf_type_data[i]['sub'];
}

var conf_ranking_data = {{ site.data.rankings | jsonify}};

for (var i = 0; i < conf_ranking_data.length; i++) {
    _all_rankings[i] = conf_ranking_data[i]['ranking'];
}
const all_subs = _all_subs;
const all_rankings = _all_rankings;
console.log("Subs: " + all_subs);
console.log("Rankings: " + all_rankings);

