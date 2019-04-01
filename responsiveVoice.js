if (typeof rvAgentPlayer !== 'undefined') {
	throw new Error('ResponsiveVoice Website Agent is already running');
}
var rvAgentPlayer = {
	version: 1
};
if (typeof responsiveVoice === 'undefined') { /* ResponsiveVoice JS v1.5.14 (c) 2015-2019 LearnBrite License: http://responsivevoice.org/license */
	if ("undefined" != typeof responsiveVoice) console.log("ResponsiveVoice already loaded"), console.log(responsiveVoice);
	else var ResponsiveVoice = function () {
		function p(a) {
			a = a.replace(/([\n\r])+/gm, "\n");
			for (var b = /([,.:!\u00a1?\u00bf;()\[\]\u2014\u00ab\u00bb])+[\n\r]/gm, d = !0; d;) null === a.match(b) ? d = !1 : a = a.replace(b, "$1 ");
			return a
		}
		var a = this;
		a.version = "1.5.14";
		console.log("ResponsiveVoice r" + a.version);
		a.responsivevoices = [{
			name: "UK English Female",
			flag: "gb",
			gender: "f",
			lang: "en-GB",
			voiceIDs: [3, 7, 171, 278, 201, 5, 1, 257, 286, 342, 258, 287, 343, 8]
		}, {
			name: "UK English Male",
			flag: "gb",
			gender: "m",
			lang: "en-GB",
			voiceIDs: [0, 277, 202, 75, 4, 2, 256, 285, 341, 159, 6, 7]
		}, {
			name: "US English Female",
			flag: "us",
			gender: "f",
			lang: "en-US",
			voiceIDs: [39, 40, 41, 42, 383, 205, 204, 43, 173, 235, 283, 339, 408, 44]
		}, {
			name: "US English Male",
			flag: "us",
			gender: "m",
			lang: "en-US",
			voiceIDs: [234, 282, 338, 236, 284, 340, 237, 382, 2, 4, 0, 6, 7, 75, 195, 169]
		}, {
			name: "Arabic Male",
			flag: "ar",
			gender: "m",
			lang: "ar-SA",
			voiceIDs: [96, 95, 97, 196, 388]
		}, {
			name: "Arabic Female",
			flag: "ar",
			gender: "f",
			lang: "ar-SA",
			voiceIDs: [98]
		}, {
			name: "Armenian Male",
			flag: "hy",
			gender: "f",
			lang: "hy-AM",
			voiceIDs: [99]
		}, {
			name: "Australian Female",
			flag: "au",
			gender: "f",
			lang: "en-AU",
			voiceIDs: [276, 201, 87, 5, 88]
		}, {
			name: "Australian Male",
			flag: "au",
			gender: "m",
			lang: "en-AU",
			voiceIDs: [86, 381, 386]
		}, {
			name: "Brazilian Portuguese Female",
			flag: "br",
			gender: "f",
			lang: "pt-BR",
			voiceIDs: [245, 124, 123, 125, 186, 223, 126]
		}, {
			name: "Brazilian Portuguese Male",
			flag: "br",
			gender: "m",
			lang: "pt-BR",
			voiceIDs: [315, 332, 371, 399]
		}, {
			name: "Chinese Female",
			flag: "cn",
			gender: "f",
			lang: "zh-CN",
			voiceIDs: [249, 58, 59, 380, 281, 231, 155, 60, 191, 268, 297, 353, 269, 298, 354, 409, 61]
		}, {
			name: "Chinese Male",
			flag: "cn",
			gender: "m",
			lang: "zh-CN",
			voiceIDs: [317, 334, 373, 389]
		}, {
			name: "Chinese (Hong Kong) Female",
			flag: "hk",
			gender: "f",
			lang: "zh-HK",
			voiceIDs: [192, 193, 232, 250, 251, 270, 299, 355, 409, 252]
		}, {
			name: "Chinese (Hong Kong) Male",
			flag: "hk",
			gender: "m",
			lang: "zh-HK",
			voiceIDs: [318, 335, 374, 390]
		}, {
			name: "Chinese Taiwan Female",
			flag: "tw",
			gender: "f",
			lang: "zh-TW",
			voiceIDs: [194, 233, 253, 254, 305, 322, 361, 384, 319, 336, 375, 409, 255]
		}, {
			name: "Chinese Taiwan Male",
			flag: "tw",
			gender: "m",
			lang: "zh-TW",
			voiceIDs: [320, 337, 376, 391]
		}, {
			name: "Czech Female",
			flag: "cz",
			gender: "f",
			lang: "cs-CZ",
			voiceIDs: [101, 100, 102, 197, 103]
		}, {
			name: "Czech Male",
			flag: "cz",
			gender: "m",
			lang: "cs-CZ",
			voiceIDs: [161]
		}, {
			name: "Danish Female",
			flag: "dk",
			gender: "f",
			lang: "da-DK",
			voiceIDs: [105, 104, 106, 198, 107]
		}, {
			name: "Danish Male",
			flag: "da",
			gender: "m",
			lang: "da-DK",
			voiceIDs: [162]
		}, {
			name: "Deutsch Female",
			flag: "de",
			gender: "f",
			lang: "de-DE",
			voiceIDs: [27, 28, 29, 30, 78, 170, 275, 199, 31, 261, 290, 346, 262, 291, 347, 32]
		}, {
			name: "Deutsch Male",
			flag: "de",
			gender: "m",
			lang: "de-DE",
			voiceIDs: [307, 324, 363, 377, 393]
		}, {
			name: "Dutch Female",
			flag: "nl",
			gender: "f",
			lang: "nl-NL",
			voiceIDs: [243, 219, 84, 157, 158, 184, 45]
		}, {
			name: "Dutch Male",
			flag: "nl",
			gender: "m",
			lang: "nl-NL",
			voiceIDs: [157, 220, 407]
		}, {
			name: "Finnish Female",
			flag: "fi",
			gender: "f",
			lang: "fi-FI",
			voiceIDs: [90, 89, 91, 209, 92]
		}, {
			name: "Finnish Male",
			flag: "fi",
			gender: "m",
			lang: "fi-FI",
			voiceIDs: [160]
		}, {
			name: "French Female",
			flag: "fr",
			gender: "f",
			lang: "fr-FR",
			voiceIDs: [240, 21, 22, 23, 77, 178, 279, 210, 266, 295, 351, 304, 321, 360, 26]
		}, {
			name: "French Male",
			flag: "fr",
			gender: "m",
			lang: "fr-FR",
			voiceIDs: [311, 328, 367, 378, 392]
		}, {
			name: "Greek Female",
			flag: "gr",
			gender: "f",
			lang: "el-GR",
			voiceIDs: [62, 63, 80, 200, 64]
		}, {
			name: "Greek Male",
			flag: "gr",
			gender: "m",
			lang: "el-GR",
			voiceIDs: [163]
		}, {
			name: "Hindi Female",
			flag: "hi",
			gender: "f",
			lang: "hi-IN",
			voiceIDs: [247, 66, 154, 179, 213, 259, 288, 344, 67]
		}, {
			name: "Hindi Male",
			flag: "hi",
			gender: "m",
			lang: "hi-IN",
			voiceIDs: [394]
		}, {
			name: "Hungarian Female",
			flag: "hu",
			gender: "f",
			lang: "hu-HU",
			voiceIDs: [9, 10, 81, 214, 11]
		}, {
			name: "Hungarian Male",
			flag: "hu",
			gender: "m",
			lang: "hu-HU",
			voiceIDs: [164]
		}, {
			name: "Indonesian Female",
			flag: "id",
			gender: "f",
			lang: "id-ID",
			voiceIDs: [241, 111, 112, 180, 215, 113]
		}, {
			name: "Indonesian Male",
			flag: "id",
			gender: "m",
			lang: "id-ID",
			voiceIDs: [395]
		}, {
			name: "Italian Female",
			flag: "it",
			gender: "f",
			lang: "it-IT",
			voiceIDs: [242, 33, 34, 35, 36, 37, 79, 181, 216, 271, 300, 356, 38]
		}, {
			name: "Italian Male",
			flag: "it",
			gender: "m",
			lang: "it-IT",
			voiceIDs: [312, 329, 368, 406]
		}, {
			name: "Japanese Female",
			flag: "jp",
			gender: "f",
			lang: "ja-JP",
			voiceIDs: [248, 50, 51, 280, 217, 52, 153, 182, 273, 302, 358, 274, 303, 359, 53]
		}, {
			name: "Japanese Male",
			flag: "jp",
			gender: "m",
			lang: "ja-JP",
			voiceIDs: [313, 330, 369, 379, 396]
		}, {
			name: "Korean Female",
			flag: "kr",
			gender: "f",
			lang: "ko-KR",
			voiceIDs: [54, 55, 56, 156, 183, 218, 306, 323, 362, 384, 57]
		}, {
			name: "Korean Male",
			flag: "kr",
			gender: "m",
			lang: "ko-KR",
			voiceIDs: [397]
		}, {
			name: "Latin Female",
			flag: "va",
			gender: "f",
			lang: "la",
			voiceIDs: [114],
			deprecated: !0
		}, {
			name: "Latin Male",
			flag: "va",
			gender: "m",
			lang: "la",
			voiceIDs: [165]
		}, {
			name: "Norwegian Female",
			flag: "no",
			gender: "f",
			lang: "nb-NO",
			voiceIDs: [72, 73, 221, 74]
		}, {
			name: "Norwegian Male",
			flag: "no",
			gender: "m",
			lang: "nb-NO",
			voiceIDs: [166]
		}, {
			name: "Polish Female",
			flag: "pl",
			gender: "f",
			lang: "pl-PL",
			voiceIDs: [244, 120, 119, 121, 185, 222, 267, 296, 352, 122]
		}, {
			name: "Polish Male",
			flag: "pl",
			gender: "m",
			lang: "pl-PL",
			voiceIDs: [314, 331, 370, 398]
		}, {
			name: "Portuguese Female",
			flag: "br",
			gender: "f",
			lang: "pt-BR",
			voiceIDs: [128, 127, 129, 187, 224, 272, 301, 357, 130]
		}, {
			name: "Portuguese Male",
			flag: "br",
			gender: "m",
			lang: "pt-BR",
			voiceIDs: [400]
		}, {
			name: "Romanian Female",
			flag: "ro",
			gender: "f",
			lang: "ro-RO",
			voiceIDs: [151, 150, 152, 225, 46]
		}, {
			name: "Russian Female",
			flag: "ru",
			gender: "f",
			lang: "ru-RU",
			voiceIDs: [246, 47, 48, 83, 188, 226, 260, 289, 345, 49]
		}, {
			name: "Russian Male",
			flag: "ru",
			gender: "m",
			lang: "ru-RU",
			voiceIDs: [316, 333, 372, 387]
		}, {
			name: "Slovak Female",
			flag: "sk",
			gender: "f",
			lang: "sk-SK",
			voiceIDs: [133, 132, 134, 227, 135]
		}, {
			name: "Slovak Male",
			flag: "sk",
			gender: "m",
			lang: "sk-SK",
			voiceIDs: [167],
			deprecated: !0
		}, {
			name: "Spanish Female",
			flag: "es",
			gender: "f",
			lang: "es-ES",
			voiceIDs: [19, 238, 16, 17, 18, 20, 76, 174, 207, 263, 292, 348, 264, 293, 349, 15]
		}, {
			name: "Spanish Male",
			flag: "es",
			gender: "m",
			lang: "es-ES",
			voiceIDs: [309, 326, 365, 401]
		}, {
			name: "Spanish Latin American Female",
			flag: "es",
			gender: "f",
			lang: "es-MX",
			voiceIDs: [239, 137, 136, 138, 175, 208, 265, 294, 350, 139]
		}, {
			name: "Spanish Latin American Male",
			flag: "es",
			gender: "m",
			lang: "es-MX",
			voiceIDs: [136, 310, 327, 366, 402]
		}, {
			name: "Swedish Female",
			flag: "sv",
			gender: "f",
			lang: "sv-SE",
			voiceIDs: [85, 149, 228, 65]
		}, {
			name: "Swedish Male",
			flag: "sv",
			gender: "m",
			lang: "sv-SE",
			voiceIDs: [148, 168]
		}, {
			name: "Tamil Male",
			flag: "hi",
			gender: "m",
			lang: "hi-IN",
			voiceIDs: [141]
		}, {
			name: "Thai Female",
			flag: "th",
			gender: "f",
			lang: "th-TH",
			voiceIDs: [143, 142, 144, 189, 229, 145]
		}, {
			name: "Thai Male",
			flag: "th",
			gender: "m",
			lang: "th-TH",
			voiceIDs: [403]
		}, {
			name: "Turkish Female",
			flag: "tr",
			gender: "f",
			lang: "tr-TR",
			voiceIDs: [69, 70, 82, 190, 230, 71]
		}, {
			name: "Turkish Male",
			flag: "tr",
			gender: "m",
			lang: "tr-TR",
			voiceIDs: [404]
		}, {
			name: "Vietnamese Female",
			flag: "vi",
			gender: "f",
			lang: "vi-VN",
			voiceIDs: [405]
		}, {
			name: "Vietnamese Male",
			flag: "vi",
			gender: "m",
			lang: "vi-VN",
			voiceIDs: [146]
		}, {
			name: "Afrikaans Male",
			flag: "af",
			gender: "m",
			lang: "af-ZA",
			voiceIDs: [93]
		}, {
			name: "Albanian Male",
			flag: "sq",
			gender: "m",
			lang: "sq-AL",
			voiceIDs: [94]
		}, {
			name: "Bosnian Male",
			flag: "bs",
			gender: "m",
			lang: "bs",
			voiceIDs: [14]
		}, {
			name: "Catalan Male",
			flag: "catalonia",
			gender: "m",
			lang: "ca-ES",
			voiceIDs: [68]
		}, {
			name: "Croatian Male",
			flag: "hr",
			gender: "m",
			lang: "hr-HR",
			voiceIDs: [13]
		}, {
			name: "Esperanto Male",
			flag: "eo",
			gender: "m",
			lang: "eo",
			voiceIDs: [108]
		}, {
			name: "Icelandic Male",
			flag: "is",
			gender: "m",
			lang: "is-IS",
			voiceIDs: [110]
		}, {
			name: "Latvian Male",
			flag: "lv",
			gender: "m",
			lang: "lv-LV",
			voiceIDs: [115]
		}, {
			name: "Macedonian Male",
			flag: "mk",
			gender: "m",
			lang: "mk-MK",
			voiceIDs: [116]
		}, {
			name: "Moldavian Female",
			flag: "md",
			gender: "f",
			lang: "md",
			voiceIDs: [117]
		}, {
			name: "Moldavian Male",
			flag: "md",
			gender: "m",
			lang: "md",
			voiceIDs: [117],
			deprecated: !0
		}, {
			name: "Montenegrin Male",
			flag: "me",
			gender: "m",
			lang: "me",
			voiceIDs: [118]
		}, {
			name: "Serbian Male",
			flag: "sr",
			gender: "m",
			lang: "sr-RS",
			voiceIDs: [12]
		}, {
			name: "Serbo-Croatian Male",
			flag: "hr",
			gender: "m",
			lang: "hr-HR",
			voiceIDs: [131]
		}, {
			name: "Swahili Male",
			flag: "sw",
			gender: "m",
			lang: "sw-KE",
			voiceIDs: [140]
		}, {
			name: "Welsh Male",
			flag: "cy",
			gender: "m",
			lang: "cy",
			voiceIDs: [147]
		}, {
			name: "Fallback UK Female",
			flag: "gb",
			gender: "f",
			lang: "en-GB",
			voiceIDs: [8]
		}];
		a.voicecollection = [{
			name: "Google UK English Male"
		}, {
			name: "Agnes"
		}, {
			name: "Daniel Compact"
		}, {
			name: "Google UK English Female"
		}, {
			name: "en-GB",
			rate: .25,
			pitch: 1
		}, {
			name: "en-AU",
			rate: .25,
			pitch: 1
		}, {
			name: "ingl\u00e9s Reino Unido"
		}, {
			name: "English United Kingdom"
		}, {
			name: "Fallback en-GB Female",
			lang: "en-GB",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Eszter Compact"
		}, {
			name: "hu-HU",
			rate: .4
		}, {
			name: "Fallback Hungarian Female",
			lang: "hu",
			fallbackvoice: !0,
			service: "g1"
		}, {
			name: "Fallback Serbian Male",
			lang: "sr",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Croatian Male",
			lang: "hr",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Bosnian Male",
			lang: "bs",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Spanish Female",
			lang: "es",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Spanish Spain"
		}, {
			name: "espa\u00f1ol Espa\u00f1a"
		}, {
			name: "Diego Compact",
			rate: .3
		}, {
			name: "Google Espa\u00f1ol"
		}, {
			name: "es-ES",
			rate: .2
		}, {
			name: "Google Fran\u00e7ais"
		}, {
			name: "French France"
		}, {
			name: "franc\u00e9s Francia"
		}, {
			name: "Virginie Compact",
			rate: .5
		}, {
			name: "fr-FR",
			rate: .25
		}, {
			name: "Fallback French Female",
			lang: "fr",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Google Deutsch"
		}, {
			name: "German Germany"
		}, {
			name: "alem\u00e1n Alemania"
		}, {
			name: "Yannick Compact",
			rate: .5
		}, {
			name: "de-DE",
			rate: .25
		}, {
			name: "Fallback Deutsch Female",
			lang: "de",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Google Italiano"
		}, {
			name: "Italian Italy"
		}, {
			name: "italiano Italia"
		}, {
			name: "Paolo Compact",
			rate: .5
		}, {
			name: "it-IT",
			rate: .25
		}, {
			name: "Fallback Italian Female",
			lang: "it",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Google US English",
			timerSpeed: 1
		}, {
			name: "English United States"
		}, {
			name: "ingl\u00e9s Estados Unidos"
		}, {
			name: "Vicki"
		}, {
			name: "en-US",
			rate: .2,
			pitch: 1,
			timerSpeed: 1.3
		}, {
			name: "Fallback US English",
			lang: "en-US",
			fallbackvoice: !0,
			timerSpeed: 0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Dutch Female",
			lang: "nl",
			fallbackvoice: !0,
			timerSpeed: 0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Romanian",
			lang: "ro",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Milena Compact"
		}, {
			name: "ru-RU",
			rate: .25
		}, {
			name: "Fallback Russian",
			lang: "ru",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Google \u65e5\u672c\u4eba",
			timerSpeed: 1
		}, {
			name: "Kyoko Compact"
		}, {
			name: "ja-JP",
			rate: .25
		}, {
			name: "Fallback Japanese Female",
			lang: "ja",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Google \ud55c\uad6d\uc758",
			timerSpeed: 1
		}, {
			name: "Narae Compact"
		}, {
			name: "ko-KR",
			rate: .25
		}, {
			name: "Fallback Korean Female",
			lang: "ko",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Google \u4e2d\u56fd\u7684",
			timerSpeed: 1
		}, {
			name: "Ting-Ting Compact"
		}, {
			name: "zh-CN",
			rate: .25
		}, {
			name: "Fallback Chinese",
			lang: "zh-CN",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Alexandros Compact"
		}, {
			name: "el-GR",
			rate: .25
		}, {
			name: "Fallback Greek",
			lang: "el",
			fallbackvoice: !0,
			service: "g2",
			gender: "female"
		}, {
			name: "Fallback Swedish",
			lang: "sv",
			fallbackvoice: !0,
			service: "g2",
			gender: "female"
		}, {
			name: "hi-IN",
			rate: .25
		}, {
			name: "Fallback Hindi Female",
			lang: "hi",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Catalan",
			lang: "ca",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Aylin Compact"
		}, {
			name: "tr-TR",
			rate: .25
		}, {
			name: "Fallback Turkish",
			lang: "tr",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Stine Compact"
		}, {
			name: "no-NO",
			rate: .25
		}, {
			name: "Fallback Norwegian",
			lang: "no",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Daniel"
		}, {
			name: "Monica"
		}, {
			name: "Amelie"
		}, {
			name: "Anna"
		}, {
			name: "Alice"
		}, {
			name: "Melina"
		}, {
			name: "Mariska"
		}, {
			name: "Yelda"
		}, {
			name: "Milena"
		}, {
			name: "Xander"
		}, {
			name: "Alva"
		}, {
			name: "Lee Compact"
		}, {
			name: "Karen"
		}, {
			name: "Fallback Australian Female",
			lang: "en-AU",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Mikko Compact"
		}, {
			name: "Satu"
		}, {
			name: "fi-FI",
			rate: .25
		}, {
			name: "Fallback Finnish",
			lang: "fi",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Afrikans",
			lang: "af",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Albanian",
			lang: "sq",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Maged Compact"
		}, {
			name: "Tarik"
		}, {
			name: "ar-SA",
			rate: .25
		}, {
			name: "Fallback Arabic",
			lang: "ar",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Armenian",
			lang: "hy",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Zuzana Compact"
		}, {
			name: "Zuzana"
		}, {
			name: "cs-CZ",
			rate: .25
		}, {
			name: "Fallback Czech",
			lang: "cs",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Ida Compact"
		}, {
			name: "Sara"
		}, {
			name: "da-DK",
			rate: .25
		}, {
			name: "Fallback Danish",
			lang: "da",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Esperanto",
			lang: "eo",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Haitian Creole",
			lang: "ht",
			fallbackvoice: !0
		}, {
			name: "Fallback Icelandic",
			lang: "is",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Damayanti"
		}, {
			name: "id-ID",
			rate: .25
		}, {
			name: "Fallback Indonesian Female",
			lang: "id",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Latin Female",
			lang: "la",
			fallbackvoice: !0,
			service: "g2",
			gender: "female"
		}, {
			name: "Fallback Latvian Male",
			lang: "lv",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Macedonian Male",
			lang: "mk",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Moldavian Female",
			lang: "mo",
			fallbackvoice: !0,
			service: "g2",
			gender: "female"
		}, {
			name: "Fallback Montenegrin Male",
			lang: "sr-ME",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Agata Compact"
		}, {
			name: "Zosia"
		}, {
			name: "pl-PL",
			rate: .25
		}, {
			name: "Fallback Polish Female",
			lang: "pl",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Raquel Compact"
		}, {
			name: "Luciana"
		}, {
			name: "pt-BR",
			rate: .25
		}, {
			name: "Fallback Brazilian Portuguese Female",
			lang: "pt-BR",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Joana Compact"
		}, {
			name: "Joana"
		}, {
			name: "pt-PT",
			rate: .25
		}, {
			name: "Fallback Portuguese",
			lang: "pt-PT",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Serbo-Croation",
			lang: "sh",
			fallbackvoice: !0,
			service: "g2",
			gender: "male"
		}, {
			name: "Laura Compact"
		}, {
			name: "Laura"
		}, {
			name: "sk-SK",
			rate: .25
		}, {
			name: "Fallback Slovak",
			lang: "sk",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Javier Compact"
		}, {
			name: "Paulina"
		}, {
			name: "es-MX",
			rate: .25
		}, {
			name: "Fallback Spanish (Latin American) Female",
			lang: "es-419",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Swahili",
			lang: "sw",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Tamil",
			lang: "ta",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Narisa Compact"
		}, {
			name: "Kanya"
		}, {
			name: "th-TH",
			rate: .25
		}, {
			name: "Fallback Thai Female",
			lang: "th",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Vietnamese Male",
			lang: "vi",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Welsh",
			lang: "cy",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Oskar Compact"
		}, {
			name: "sv-SE",
			rate: .25
		}, {
			name: "Simona Compact"
		}, {
			name: "Ioana"
		}, {
			name: "ro-RO",
			rate: .25
		}, {
			name: "Kyoko"
		}, {
			name: "Lekha"
		}, {
			name: "Ting-Ting"
		}, {
			name: "Yuna"
		}, {
			name: "Xander Compact"
		}, {
			name: "nl-NL",
			rate: .25
		}, {
			name: "Fallback UK English Male",
			lang: "en-GB",
			fallbackvoice: !0,
			service: "g1",
			voicename: "rjs",
			gender: "male"
		}, {
			name: "Finnish Male",
			lang: "fi",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "Czech Male",
			lang: "cs",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "Danish Male",
			lang: "da",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "Greek Male",
			lang: "el",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "Hungarian Male",
			lang: "hu",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "Latin Male",
			lang: "la",
			fallbackvoice: !0,
			service: "g1",
			voicename: "",
			gender: "male"
		}, {
			name: "Norwegian Male",
			lang: "no",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "Slovak Male",
			lang: "sk",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "Swedish Male",
			lang: "sv",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "Fallback US English Male",
			lang: "en-US",
			fallbackvoice: !0,
			service: "g3",
			voicename: "",
			gender: "male"
		}, {
			name: "German Germany",
			lang: "de_DE"
		}, {
			name: "English United Kingdom",
			lang: "en_GB"
		}, {
			name: "English India",
			lang: "en_IN"
		}, {
			name: "English United States",
			lang: "en_US"
		}, {
			name: "Spanish Spain",
			lang: "es_ES"
		}, {
			name: "Spanish Mexico",
			lang: "es_MX"
		}, {
			name: "Spanish United States",
			lang: "es_US"
		}, {
			name: "French Belgium",
			lang: "fr_BE"
		}, {
			name: "French France",
			lang: "fr_FR"
		}, {
			name: "Hindi India",
			lang: "hi_IN"
		}, {
			name: "Indonesian Indonesia",
			lang: "in_ID"
		}, {
			name: "Italian Italy",
			lang: "it_IT"
		}, {
			name: "Japanese Japan",
			lang: "ja_JP"
		}, {
			name: "Korean South Korea",
			lang: "ko_KR"
		}, {
			name: "Dutch Netherlands",
			lang: "nl_NL"
		}, {
			name: "Polish Poland",
			lang: "pl_PL"
		}, {
			name: "Portuguese Brazil",
			lang: "pt_BR"
		}, {
			name: "Portuguese Portugal",
			lang: "pt_PT"
		}, {
			name: "Russian Russia",
			lang: "ru_RU"
		}, {
			name: "Thai Thailand",
			lang: "th_TH"
		}, {
			name: "Turkish Turkey",
			lang: "tr_TR"
		}, {
			name: "Chinese China",
			lang: "zh_CN_#Hans"
		}, {
			name: "Chinese Hong Kong",
			lang: "zh_HK_#Hans"
		}, {
			name: "Chinese Hong Kong",
			lang: "zh_HK_#Hant"
		}, {
			name: "Chinese Taiwan",
			lang: "zh_TW_#Hant"
		}, {
			name: "Alex"
		}, {
			name: "Maged",
			lang: "ar-SA"
		}, {
			name: "Zuzana",
			lang: "cs-CZ"
		}, {
			name: "Sara",
			lang: "da-DK"
		}, {
			name: "Anna",
			lang: "de-DE"
		}, {
			name: "Melina",
			lang: "el-GR"
		}, {
			name: "Karen",
			lang: "en-AU"
		}, {
			name: "Daniel",
			lang: "en-GB"
		}, {
			name: "Moira",
			lang: "en-IE"
		}, {
			name: "Samantha (Enhanced)",
			lang: "en-US"
		}, {
			name: "Samantha",
			lang: "en-US"
		}, {
			name: "Tessa",
			lang: "en-ZA"
		}, {
			name: "Monica",
			lang: "es-ES"
		}, {
			name: "Paulina",
			lang: "es-MX"
		}, {
			name: "Satu",
			lang: "fi-FI"
		}, {
			name: "Amelie",
			lang: "fr-CA"
		}, {
			name: "Thomas",
			lang: "fr-FR"
		}, {
			name: "Carmit",
			lang: "he-IL"
		}, {
			name: "Lekha",
			lang: "hi-IN"
		}, {
			name: "Mariska",
			lang: "hu-HU"
		}, {
			name: "Damayanti",
			lang: "id-ID"
		}, {
			name: "Alice",
			lang: "it-IT"
		}, {
			name: "Kyoko",
			lang: "ja-JP"
		}, {
			name: "Yuna",
			lang: "ko-KR"
		}, {
			name: "Ellen",
			lang: "nl-BE"
		}, {
			name: "Xander",
			lang: "nl-NL"
		}, {
			name: "Nora",
			lang: "no-NO"
		}, {
			name: "Zosia",
			lang: "pl-PL"
		}, {
			name: "Luciana",
			lang: "pt-BR"
		}, {
			name: "Joana",
			lang: "pt-PT"
		}, {
			name: "Ioana",
			lang: "ro-RO"
		}, {
			name: "Milena",
			lang: "ru-RU"
		}, {
			name: "Laura",
			lang: "sk-SK"
		}, {
			name: "Alva",
			lang: "sv-SE"
		}, {
			name: "Kanya",
			lang: "th-TH"
		}, {
			name: "Yelda",
			lang: "tr-TR"
		}, {
			name: "Ting-Ting",
			lang: "zh-CN"
		}, {
			name: "Sin-Ji",
			lang: "zh-HK"
		}, {
			name: "Mei-Jia",
			lang: "zh-TW"
		}, {
			name: "Microsoft David Mobile - English (United States)",
			lang: "en-US"
		}, {
			name: "Microsoft Zira Mobile - English (United States)",
			lang: "en-US"
		}, {
			name: "Microsoft Mark Mobile - English (United States)",
			lang: "en-US"
		}, {
			name: "native",
			lang: ""
		}, {
			name: "Google espa\u00f1ol"
		}, {
			name: "Google espa\u00f1ol de Estados Unidos"
		}, {
			name: "Google fran\u00e7ais"
		}, {
			name: "Google Bahasa Indonesia"
		}, {
			name: "Google italiano"
		}, {
			name: "Google Nederlands"
		}, {
			name: "Google polski"
		}, {
			name: "Google portugu\u00eas do Brasil"
		}, {
			name: "Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439"
		}, {
			name: "Google \u0939\u093f\u0928\u094d\u0926\u0940"
		}, {
			name: "Google \u65e5\u672c\u8a9e"
		}, {
			name: "Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"
		}, {
			name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"
		}, {
			name: "zh-HK",
			rate: .25
		}, {
			name: "Fallback Chinese (Hong Kong) Female",
			lang: "zh-HK",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"
		}, {
			name: "zh-TW",
			rate: .25
		}, {
			name: "Fallback Chinese (Taiwan) Female",
			lang: "zh-TW",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Microsoft George Mobile - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Susan Mobile - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Hazel Mobile - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Heera Mobile - English (India)",
			lang: "en-In"
		}, {
			name: "Microsoft Irina Mobile - Russian (Russia)",
			lang: "ru-RU"
		}, {
			name: "Microsoft Hedda Mobile - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Katja Mobile - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Helena Mobile - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Laura Mobile - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Sabina Mobile - Spanish (Mexico)",
			lang: "es-MX"
		}, {
			name: "Microsoft Julie Mobile - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Paulina Mobile - Polish (Poland)",
			lang: "pl-PL"
		}, {
			name: "Microsoft Huihui Mobile - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Elsa Mobile - Italian (Italy)",
			lang: "it-IT"
		}, {
			name: "Microsoft Maria Mobile - Portuguese (Brazil)",
			lang: "pt-BR"
		}, {
			name: "Microsoft Ayumi Mobile - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Microsoft Haruka Mobile - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Helena",
			lang: "de-DE"
		}, {
			name: "Catherine",
			lang: "en-AU"
		}, {
			name: "Arthur",
			lang: "en-GB"
		}, {
			name: "Martha",
			lang: "en-GB"
		}, {
			name: "Marie",
			lang: "fr-FR"
		}, {
			name: "O-ren",
			lang: "ja-JP"
		}, {
			name: "Yu-shu",
			lang: "zh-CN"
		}, {
			name: "Microsoft David - English (United States)",
			lang: "en-US"
		}, {
			name: "Microsoft Zira - English (United States)",
			lang: "en-US"
		}, {
			name: "Microsoft Mark - English (United States)",
			lang: "en-US"
		}, {
			name: "Microsoft George - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Susan - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Hazel - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Heera - English (India)",
			lang: "en-In"
		}, {
			name: "Microsoft Irina - Russian (Russia)",
			lang: "ru-RU"
		}, {
			name: "Microsoft Hedda - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Katja - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Helena - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Laura - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Sabina - Spanish (Mexico)",
			lang: "es-MX"
		}, {
			name: "Microsoft Julie - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Paulina - Polish (Poland)",
			lang: "pl-PL"
		}, {
			name: "Microsoft Huihui - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Yaoyao - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Elsa - Italian (Italy)",
			lang: "it-IT"
		}, {
			name: "Microsoft Maria - Portuguese (Brazil)",
			lang: "pt-BR"
		}, {
			name: "Microsoft Ayumi - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Microsoft Haruka - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Microsoft Hortense - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Hanhan - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft Heami - Korean (Korean)",
			lang: "ko-KR"
		}, {
			name: "Microsoft Stefan - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Ravi - English (India)",
			lang: "en-IN"
		}, {
			name: "Microsoft Pablo - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Raul - Spanish (Mexico)",
			lang: "es-MX"
		}, {
			name: "Microsoft Paul - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Cosimo - Italian (Italy)",
			lang: "it-IT"
		}, {
			name: "Microsoft Ichiro - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Microsoft Adam - Polish (Poland)",
			lang: "pl-PL"
		}, {
			name: "Microsoft Daniel - Portuguese (Brazil)",
			lang: "pt-BR"
		}, {
			name: "Microsoft Pavel - Russian (Russia)",
			lang: "ru-RU"
		}, {
			name: "Microsoft Kangkang - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)",
			lang: "zh-HK"
		}, {
			name: "Microsoft Yating - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft Zhiwei - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft Hortense Mobile - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft Heami Mobile - Korean (Korean)",
			lang: "ko-KR"
		}, {
			name: "Microsoft Stefan Mobile - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Ravi Mobile - English (India)",
			lang: "en-IN"
		}, {
			name: "Microsoft Pablo Mobile - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Raul Mobile - Spanish (Mexico)",
			lang: "es-MX"
		}, {
			name: "Microsoft Paul Mobile - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Cosimo Mobile - Italian (Italy)",
			lang: "it-IT"
		}, {
			name: "Microsoft Ichiro Mobile - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Microsoft Adam Mobile - Polish (Poland)",
			lang: "pl-PL"
		}, {
			name: "Microsoft Daniel Mobile - Portuguese (Brazil)",
			lang: "pt-BR"
		}, {
			name: "Microsoft Pavel Mobile - Russian (Russia)",
			lang: "ru-RU"
		}, {
			name: "Microsoft Kangkang Mobile - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)",
			lang: "zh-HK"
		}, {
			name: "Microsoft Yating Mobile - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft David Desktop - English (United States)",
			lang: "en-US"
		}, {
			name: "Microsoft Zira Desktop - English (United States)",
			lang: "en-US"
		}, {
			name: "Microsoft Mark Desktop - English (United States)",
			lang: "en-US"
		}, {
			name: "Microsoft George Desktop - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Susan Desktop - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Hazel Desktop - English (United Kingdom)",
			lang: "en-GB"
		}, {
			name: "Microsoft Heera Desktop - English (India)",
			lang: "en-In"
		}, {
			name: "Microsoft Irina Desktop - Russian (Russia)",
			lang: "ru-RU"
		}, {
			name: "Microsoft Hedda Desktop - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Katja Desktop - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Helena Desktop - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Laura Desktop - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Sabina Desktop - Spanish (Mexico)",
			lang: "es-MX"
		}, {
			name: "Microsoft Julie Desktop - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Paulina Desktop - Polish (Poland)",
			lang: "pl-PL"
		}, {
			name: "Microsoft Huihui Desktop - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Elsa Desktop - Italian (Italy)",
			lang: "it-IT"
		}, {
			name: "Microsoft Maria Desktop - Portuguese (Brazil)",
			lang: "pt-BR"
		}, {
			name: "Microsoft Ayumi Desktop - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Microsoft Haruka Desktop - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Microsoft Hortense Desktop - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft Heami Desktop - Korean (Korean)",
			lang: "ko-KR"
		}, {
			name: "Microsoft Stefan Desktop - German (Germany)",
			lang: "de-DE"
		}, {
			name: "Microsoft Ravi Desktop - English (India)",
			lang: "en-IN"
		}, {
			name: "Microsoft Pablo Desktop - Spanish (Spain)",
			lang: "es-ES"
		}, {
			name: "Microsoft Raul Desktop - Spanish (Mexico)",
			lang: "es-MX"
		}, {
			name: "Microsoft Paul Desktop - French (France)",
			lang: "fr-FR"
		}, {
			name: "Microsoft Cosimo Desktop - Italian (Italy)",
			lang: "it-IT"
		}, {
			name: "Microsoft Ichiro Desktop - Japanese (Japan)",
			lang: "ja-JP"
		}, {
			name: "Microsoft Adam Desktop - Polish (Poland)",
			lang: "pl-PL"
		}, {
			name: "Microsoft Daniel Desktop - Portuguese (Brazil)",
			lang: "pt-BR"
		}, {
			name: "Microsoft Pavel Desktop - Russian (Russia)",
			lang: "ru-RU"
		}, {
			name: "Microsoft Kangkang Desktop - Chinese (Simplified, PRC)",
			lang: "zh-CN"
		}, {
			name: "Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)",
			lang: "zh-HK"
		}, {
			name: "Microsoft Yating Desktop - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Martin",
			lang: "de-DE"
		}, {
			name: "Daniel",
			lang: "fr-FR"
		}, {
			name: "Hattori",
			lang: "ja-JP"
		}, {
			name: "Li-mu",
			lang: "zh-CN"
		}, {
			name: "Gordon",
			lang: "en-AU"
		}, {
			name: "Aaron",
			lang: "en-US"
		}, {
			name: "Nicky",
			lang: "en-US"
		}, {
			name: "Microsoft Hanhan Desktop - Chinese (Taiwan)",
			lang: "zh-TW"
		}, {
			name: "Microsoft Heami Desktop - Korean",
			lang: "ko-KR"
		}, {
			name: "Fallback Australian Male",
			lang: "en-AU",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Russian Male",
			lang: "ru",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Arabic Male",
			lang: "ar",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Chinese",
			lang: "zh-CN",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Chinese HK",
			lang: "zh-HK",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Chinese TW",
			lang: "zh-TW",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback French Male",
			lang: "fr",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Deutsch Male",
			lang: "de",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Hindi Male",
			lang: "hi",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Indonesian Male",
			lang: "id",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Japanese Male",
			lang: "ja",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Korean Male",
			lang: "ko",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Polish Male",
			lang: "pl",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Brazilian Portuguese Male",
			lang: "pt-BR",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Portuguese Male",
			lang: "pt-PT",
			fallbackvoice: !0,
			service: "g1",
			gender: "male"
		}, {
			name: "Fallback Spanish Male",
			lang: "es",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Spanish (Latin American) Male",
			lang: "es-419",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Thai Male",
			lang: "th",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Turkish Male",
			lang: "tr",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Vietnamese Female",
			lang: "vi",
			fallbackvoice: !0,
			service: "g1",
			gender: "female"
		}, {
			name: "Fallback Italian Male",
			lang: "it",
			fallbackvoice: !0,
			service: "g3",
			gender: "male"
		}, {
			name: "Fallback Dutch Male",
			lang: "nl",
			fallbackvoice: !0,
			timerSpeed: 0,
			service: "g3",
			gender: "male"
		}, {
			name: "Microsoft Anna - English (United States)",
			lang: "en-US",
			gender: "female"
		}, {
			name: "Microsoft Lili - Chinese (China)",
			lang: "zh-CN",
			gender: "female"
		}];
		a.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
		a.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());
		a.iOS10 = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
		a.iOS11 = /(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase());
		a.iOS9plus = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase()) || /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
		a.iOS12_0 = /(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase());
		a.iOS12 = /(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase());
		a.is_chrome = -1 a.VOICESUPPORT_ATTEMPTLIMIT && (clearInterval(b), null != window.speechSynthesis ? a.iOS ? (a.iOS11 ? a.systemVoicesReady(a.cache_ios11_voices) : a.iOS10 ? a.systemVoicesReady(a.cache_ios10_voices) : a.iOS9 ? a.systemVoicesReady(a.cache_ios9_voices) : a.systemVoicesReady(a.cache_ios_voices), console.log("RV: Voice support ready (cached)")) : (console.log("RV: speechSynthesis present but no system voices found"), a.enableFallbackMode()) : a.enableFallbackMode()))
}, 100)
}, 100);
(a.iOS || a.is_android || a.is_safari) && a.enableWindowClickHook();
a.Dispatch("OnLoad")
};
a.systemVoicesReady = function (b) {
	a.systemvoices = b;
	a.mapRVs();
	null != a.OnVoiceReady && a.OnVoiceReady.call();
	a.Dispatch("OnReady");
	window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))
};
a.enableFallbackMode = function () {
	a.fallbackMode = !0;
	a.forcedFallbackMode = !0;
	console.log("RV: Enabling fallback mode");
	a.mapRVs();
	null != a.OnVoiceReady && a.OnVoiceReady.call();
	a.Dispatch("OnReady");
	window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));
	a.Dispatch("OnServiceSwitched")
};
a.getVoices = function () {
	for (var b = [], c = 0; ca.CHARACTER_LIMIT) {
		for (var f = b = p(b); f.length > a.CHARACTER_LIMIT;) {
			var g = f.search(/([:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/),
				e = "";
			if (-1 == g || g >= a.CHARACTER_LIMIT) g = f.search(/,[^0-9]+/);
			if (-1 == g || g >= a.CHARACTER_LIMIT) {
				var l = f.split(" ");
				for (g = 0; ga.CHARACTER_LIMIT) {
					l[g].length >= a.CHARACTER_LIMIT && (e += l[g].substr(0, a.CHARACTER_LIMIT - e.length - 1));
					break
				}
				e += (0 != g ? " " : "") + l[g]
			}
		} else e = f.substr(0, g + 1);
		f = f.substr(e.length, f.length - e.length);
		k.push(e)
	}
	0 = d || (a.timeoutId = setTimeout(c, a.getEstimatedTimeLength(b, d)), a.log("Timeout ID: " + a.timeoutId))
};
a.checkAndCancelTimeout = function () {
	null != a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = null)
};
a.speech_timedout = function () {
	a.cancel();
	a.cancelled = !1;
	a.speech_onend()
};
a.speech_onend = function () {
	a.checkAndCancelTimeout();
	!0 === a.cancelled ? a.cancelled = !1 : (a.log("on end fired"), null != a.msgparameters && null != a.msgparameters.onend && 1 != a.msgparameters.onendcalled && (a.log("Speech on end called -" + a.msgtext), a.msgparameters.onendcalled = !0, a.msgparameters.onend()))
};
a.speech_onstart = function () {
	if (!a.onstartFired) {
		a.onstartFired = !0;
		a.log("Speech start");
		if (a.iOS || a.is_safari || a.useTimer) a.fallbackMode || a.startTimeout(a.msgtext, a.speech_timedout);
		a.msgparameters.onendcalled = !1;
		if (null != a.msgparameters && null != a.msgparameters.onstart) a.msgparameters.onstart()
	}
};
a.fallback_startPart = function () {
	0 == a.fallbackChunkIndex && a.speech_onstart();
	a.fallback_updateChunksBuffer();
	a.fallback_audio = a.fallbackChunks[a.fallbackChunkIndex].audio;
	null == a.fallback_audio ? a.log("RV: Fallback Audio is not available") : (function () {
		var b = a.fallback_audio;
		setTimeout(function () {
			b.playbackRate = a.fallback_playbackrate
		}, 50);
		b.onloadedmetadata = function () {
			b.playbackRate = a.fallback_playbackrate
		};
		if (2 <= b.readyState) b.play();
		else {
			var c = function () {
				b.play();
				b.removeEventListener("canplaythrough", c)
			};
			b.addEventListener("canplaythrough", c, !1)
		}
	}(), a.fallback_errors && (a.log("RV: Speech cancelled due to errors"), a.speech_onend()), a.fallback_audio.addEventListener("ended", a.fallback_finishPart), a.useTimer && a.startTimeout(a.multipartText[a.fallbackChunkIndex], a.fallback_finishPart))
};
a.isFallbackAudioPlaying = function () {
var b;
for (b = 0; ba[k]) && clearTimeout(a[h])
}, 50));
return !1
};
a.AddEventListener = function (b, c) {
	a.hasOwnProperty(b + "_callbacks") || (a[b + "_callbacks"] = []);
	a[b + "_callbacks"].push(c)
};
a.addEventListener = a.AddEventListener;
a.RemoveEventListener = function (b, c) {
	a[b + "_callbacks"] && -1 != a[b + "_callbacks"].indexOf(c) && a[b + "_callbacks"].splice(a[b + "_callbacks"].indexOf(c), 1)
};
a.clickEvent = function () {
	a.log("Click event");
	a.click_event_detected = !0;
	a.initializePermissions();
	a.userInteractionEvents.forEach(function (b) {
		window.removeEventListener(b, a.clickEvent, !1)
	});
	a.Dispatch("OnClickEvent")
};
a.initializePermissions = function () {
	if (a.iOS && !a.iOS_initialized) {
		a.log("Initializing iOS click event");
		var b = new SpeechSynthesisUtterance(" ");
		speechSynthesis.speak(b);
		a.iOS_initialized = !0
	}
	a.is_android && !a.android_initialized && (a.log("Initializing Android click event"), b = new SpeechSynthesisUtterance(" "), speechSynthesis.speak(b));
	a.initFallbackPool()
};
a.isPlaying = function () {
	return a.fallbackMode ? null != a.fallback_audio && !a.fallback_audio.ended && !a.fallback_audio.paused : speechSynthesis.speaking
};
a.clearFallbackPool = function () {
	for (var b = 0; bb; b++) {
		var c = b,
			d = document.createElement("AUDIO");
		d.preload = "auto";
		a.is_android && (d.src = "", d.load(), 9 == c && (a.log("Android HTML audio initialized"), a.android_initialized = !0));
		a.iOS && (d.src = "", d.load(), 9 == c && (a.log("iOS HTML audio initialized"), a.iOS_initialized = !0));
		a.fallback_audiopool.push(d)
	}
	a.fallback_audiopool_index = 0
}
};
a.allowSpeechClicked = function (b) {
	a.allowSpeechDiv.parentNode.removeChild(a.allowSpeechDiv);
	a.allowSpeechDiv = null;
	if (a.speechAllowedByUser = b) a.clickEvent(), a.scheduledSpeak && (a.speak(a.scheduledSpeak.text, a.scheduledSpeak.voicename, a.scheduledSpeak.parameters), a.scheduledSpeak = null);
	a.Dispatch("OnAllowSpeechClicked")
};
a.checkSpeechAllowed = function (b) {
		if (0 == a.speechAllowedByUser) return !1;
		if ((a.is_android || a.iOS || a.is_safari && (a.fallbackMode || a.forcedFallbackMode)) && !a.click_event_detected) {
			if (a.allowSpeechDiv) return;
			a.allowSpeechDiv_appearances = null == a.allowSpeechDiv_appearances ? 1 : ++a.allowSpeechDiv_appearances;
			if (2 '+(void 0!=b.urlOverride?b.urlOverride:window.location.hostname)+" "+(void 0!=b.textOverride?b.textOverride:"wants to play speech")+'
				DENY ALLOW '; document.body.appendChild(a.allowSpeechDiv);return!1}return!0};a.fallback_audioPool_getAudio=function(){a.initFallbackPool();a.fallback_audiopool_index>=a.fallback_audiopool.length&&(a.fallback_audiopool_index=0);return a.fallback_audiopool[a.fallback_audiopool_index++]};a.fallback_updateChunksBuffer=function(){for(var b=a.fallbackChunkIndex;bf&&(g=c*(k+50*h));a.log("Estimated time length: "+g+" ms, words: ["+d+"], charsCount: "+h);return g};a.validateParameters=function(a,c){if("undefined"===typeof a[c])return a[c];switch(c){case "rate":case "pitch":case "volume":var b=Number(a[c]);isNaN(b)&&console.warn("ResponsiveVoice: the parameter "+c+'
				has a wrong value "'+a[c]+'".Defaults were used.
				');a[c]=isNaN(b)?"1":a[c]}return a[c]};a.services= {NATIVE_TTS:0,FALLBACK_AUDIO:1};a.servicesPriority=[0,1];a.servicesEnabled=[];a.setServiceEnabled=function(b,c){a.servicesEnabled[b]=c};a.getServiceEnabled=function(b){return a.servicesEnabled[b]||!1};a.setServiceEnabled(a.services.NATIVE_TTS,!0);a.setServiceEnabled(a.services.FALLBACK_AUDIO,!0);a.forceFallbackMode=function(b){a.forcedFallbackMode=b;a.fallbackMode=b;a.mapRVs();a.Dispatch("OnServiceSwitched")};a.enableWindowClickHook=function(){a.userInteractionEvents.forEach(function(b){window.addEventListener(b, a.clickEvent,!1)})};"interactive"===document.readyState?a.init():document.addEventListener("DOMContentLoaded",function(){a.init()})},responsiveVoice=new ResponsiveVoice; /// -------- RESPONSIVE VOICE ends responsiveVoice.debug = true; } if (typeof jQuery === '
				undefined ') { /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */ !function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:' (( ? : \\\\. | [ ^ \\\\'])*)' | \"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
								ID: new RegExp("^#(" + M + ")"),
								CLASS: new RegExp("^\\.(" + M + ")"),
								TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
								ATTR: new RegExp("^" + O),
								PSEUDO: new RegExp("^" + P),
								CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
								bool: new RegExp("^(?:" + K + ")$", "i"),
								needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
							}, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
								var d = "0x" + b - 65536;
								return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
							}, ea = function () {
								m()
							};
							try {
								H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
							} catch (fa) {
								H = {
									apply: E.length ? function (a, b) {
										G.apply(a, I.call(b))
									} : function (a, b) {
										var c = a.length,
											d = 0;
										while (a[c++] = b[d++]);
										a.length = c - 1
									}
								}
							}

							function ga(a, b, d, e) {
								var f, h, j, k, l, o, r, s, w, x;
								if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
								if (!e && p) {
									if (11 !== k && (f = _.exec(a)))
										if (j = f[1]) {
											if (9 === k) {
												if (h = b.getElementById(j), !h || !h.parentNode) return d;
												if (h.id === j) return d.push(h), d
											} else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
										} else {
											if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
											if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
										}
									if (c.qsa && (!q || !q.test(a))) {
										if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
											o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
											while (l--) o[l] = s + ra(o[l]);
											w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
										}
										if (x) try {
											return H.apply(d, w.querySelectorAll(x)), d
										} catch (y) {} finally {
											r || b.removeAttribute("id")
										}
									}
								}
								return i(a.replace(R, "$1"), b, d, e)
							}

							function ha() {
								var a = [];

								function b(c, e) {
									return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
								}
								return b
							}

							function ia(a) {
								return a[u] = !0, a
							}

							function ja(a) {
								var b = n.createElement("div");
								try {
									return !!a(b)
								} catch (c) {
									return !1
								} finally {
									b.parentNode && b.parentNode.removeChild(b), b = null
								}
							}

							function ka(a, b) {
								var c = a.split("|"),
									e = a.length;
								while (e--) d.attrHandle[c[e]] = b
							}

							function la(a, b) {
								var c = b && a,
									d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
								if (d) return d;
								if (c)
									while (c = c.nextSibling)
										if (c === b) return -1;
								return a ? 1 : -1
							}

							function ma(a) {
								return function (b) {
									var c = b.nodeName.toLowerCase();
									return "input" === c && b.type === a
								}
							}

							function na(a) {
								return function (b) {
									var c = b.nodeName.toLowerCase();
									return ("input" === c || "button" === c) && b.type === a
								}
							}

							function oa(a) {
								return ia(function (b) {
									return b = +b, ia(function (c, d) {
										var e, f = a([], c.length, b),
											g = f.length;
										while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
									})
								})
							}

							function pa(a) {
								return a && "undefined" != typeof a.getElementsByTagName && a
							}
							c = ga.support = {},
							f = ga.isXML = function (a) {
								var b = a && (a.ownerDocument || a).documentElement;
								return b ? "HTML" !== b.nodeName : !1
							},
							m = ga.setDocument = function (a) {
								var b, e, g = a ? a.ownerDocument || a : v;
								return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
									return a.className = "i", !a.getAttribute("className")
								}), c.getElementsByTagName = ja(function (a) {
									return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
								}), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
									return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
								}), c.getById ? (d.find.ID = function (a, b) {
									if ("undefined" != typeof b.getElementById && p) {
										var c = b.getElementById(a);
										return c && c.parentNode ? [c] : []
									}
								}, d.filter.ID = function (a) {
									var b = a.replace(ca, da);
									return function (a) {
										return a.getAttribute("id") === b
									}
								}) : (delete d.find.ID, d.filter.ID = function (a) {
									var b = a.replace(ca, da);
									return function (a) {
										var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
										return c && c.value === b
									}
								}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
									return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
								} : function (a, b) {
									var c, d = [],
										e = 0,
										f = b.getElementsByTagName(a);
									if ("*" === a) {
										while (c = f[e++]) 1 === c.nodeType && d.push(c);
										return d
									}
									return f
								}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
									return p ? b.getElementsByClassName(a) : void 0
								}, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
									o.appendChild(a).innerHTML = "", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
								}), ja(function (a) {
									var b = g.createElement("input");
									b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
								})), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
									c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
								}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
									var c = 9 === a.nodeType ? a.documentElement : a,
										d = b && b.parentNode;
									return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
								} : function (a, b) {
									if (b)
										while (b = b.parentNode)
											if (b === a) return !0;
									return !1
								}, B = b ? function (a, b) {
									if (a === b) return l = !0, 0;
									var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
									return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
								} : function (a, b) {
									if (a === b) return l = !0, 0;
									var c, d = 0,
										e = a.parentNode,
										f = b.parentNode,
										h = [a],
										i = [b];
									if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
									if (e === f) return la(a, b);
									c = a;
									while (c = c.parentNode) h.unshift(c);
									c = b;
									while (c = c.parentNode) i.unshift(c);
									while (h[d] === i[d]) d++;
									return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
								}, g) : n
							},
							ga.matches = function (a, b) {
								return ga(a, null, null, b)
							},
							ga.matchesSelector = function (a, b) {
								if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
									var d = s.call(a, b);
									if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
								} catch (e) {}
								return ga(b, n, null, [a]).length > 0
							},
							ga.contains = function (a, b) {
								return (a.ownerDocument || a) !== n && m(a), t(a, b)
							},
							ga.attr = function (a, b) {
								(a.ownerDocument || a) !== n && m(a);
								var e = d.attrHandle[b.toLowerCase()],
									f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
								return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
							},
							ga.error = function (a) {
								throw new Error("Syntax error, unrecognized expression: " + a)
							},
							ga.uniqueSort = function (a) {
								var b, d = [],
									e = 0,
									f = 0;
								if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
									while (b = a[f++]) b === a[f] && (e = d.push(f));
									while (e--) a.splice(d[e], 1)
								}
								return k = null, a
							},
							e = ga.getText = function (a) {
								var b, c = "",
									d = 0,
									f = a.nodeType;
								if (f) {
									if (1 === f || 9 === f || 11 === f) {
										if ("string" == typeof a.textContent) return a.textContent;
										for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
									} else if (3 === f || 4 === f) return a.nodeValue
								} else
									while (b = a[d++]) c += e(b);
								return c
							},
							d = ga.selectors = {
								cacheLength: 50,
								createPseudo: ia,
								match: X,
								attrHandle: {},
								find: {},
								relative: {
									">": {
										dir: "parentNode",
										first: !0
									},
									" ": {
										dir: "parentNode"
									},
									"+": {
										dir: "previousSibling",
										first: !0
									},
									"~": {
										dir: "previousSibling"
									}
								},
								preFilter: {
									ATTR: function (a) {
										return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
									},
									CHILD: function (a) {
										return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
									},
									PSEUDO: function (a) {
										var b, c = !a[6] && a[2];
										return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
									}
								},
								filter: {
									TAG: function (a) {
										var b = a.replace(ca, da).toLowerCase();
										return "*" === a ? function () {
											return !0
										} : function (a) {
											return a.nodeName && a.nodeName.toLowerCase() === b
										}
									},
									CLASS: function (a) {
										var b = y[a + " "];
										return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
											return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
										})
									},
									ATTR: function (a, b, c) {
										return function (d) {
											var e = ga.attr(d, a);
											return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
										}
									},
									CHILD: function (a, b, c, d, e) {
										var f = "nth" !== a.slice(0, 3),
											g = "last" !== a.slice(-4),
											h = "of-type" === b;
										return 1 === d && 0 === e ? function (a) {
											return !!a.parentNode
										} : function (b, c, i) {
											var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
												q = b.parentNode,
												r = h && b.nodeName.toLowerCase(),
												s = !i && !h;
											if (q) {
												if (f) {
													while (p) {
														l = b;
														while (l = l[p])
															if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
														o = p = "only" === a && !o && "nextSibling"
													}
													return !0
												}
												if (o = [g ? q.firstChild : q.lastChild], g && s) {
													k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
													while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
														if (1 === l.nodeType && ++m && l === b) {
															k[a] = [w, n, m];
															break
														}
												} else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
												else
													while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
														if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
												return m -= e, m === d || m % d === 0 && m / d >= 0
											}
										}
									},
									PSEUDO: function (a, b) {
										var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
										return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
											var d, f = e(a, b),
												g = f.length;
											while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
										}) : function (a) {
											return e(a, 0, c)
										}) : e
									}
								},
								pseudos: {
									not: ia(function (a) {
										var b = [],
											c = [],
											d = h(a.replace(R, "$1"));
										return d[u] ? ia(function (a, b, c, e) {
											var f, g = d(a, null, e, []),
												h = a.length;
											while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
										}) : function (a, e, f) {
											return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
										}
									}),
									has: ia(function (a) {
										return function (b) {
											return ga(a, b).length > 0
										}
									}),
									contains: ia(function (a) {
										return a = a.replace(ca, da),
											function (b) {
												return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
											}
									}),
									lang: ia(function (a) {
										return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
											function (b) {
												var c;
												do
													if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
												return !1
											}
									}),
									target: function (b) {
										var c = a.location && a.location.hash;
										return c && c.slice(1) === b.id
									},
									root: function (a) {
										return a === o
									},
									focus: function (a) {
										return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
									},
									enabled: function (a) {
										return a.disabled === !1
									},
									disabled: function (a) {
										return a.disabled === !0
									},
									checked: function (a) {
										var b = a.nodeName.toLowerCase();
										return "input" === b && !!a.checked || "option" === b && !!a.selected
									},
									selected: function (a) {
										return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
									},
									empty: function (a) {
										for (a = a.firstChild; a; a = a.nextSibling)
											if (a.nodeType < 6) return !1;
										return !0
									},
									parent: function (a) {
										return !d.pseudos.empty(a)
									},
									header: function (a) {
										return Z.test(a.nodeName)
									},
									input: function (a) {
										return Y.test(a.nodeName)
									},
									button: function (a) {
										var b = a.nodeName.toLowerCase();
										return "input" === b && "button" === a.type || "button" === b
									},
									text: function (a) {
										var b;
										return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
									},
									first: oa(function () {
										return [0]
									}),
									last: oa(function (a, b) {
										return [b - 1]
									}),
									eq: oa(function (a, b, c) {
										return [0 > c ? c + b : c]
									}),
									even: oa(function (a, b) {
										for (var c = 0; b > c; c += 2) a.push(c);
										return a
									}),
									odd: oa(function (a, b) {
										for (var c = 1; b > c; c += 2) a.push(c);
										return a
									}),
									lt: oa(function (a, b, c) {
										for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
										return a
									}),
									gt: oa(function (a, b, c) {
												for (var d = 0 > c ? c + b : c; ++db; b++) d += a[b].value;
												return d
											}

											function sa(a, b, c) {
												var d = b.dir,
													e = c && "parentNode" === d,
													f = x++;
												return b.first ? function (b, c, f) {
													while (b = b[d])
														if (1 === b.nodeType || e) return a(b, c, f)
												} : function (b, c, g) {
													var h, i, j = [w, f];
													if (g) {
														while (b = b[d])
															if ((1 === b.nodeType || e) && a(b, c, g)) return !0
													} else
														while (b = b[d])
															if (1 === b.nodeType || e) {
																if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
																if (i[d] = j, j[2] = a(b, c, g)) return !0
															}
												}
											}

											function ta(a) {
												return a.length > 1 ? function (b, c, d) {
													var e = a.length;
													while (e--)
														if (!a[e](b, c, d)) return !1;
													return !0
												} : a[0]
											}

											function ua(a, b, c) {
												for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
												return c
											}

											function va(a, b, c, d, e) {
												for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
												return g
											}

											function wa(a, b, c, d, e, f) {
												return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
													var j, k, l, m = [],
														n = [],
														o = g.length,
														p = f || ua(b || "*", h.nodeType ? [h] : h, []),
														q = !a || !f && b ? p : va(p, m, a, h, i),
														r = c ? e || (f ? a : o || d) ? [] : g : q;
													if (c && c(q, r, h, i), d) {
														j = va(r, n), d(j, [], h, i), k = j.length;
														while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
													}
													if (f) {
														if (e || a) {
															if (e) {
																j = [], k = r.length;
																while (k--)(l = r[k]) && j.push(q[k] = l);
																e(null, r = [], j, i)
															}
															k = r.length;
															while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
														}
													} else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
												})
											}

											function xa(a) {
												for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
														return a === b
													}, h, !0), l = sa(function (a) {
														return J(b, a) > -1
													}, h, !0), m = [function (a, c, d) {
														var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
														return b = null, e
													}]; f > i; i++)
													if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
													else {
														if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
															for (e = ++i; f > e; e++)
																if (d.relative[a[e].type]) break;
															return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
																value: " " === a[i - 2].type ? "*" : ""
															})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
														}
														m.push(c)
													}
												return ta(m)
											}

											function ya(a, b) {
												var c = b.length > 0,
													e = a.length > 0,
													f = function (f, g, h, i, k) {
														var l, m, o, p = 0,
															q = "0",
															r = f && [],
															s = [],
															t = j,
															u = f || e && d.find.TAG("*", k),
															v = w += null == t ? 1 : Math.random() || .1,
															x = u.length;
														for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
															if (e && l) {
																m = 0;
																while (o = a[m++])
																	if (o(l, g, h)) {
																		i.push(l);
																		break
																	}
																k && (w = v)
															}
															c && ((l = !o && l) && p--, f && r.push(l))
														}
														if (p += q, c && q !== p) {
															m = 0;
															while (o = b[m++]) o(r, s, g, h);
															if (f) {
																if (p > 0)
																	while (q--) r[q] || s[q] || (s[q] = F.call(i));
																s = va(s)
															}
															H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
														}
														return k && (w = v, j = t), r
													};
												return c ? ia(f) : f
											}
											return h = ga.compile = function (a, b) {
													var c, d = [],
														e = [],
														f = A[a + " "];
													if (!f) {
														b || (b = g(a)), c = b.length;
														while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
														f = A(a, ya(e, d)), f.selector = a
													}
													return f
												}, i = ga.select = function (a, b, e, f) {
													var i, j, k, l, m, n = "function" == typeof a && a,
														o = !f && g(a = n.selector || a);
													if (e = e || [], 1 === o.length) {
														if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
															if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
															n && (b = b.parentNode), a = a.slice(j.shift().value.length)
														}
														i = X.needsContext.test(a) ? 0 : j.length;
														while (i--) {
															if (k = j[i], d.relative[l = k.type]) break;
															if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
																if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
																break
															}
														}
													}
													return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
												}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
													return 1 & a.compareDocumentPosition(n.createElement("div"))
												}), ja(function (a) {
													return a.innerHTML = "", "#" === a.firstChild.getAttribute("href")
												}) || ka("type|href|height|width", function (a, b, c) {
													return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
												}), c.attributes && ja(function (a) {
														return a.innerHTML = "
														",a.firstChild.setAttribute("
														value ","
														"),"
														"===a.firstChild.getAttribute("
														value ")})||ka("
														value ",function(a,b,c){return c||"
														input "!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("
														disabled ")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[": "]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("
														string "==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=": not("+a+")
														"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("
														string "!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+"
														"+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"
														string "==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("
														string "==typeof a){if(c=" < "===a[0]&&" > "===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"
														undefined "!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"
														string "!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"
														string "==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"
														parentNode ")},parentsUntil:function(a,b,c){return n.dir(a,"
														parentNode ",c)},next:function(a){return D(a,"
														nextSibling ")},prev:function(a){return D(a,"
														previousSibling ")},nextAll:function(a){return n.dir(a,"
														nextSibling ")},prevAll:function(a){return n.dir(a,"
														previousSibling ")},nextUntil:function(a,b,c){return n.dir(a,"
														nextSibling ",c)},prevUntil:function(a,b,c){return n.dir(a,"
														previousSibling ",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"
														Until "!==a.slice(-5)&&(d=c),d&&"
														string "==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="
														string "==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"
														function "===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"
														string "!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["
														resolve ","
														done ",n.Callbacks("
														once memory "),"
														resolved "],["
														reject ","
														fail ",n.Callbacks("
														once memory "),"
														rejected "],["
														notify ","
														progress ",n.Callbacks("
														memory ")]],c="
														pending ",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"
														With "](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"
														With "](this===e?d:this,arguments),this},e[f[0]+"
														With "]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("
														ready "),n(l).off("
														ready "))))}});function I(){l.removeEventListener("
														DOMContentLoaded ",I,!1),a.removeEventListener("
														load ",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"
														complete "===l.readyState?setTimeout(n.ready):(l.addEventListener("
														DOMContentLoaded ",I,!1),a.addEventListener("
														load ",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("
														object "===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("
														string "==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"
														string "==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="
														data - "+b.replace(O," - $1 ").toLowerCase(),c=a.getAttribute(d),"
														string "==typeof c){try{c="
														true "===c?!0:"
														false "===c?!1:"
														null "===c?null:+c+"
														"===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){ return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"
														hasDataAttrs "))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("
														data - ")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"
														hasDataAttrs ",!0)}return e}return"
														object "==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf(" - ")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"
														fx ")+"
														queue ",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"
														fx ";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"
														inprogress "===e&&(e=c.shift(),d--),e&&("
														fx "===b&&c.unshift("
														inprogress "),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"
														queueHooks ";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("
														once memory ").add(function(){L.remove(a,[b+"
														queue ",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"
														string "!=typeof a&&(b=a,a="
														fx ",c--),arguments.lengthx", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
													}();
													var U = "undefined"; k.focusinBubbles = "onfocusin" in a;
													var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

													function Z() {
														return !0
													}

													function $() {
														return !1
													}

													function _() {
														try {
															return l.activeElement
														} catch (a) {}
													}
													n.event = {
														global: {},
														add: function (a, b, c, d, e) {
															var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
															if (r) {
																c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
																	return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
																}), b = (b || "").match(E) || [""], j = b.length;
																while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
																	type: o,
																	origType: q,
																	data: d,
																	handler: c,
																	guid: c.guid,
																	selector: e,
																	needsContext: e && n.expr.match.needsContext.test(e),
																	namespace: p.join(".")
																}, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
															}
														},
														remove: function (a, b, c, d, e) {
															var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
															if (r && (i = r.events)) {
																b = (b || "").match(E) || [""], j = b.length;
																while (j--)
																	if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
																		l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
																		while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
																		g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
																	} else
																		for (o in i) n.event.remove(a, o + b[j], c, d, !0);
																n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
															}
														},
														trigger: function (b, c, d, e) {
															var f, g, h, i, k, m, o, p = [d || l],
																q = j.call(b, "type") ? b.type : b,
																r = j.call(b, "namespace") ? b.namespace.split(".") : [];
															if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
																if (!e && !o.noBubble && !n.isWindow(d)) {
																	for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
																	h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
																}
																f = 0;
																while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
																return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
															}
														},
														dispatch: function (a) {
															a = n.event.fix(a);
															var b, c, e, f, g, h = [],
																i = d.call(arguments),
																j = (L.get(this, "events") || {})[a.type] || [],
																k = n.event.special[a.type] || {};
															if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
																h = n.event.handlers.call(this, a, j), b = 0;
																while ((f = h[b++]) && !a.isPropagationStopped()) {
																	a.currentTarget = f.elem, c = 0;
																	while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
																}
																return k.postDispatch && k.postDispatch.call(this, a), a.result
															}
														},
														handlers: function (a, b) {
															var c, d, e, f, g = [],
																h = b.delegateCount,
																i = a.target;
															if (h && i.nodeType && (!a.button || "click" !== a.type))
																for (; i !== this; i = i.parentNode || this)
																	if (i.disabled !== !0 || "click" !== a.type) {
																		for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
																		d.length && g.push({
																			elem: i,
																			handlers: d
																		})
																	}
															return h] * )\ / > /gi,ba=/ < ([\w: ] + ) / , ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*\s*$/g, ia = {
														option: [1, ""],
														thead: [1, "", "
																"],col:[2,"
																","
																"],tr:[2,"
																","
																"],td:[3,"
																","
																"],_default:[0,"
																","
																"]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"
																table ")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"
																tr ")?a.getElementsByTagName("
																tbody ")[0]||a.appendChild(a.ownerDocument.createElement("
																tbody ")):a}function ka(a){return a.type=(null!==a.getAttribute("
																type "))+" / "+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("
																type "),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"
																globalEval ",!b||L.get(b[c],"
																globalEval "))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||" * "):a.querySelectorAll?a.querySelectorAll(b||" * "):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"
																input "===c&&T.test(a.type)?b.checked=a.checked:("
																input "===c||"
																textarea "===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"
																script "),g.length>0&&ma(g,!i&&oa(a,"
																script ")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("
																object "===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("
																div ")),g=(ba.exec(e)||["
																","
																"])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa," < $1 > ")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent="
																"}else l.push(b.createTextNode(e));k.textContent="
																",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"
																script "),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"
																")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"
																script ")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="
																");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("
																string "==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["
																","
																"])[1].toLowerCase()]){a=a.replace(aa," < $1 > ");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"
																string "==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"
																script "),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"
																script "))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"
																")&&!L.access(h,"
																globalEval ")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"
																")))}return this}}),n.each({appendTo:"
																append ",prependTo:"
																prepend ",insertBefore:"
																before ",insertAfter:"
																after ",replaceAll:"
																replaceWith "},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"
																display ");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"
																none "!==c&&c||(qa=(qa||n("