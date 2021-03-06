window.gameBoard = {
	countries: {
		// North America
		"Alaska": {x: 100, y: 100},
		"Alberta": {x: 150, y: 230},
		"Central America": {x: 200, y: 500},
		"Eastern US": {x: 280, y: 370},
		"Greenland": {x: 500, y: 90},
		"Hawaii": {x: 70, y: 460},
		"Northwest Territory": {x: 250, y: 110},
		"Ontario": {x: 280, y: 240},
		"Quebec": {x: 410, y: 250},
		"Western US": {x: 150, y: 360},
		// South America
		"Argentina": {x: 150, y: 940},
		"Brazil": {x: 330, y: 750},
		"Falkland Islands": {x: 400, y: 900},
		"Peru": {x: 200, y: 780},
		"Venezuela": {x: 210, y: 640},
		// Africa
		"Congo": {x: 650, y: 840},
		"East Africa": {x: 770, y: 780},
		"Egypt": {x: 700, y: 670},
		"Madagascar": {x: 880, y: 930},
		"North Africa": {x: 550, y: 700},
		"South Africa": {x: 690, y: 980},
		// Europe
		"Iceland": {x: 570, y: 200},
		"Great Britain": {x: 490, y: 380},
		"Northern Europe": {x: 620, y: 440},
		"Scandinavia": {x: 700, y: 280},
		"Southern Europe": {x: 700, y: 530},
		"Svalbard": {x: 670, y: 120},
		"Ukraine": {x: 790, y: 370},
		"Western Europe": {x: 580, y: 550},
		// Asia
		"Afghanistan": {x: 900, y: 470},
		"China": {x: 1070, y: 470},
		"India": {x: 980, y: 600},
		"Irkutsk": {x: 1170, y: 280},
		"Japan": {x: 1350, y: 460},
		"Kamchatka": {x: 1330, y: 250},
		"Middle East": {x: 830, y: 600},
		"Mongolia": {x: 1170, y: 400},
		"Siam": {x: 1100, y: 650},
		"Siberia": {x: 1070, y: 200},
		"Ural": {x: 950, y: 300},
		"Yakutsk": {x: 1250, y: 150},
		// Australia
		"Eastern Australia": {x: 1230, y: 960},
		"Indonesia": {x: 1100, y: 800},
		"New Guinea": {x: 1250, y: 840},
		"New Zealand": {x: 1360, y: 930},
		"Philippines": {x: 1300, y: 650},
		"Western Australia": {x: 1100, y: 950}
	},
	connections: [
		{from: "Afghanistan", to: "India"},
		{from: "Afghanistan", to: "China"},
		{from: "Afghanistan", to: "Ural"},
		{from: "Alaska", to: "Northwest Territory"},
		{from: "Alaska", to: "Alberta"},
		{from: "Alaska", to: "Kamchatka", wraparound: true},
		{from: "Alberta", to: "Northwest Territory"},
		{from: "Alberta", to: "Ontario"},
		{from: "Alberta", to: "Western US"},
		{from: "Argentina", to: "Peru"},
		{from: "Argentina", to: "Brazil"},
		{from: "Argentina", to: "Falkland Islands"},
		{from: "Argentina", to: "New Zealand", wraparound: true},
		{from: "Brazil", to: "North Africa"},
		{from: "Central America", to: "Eastern US"},
		{from: "Central America", to: "Venezuela"},
		{from: "China", to: "Siam"},
		{from: "China", to: "Siberia"},
		{from: "China", to: "Mongolia"},
		{from: "Congo", to: "East Africa"},
		{from: "Congo", to: "South Africa"},
		{from: "East Africa", to: "Madagascar"},
		{from: "East Africa", to: "Middle East"},
		{from: "Eastern Australia", to: "New Guinea"},
		{from: "Eastern Australia", to: "New Zealand"},
		{from: "Eastern US", to: "Quebec"},
		{from: "Egypt", to: "East Africa"},
		{from: "Egypt", to: "Southern Europe"},
		{from: "Egypt", to: "Middle East"},
		{from: "Falkland Islands", to: "South Africa"},
		{from: "Great Britain", to: "Iceland"},
		{from: "Great Britain", to: "Western Europe"},
		{from: "Great Britain", to: "Northern Europe"},
		{from: "Great Britain", to: "Scandinavia"},
		{from: "Greenland", to: "Iceland"},
		{from: "Greenland", to: "Svalbard"},
		{from: "Hawaii", to: "Western US"},
		{from: "Hawaii", to: "Japan", wraparound: true},
		{from: "Iceland", to: "Scandinavia"},
		{from: "India", to: "China"},
		{from: "India", to: "Siam"},
		{from: "Indonesia", to: "Western Australia"},
		{from: "Indonesia", to: "New Guinea"},
		{from: "Indonesia", to: "Siam"},
		{from: "Indonesia", to: "Philippines"},
		{from: "Irkutsk", to: "Yakutsk"},
		{from: "Irkutsk", to: "Kamchatka"},
		{from: "Kamchatka", to: "Japan"},
		{from: "Middle East", to: "Afghanistan"},
		{from: "Middle East", to: "India"},
		{from: "Mongolia", to: "Irkutsk"},
		{from: "Mongolia", to: "Japan"},
		{from: "Mongolia", to: "Japan"},
		{from: "Mongolia", to: "Kamchatka"},
		{from: "North Africa", to: "Egypt"},
		{from: "North Africa", to: "Congo"},
		{from: "North Africa", to: "Western Europe"},
		{from: "North Africa", to: "Southern Europe"},
		{from: "Northern Europe", to: "Scandinavia"},
		{from: "Northern Europe", to: "Southern Europe"},
		{from: "Northern Europe", to: "Ukraine"},
		{from: "Northwest Territory", to: "Greenland"},
		{from: "Northwest Territory", to: "Ontario"},
		{from: "Ontario", to: "Greenland"},
		{from: "Ontario", to: "Quebec"},
		{from: "Ontario", to: "Eastern US"},
		{from: "Peru", to: "Brazil"},
		{from: "Peru", to: "Venezuela"},
		{from: "Philippines", to: "Japan"},
		{from: "Quebec", to: "Greenland"},
		{from: "Scandinavia", to: "Ukraine"},
		{from: "Siberia", to: "Yakutsk"},
		{from: "Siberia", to: "Irkutsk"},
		{from: "Siberia", to: "Mongolia"},
		{from: "South Africa", to: "East Africa"},
		{from: "South Africa", to: "Madagascar"},
		{from: "Southern Europe", to: "Ukraine"},
		{from: "Southern Europe", to: "Middle East"},
		{from: "Svalbard", to: "Scandinavia"},
		{from: "Ukraine", to: "Middle East"},
		{from: "Ukraine", to: "Ural"},
		{from: "Ukraine", to: "Afghanistan"},
		{from: "Ural", to: "China"},
		{from: "Ural", to: "Siberia"},
		{from: "Venezuela", to: "Brazil"},
		{from: "Western Australia", to: "Eastern Australia"},
		{from: "Western Australia", to: "New Guinea"},
		{from: "Western Europe", to: "Northern Europe"},
		{from: "Western Europe", to: "Southern Europe"},
		{from: "Western US", to: "Ontario"},
		{from: "Western US", to: "Eastern US"},
		{from: "Western US", to: "Central America"},
		{from: "Yakutsk", to: "Kamchatka"}
	],
	continents: {
		"North America": {
			color: "rgb(245, 193, 84)",
			countries: [
				"Alaska",
				"Alberta",
				"Central America",
				"Eastern US",
				"Greenland",
				"Hawaii",
				"Northwest Territory",
				"Ontario",
				"Quebec",
				"Western US"
			]
		},
		"South America": {
			color: "rgb(18, 164, 170)",
			countries: [
				"Argentina",
				"Brazil",
				"Falkland Islands",
				"Peru",
				"Venezuela"
			]
		},
		"Africa": {
			color: "rgb(139, 49, 49)",
			countries: [
				"Congo",
				"East Africa",
				"Egypt",
				"Madagascar",
				"North Africa",
				"South Africa"
			]
		},
		"Europe": {
			color: "rgb(30, 126, 248)",
			countries: [
				"Svalbard",
				"Iceland",
				"Great Britain",
				"Western Europe",
				"Northern Europe",
				"Southern Europe",
				"Ukraine",
				"Scandinavia"
			]
		},
		"Asia": {
			color: "rgb(17, 99, 17)",
			countries: [
				"Middle East",
				"Afghanistan",
				"India",
				"China",
				"Siam",
				"Ural",
				"Siberia",
				"Irkutsk",
				"Mongolia",
				"Yakutsk",
				"Japan",
				"Kamchatka"
			]
		},
		"Australia": {
			color: "rgb(223, 70, 223)",
			countries: [
				"Philippines",
				"New Zealand",
				"Indonesia",
				"New Guinea",
				"Western Australia",
				"Eastern Australia"
			]
		}
	}
};
