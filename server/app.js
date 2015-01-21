var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var morgan = require('morgan');
var _ = require("lodash");
var port = process.env.PORT || 9000;
var rootPath = path.normalize(__dirname + '/..');
/*

var items = [
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-86"
		},
		"title": "Milan 2, Italy",
		"description": "IP: 95.141.32.46; Hostname: s470.pingdom.com; State: Active; Country: Italy; City: Milan",
		"ip": {
			"#channel": "95.141.32.46"
		},
		"hostname": {
			"#channel": "s470.pingdom.com"
		},
		"country": {
			"@code": "IT",
			"#channel": "Italy"
		},
		"city": {
			"#channel": "Milan"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-85"
		},
		"title": "Amsterdam, Netherlands",
		"description": "IP: 95.211.217.68; Hostname: s469.pingdom.com; State: Active; Country: Netherlands; City: Amsterdam",
		"ip": {
			"#channel": "95.211.217.68"
		},
		"hostname": {
			"#channel": "s469.pingdom.com"
		},
		"country": {
			"@code": "NL",
			"#channel": "Netherlands"
		},
		"city": {
			"#channel": "Amsterdam"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-84"
		},
		"title": "Leiria, Portugal",
		"description": "IP: 91.109.115.41; Hostname: s468.pingdom.com; State: Active; Country: Portugal; City: Leiria",
		"ip": {
			"#channel": "91.109.115.41"
		},
		"hostname": {
			"#channel": "s468.pingdom.com"
		},
		"country": {
			"@code": "PT",
			"#channel": "Portugal"
		},
		"city": {
			"#channel": "Leiria"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-83"
		},
		"title": "London, UK",
		"description": "IP: 83.170.113.210; Hostname: s466.pingdom.com; State: Active; Country: United Kingdom; City: London",
		"ip": {
			"#channel": "83.170.113.210"
		},
		"hostname": {
			"#channel": "s466.pingdom.com"
		},
		"country": {
			"@code": "GB",
			"#channel": "United Kingdom"
		},
		"city": {
			"#channel": "London"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-82"
		},
		"title": "Strasbourg 4, France",
		"description": "IP: 188.138.118.144; Hostname: s465.pingdom.com; State: Active; Country: France; City: Strasbourg",
		"ip": {
			"#channel": "188.138.118.144"
		},
		"hostname": {
			"#channel": "s465.pingdom.com"
		},
		"country": {
			"@code": "FR",
			"#channel": "France"
		},
		"city": {
			"#channel": "Strasbourg"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-81"
		},
		"title": "Charlotte 2, NC",
		"description": "IP: 174.34.224.167; Hostname: s464.pingdom.com; State: Inactive; Country: United States; City: Charlotte",
		"ip": {
			"#channel": "174.34.224.167"
		},
		"hostname": {
			"#channel": "s464.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Charlotte"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-80"
		},
		"title": "Las Vegas 5, NV",
		"description": "IP: 72.46.140.106; Hostname: s462.pingdom.com; State: Active; Country: United States; City: Las Vegas",
		"ip": {
			"#channel": "72.46.140.106"
		},
		"hostname": {
			"#channel": "s462.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Las Vegas"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-79"
		},
		"title": "Philadelphia 2, PA",
		"description": "IP: 76.72.172.208; Hostname: s460.pingdom.com; State: Active; Country: United States; City: Philadelphia",
		"ip": {
			"#channel": "76.72.172.208"
		},
		"hostname": {
			"#channel": "s460.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Philadelphia"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-78"
		},
		"title": "Toronto 5, Canada",
		"description": "IP: 184.75.210.226; Hostname: s459.pingdom.com; State: Active; Country: Canada; City: Toronto",
		"ip": {
			"#channel": "184.75.210.226"
		},
		"hostname": {
			"#channel": "s459.pingdom.com"
		},
		"country": {
			"@code": "CA",
			"#channel": "Canada"
		},
		"city": {
			"#channel": "Toronto"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-77"
		},
		"title": "Paris, France",
		"description": "IP: 78.40.124.16; Hostname: s458.pingdom.com; State: Active; Country: France; City: Paris",
		"ip": {
			"#channel": "78.40.124.16"
		},
		"hostname": {
			"#channel": "s458.pingdom.com"
		},
		"country": {
			"@code": "FR",
			"#channel": "France"
		},
		"city": {
			"#channel": "Paris"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-76"
		},
		"title": "Montreal, Canada",
		"description": "IP: 67.205.67.76; Hostname: s457.pingdom.com; State: Active; Country: Canada; City: Montreal",
		"ip": {
			"#channel": "67.205.67.76"
		},
		"hostname": {
			"#channel": "s457.pingdom.com"
		},
		"country": {
			"@code": "CA",
			"#channel": "Canada"
		},
		"city": {
			"#channel": "Montreal"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-75"
		},
		"title": "Strasbourg 2, France",
		"description": "IP: 188.138.118.184; Hostname: s456.pingdom.com; State: Active; Country: France; City: Strasbourg",
		"ip": {
			"#channel": "188.138.118.184"
		},
		"hostname": {
			"#channel": "s456.pingdom.com"
		},
		"country": {
			"@code": "FR",
			"#channel": "France"
		},
		"city": {
			"#channel": "Strasbourg"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-74"
		},
		"title": "Strasbourg 3, France",
		"description": "IP: 188.138.124.110; Hostname: s455.pingdom.com; State: Active; Country: France; City: Strasbourg",
		"ip": {
			"#channel": "188.138.124.110"
		},
		"hostname": {
			"#channel": "s455.pingdom.com"
		},
		"country": {
			"@code": "FR",
			"#channel": "France"
		},
		"city": {
			"#channel": "Strasbourg"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-73"
		},
		"title": "Amsterdam 5, Netherlands",
		"description": "IP: 85.17.156.99; Hostname: s454.pingdom.com; State: Active; Country: Netherlands; City: Amsterdam",
		"ip": {
			"#channel": "85.17.156.99"
		},
		"hostname": {
			"#channel": "s454.pingdom.com"
		},
		"country": {
			"@code": "NL",
			"#channel": "Netherlands"
		},
		"city": {
			"#channel": "Amsterdam"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-72"
		},
		"title": "Amsterdam 4, Netherlands",
		"description": "IP: 85.17.156.11; Hostname: s453.pingdom.com; State: Active; Country: Netherlands; City: Amsterdam",
		"ip": {
			"#channel": "85.17.156.11"
		},
		"hostname": {
			"#channel": "s453.pingdom.com"
		},
		"country": {
			"@code": "NL",
			"#channel": "Netherlands"
		},
		"city": {
			"#channel": "Amsterdam"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-71"
		},
		"title": "Amsterdam 3, Netherlands",
		"description": "IP: 85.17.156.76; Hostname: s452.pingdom.com; State: Active; Country: Netherlands; City: Amsterdam",
		"ip": {
			"#channel": "85.17.156.76"
		},
		"hostname": {
			"#channel": "s452.pingdom.com"
		},
		"country": {
			"@code": "NL",
			"#channel": "Netherlands"
		},
		"city": {
			"#channel": "Amsterdam"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-70"
		},
		"title": "Las Vegas 4, NV",
		"description": "IP: 72.46.153.26; Hostname: s451.pingdom.com; State: Active; Country: United States; City: Las Vegas",
		"ip": {
			"#channel": "72.46.153.26"
		},
		"hostname": {
			"#channel": "s451.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Las Vegas"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-69"
		},
		"title": "Las Vegas 3, NV",
		"description": "IP: 208.64.28.194; Hostname: s450.pingdom.com; State: Active; Country: United States; City: Las Vegas",
		"ip": {
			"#channel": "208.64.28.194"
		},
		"hostname": {
			"#channel": "s450.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Las Vegas"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-68"
		},
		"title": "Las Vegas 2, NV",
		"description": "IP: 76.164.194.74; Hostname: s449.pingdom.com; State: Active; Country: United States; City: Las Vegas",
		"ip": {
			"#channel": "76.164.194.74"
		},
		"hostname": {
			"#channel": "s449.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Las Vegas"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-67"
		},
		"title": "Toronto 4, Canada",
		"description": "IP: 184.75.210.90; Hostname: s448.pingdom.com; State: Active; Country: Canada; City: Toronto",
		"ip": {
			"#channel": "184.75.210.90"
		},
		"hostname": {
			"#channel": "s448.pingdom.com"
		},
		"country": {
			"@code": "CA",
			"#channel": "Canada"
		},
		"city": {
			"#channel": "Toronto"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-66"
		},
		"title": "Toronto 3, Canada",
		"description": "IP: 184.75.208.210; Hostname: s447.pingdom.com; State: Active; Country: Canada; City: Toronto",
		"ip": {
			"#channel": "184.75.208.210"
		},
		"hostname": {
			"#channel": "s447.pingdom.com"
		},
		"country": {
			"@code": "CA",
			"#channel": "Canada"
		},
		"city": {
			"#channel": "Toronto"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-65"
		},
		"title": "Toronto 2, Canada",
		"description": "IP: 184.75.209.18; Hostname: s446.pingdom.com; State: Active; Country: Canada; City: Toronto",
		"ip": {
			"#channel": "184.75.209.18"
		},
		"hostname": {
			"#channel": "s446.pingdom.com"
		},
		"country": {
			"@code": "CA",
			"#channel": "Canada"
		},
		"city": {
			"#channel": "Toronto"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-64"
		},
		"title": "Frankfurt 2, Germany",
		"description": "IP: 46.165.195.139; Hostname: s445.pingdom.com; State: Active; Country: Germany; City: Frankfurt",
		"ip": {
			"#channel": "46.165.195.139"
		},
		"hostname": {
			"#channel": "s445.pingdom.com"
		},
		"country": {
			"@code": "DE",
			"#channel": "Germany"
		},
		"city": {
			"#channel": "Frankfurt"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-63"
		},
		"title": "Portland, OR",
		"description": "IP: 199.87.228.66; Hostname: s444.pingdom.com; State: Active; Country: United States; City: Portland",
		"ip": {
			"#channel": "199.87.228.66"
		},
		"hostname": {
			"#channel": "s444.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Portland"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-62"
		},
		"title": "Philadelphia, PA",
		"description": "IP: 76.72.167.90; Hostname: s443.pingdom.com; State: Active; Country: United States; City: Philadelphia",
		"ip": {
			"#channel": "76.72.167.90"
		},
		"hostname": {
			"#channel": "s443.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Philadelphia"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-61"
		},
		"title": "Falkenberg, Sweden",
		"description": "IP: 94.247.174.83; Hostname: s442.pingdom.com; State: Active; Country: Sweden; City: Falkenberg",
		"ip": {
			"#channel": "94.247.174.83"
		},
		"hostname": {
			"#channel": "s442.pingdom.com"
		},
		"country": {
			"@code": "SE",
			"#channel": "Sweden"
		},
		"city": {
			"#channel": "Falkenberg"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-60"
		},
		"title": "St. Louis, MO",
		"description": "IP: 69.64.56.47; Hostname: s441.pingdom.com; State: Active; Country: United States; City: St. Louis",
		"ip": {
			"#channel": "69.64.56.47"
		},
		"hostname": {
			"#channel": "s441.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "St. Louis"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-58"
		},
		"title": "Toronto, Canada",
		"description": "IP: 184.75.210.186; Hostname: s439.pingdom.com; State: Active; Country: Canada; City: Toronto",
		"ip": {
			"#channel": "184.75.210.186"
		},
		"hostname": {
			"#channel": "s439.pingdom.com"
		},
		"country": {
			"@code": "CA",
			"#channel": "Canada"
		},
		"city": {
			"#channel": "Toronto"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-57"
		},
		"title": "Phoenix, AZ",
		"description": "IP: 108.62.115.226; Hostname: s435.pingdom.com; State: Active; Country: United States; City: Phoenix",
		"ip": {
			"#channel": "108.62.115.226"
		},
		"hostname": {
			"#channel": "s435.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Phoenix"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-56"
		},
		"title": "Lisbon, Portugal",
		"description": "IP: 94.46.4.1; Hostname: s434.pingdom.com; State: Active; Country: Portugal; City: Lisbon",
		"ip": {
			"#channel": "94.46.4.1"
		},
		"hostname": {
			"#channel": "s434.pingdom.com"
		},
		"country": {
			"@code": "PT",
			"#channel": "Portugal"
		},
		"city": {
			"#channel": "Lisbon"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-55"
		},
		"title": "Dusseldorf, Germany",
		"description": "IP: 46.20.45.18; Hostname: s433.pingdom.com; State: Active; Country: Germany; City: Dusseldorf",
		"ip": {
			"#channel": "46.20.45.18"
		},
		"hostname": {
			"#channel": "s433.pingdom.com"
		},
		"country": {
			"@code": "DE",
			"#channel": "Germany"
		},
		"city": {
			"#channel": "Dusseldorf"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-54"
		},
		"title": "San Jose, CA",
		"description": "IP: 50.23.94.74; Hostname: s432.pingdom.com; State: Active; Country: United States; City: San Jose",
		"ip": {
			"#channel": "50.23.94.74"
		},
		"hostname": {
			"#channel": "s432.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "San Jose"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-53"
		},
		"title": "Calgary, Canada",
		"description": "IP: 64.141.100.136; Hostname: s431.pingdom.com; State: Inactive; Country: Canada; City: Calgary",
		"ip": {
			"#channel": "64.141.100.136"
		},
		"hostname": {
			"#channel": "s431.pingdom.com"
		},
		"country": {
			"@code": "CA",
			"#channel": "Canada"
		},
		"city": {
			"#channel": "Calgary"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-52"
		},
		"title": "Charlotte, NC",
		"description": "IP: 69.59.28.19; Hostname: s430.pingdom.com; State: Active; Country: United States; City: Charlotte",
		"ip": {
			"#channel": "69.59.28.19"
		},
		"hostname": {
			"#channel": "s430.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Charlotte"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-51"
		},
		"title": "Prague, Czech Republic",
		"description": "IP: 178.255.154.2; Hostname: s429.pingdom.com; State: Active; Country: Czech Republic; City: Prague",
		"ip": {
			"#channel": "178.255.154.2"
		},
		"hostname": {
			"#channel": "s429.pingdom.com"
		},
		"country": {
			"@code": "CZ",
			"#channel": "Czech Republic"
		},
		"city": {
			"#channel": "Prague"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-50"
		},
		"title": "Zurich, Switzerland",
		"description": "IP: 178.255.153.2; Hostname: s428.pingdom.com; State: Active; Country: Switzerland; City: Zurich",
		"ip": {
			"#channel": "178.255.153.2"
		},
		"hostname": {
			"#channel": "s428.pingdom.com"
		},
		"country": {
			"@code": "CH",
			"#channel": "Switzerland"
		},
		"city": {
			"#channel": "Zurich"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-49"
		},
		"title": "Milan, Italy",
		"description": "IP: 178.255.155.2; Hostname: s427.pingdom.com; State: Active; Country: Italy; City: Milan",
		"ip": {
			"#channel": "178.255.155.2"
		},
		"hostname": {
			"#channel": "s427.pingdom.com"
		},
		"country": {
			"@code": "IT",
			"#channel": "Italy"
		},
		"city": {
			"#channel": "Milan"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-48"
		},
		"title": "Newark, NJ",
		"description": "IP: 64.237.55.3; Hostname: s426.pingdom.com; State: Active; Country: United States; City: Newark",
		"ip": {
			"#channel": "64.237.55.3"
		},
		"hostname": {
			"#channel": "s426.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Newark"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-47"
		},
		"title": "Vienna, Austria",
		"description": "IP: 178.255.152.2; Hostname: s425.pingdom.com; State: Active; Country: Austria; City: Vienna",
		"ip": {
			"#channel": "178.255.152.2"
		},
		"hostname": {
			"#channel": "s425.pingdom.com"
		},
		"country": {
			"@code": "AT",
			"#channel": "Austria"
		},
		"city": {
			"#channel": "Vienna"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-46"
		},
		"title": "Manchester, UK",
		"description": "IP: 212.84.74.156; Hostname: s424.pingdom.com; State: Inactive; Country: United Kingdom; City: Manchester",
		"ip": {
			"#channel": "212.84.74.156"
		},
		"hostname": {
			"#channel": "s424.pingdom.com"
		},
		"country": {
			"@code": "GB",
			"#channel": "United Kingdom"
		},
		"city": {
			"#channel": "Manchester"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-44"
		},
		"title": "San Francisco, CA",
		"description": "IP: 173.204.85.217; Hostname: s422.pingdom.com; State: Inactive; Country: United States; City: San Francisco",
		"ip": {
			"#channel": "173.204.85.217"
		},
		"hostname": {
			"#channel": "s422.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "San Francisco"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-43"
		},
		"title": "Denver, CO",
		"description": "IP: 173.248.147.18; Hostname: s421.pingdom.com; State: Active; Country: United States; City: Denver",
		"ip": {
			"#channel": "173.248.147.18"
		},
		"hostname": {
			"#channel": "s421.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Denver"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-42"
		},
		"title": "Las Vegas, NV",
		"description": "IP: 72.46.130.42; Hostname: s420.pingdom.com; State: Active; Country: United States; City: Las Vegas",
		"ip": {
			"#channel": "72.46.130.42"
		},
		"hostname": {
			"#channel": "s420.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Las Vegas"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-41"
		},
		"title": "Madrid, Spain",
		"description": "IP: 94.46.240.121; Hostname: s419.pingdom.com; State: Active; Country: Spain; City: Madrid",
		"ip": {
			"#channel": "94.46.240.121"
		},
		"hostname": {
			"#channel": "s419.pingdom.com"
		},
		"country": {
			"@code": "ES",
			"#channel": "Spain"
		},
		"city": {
			"#channel": "Madrid"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-40"
		},
		"title": "Washington, DC",
		"description": "IP: 208.43.68.59; Hostname: s418.pingdom.com; State: Active; Country: United States; City: Washington",
		"ip": {
			"#channel": "208.43.68.59"
		},
		"hostname": {
			"#channel": "s418.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Washington"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-39"
		},
		"title": "Seattle, WA",
		"description": "IP: 67.228.213.178; Hostname: s417.pingdom.com; State: Active; Country: United States; City: Seattle",
		"ip": {
			"#channel": "67.228.213.178"
		},
		"hostname": {
			"#channel": "s417.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Seattle"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-38"
		},
		"title": "Tampa, FL",
		"description": "IP: 96.31.66.245; Hostname: s415.pingdom.com; State: Active; Country: United States; City: Tampa",
		"ip": {
			"#channel": "96.31.66.245"
		},
		"hostname": {
			"#channel": "s415.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Tampa"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-37"
		},
		"title": "Copenhagen, Denmark",
		"description": "IP: 82.103.128.63; Hostname: s416.pingdom.com; State: Active; Country: Denmark; City: Copenhagen",
		"ip": {
			"#channel": "82.103.128.63"
		},
		"hostname": {
			"#channel": "s416.pingdom.com"
		},
		"country": {
			"@code": "DK",
			"#channel": "Denmark"
		},
		"city": {
			"#channel": "Copenhagen"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-36"
		},
		"title": "Chicago, IL",
		"description": "IP: 174.34.156.130; Hostname: s414.pingdom.com; State: Active; Country: United States; City: Chicago",
		"ip": {
			"#channel": "174.34.156.130"
		},
		"hostname": {
			"#channel": "s414.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Chicago"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-35"
		},
		"title": "New York, NY",
		"description": "IP: 70.32.40.2; Hostname: s413.pingdom.com; State: Active; Country: United States; City: New York",
		"ip": {
			"#channel": "70.32.40.2"
		},
		"hostname": {
			"#channel": "s413.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "New York"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-34"
		},
		"title": "Atlanta, GA",
		"description": "IP: 174.34.162.242; Hostname: s412.pingdom.com; State: Active; Country: United States; City: Atlanta",
		"ip": {
			"#channel": "174.34.162.242"
		},
		"hostname": {
			"#channel": "s412.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Atlanta"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-33"
		},
		"title": "Strasbourg, France",
		"description": "IP: 85.25.176.167; Hostname: s411.pingdom.com; State: Active; Country: France; City: Strasbourg",
		"ip": {
			"#channel": "85.25.176.167"
		},
		"hostname": {
			"#channel": "s411.pingdom.com"
		},
		"country": {
			"@code": "FR",
			"#channel": "France"
		},
		"city": {
			"#channel": "Strasbourg"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-32"
		},
		"title": "Los Angeles, CA",
		"description": "IP: 204.152.200.42; Hostname: s410.pingdom.com; State: Active; Country: United States; City: Los Angeles",
		"ip": {
			"#channel": "204.152.200.42"
		},
		"hostname": {
			"#channel": "s410.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "United States"
		},
		"city": {
			"#channel": "Los Angeles"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-28"
		},
		"title": "Amsterdam 2, Netherlands",
		"description": "IP: 95.211.87.85; Hostname: s406.pingdom.com; State: Active; Country: Netherlands; City: Amsterdam",
		"ip": {
			"#channel": "95.211.87.85"
		},
		"hostname": {
			"#channel": "s406.pingdom.com"
		},
		"country": {
			"@code": "NL",
			"#channel": "Netherlands"
		},
		"city": {
			"#channel": "Amsterdam"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-13"
		},
		"title": "Stockholm",
		"description": "IP: 5.178.78.77; Hostname: s486.pingdom.com; State: Inactive; Country: Sweden; City: Stockholm",
		"ip": {
			"#channel": "5.178.78.77"
		},
		"hostname": {
			"#channel": "s486.pingdom.com"
		},
		"country": {
			"@code": "SE",
			"#channel": "Sweden"
		},
		"city": {
			"#channel": "Stockholm"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-12"
		},
		"title": "Washington",
		"description": "IP: 207.244.80.239; Hostname: s485.pingdom.com; State: Inactive; Country: USA; City: Washington",
		"ip": {
			"#channel": "207.244.80.239"
		},
		"hostname": {
			"#channel": "s485.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "USA"
		},
		"city": {
			"#channel": "Washington"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-11"
		},
		"title": "London",
		"description": "IP: 159.8.146.132; Hostname: s484.pingdom.com; State: Inactive; Country: United Kingdom; City: London",
		"ip": {
			"#channel": "159.8.146.132"
		},
		"hostname": {
			"#channel": "s484.pingdom.com"
		},
		"country": {
			"@code": "UK",
			"#channel": "United Kingdom"
		},
		"city": {
			"#channel": "London"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-10"
		},
		"title": "Dallas",
		"description": "IP: 50.22.90.227; Hostname: s483.pingdom.com; State: Inactive; Country: USA; City: Dallas",
		"ip": {
			"#channel": "50.22.90.227"
		},
		"hostname": {
			"#channel": "s483.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "USA"
		},
		"city": {
			"#channel": "Dallas"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-9"
		},
		"title": "St Louis",
		"description": "IP: 69.64.56.153; Hostname: s482.pingdom.com; State: Inactive; Country: USA; City: St Louis",
		"ip": {
			"#channel": "69.64.56.153"
		},
		"hostname": {
			"#channel": "s482.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "USA"
		},
		"city": {
			"#channel": "St Louis"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-8"
		},
		"title": "Frankfurt",
		"description": "IP: 188.138.40.20; Hostname: s481.pingdom.com; State: Inactive; Country: Germany; City: Frankfurt",
		"ip": {
			"#channel": "188.138.40.20"
		},
		"hostname": {
			"#channel": "s481.pingdom.com"
		},
		"country": {
			"@code": "DE",
			"#channel": "Germany"
		},
		"city": {
			"#channel": "Frankfurt"
		},
		"state": {
			"#channel": "Inactive"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-6"
		},
		"title": "Seattle",
		"description": "IP: 64.120.6.122; Hostname: s461.pingdom.com; State: Active; Country: USA; City: Seattle",
		"ip": {
			"#channel": "64.120.6.122"
		},
		"hostname": {
			"#channel": "s461.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "USA"
		},
		"city": {
			"#channel": "Seattle"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-5"
		},
		"title": "Milan",
		"description": "IP: 158.58.173.160; Hostname: s471.pingdom.com; State: Active; Country: Italy; City: Milan",
		"ip": {
			"#channel": "158.58.173.160"
		},
		"hostname": {
			"#channel": "s471.pingdom.com"
		},
		"country": {
			"@code": "IT",
			"#channel": "Italy"
		},
		"city": {
			"#channel": "Milan"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-4"
		},
		"title": "Philadelphia",
		"description": "IP: 76.72.171.180; Hostname: s477.pingdom.com; State: Active; Country: USA; City: Philadelphia",
		"ip": {
			"#channel": "76.72.171.180"
		},
		"hostname": {
			"#channel": "s477.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "USA"
		},
		"city": {
			"#channel": "Philadelphia"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-3"
		},
		"title": "Las Vegas",
		"description": "IP: 72.46.140.186; Hostname: s476.pingdom.com; State: Active; Country: USA; City: Las Vegas",
		"ip": {
			"#channel": "72.46.140.186"
		},
		"hostname": {
			"#channel": "s476.pingdom.com"
		},
		"country": {
			"@code": "US",
			"#channel": "USA"
		},
		"city": {
			"#channel": "Las Vegas"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-2"
		},
		"title": "Düsseldorf",
		"description": "IP: 78.31.69.179; Hostname: s475.pingdom.com; State: Active; Country: Germany; City: Düsseldorf",
		"ip": {
			"#channel": "78.31.69.179"
		},
		"hostname": {
			"#channel": "s475.pingdom.com"
		},
		"country": {
			"@code": "DE",
			"#channel": "Germany"
		},
		"city": {
			"#channel": "Düsseldorf"
		},
		"state": {
			"#channel": "Active"
		}
	},
	{
		"guid": {
			"@isPermaLink": "false",
			"#channel": "pingdom-probe-1"
		},
		"title": "Amsterdam",
		"description": "IP: 95.211.198.87; Hostname: s474.pingdom.com; State: Active; Country: Netherlands; City: Amsterdam",
		"ip": {
			"#channel": "95.211.198.87"
		},
		"hostname": {
			"#channel": "s474.pingdom.com"
		},
		"country": {
			"@code": "NL",
			"#channel": "Netherlands"
		},
		"city": {
			"#channel": "Amsterdam"
		},
		"state": {
			"#channel": "Active"
		}
	}
];
var ips = [];

*/
/*
_.each(items, function(item) {
	ips.push(item["ip"]["#channel"]);
});

*/
var appPath;

var app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

if (app.get("env") === "development") {
	app.use(morgan('dev'));
	app.use(require('connect-livereload')());
	appPath = path.join(rootPath, 'compiled')
}
;

if (app.get("env") === "production") {
	appPath = path.join(rootPath, 'dist');
}

app.use(express.static(appPath));

/*
app.get("/", function(req, res) {
	res.send(ips);
});
*/
app.route('/*')
	.get(function (req, res) {
		res.sendFile(appPath + '/index.html');
	});

app.listen(port, function () {
	console.log('Listening on port ' + port + " in mode: " + app.get("env"));
});