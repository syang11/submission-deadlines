var options = {
  data: {{ site.data.conferences | jsonify }},
  getValue: function (element) {
    return element.title + " " + element.year;
  },

  template: {
    type: "description",
    fields: {
      description: "sub",
    },
  },
  list: {
    maxNumberOfElements: 5,
    match: {
      enabled: true,
    },
    sort: {
      enabled: true,
    },
    onChooseEvent: function () {
      var selectedItemData = $("#search_bar").getSelectedItemData();
      window.location.href =
        window.location.origin + "/conference/?id=" + selectedItemData.id;
    },
  },
};

$(function () {
  $("#search_bar").easyAutocomplete(options);
});
