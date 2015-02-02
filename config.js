define(['settings'],
function (Settings) {
  return new Settings({
    //elasticsearch: "http://"+window.location.hostname+":9200",
    datasources: {
      load_test_results: {
        default: true,
        type: 'influxdb',
        url: "<--PROTO-->://<--ADDR-->:<--PORT-->/db/load_test_results",
        username: "<--USER-->",
        password: "<--PASS-->",
      },
      agent_health: {
        type: 'influxdb',
        url: "<--PROTO-->://<--ADDR-->:<--PORT-->/db/agent_health",
        username: "<--USER-->",
        password: "<--PASS-->",
      },
      grafana: {
        grafanaDB: true,
        type: 'influxdb',
        url: "<--PROTO-->://<--ADDR-->:<--PORT-->/db/grafana",
        username: "<--USER-->",
        password: "<--PASS-->",
      }
    },
    default_route: '/dashboard/file/default.json',
    timezoneOffset: null,
    grafana_index: "grafana-dash",
    unsaved_changes_warning: true,
    panel_names: ['text','graphite']
  });
});
