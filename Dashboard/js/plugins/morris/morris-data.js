// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '2012-10-01',
            visits: 81
        }, {
            d: '2012-10-02',
            visits: 92
        }, {
            d: '2012-10-03',
            visits: 89
        }, {
            d: '2012-10-04',
            visits: 98
        }, {
            d: '2012-10-05',
            visits: 91
        }, {
            d: '2012-10-06',
            visits: 100
        }, {
            d: '2012-10-07',
            visits: 98
        }, {
            d: '2012-10-08',
            visits: 99
        }, {
            d: '2012-10-09',
            visits: 92
        }, {
            d: '2012-10-10',
            visits: 99
        }, {
            d: '2012-10-11',
            visits: 98
        }, {
            d: '2012-10-12',
            visits: 58
        }, {
            d: '2012-10-13',
            visits: 99
        }, {
            d: '2012-10-14',
            visits: 98
        }, {
            d: '2012-10-15',
            visits: 85
        }, {
            d: '2012-10-16',
            visits: 100
        }, {
            d: '2012-10-17',
            visits: 100
        }, {
            d: '2012-10-18',
            visits: 99
        }, {
            d: '2012-10-19',
            visits: 98
        }, {
            d: '2012-10-20',
            visits: 42
        }, {
            d: '2012-10-21',
            visits: 99
        }, {
            d: '2012-10-22',
            visits: 95
        }, {
            d: '2012-10-23',
            visits: 82
        }, {
            d: '2012-10-24',
            visits: 89
        }, {
            d: '2012-10-25',
            visits: 82
        }, {
            d: '2012-10-26',
            visits: 92
        }, {
            d: '2012-10-27',
            visits: 98
        }, {
            d: '2012-10-28',
            visits: 100
        }, {
            d: '2012-10-29',
            visits: 99
        }, {
            d: '2012-10-30',
            visits: 100
        }, {
            d: '2012-10-31',
            visits: 92
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Score'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart



});
