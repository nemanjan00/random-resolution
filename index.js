resolutions = [
	{width:"1024", height: "576"},
	{width:"1152", height: "648"},
	{width:"1280", height: "720"},
	{width:"1366", height: "768"},
	{width:"1600", height: "900"},
	{width:"1920", height: "1080"},
	{width:"2560", height: "1440"},
	{width:"3840", height: "2160"}
];

module.exports = function(){
	return resolutions[Math.round(Math.random() * (resolutions.length - 1))];
};

