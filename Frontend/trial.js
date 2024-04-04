    arr = [[15.399322288276785, 74.0173998152968],[15.404765770521843, 74.00625344153651],[15.400002804282714, 74.0044881616557],[15.295659038159346, 73.97401827089969],[15.272102579040101, 73.97197546705537],[15.269551682534683, 73.95490509531206],[15.254922648695684, 73.99356884625863],[15.222958747093937, 73.9442694829001],[15.151765214341616, 74.01884076327696]]
    var map = L.map('map').setView([15.408803907495868, 74.000079622619], 14); 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    var currlocMarker = new L.marker([15.238803907495868, 73.97607279622619]).addTo(map)//, {icon: L.map.marker.icon({'marker-color': '#FF0000'}),title: title});
    for(let i=0; i<arr.length; i++)
    {
        var randomMarker = new L.marker(arr[i]).addTo(map)//, {icon: L.map.marker.icon({'marker-color': '#4ADDA2'}),title: title});
    }
    