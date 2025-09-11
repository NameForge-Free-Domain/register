var registrar = NewRegistrar("none");
var dnsProvider = DnsProvider(NewDnsProvider("cloudflare"));

// Utility: Load all JSON subdomain files for a domain
function getDomainsList(filesPath) {
    var result = [];
    var files = glob.apply(null, [filesPath, true, ".json"]);

    for (var i = 0; i < files.length; i++) {
        var name = files[i]
            .split("/")
            .pop()
            .replace(/\.json$/, "");

        result.push({ name: name, data: require(files[i]) });
    }

    return result;
}

// Root domains available in NameForge
var myDomains = [
    "ara.ct.ws",
    "are-you-on.my-board.org",
    "best.fanclub.rocks",
    "css-js.html-5.me",
    "it-is.my-style.in",
    "its.mydiscussion.net"
];

// Generate DNS for each root domain
myDomains.forEach(function (domainName) {
    var records = [];
    var domains = getDomainsList("./domains/" + domainName);

    for (var sub in domains) {
        var subdomainName = domains[sub].name;
        var data = domains[sub].data;

        // Handle only CNAME records
        if (data.records && data.records.CNAME) {
            // Allow both array or string in JSON
            if (Array.isArray(data.records.CNAME)) {
                data.records.CNAME.forEach(function (target) {
                    records.push(CNAME(subdomainName, target + ".", CF_PROXY_OFF));
                });
            } else {
                records.push(CNAME(subdomainName, data.records.CNAME + ".", CF_PROXY_OFF));
            }
        }
    }

    // Zone update TXT (timestamp)
    records.push(TXT("_zone-updated", "\"" + Date.now().toString() + "\""));

    // Create zone
    D(domainName, registrar, dnsProvider, records, []);
});
